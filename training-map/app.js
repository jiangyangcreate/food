// =====================================================================
// training-map/app.js
// Pure ES module. No build step, no framework.
// =====================================================================

import * as THREE from "three";
import { OrbitControls }  from "three/addons/OrbitControls.js";
import { GLTFLoader }     from "three/addons/GLTFLoader.js";
import { DRACOLoader }    from "three/addons/DRACOLoader.js";
import { DEFAULT_BACKUP } from "./default-backup.js";

// ── localStorage keys ─────────────────────────────────────────────
const SCORE_KEY = "muscle-scores-goal-v2";
const LOG_KEY   = "training-log-edits-v1";
const PLAN_KEY  = "training-plan-v1";

// ── Target body stats ─────────────────────────────────────────────
const GOAL = {
  heightCm: 187, weightKg: 80, bfPct: 15, lbmKg: 68,
  ffmi: 19.4, label: "187cm · 80kg · 体脂 15% 古典健美"
};

// ── Score color map ────────────────────────────────────────────────
const SCORE_COLOR  = { 1:"#9a9590", 2:"#e0b84a", 3:"#d4a017", 4:"#5c9a3c", 5:"#2d7a3a" };
const SELECT_COLOR = "#c0392b";
const OTHER_MUSCLE = "#c4b4a4";
const BONE_COLOR   = "#e4d5c4";

// ── Major muscle set ──────────────────────────────────────────────
const MAJOR = new Set([
  "pec_u","pec_s","pec_l",
  "lats","trap_u","trap_m","trap_l",
  "quads","semi","bf","gmax","add"
]);

// ── Cover table: deep group → surface groups to peel ─────────────
const COVER = {
  pec_min:   ["pec_u","pec_s","pec_l"],
  subscap:   ["pec_s","pec_u","pec_l","serr"],
  supra:     ["trap_u","mid_delt","ant_delt"],
  infra:     ["rear_delt","trap_m","trap_u"],
  teres_min: ["rear_delt","infra"],
  teres_maj: ["lats","rear_delt"],
  brachialis:["bi"],
  rhomb:     ["trap_m","trap_u","trap_l"],
  lev_scap:  ["trap_u"],
  obl_int:   ["obl"],
  tva:       ["abs","obl","obl_int"],
  ql:        ["erector","lats"],
  hip:       ["abs","obl","add","quads"],
  soleus:    ["gastroc_m","gastroc_l"],
  pec_u:     [],
  serr:      ["pec_s","pec_l"],
};

// ── Muscle groups data ────────────────────────────────────────────
const GROUPS = [
  // === 胸与肩 ===
  { id:"ant_delt", name:"肩前束", region:"胸与肩",
    match:{ name:"Deltoid", detail:"Clavicular" },
    evidence:{ ratio:.68, sessions:5 },
    why:"每周推系训练激活充分，肩推/飞鸟主要驱动肌；比例接近 70% 但未达标。",
    exercises:[{name:"哑铃肩推",have:true},{name:"颈前推",have:true},{name:"肩推",have:true},{name:"阿诺德推",have:false}]
  },
  { id:"mid_delt", name:"肩中束", region:"胸与肩",
    match:{ name:"Deltoid", detail:"Acromial" },
    evidence:{ ratio:.48, sessions:5 },
    why:"侧平举重量尚轻，中束孤立感不足；已练但负荷比例偏低。",
    exercises:[{name:"哑铃侧平举",have:true},{name:"绳索侧平举",have:true},{name:"肩推",have:true},{name:"哑铃直臂上举",have:false}]
  },
  { id:"rear_delt", name:"肩后束", region:"胸与肩",
    match:{ name:"Deltoid", detail:"Scapular" },
    evidence:{ ratio:.38, sessions:3 },
    why:"面拉有练到但组数不多；拉日后束练量尚可，仍有缺口。",
    exercises:[{name:"面拉",have:true},{name:"俯身飞鸟",have:false},{name:"绳索后束拉",have:false}]
  },
  { id:"pec_u", name:"胸大肌锁骨头", region:"胸与肩",
    match:{ name:"Pectoralis Major", detail:"Clavicular" },
    evidence:{ ratio:.72, sessions:5 },
    why:"低位绳索夹胸（低位→斜上拉）为上胸首选替代；上斜动作因肩峰撞击感已撤，肩部不适立即停止。",
    exercises:[{name:"低位绳索夹胸",have:true},{name:"上斜哑铃飞鸟",have:false},{name:"上斜机械推胸",have:false},{name:"上斜杠铃卧推",have:false}]
  },
  { id:"pec_s", name:"胸大肌胸肋头", region:"胸与肩",
    match:{ name:"Pectoralis Major", detail:"Sternocostal" },
    evidence:{ ratio:.82, sessions:6 },
    why:"平板卧推/绳索夹胸主力，胸肋头覆盖最充分，负荷比例高。",
    exercises:[{name:"平板卧推",have:true},{name:"器械推胸",have:true},{name:"绳索夹胸",have:true}]
  },
  { id:"pec_l", name:"胸大肌腹头", region:"胸与肩",
    match:{ name:"Pectoralis Major", detail:"Abdominal" },
    evidence:{ ratio:.55, sessions:4, gap:true },
    why:"腹头需低位飞鸟专项，现有动作欠缺；哑铃仰卧上拉提供离心拉伸刺激。",
    exercises:[{name:"哑铃仰卧上拉",have:true},{name:"低位绳索飞鸟",have:false},{name:"哑铃下斜卧推",have:false}]
  },
  { id:"pec_min", name:"胸小肌", region:"胸与肩",
    match:{ nameAny:["Pectoralis Minor"] },
    evidence:{ ratio:.4, sessions:3 },
    why:"推日训练间接激活；哑铃仰卧上拉的肩胛前伸动作专项激活胸小肌。",
    exercises:[{name:"哑铃仰卧上拉",have:true},{name:"双杠臂屈伸",have:false},{name:"前锯肌激活",have:false}]
  },
  { id:"serr", name:"前锯肌", region:"胸与肩",
    match:{ nameAny:["Serratus Anterior"] },
    evidence:{ ratio:.3, sessions:2, gap:true },
    why:"前锯肌训练量不足，肩胛稳定性有待改善；哑铃仰卧上拉涉及肩胛前伸。",
    exercises:[{name:"哑铃仰卧上拉",have:true},{name:"前锯肌俯卧撑",have:false}]
  },
  { id:"supra", name:"冈上肌", region:"胸与肩",
    match:{ nameAny:["Supraspinatus"] },
    evidence:{ ratio:.25, sessions:1, gap:true },
    why:"旋转袖深层肌，冈上肌负责肩外展起始 15-30°，侧平举即可激活。",
    exercises:[{name:"哑铃侧平举",have:true},{name:"空罐式哑铃上举",have:false},{name:"弹力带外旋",have:false}]
  },
  { id:"infra", name:"冈下肌", region:"胸与肩",
    match:{ nameAny:["Infraspinatus"] },
    evidence:{ ratio:.25, sessions:1, gap:true },
    why:"旋转袖外旋肌；面拉的外旋分量可直接激活冈下肌。",
    exercises:[{name:"面拉",have:true},{name:"弹力带外旋",have:false},{name:"哑铃俯卧外旋",have:false}]
  },
  { id:"teres_min", name:"小圆肌", region:"胸与肩",
    match:{ nameAny:["Teres Minor"] },
    evidence:{ ratio:.22, sessions:1, gap:true },
    why:"旋转袖小圆肌；面拉的外旋分量同时激活小圆肌。",
    exercises:[{name:"面拉",have:true},{name:"绳索外旋",have:false},{name:"弹力带外旋",have:false}]
  },
  { id:"teres_maj", name:"大圆肌", region:"胸与肩",
    match:{ nameAny:["Teres Major"] },
    evidence:{ ratio:.55, sessions:4 },
    why:"背阔肌训练间接激活，单臂划船有协同作用；双臂下拉与高位下拉动作模式相同。",
    exercises:[{name:"高位下拉",have:true},{name:"双臂下拉",have:true},{name:"单臂哑铃划船",have:true},{name:"悬垂",have:true}]
  },
  { id:"subscap", name:"肩胛下肌", region:"胸与肩",
    match:{ nameAny:["Subscapularis"] },
    evidence:{ ratio:.2, sessions:1, gap:true },
    why:"旋转袖内旋肌；绳索内旋专项激活肩胛下肌。",
    exercises:[{name:"绳索内旋",have:true},{name:"弹力带内旋",have:false},{name:"哑铃内旋",have:false}]
  },

  // === 手臂 ===
  { id:"bi", name:"肱二头肌", region:"手臂",
    match:{ nameAny:["Biceps Brachii","Short Head Of Biceps Brachii","Long Head Of Biceps Brachii","Biceps"] },
    evidence:{ ratio:.75, sessions:6 },
    why:"哑铃弯举/锤式弯举每周练习，负荷比例接近 75%。",
    exercises:[{name:"哑铃弯举",have:true},{name:"锤式弯举",have:true},{name:"二头弯举",have:true},{name:"杠铃弯举",have:false}]
  },
  { id:"brachialis", name:"肱肌", region:"手臂",
    match:{ nameAny:["Brachialis"] },
    evidence:{ ratio:.65, sessions:5 },
    why:"锤式弯举专门激活肱肌，练量适中；弯举系动作（二头弯举、哑铃弯举）亦覆盖。",
    exercises:[{name:"锤式弯举",have:true},{name:"二头弯举",have:true},{name:"哑铃弯举",have:true},{name:"绳索锤式弯",have:false}]
  },
  { id:"tri_long", name:"肱三头肌长头", region:"手臂",
    match:{ name:"Triceps Brachii", detail:"Long Head" },
    evidence:{ ratio:.6, sessions:5 },
    why:"绳索下压/窄距卧推覆盖，长头需过头动作补充。",
    exercises:[{name:"绳索下压",have:true},{name:"过头臂屈伸",have:true},{name:"绳索臂屈伸",have:true},{name:"窄距俯卧撑",have:true},{name:"哑铃过头臂屈伸",have:false}]
  },
  { id:"tri_lat", name:"肱三头肌外侧头", region:"手臂",
    match:{ name:"Triceps Brachii", detail:"Lateral Head" },
    evidence:{ ratio:.62, sessions:5 },
    why:"绳索下压外侧头激活好，练量适中。",
    exercises:[{name:"绳索下压",have:true},{name:"绳索臂屈伸",have:true},{name:"窄距俯卧撑",have:true},{name:"俯身臂屈伸",have:false}]
  },
  { id:"tri_med", name:"肱三头肌内侧头", region:"手臂",
    match:{ name:"Triceps Brachii", detail:"Medial Head" },
    evidence:{ ratio:.55, sessions:4 },
    why:"内侧头在全范围动作中激活，练量中等。",
    exercises:[{name:"绳索下压",have:true},{name:"绳索臂屈伸",have:true},{name:"窄距俯卧撑",have:true},{name:"双杠臂屈伸",have:false}]
  },
  { id:"fore_flex", name:"前臂屈肌群", region:"手臂",
    match:{ nameAny:["Flexor Carpi Radialis","Flexor Carpi Ulnaris","Palmaris Longus","Pronator Teres"] },
    evidence:{ ratio:.45, sessions:4 },
    why:"弯举动作间接激活，无专项前臂训练。",
    exercises:[{name:"悬垂",have:true},{name:"引体向上",have:true},{name:"反握弯举",have:true},{name:"锤式弯举",have:true},{name:"哑铃弯举",have:true},{name:"腕弯举",have:false}]
  },
  { id:"fore_ext", name:"前臂伸肌群", region:"手臂",
    match:{ nameAny:["Extensor Carpi Radialis Longus","Extensor Carpi Radialis Brevis","Extensor Carpi Ulnaris"] },
    evidence:{ ratio:.35, sessions:3 },
    why:"握力训练间接覆盖，反握弯举专项强化伸肌群。",
    exercises:[{name:"反握弯举",have:true},{name:"反握腕弯举",have:false},{name:"绳索腕伸",have:false}]
  },

  // === 背 ===
  { id:"trap_u", name:"斜方肌上束", region:"背",
    match:{ name:"Trapezius", detail:"Descending" },
    evidence:{ ratio:.6, sessions:5 },
    why:"面拉/耸肩有练，上束整体适中。",
    exercises:[{name:"面拉",have:true},{name:"哑铃耸肩",have:true}]
  },
  { id:"trap_m", name:"斜方肌中束", region:"背",
    match:{ name:"Trapezius", detail:"Transverse" },
    evidence:{ ratio:.65, sessions:5 },
    why:"划船动作中束激活充分，水平拉力足。",
    exercises:[{name:"坐姿绳索划船",have:true},{name:"坐姿划船",have:true},{name:"T杠划船",have:true},{name:"面拉",have:true}]
  },
  { id:"trap_l", name:"斜方肌下束", region:"背",
    match:{ name:"Trapezius", detail:"Ascending" },
    evidence:{ ratio:.5, sessions:3, gap:true },
    why:"下束需低位绳索/Y字动作专项；Y字哑铃上举直接激活下束。",
    exercises:[{name:"Y字哑铃上举",have:true},{name:"低位绳索下拉",have:false}]
  },
  { id:"lats", name:"背阔肌", region:"背",
    match:{ nameAny:["Latissimus Dorsi"] },
    evidence:{ ratio:.78, sessions:6 },
    why:"高位下拉+单臂划船，背阔肌是训练重点，负荷接近目标。",
    exercises:[{name:"高位下拉",have:true},{name:"单臂哑铃划船",have:true},{name:"悬垂",have:true},{name:"双臂下拉",have:true},{name:"坐姿划船",have:true},{name:"引体向上",have:true}]
  },
  { id:"rhomb", name:"菱形肌", region:"背",
    match:{ nameAny:["Rhomboid Major","Rhomboid Minor"] },
    evidence:{ ratio:.58, sessions:4 },
    why:"划船动作肩胛内收激活菱形肌，练量适中。",
    exercises:[{name:"坐姿绳索划船",have:true},{name:"坐姿划船",have:true},{name:"面拉",have:true}]
  },
  { id:"lev_scap", name:"肩胛提肌", region:"背",
    match:{ nameAny:["Levator Scapulae"] },
    evidence:{ ratio:.3, sessions:2 },
    why:"上束训练间接覆盖；哑铃耸肩直接激活肩胛提肌与上斜方肌。",
    exercises:[{name:"哑铃耸肩",have:true},{name:"颈部侧伸展",have:false}]
  },

  // === 核心 ===
  { id:"erector", name:"竖脊肌", region:"核心",
    match:{ nameAny:["Iliocostalis","Longissimus","Spinalis","Multifidus","Erector Spinae"] },
    evidence:{ ratio:.7, sessions:5 },
    why:"深蹲/划船全程激活；罗马尼亚硬拉加入后竖脊肌在离心阶段得到专项刺激。",
    exercises:[{name:"罗马尼亚硬拉",have:true},{name:"深蹲",have:true},{name:"山羊挺身",have:true},{name:"罗马椅背伸",have:false}]
  },
  { id:"ql", name:"腰方肌", region:"核心",
    match:{ nameAny:["Quadratus Lumborum"] },
    evidence:{ ratio:.3, sessions:2, gap:true },
    why:"腰方肌通过侧弯哑铃侧向屈曲脊柱直接激活；侧平板支撑的等长侧向支撑同样强烈刺激腰方肌。",
    exercises:[{name:"侧弯哑铃",have:true},{name:"侧平板支撑",have:true},{name:"单侧负重步行",have:false}]
  },
  { id:"abs", name:"腹直肌", region:"核心",
    match:{ nameAny:["Rectus Abdominis","Linea Alba","Pyramidalis"] },
    evidence:{ ratio:.52, sessions:4 },
    why:"核心训练含坐姿收腹/悬垂举腿，练量适中。",
    exercises:[{name:"卷腹",have:true},{name:"悬垂举腿",have:true},{name:"坐姿收腹",have:true},{name:"仰卧起坐",have:false}]
  },
  { id:"obl", name:"腹外斜肌", region:"核心",
    match:{ nameAny:["Abdominal External Oblique","External Abdominal Oblique"] },
    evidence:{ ratio:.4, sessions:3 },
    why:"有氧核心日有练；俄式转体的旋转动作专项激活腹外斜肌；侧平板支撑对腹斜肌的静态等长刺激显著。",
    exercises:[{name:"俄式转体",have:true},{name:"侧平板支撑",have:true},{name:"斜向卷腹",have:false}]
  },
  { id:"obl_int", name:"腹内斜肌", region:"核心",
    match:{ nameAny:["Abdominal Internal Oblique","Internal Abdominal Oblique"] },
    evidence:{ ratio:.35, sessions:2, gap:true },
    why:"内斜肌与外斜肌协同旋转；俄式转体同步激活腹内斜肌。",
    exercises:[{name:"俄式转体",have:true},{name:"反向旋转卷腹",have:false},{name:"斜板仰卧起坐",have:false}]
  },
  { id:"tva", name:"腹横肌", region:"核心",
    match:{ nameAny:["Transverse Abdominal","Transversus Abdominis"] },
    evidence:{ ratio:.2, sessions:1, gap:true },
    why:"腹横肌需专项激活；平板支撑与侧平板支撑均需腹横肌持续收缩以维持脊柱中立位。",
    exercises:[{name:"平板支撑",have:true},{name:"侧平板支撑",have:true},{name:"腹式呼吸练习",have:false}]
  },

  // === 下肢 ===
  { id:"hip", name:"髂腰肌", region:"下肢",
    match:{ nameAny:["Iliacus","Psoas Major"] },
    evidence:{ ratio:.35, sessions:2, gap:true },
    why:"悬垂举腿专项激活髂腰肌（抬腿需髋屈），已纳入每周训练。",
    exercises:[{name:"悬垂举腿",have:true},{name:"跪姿髋屈伸",have:false}]
  },
  { id:"quads", name:"股四头肌", region:"下肢",
    match:{ nameAny:["Quadriceps Femoris","Rectus Femoris","Vastus Lateralis","Vastus Medialis","Vastus Intermedius"] },
    evidence:{ ratio:.82, sessions:6 },
    why:"坐式蹬腿130kg×10（1.6×体重）＋坐姿腿伸展专项，股四头肌覆盖充分。",
    exercises:[{name:"坐式蹬腿",have:true},{name:"坐姿腿伸展",have:true},{name:"深蹲",have:true}]
  },
  { id:"sartorius", name:"缝匠肌", region:"下肢",
    match:{ nameAny:["Sartorius"] },
    evidence:{ ratio:.3, sessions:2 },
    why:"复合动作间接练到；悬垂举腿的髋屈动作激活缝匠肌。",
    exercises:[{name:"悬垂举腿",have:true},{name:"深蹲",have:false}]
  },
  { id:"add", name:"内收肌群", region:"下肢",
    match:{ nameAny:["Adductor Magnus","Adductor Longus","Adductor Brevis","Gracilis","Pectineus"] },
    evidence:{ ratio:.70, sessions:6 },
    why:"大腿内收机专项42.5kg×8×4近极限，加上宽站腿举，内收肌群训练充分。",
    exercises:[{name:"大腿内收",have:true},{name:"腿举宽站",have:true},{name:"深蹲",have:true}]
  },
  { id:"gmax", name:"臀大肌", region:"下肢",
    match:{ nameAny:["Gluteus Maximus"] },
    evidence:{ ratio:.75, sessions:5 },
    why:"坐式蹬腿130kg×10（1.6×体重）主驱动臀大肌，罗马尼亚硬拉加入后练量提升。",
    exercises:[{name:"坐式蹬腿",have:true},{name:"罗马尼亚硬拉",have:true},{name:"臀推",have:true}]
  },
  { id:"gmed", name:"臀中/小肌", region:"下肢",
    match:{ nameAny:["Gluteus Medius","Gluteus Minimus"] },
    evidence:{ ratio:.35, sessions:2, gap:true },
    why:"髋外展机专项针对臀中肌；侧平板支撑的侧向稳定要求同样激活臀中肌；每周两次维持腿日均有覆盖。",
    exercises:[{name:"髋外展",have:true},{name:"侧平板支撑",have:true},{name:"侧卧蚌式",have:false},{name:"绳索臀外展",have:false}]
  },
  { id:"semi", name:"半腱/半膜肌", region:"下肢",
    match:{ nameAny:["Semimembranosus","Semitendinosus"] },
    evidence:{ ratio:.72, sessions:5 },
    why:"坐姿腿弯举50kg×12×4专项激活内侧腘绳肌；罗马尼亚硬拉加入拉伸端刺激。",
    exercises:[{name:"坐姿腿弯举",have:true},{name:"罗马尼亚硬拉",have:true}]
  },
  { id:"bf", name:"股二头肌", region:"下肢",
    match:{ nameAny:["Biceps Femoris","Long Head Of Biceps Femoris","Short Head Of Biceps Femoris"] },
    evidence:{ ratio:.7, sessions:5 },
    why:"坐姿腿弯举覆盖外侧腘绳肌；罗马尼亚硬拉长头拉伸刺激，练量充分。",
    exercises:[{name:"坐姿腿弯举",have:true},{name:"罗马尼亚硬拉",have:true},{name:"北欧腘绳肌弯举",have:false}]
  },
  { id:"gastroc_m", name:"腓肠肌内侧头", region:"下肢",
    match:{ name:"Gastrocnemius", detail:"Medial Head" },
    evidence:{ ratio:.55, sessions:4 },
    why:"站姿提踵/蹬腿机提踵均可激活腓肠肌；每周两种提踵保证覆盖。",
    exercises:[{name:"蹬腿机屈膝提踵",have:true},{name:"站姿提踵",have:true}]
  },
  { id:"gastroc_l", name:"腓肠肌外侧头", region:"下肢",
    match:{ name:"Gastrocnemius", detail:"Lateral Head" },
    evidence:{ ratio:.52, sessions:4 },
    why:"同腓肠肌内侧头；站姿/蹬腿机提踵均覆盖外侧头。",
    exercises:[{name:"蹬腿机屈膝提踵",have:true},{name:"站姿提踵",have:true}]
  },
  { id:"soleus", name:"比目鱼肌", region:"下肢",
    match:{ nameAny:["Soleus"] },
    evidence:{ ratio:.45, sessions:3 },
    why:"比目鱼肌在所有踝跖屈中参与；站姿提踵提供足够刺激。",
    exercises:[{name:"蹬腿机屈膝提踵",have:true},{name:"站姿提踵",have:true},{name:"坐姿提踵机",have:false}]
  },
  { id:"ta", name:"胫骨前肌", region:"下肢",
    match:{ nameAny:["Tibialis Anterior"] },
    evidence:{ ratio:.2, sessions:1, gap:true },
    why:"胫骨前肌负责踝背屈；脚尖勾起练习专项强化，预防胫前疼痛。",
    exercises:[{name:"脚尖勾起练习",have:true}]
  },
];

// 添加运行时字段
GROUPS.forEach(g => {
  g.size = MAJOR.has(g.id) ? "大" : "小";
  g.auto = bandScore(g.evidence);
});

// ── Score calculation ─────────────────────────────────────────────
function bandScore({ ratio = 0, sessions = 0, gap = false, injury = false }) {
  if (injury && sessions === 0) return 1;
  if (gap && sessions < 2) return 1;
  let n = 1;
  if      (ratio >= 0.85 && sessions >= 2) n = 5;
  else if (ratio >= 0.7  && sessions >= 2) n = 4;
  else if (ratio >= 0.5  && sessions >= 2) n = 3;
  else if (sessions >= 1 || ratio >= 0.28) n = 2;
  if (injury && n > 2) n = 2;
  return n;
}

// ── Escape HTML ───────────────────────────────────────────────────
function esc(s) {
  return String(s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;")
    .replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

// ── Score storage ─────────────────────────────────────────────────
let scores = {};
function loadScores() {
  scores = {};
  GROUPS.forEach(g => scores[g.id] = g.auto);
  try {
    const raw = localStorage.getItem(SCORE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      Object.entries(saved).forEach(([id, val]) => {
        if (scores[id] !== undefined && val >= 1 && val <= 5) scores[id] = val;
      });
    } else {
      // First load – seed from bundled defaults instead of auto scores
      const defaults = DEFAULT_BACKUP.scores || {};
      Object.entries(defaults).forEach(([id, val]) => {
        if (scores[id] !== undefined && val >= 1 && val <= 5) scores[id] = val;
      });
    }
  } catch {}
}
function saveScores() {
  try { localStorage.setItem(SCORE_KEY, JSON.stringify(scores)); } catch {}
}
function restoreAuto() {
  // Reset to mathematically calculated scores and persist them so they survive reload
  GROUPS.forEach(g => scores[g.id] = g.auto);
  saveScores();
}

// ── Plan storage ──────────────────────────────────────────────────
let activePlan = null;

function loadPlan() {
  try {
    const raw = localStorage.getItem(PLAN_KEY);
    if (raw) { activePlan = JSON.parse(raw); return; }
  } catch {}
  activePlan = DEFAULT_BACKUP.plan;
}

function savePlan(plan) {
  activePlan = plan;
  try { localStorage.setItem(PLAN_KEY, JSON.stringify(plan)); } catch {}
}

// ─────────────────────────────────────────────────────────────────
// THREE.JS SCENE
// ─────────────────────────────────────────────────────────────────
let renderer, scene, camera, controls;
let modelRoot = null;
let bodyRadius = 1;
let scoredMeshes = new Map();   // groupId → mesh[]
let allPickMeshes = [];
let otherMeshes = [];
let boneMeshes = [];
let homePositions = new Map();  // mesh → Vector3
let exploded = new Set();
let animating = new Map();      // mesh → { curve, t, duration }
let selectedId = null;

function hexToColor(hex) {
  return new THREE.Color(hex);
}

function initThree() {
  const canvas = document.getElementById("stage");
  const wrap   = document.getElementById("stageWrap");

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = false;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf3efe7);

  const w = wrap.clientWidth, h = Math.max(wrap.clientHeight, 500);
  camera = new THREE.PerspectiveCamera(35, w / h, 0.05, 100);
  camera.position.set(0, 0, 5);

  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 0.6;
  controls.maxDistance = 8;

  // Lights
  const hemi = new THREE.HemisphereLight(0xfff4e8, 0x6b5a4c, 1.05);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffffff, 1.15);
  key.position.set(2.2, 3.4, 2.8);
  scene.add(key);

  const fill = new THREE.DirectionalLight(0xffe6d2, 0.45);
  fill.position.set(-3, 1, -2);
  scene.add(fill);

  const rim = new THREE.DirectionalLight(0xffffff, 0.35);
  rim.position.set(0, 2, -4);
  scene.add(rim);

  // Resize
  function resize() {
    const w2 = wrap.clientWidth, h2 = Math.max(wrap.clientHeight, 500);
    renderer.setSize(w2, h2, false);
    camera.aspect = w2 / h2;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(wrap);
  resize();

  loadModel();

  let last = performance.now();
  function tick(now) {
    requestAnimationFrame(tick);
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    tickExplode(dt);
    boneMeshes.forEach(m => {
      const h = homePositions.get(m);
      if (h) m.position.copy(h);
    });
    controls.update();
    renderer.render(scene, camera);
  }
  requestAnimationFrame(tick);

  // tool buttons
  document.getElementById("btnFront").addEventListener("click", () => frameCamera(true));
  document.getElementById("btnBack").addEventListener("click",  () => frameCamera(false));
  document.getElementById("btnReset").addEventListener("click", () => restoreExploded(false));

  // pointer events
  canvas.addEventListener("pointermove", onHover);
  canvas.addEventListener("pointerdown", e => { if (e.button === 0) onClickDown(e); });
  canvas.addEventListener("contextmenu", e => e.preventDefault());
}

// ── Model loading ─────────────────────────────────────────────────
function loadModel() {
  const loader = new GLTFLoader();
  const draco  = new DRACOLoader();
  draco.setDecoderPath("./vendor/z-anatomy/libs/draco/");
  loader.setDRACOLoader(draco);

  document.getElementById("loadingNote").textContent =
    "请使用静态 HTTP 服务打开本页（file:// 下 module/wasm/glb 不可用）";

  loader.load(
    "./vendor/z-anatomy/body.glb",
    gltf => onModelLoaded(gltf),
    xhr => {
      const pct = xhr.total ? Math.round(xhr.loaded / xhr.total * 100) : 0;
      document.getElementById("loadingBar").style.width = pct + "%";
    },
    err => {
      console.error("GLB load error:", err);
      document.getElementById("loadingNote").textContent =
        "❌ 模型加载失败。请用静态 HTTP 服务打开（如 node serve.js）。";
    }
  );
}

function extrasOf(obj) {
  let cur = obj;
  while (cur) {
    const ud = cur.userData;
    if (ud && (ud.type || ud.name || ud.nameDetail)) return ud;
    cur = cur.parent;
  }
  return null;
}

function matchesRule(extras, rule) {
  if (!extras) return false;
  const name   = extras.name   || "";
  const detail = (extras.nameDetail || "").toLowerCase();
  if (rule.name   && name !== rule.name)                     return false;
  if (rule.nameAny && !rule.nameAny.includes(name))          return false;
  if (rule.detail && !detail.includes(rule.detail.toLowerCase())) return false;
  return true;
}

function groupForExtras(extras) {
  if (!extras || extras.type !== "muscle") return null;
  return GROUPS.find(g => matchesRule(extras, g.match)) || null;
}

function rememberHome(mesh) {
  homePositions.set(mesh, mesh.position.clone());
}

function onModelLoaded(gltf) {
  modelRoot = gltf.scene;
  scene.add(modelRoot);

  // center model
  const box    = new THREE.Box3().setFromObject(modelRoot);
  const center = box.getCenter(new THREE.Vector3());
  modelRoot.position.sub(center);

  // bounding radius for park positions
  const size = box.getSize(new THREE.Vector3());
  bodyRadius = Math.max(size.x, size.z) * 0.5;

  // traverse
  modelRoot.traverse(obj => {
    if (!obj.isMesh) return;

    // clone material
    if (Array.isArray(obj.material)) {
      obj.material = obj.material.map(m => {
        const c = m.clone();
        c.metalness = 0.05; c.roughness = 0.62;
        c.side = THREE.DoubleSide;
        return c;
      });
    } else {
      const c = obj.material.clone();
      c.metalness = 0.05; c.roughness = 0.62;
      c.side = THREE.DoubleSide;
      obj.material = c;
    }

    rememberHome(obj);

    const extras = extrasOf(obj);
    const group  = groupForExtras(extras);

    if (group) {
      obj.userData.groupId = group.id;
      if (!scoredMeshes.has(group.id)) scoredMeshes.set(group.id, []);
      scoredMeshes.get(group.id).push(obj);
      allPickMeshes.push(obj);
    } else if (extras && extras.type === "bone") {
      obj.visible = false;
      boneMeshes.push(obj);
    } else {
      // other muscle or unknown
      obj.userData.groupId = null;
      otherMeshes.push(obj);
      allPickMeshes.push(obj);
    }
  });

  applyColors();
  frameCamera(true);

  document.getElementById("loading").style.display = "none";
  renderInspector();
}

// ── Coloring ──────────────────────────────────────────────────────
function applyColors() {
  // scored muscles
  scoredMeshes.forEach((meshes, gid) => {
    const score = scores[gid] || 1;
    const inExploded = meshes.some(m => exploded.has(m));
    const isSelected = gid === selectedId;
    meshes.forEach(m => {
      const mat = Array.isArray(m.material) ? m.material[0] : m.material;
      if (isSelected) {
        mat.color.set(SELECT_COLOR);
        mat.emissive.set("#5a1010");
        mat.emissiveIntensity = 0.35;
      } else {
        mat.color.set(SCORE_COLOR[score]);
        mat.emissive.set(0x000000);
        mat.emissiveIntensity = 0;
      }
      if (inExploded) {
        mat.transparent = true;
        mat.opacity = 0.72;
        mat.depthWrite = false;
      } else {
        mat.transparent = false;
        mat.opacity = 1;
        mat.depthWrite = true;
      }
    });
  });
  // other muscles
  otherMeshes.forEach(m => {
    const mat = Array.isArray(m.material) ? m.material[0] : m.material;
    if (exploded.has(m)) {
      mat.color.set("#d7c4b0");
      mat.transparent = true; mat.opacity = 0.65; mat.depthWrite = false;
    } else {
      mat.color.set(OTHER_MUSCLE);
      mat.transparent = false; mat.opacity = 1; mat.depthWrite = true;
    }
    mat.emissive.set(0x000000); mat.emissiveIntensity = 0;
  });
}

// ── Camera framing ────────────────────────────────────────────────
function frameCamera(front = true) {
  if (!modelRoot) return;
  const box  = new THREE.Box3().setFromObject(modelRoot);
  const size = box.getSize(new THREE.Vector3());
  const maxD = Math.max(size.x, size.y, size.z);
  const dist = maxD * 1.38;
  camera.position.set(0, size.y * 0.02, front ? dist : -dist);
  controls.target.set(0, 0, 0);
  controls.update();
}

// ─────────────────────────────────────────────────────────────────
// EXPLODE / PEEL
// ─────────────────────────────────────────────────────────────────
function canExplode(mesh) {
  return mesh.isMesh && !boneMeshes.includes(mesh);
}

function findOccluders(targetMeshes) {
  const occluders = new Set();
  const targetSet = new Set(targetMeshes);

  targetMeshes.forEach(tm => {
    const box    = new THREE.Box3().setFromObject(tm);
    const center = box.getCenter(new THREE.Vector3());
    const sz     = box.getSize(new THREE.Vector3());

    const samples = [
      center,
      center.clone().add(new THREE.Vector3(sz.x * 0.15, 0, 0)),
      center.clone().add(new THREE.Vector3(-sz.x * 0.15, 0, 0)),
      center.clone().add(new THREE.Vector3(0, sz.y * 0.12, 0)),
    ];

    const raycaster = new THREE.Raycaster();
    samples.forEach(pt => {
      const dir = pt.clone().sub(camera.position).normalize();
      raycaster.set(camera.position, dir);
      const hits = raycaster.intersectObjects(allPickMeshes, false);
      for (const hit of hits) {
        if (hit.distance < 0.01) continue;
        if (targetSet.has(hit.object)) break;
        if (boneMeshes.includes(hit.object)) continue;
        occluders.add(hit.object);
      }
    });
  });

  return occluders;
}

function parkLocalPosition(mesh, index) {
  mesh.position.copy(homePositions.get(mesh));
  const world = new THREE.Vector3();
  mesh.getWorldPosition(world);

  let side = Math.sign(world.x);
  if (Math.abs(world.x) < 0.08) side = index % 2 === 0 ? 1 : -1;

  const camDir = camera.position.clone();
  camDir.y = 0;
  camDir.normalize();

  const wx = side * (bodyRadius * 1.65 + (index % 6) * bodyRadius * 0.11);
  const wy = world.y + ((index % 5) - 2) * bodyRadius * 0.05;
  const wz = world.z * 0.35 - camDir.z * bodyRadius * 0.2;
  const worldTarget = new THREE.Vector3(wx, wy, wz);

  return mesh.parent
    ? mesh.parent.worldToLocal(worldTarget)
    : worldTarget;
}

function animateSmoothArc(mesh, target, duration) {
  const start = mesh.position.clone();
  const liftY = Math.max(start.y, target.y) + bodyRadius * 0.45;

  const p1 = start.clone().lerp(target, 0.25);  p1.y = p1.y * 0.5 + liftY * 0.5;
  const p2 = start.clone().lerp(target, 0.75);  p2.y = p2.y * 0.5 + liftY * 0.5;

  const curve = new THREE.CatmullRomCurve3([start, p1, p2, target]);
  animating.set(mesh, { curve, t: 0, duration: duration || 0.55 });
}

function tickExplode(dt) {
  if (animating.size === 0) return;
  let changed = false;
  animating.forEach((anim, mesh) => {
    anim.t = Math.min(anim.t + dt / anim.duration, 1);
    mesh.position.copy(anim.curve.getPointAt(anim.t));
    if (anim.t >= 1) { animating.delete(mesh); }
    changed = true;
  });
  if (changed) { /* colors are set in revealGroup */ }
}

function restoreExploded(immediate = false) {
  if (exploded.size === 0) return;
  exploded.forEach(mesh => {
    const home = homePositions.get(mesh);
    if (!home) return;
    if (immediate) {
      mesh.position.copy(home);
      animating.delete(mesh);
    } else {
      animateSmoothArc(mesh, home.clone(), 0.65);
    }
  });
  exploded.clear();
  applyColors();
}

function revealGroup(gid) {
  restoreExploded(true);

  const targets = scoredMeshes.get(gid) || [];
  if (targets.length === 0) return;

  const occSet = findOccluders(targets);

  // add COVER entries
  const coverIds = COVER[gid] || [];
  coverIds.forEach(covId => {
    const ms = scoredMeshes.get(covId) || [];
    ms.forEach(m => { if (canExplode(m)) occSet.add(m); });
  });

  // remove targets themselves
  const targetSet = new Set(targets);
  targetSet.forEach(m => occSet.delete(m));

  // filter and sort by camera distance (nearest first)
  let occ = [...occSet].filter(canExplode);
  occ.sort((a, b) => {
    const pa = new THREE.Vector3(), pb = new THREE.Vector3();
    a.getWorldPosition(pa); b.getWorldPosition(pb);
    return pa.distanceTo(camera.position) - pb.distanceTo(camera.position);
  });
  occ = occ.slice(0, 10);

  occ.forEach((mesh, i) => {
    const park = parkLocalPosition(mesh, i);
    animateSmoothArc(mesh, park, 0.55 + i * 0.04);
    exploded.add(mesh);
  });

  applyColors();
}

// ─────────────────────────────────────────────────────────────────
// PICKING / HOVER
// ─────────────────────────────────────────────────────────────────
function ndcFromEvent(e) {
  const rect = renderer.domElement.getBoundingClientRect();
  return new THREE.Vector2(
    ((e.clientX - rect.left) / rect.width)  *  2 - 1,
    ((e.clientY - rect.top)  / rect.height) * -2 + 1
  );
}

function pickAll(e) {
  if (!modelRoot) return [];
  const ray = new THREE.Raycaster();
  ray.setFromCamera(ndcFromEvent(e), camera);
  return ray.intersectObjects(allPickMeshes, false);
}

// Hover tip
let tipHideTimer = null;
const tipEl = document.getElementById("tip");

function onHover(e) {
  if (!modelRoot) return;
  const hits = pickAll(e);
  const scored = hits.find(h => h.object.userData.groupId);

  if (scored) {
    clearTimeout(tipHideTimer);
    const gid  = scored.object.userData.groupId;
    const g    = GROUPS.find(x => x.id === gid);
    if (!g) return;
    showTip(e, g);
    // emissive highlight
    const mat = Array.isArray(scored.object.material)
      ? scored.object.material[0] : scored.object.material;
    if (gid !== selectedId) {
      mat.emissive.set("#3a2a10"); mat.emissiveIntensity = 0.22;
    }
  } else {
    // other anatomy name
    const hit = hits[0];
    if (hit) {
      const ex = extrasOf(hit.object);
      clearTimeout(tipHideTimer);
      tipEl.innerHTML = `<div class="tip-name">${esc(ex?.name || "—")}</div>
        <div class="tip-other">非训练评分部位</div>`;
      placeTip(e);
      tipEl.style.display = "block";
    } else {
      tipHideTimer = setTimeout(() => { tipEl.style.display = "none"; }, 180);
    }
    // restore highlight
    scoredMeshes.forEach((meshes, gid) => {
      if (gid !== selectedId) {
        meshes.forEach(m => {
          const mat = Array.isArray(m.material) ? m.material[0] : m.material;
          mat.emissive.set(0x000000); mat.emissiveIntensity = 0;
        });
      }
    });
  }
}

function showTip(e, g) {
  const score = scores[g.id] || 1;
  const starsHtml = [1,2,3,4,5].map(i => {
    const cls = i <= score ? (score >= 4 ? `on on-${score}` : "on") : "";
    return `<button class="tip-star ${cls}" data-gid="${g.id}" data-s="${i}"></button>`;
  }).join("");
  tipEl.innerHTML = `
    <div class="tip-name">${esc(g.name)}（${g.size}）</div>
    <div class="tip-stars">${starsHtml}</div>
    <div class="tip-why">${esc(g.why.slice(0, 60))}…</div>`;
  placeTip(e);
  tipEl.style.display = "block";

  tipEl.querySelectorAll(".tip-star").forEach(btn => {
    btn.addEventListener("click", ev => {
      ev.stopPropagation();
      const gid = btn.dataset.gid, s = +btn.dataset.s;
      scores[gid] = s; saveScores(); applyColors();
      if (gid === selectedId) renderDetail(GROUPS.find(x=>x.id===gid));
      else renderInspector();
      showTip(e, GROUPS.find(x=>x.id===gid));
    });
  });
}

function placeTip(e) {
  const margin = 10;
  let x = e.clientX + 12, y = e.clientY + 12;
  if (x + 230 > window.innerWidth)  x = e.clientX - 230 - margin;
  if (y + 140 > window.innerHeight) y = e.clientY - 140 - margin;
  tipEl.style.left = x + "px"; tipEl.style.top = y + "px";
}

tipEl.addEventListener("pointerenter", () => clearTimeout(tipHideTimer));
tipEl.addEventListener("pointerleave", () => {
  tipHideTimer = setTimeout(() => { tipEl.style.display = "none"; }, 180);
});

// Click
function onClickDown(e) {
  if (!modelRoot) return;
  const hits = pickAll(e).filter(h => h.object.userData.groupId);
  if (hits.length === 0) { clearSelection(); return; }

  let chosen = hits[0];
  if (selectedId) {
    const curIdx = hits.findIndex(h => h.object.userData.groupId === selectedId);
    if (curIdx !== -1 && curIdx < hits.length - 1) {
      chosen = hits[curIdx + 1];
    }
  }
  selectGroup(chosen.object.userData.groupId);
}

function selectGroup(gid) {
  selectedId = gid;
  revealGroup(gid);
  applyColors();
  const g = GROUPS.find(x => x.id === gid);
  if (g) renderDetail(g);
}

function clearSelection() {
  selectedId = null;
  restoreExploded(false);
  applyColors();
  renderInspector();
}

// ─────────────────────────────────────────────────────────────────
// INSPECTOR SIDEBAR
// ─────────────────────────────────────────────────────────────────
const insp = document.getElementById("inspector");

function renderInspector() {
  const q = document.activeElement === insp.querySelector("#muscle-q")
    ? { val: insp.querySelector("#muscle-q").value,
        sel: [insp.querySelector("#muscle-q").selectionStart,
              insp.querySelector("#muscle-q").selectionEnd] }
    : null;

  const qval = q ? q.val : "";
  const scoresSorted = [...GROUPS].sort((a,b) => {
    const sa = scores[a.id]||1, sb = scores[b.id]||1;
    return sa - sb || a.name.localeCompare(b.name,"zh");
  });

  const filtered = qval
    ? scoresSorted.filter(g =>
        (g.name + g.region + (MAJOR.has(g.id)?"大":"小")).includes(qval))
    : scoresSorted;

  const goalHtml = `<div class="goal-card">
    <strong>目标</strong>：${esc(GOAL.label)}<br>
    LBM ${GOAL.lbmKg}kg · FFMI ${GOAL.ffmi}
  </div>`;

  let listHtml = "";
  if (qval) {
    listHtml = filtered.map(g => muscleItemHtml(g)).join("");
  } else {
    const s3up  = filtered.filter(g => (scores[g.id]||1) >= 3);
    const s2    = filtered.filter(g => (scores[g.id]||1) === 2);
    const s1    = filtered.filter(g => (scores[g.id]||1) === 1);
    if (s1.length)   listHtml += `<div class="insp-section-hd">需优先补（1分）</div>` + s1.map(muscleItemHtml).join("");
    if (s2.length)   listHtml += `<div class="insp-section-hd">有练过（2分）</div>`  + s2.map(muscleItemHtml).join("");
    if (s3up.length) listHtml += `<div class="insp-section-hd">适中以上（≥3分）</div>` + s3up.map(muscleItemHtml).join("");
  }

  insp.innerHTML = goalHtml
    + `<input id="muscle-q" type="text" placeholder="搜索肌群…" value="${esc(qval)}">`
    + listHtml
    + `<button class="restore-btn" id="restoreBtn">恢复日志估算</button>`;

  insp.querySelectorAll(".muscle-item").forEach(el => {
    el.addEventListener("click", () => selectGroup(el.dataset.gid));
  });
  insp.querySelector("#restoreBtn").addEventListener("click", () => {
    restoreAuto(); applyColors(); renderInspector();
  });

  const qEl = insp.querySelector("#muscle-q");
  qEl.addEventListener("input", renderInspector);
  if (q) {
    qEl.focus();
    try { qEl.setSelectionRange(q.sel[0], q.sel[1]); } catch {}
  }
}

function muscleItemHtml(g) {
  const s = scores[g.id] || 1;
  return `<div class="muscle-item${g.id===selectedId?" selected":""}" data-gid="${g.id}">
    <div class="muscle-badge s${s}">${s}</div>
    <div class="muscle-name">${esc(g.name)}（${g.size}）</div>
    <div class="muscle-region">${esc(g.region)}</div>
  </div>`;
}

function renderDetail(g) {
  const score = scores[g.id] || 1;
  const starsHtml = [1,2,3,4,5].map(i => {
    let cls = "";
    if (i <= score) cls = score <= 2 ? "sel-" + score : "on-" + score;
    if (i === score) cls += " sel-cur";
    return `<button class="star ${cls}" data-s="${i}">${i}</button>`;
  }).join("");

  const exHtml = g.exercises.map(ex =>
    `<li class="${ex.have ? "ex-have" : "ex-miss"}">${esc(ex.name)}</li>`
  ).join("");

  insp.innerHTML = `
    <div class="detail-hd">${esc(g.name)}</div>
    <div class="detail-meta">区域：${esc(g.region)} · ${g.size}肌群</div>
    <div class="detail-meta">当前评分 <strong>${score}</strong> / 自动估算 <strong>${g.auto}</strong></div>
    <div class="stars">${starsHtml}</div>
    <div class="why-text">${esc(g.why)}</div>
    <div class="insp-section-hd">推荐动作</div>
    <ul class="ex-list">${exHtml}</ul>
    <button class="back-btn" id="backBtn">← 返回总览</button>`;

  insp.querySelectorAll(".star").forEach(btn => {
    btn.addEventListener("click", () => {
      const s = +btn.dataset.s;
      scores[g.id] = s; saveScores(); applyColors();
      renderDetail(g);
    });
  });
  insp.querySelector("#backBtn").addEventListener("click", clearSelection);
}

// ─────────────────────────────────────────────────────────────────
// COURSE TABLE – dynamic rendering from activePlan
// ─────────────────────────────────────────────────────────────────
function localDateStr(d) {
  const y  = d.getFullYear();
  const m  = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

function todayStr() {
  return localDateStr(new Date());
}

function addDays(str, n) {
  const d = new Date(str);
  d.setDate(d.getDate() + n);
  return localDateStr(d);
}

function renderWeekRowHtml(week, weekMonday) {
  const weekTd = `<td class="week">第 ${week.week} 周<span class="arrow">▾</span></td>`;

  const dayTds = week.days.map(day => {
    if (day.kind === "rest") return `<td class="rest">休</td>`;
    if (day.kind === "deload") {
      const label = (day.theme && day.theme !== "—") ? esc(day.theme) : "减量";
      return `<td class="rest">${label}</td>`;
    }
    const hdHtml = (day.theme && day.theme !== "—")
      ? `<div class="day-hd">${esc(day.theme)}</div>` : "";
    const exHtml = day.exercises.map(ex => {
      const meta = [ex.w, ex.r, ex.s].filter(v => v !== "" && v != null).join(" · ");
      const feelHtml = ex.feel ? `<div class="feel">${esc(ex.feel)}</div>` : "";
      const doneClass = ex.done ? " is-done" : "";
      return `<article class="ex${doneClass}"><div class="n">${esc(ex.name)}<span class="meta">${esc(meta)}</span></div>${feelHtml}</article>`;
    }).join("");
    return `<td>${hdHtml}${exHtml}</td>`;
  }).join("");

  return `<tr>${weekTd}${dayTds}</tr>`;
}

function renderPlanTable() {
  const tbody = document.querySelector("#weekPlan tbody");
  tbody.innerHTML = activePlan.weeks.map((week, wi) =>
    renderWeekRowHtml(week, activePlan.weekMondays[wi])
  ).join("");
  setupTableInteractivity();
}

function setupTableInteractivity() {
  const today = todayStr();
  const tbody = document.querySelector("#weekPlan tbody");
  const rows  = [...tbody.querySelectorAll("tr")];

  // detect current week row
  let curRowIdx = -1;
  rows.forEach((row, ri) => {
    const mon = activePlan.weekMondays[ri];
    if (!mon) return;
    const sat = addDays(mon, 5);
    if (today >= mon && today <= sat) curRowIdx = ri;
  });
  if (curRowIdx === -1) {
    curRowIdx = activePlan.weeks.findIndex(w => w.note === "进行中");
  }
  if (curRowIdx === -1) curRowIdx = Math.max(0, activePlan.weeks.length - 2);

  // attach dates and today class
  rows.forEach((row, ri) => {
    const mon = activePlan.weekMondays[ri];
    if (!mon) return;
    const dateCells = [...row.querySelectorAll("td:not(.week)")];
    dateCells.forEach((td, di) => {
      const date = addDays(mon, di);
      td.dataset.date = date;
      if (date === today) td.classList.add("is-today");
    });
  });

  // fold rows beyond ±1 of current week
  rows.forEach((row, ri) => {
    if (Math.abs(ri - curRowIdx) > 1) row.classList.add("week-fold");
  });

  // click on week column to fold/unfold
  rows.forEach(row => {
    const weekTd = row.querySelector("td.week");
    if (!weekTd) return;
    weekTd.addEventListener("click", () => {
      row.classList.toggle("week-fold");
      const arrow = weekTd.querySelector(".arrow");
      if (arrow) arrow.textContent = row.classList.contains("week-fold") ? "▸" : "▾";
    });
    const arrow = weekTd.querySelector(".arrow");
    if (arrow) arrow.textContent = row.classList.contains("week-fold") ? "▸" : "▾";
  });

  // assign edit keys, apply stored edits, attach inline editors
  loadLogEdits();
  document.querySelectorAll("article.ex").forEach(art => {
    art.addEventListener("click", () => toggleEditor(art));
  });

  renderTodayBar();
}

function initTable() {
  loadPlan();
  renderPlanTable();
  setupExportImportUI();
}

// ── Training log edits ────────────────────────────────────────────
function loadLogEdits() {
  let edits = {};
  try {
    const raw = localStorage.getItem(LOG_KEY);
    if (raw) {
      edits = JSON.parse(raw);
    } else {
      // First load – seed from bundled defaults
      edits = DEFAULT_BACKUP.logEdits || {};
    }
  } catch {}

  const allTds = [...document.querySelectorAll("#weekPlan td[data-date]")];
  allTds.forEach(td => {
    const date = td.dataset.date;
    const arts = [...td.querySelectorAll("article.ex")];
    arts.forEach((art, i) => {
      const key = `${date}#${i}`;
      art.dataset.key = key;
      const edit = edits[key];
      if (edit) applyEdit(art, edit);
    });
  });
}

function saveLogEdit(key, data) {
  let edits = {};
  try { const r = localStorage.getItem(LOG_KEY); if (r) edits = JSON.parse(r); } catch {}
  edits[key] = data;
  try { localStorage.setItem(LOG_KEY, JSON.stringify(edits)); } catch {}
}

function parseMeta(text) {
  const parts = text.split("·").map(s => s.trim());
  return { w: parts[0] || "—", r: parts[1] || "—", s: parts[2] || "—" };
}

function formatMeta(w, r, s) {
  return [w||"—", r||"—", s||"—"].join(" · ");
}

function applyEdit(art, edit) {
  const metaEl = art.querySelector(".meta");
  if (metaEl && (edit.w || edit.r || edit.s)) {
    metaEl.textContent = formatMeta(edit.w, edit.r, edit.s);
  }
  if (edit.feel !== undefined) {
    let feelEl = art.querySelector(".feel");
    if (!feelEl) {
      feelEl = document.createElement("div");
      feelEl.className = "feel";
      art.appendChild(feelEl);
    }
    feelEl.textContent = edit.feel;
  }
  if (edit.done) art.classList.add("is-done");
  else art.classList.remove("is-done");
}

function toggleEditor(art) {
  const existing = art.querySelector(".inline-editor");
  if (existing) {
    existing.classList.toggle("open");
    return;
  }
  const metaEl = art.querySelector(".meta");
  const feelEl = art.querySelector(".feel");
  const rawMeta = metaEl ? metaEl.textContent : "—·—·—";
  const { w, r, s } = parseMeta(rawMeta);
  const feel = feelEl ? feelEl.textContent : "";

  const ed = document.createElement("div");
  ed.className = "inline-editor open";
  ed.innerHTML = `
    <label>重量</label><input type="text" class="ed-w" value="${esc(w)}">
    <label>次数</label><input type="text" class="ed-r" value="${esc(r)}">
    <label>组数</label><input type="text" class="ed-s" value="${esc(s)}">
    <label>感受</label><input type="text" class="ed-f" value="${esc(feel)}">
    <div class="editor-btns">
      <button class="editor-save">保存</button>
      <button class="editor-cancel">取消</button>
    </div>`;

  ed.addEventListener("click", e => e.stopPropagation());
  art.appendChild(ed);

  ed.querySelector(".editor-save").addEventListener("click", () => saveEditor(art, ed));
  ed.querySelector(".editor-cancel").addEventListener("click", () => ed.classList.remove("open"));

  ed.querySelectorAll("input").forEach(inp => {
    inp.addEventListener("keydown", e => {
      if (e.key === "Enter") saveEditor(art, ed);
      if (e.key === "Escape") ed.classList.remove("open");
    });
  });
}

function saveEditor(art, ed) {
  const w = ed.querySelector(".ed-w").value.trim();
  const r = ed.querySelector(".ed-r").value.trim();
  const s = ed.querySelector(".ed-s").value.trim();
  const feel = ed.querySelector(".ed-f").value.trim();

  const metaEl = art.querySelector(".meta");
  if (metaEl) metaEl.textContent = formatMeta(w, r, s);

  let feelEl = art.querySelector(".feel");
  if (!feelEl && feel) {
    feelEl = document.createElement("div");
    feelEl.className = "feel";
    art.appendChild(feelEl);
  }
  if (feelEl) feelEl.textContent = feel;

  const edit = { w, r, s, feel };
  const done = art.classList.contains("is-done");
  if (done) edit.done = true;
  saveLogEdit(art.dataset.key, edit);

  ed.classList.remove("open");
  renderTodayBar();
}

// ── Today bar ─────────────────────────────────────────────────────
function renderTodayBar() {
  const bar = document.getElementById("today-bar");
  const todayTds = [...document.querySelectorAll("#weekPlan td.is-today")];

  if (todayTds.length === 0) {
    bar.innerHTML = `<div class="today-hd">今日训练</div>
      <div class="today-empty">今天不在记录范围内。</div>`;
    return;
  }

  let edits = {};
  try { const r = localStorage.getItem(LOG_KEY); if (r) edits = JSON.parse(r); } catch {}

  const td = todayTds[0];
  const arts = [...td.querySelectorAll("article.ex")];
  const dayHd = td.querySelector(".day-hd")?.textContent || "";

  let doneCount = 0;
  const items = arts.map((art, i) => {
    const key = art.dataset.key || `${td.dataset.date}#${i}`;
    const edit = edits[key] || {};
    const done = edit.done || art.classList.contains("is-done");
    if (done) doneCount++;
    const name = art.querySelector(".n")?.firstChild?.textContent?.trim() || `动作 ${i+1}`;
    const metaEl = art.querySelector(".meta");
    const meta = metaEl ? metaEl.textContent : "—";
    return { key, done, name, meta };
  });

  const itemsHtml = items.map(it => `
    <div class="today-item${it.done?" is-done":""}" data-key="${esc(it.key)}">
      <div class="today-item-name">${esc(it.name)}</div>
      <div class="today-item-meta">${esc(it.meta)}</div>
      <label class="today-item-check">
        <input type="checkbox" ${it.done?"checked":""} data-key="${esc(it.key)}"> 完成
      </label>
      <button class="today-locate-btn" data-key="${esc(it.key)}">在表中定位</button>
    </div>`).join("");

  bar.innerHTML = `
    <div class="today-hd">今日（${dayHd}）· 完成 ${doneCount}/${items.length}</div>
    <div class="today-grid">${itemsHtml}</div>`;

  bar.querySelectorAll("input[type=checkbox]").forEach(cb => {
    cb.addEventListener("change", () => {
      const key = cb.dataset.key;
      toggleDone(key, cb.checked);
      renderTodayBar();
    });
  });

  bar.querySelectorAll(".today-locate-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const art = document.querySelector(`article.ex[data-key="${key}"]`);
      if (!art) return;
      const row = art.closest("tr");
      if (row) { row.classList.remove("week-fold"); }
      art.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

function toggleDone(key, done) {
  let edits = {};
  try { const r = localStorage.getItem(LOG_KEY); if (r) edits = JSON.parse(r); } catch {}
  edits[key] = edits[key] || {};
  edits[key].done = done;
  try { localStorage.setItem(LOG_KEY, JSON.stringify(edits)); } catch {}

  const art = document.querySelector(`article.ex[data-key="${key}"]`);
  if (art) {
    if (done) art.classList.add("is-done");
    else art.classList.remove("is-done");
  }
}

// ─────────────────────────────────────────────────────────────────
// EXPORT / IMPORT / RESTORE DEFAULT
// ─────────────────────────────────────────────────────────────────
function exportBackup() {
  let logEdits = {};
  try {
    const raw = localStorage.getItem(LOG_KEY);
    if (raw) logEdits = JSON.parse(raw);
    else logEdits = DEFAULT_BACKUP.logEdits || {};
  } catch {}

  const backup = {
    format: "training-map-backup",
    version: 1,
    exportedAt: new Date().toISOString(),
    goal: DEFAULT_BACKUP.goal,
    scores: { ...scores },
    logEdits,
    plan: activePlan,
  };

  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `training-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function applyBackup(data) {
  // Apply logEdits to localStorage first so renderPlanTable picks them up immediately
  if (data.logEdits) {
    try { localStorage.setItem(LOG_KEY, JSON.stringify(data.logEdits)); } catch {}
  }

  if (data.plan) {
    savePlan(data.plan);
    renderPlanTable(); // calls setupTableInteractivity → loadLogEdits → renderTodayBar
  } else if (data.logEdits) {
    // Plan unchanged, but log edits changed: re-apply to existing table
    loadLogEdits();
    renderTodayBar();
  }

  if (data.scores) {
    GROUPS.forEach(g => {
      const v = data.scores[g.id];
      if (v !== undefined && v >= 1 && v <= 5) scores[g.id] = v;
    });
    saveScores();
    applyColors();
    if (selectedId) renderDetail(GROUPS.find(x => x.id === selectedId));
    else renderInspector();
  }
}

function importFromFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    let data;
    try { data = JSON.parse(e.target.result); }
    catch { alert("❌ 文件解析失败：不是有效的 JSON 文件。"); return; }

    if (data.format !== "training-map-backup") {
      alert("❌ 格式错误：不是训练图谱备份文件（format 字段不匹配）。");
      return;
    }
    if (data.version !== 1) {
      alert(`❌ 版本不支持：期望 version 1，实际 version ${data.version}。`);
      return;
    }
    if (!confirm("导入将覆盖当前训练计划和肌群评分，确定继续？")) return;

    applyBackup(data);
    alert("✅ 导入成功！");
  };
  reader.readAsText(file);
}

function restoreDefault() {
  if (!confirm("恢复默认将覆盖当前训练计划、肌群评分和训练日志，确定？")) return;
  try { localStorage.removeItem(PLAN_KEY); } catch {}
  applyBackup(DEFAULT_BACKUP);
}

function setupExportImportUI() {
  const btnExport  = document.getElementById("btnExport");
  const btnImport  = document.getElementById("btnImport");
  const btnRestore = document.getElementById("btnRestoreDefault");
  const fileInput  = document.getElementById("importFileInput");

  if (btnExport)  btnExport.addEventListener("click", exportBackup);
  if (btnImport)  btnImport.addEventListener("click", () => fileInput && fileInput.click());
  if (btnRestore) btnRestore.addEventListener("click", restoreDefault);
  if (fileInput) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        importFromFile(fileInput.files[0]);
        fileInput.value = "";
      }
    });
  }
}

// ─────────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────────
loadScores();
initThree();
initTable();
