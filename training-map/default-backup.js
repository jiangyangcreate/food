// Default training plan + muscle scores.
// Bundled from the canonical training-map-backup JSON.
// Loaded by app.js when localStorage keys are absent (first use)
// and used as the target for "restore default".
export const DEFAULT_BACKUP = {
  format: "training-map-backup",
  version: 1,
  exportedAt: "2026-10-19T08:00:00.000Z",
  goal: {
    heightCm: 186,
    weightKg: 76,
    bfPct: 14,
    lbmKg: 65.4,
    ffmi: 18.9,
    label: "2029-12-30 · 186cm · 76kg · 体脂 14% · FFMI 18.9 古典健美"
  },
  scores: {
    ant_delt: 1, mid_delt: 2, rear_delt: 2,
    pec_u: 2, pec_s: 2, pec_l: 2, pec_min: 2,
    serr: 2, supra: 2, infra: 2, teres_min: 2,
    teres_maj: 3, subscap: 1, bi: 2, brachialis: 3,
    tri_long: 1, tri_lat: 1, tri_med: 1,
    fore_flex: 2, fore_ext: 2,
    trap_u: 3, trap_m: 2, trap_l: 2,
    lats: 3, rhomb: 2, lev_scap: 2,
    erector: 2, ql: 2, abs: 3, obl: 2, obl_int: 2, tva: 2,
    hip: 2, quads: 4, sartorius: 1, add: 2,
    gmax: 2, gmed: 3, semi: 3, bf: 3,
    gastroc_m: 3, gastroc_l: 3, soleus: 1, ta: 2
  },
  logEdits: {
    "2026-09-23#0": { w: "35kg",  r: "12", s: "4", feel: "最后3个肌肉力竭，体力还有", done: true },
    "2026-09-23#1": { w: "25kg",  r: "10", s: "4", feel: "还好，不是很累",             done: true },
    "2026-09-23#2": { w: "4kg",   r: "12", s: "4", feel: "没有5kg，只有4/6",           done: true },
    "2026-09-23#3": { w: "15kg",  r: "10", s: "4", feel: "肌肉力竭，下次15kg冲12次",   done: true },
    "2026-09-23#4": { w: "自重",  r: "10", s: "3", feel: "肌肉体力都力竭",             done: true },
    "2026-09-24#0": { w: "52.5kg", r: "15", s: "4", feel: "这是器材的最大重量；正好肌肉力竭；再进步一点可能这个器械就不适用了", done: true },
    "2026-09-24#1": { w: "40kg",   r: "15", s: "4", feel: "第3组开始最后几个需要手部辅助", done: true },
    "2026-09-24#2": { w: "—",      r: "75秒", s: "4", feel: "75秒*1 + 40秒*3", done: true },
    "2026-09-24#3": { w: "42.5kg", r: "12", s: "3", feel: "", done: true },
    "2026-09-24#4": { w: "自重",   r: "1",   s: "3", feel: "验证背部；目前能做一个标准引体。双臂下拉可以拉动80kg（自重）1次，所以想要尝试", done: true },
    "2026-09-25#0": { w: "40kg",  r: "10", s: "4", feel: "顶峰停1-2秒", done: true },
    "2026-09-25#1": { w: "65kg",  r: "6",  s: "4", feel: "顶峰收缩停1-2秒", done: true },
    "2026-09-25#2": { w: "20kg",  r: "10", s: "4", feel: "张开角度控制在90-135度，后续维持20kg，尝试放下角度在135度到180度", done: true },
    "2026-09-25#3": { w: "3kg",   r: "12", s: "3", feel: "我的肩太弱，后续稳定在5kg争取做到12个*4；另加5kg×8×1组", done: true },
    "2026-09-25#4": { w: "—",     r: "30分钟", s: "1", feel: "cardio", done: true },
    "2026-09-28#0": { w: "130kg",  r: "10", s: "4", feel: "体力和肌肉都几乎极限",           done: true },
    "2026-09-28#1": { w: "42.5kg", r: "8",  s: "4", feel: "极限了，下次可以这个重量加次数",  done: true },
    "2026-09-28#2": { w: "45kg",   r: "12", s: "4", feel: "重量适中，下次加2.5kg",          done: true },
    "2026-09-28#3": { w: "50kg",   r: "12", s: "4", feel: "重量适中，下次加2.5kg",          done: true },
    "2026-09-29#rest": { w: "—", r: "—", s: "—", feel: "聚餐休息，今日全休", done: false },
    "2026-09-30#0": { w: "自重", r: "45秒", s: "3", feel: "极限了", done: true },
    "2026-09-30#1": { w: "10kg", r: "8", s: "4", feel: "小臂从来没练过，非常薄弱", done: true },
    "2026-09-30#2": { w: "10kg", r: "15", s: "4", feel: "", done: true },
    "2026-09-30#3": { w: "35kg", r: "10", s: "4", feel: "下次试 40kg×8×4", done: true },
    "2026-09-30#4": { w: "3kg", r: "15", s: "3", feel: "", done: true },
    "2026-09-30#5": { w: "10kg", r: "10", s: "3", feel: "", done: true },
    "2026-09-30#6": { w: "40kg", r: "10", s: "3", feel: "", done: true },
    "2026-10-01#0": { w: "自重", r: "60秒", s: "4", feel: "无法去健身房，居家只做了平板支撑", done: true },
    "2026-10-02#0": { w: "40kg", r: "8", s: "4", feel: "下次尝试一组做10~12个", done: true },
    "2026-10-02#1": { w: "65kg", r: "8", s: "4", feel: "下次还是这个重量和个数，最后几个做的不标准", done: true },
    "2026-10-02#2": { w: "20kg", r: "10", s: "4", feel: "肩膀刚开始练，初期进步很明显", done: true },
    "2026-10-02#3": { w: "自重", r: "60秒", s: "2", feel: "", done: true },
    "2026-10-05#rest": { w: "—", r: "—", s: "—", feel: "周一没练", done: false },
    "2026-10-06#0": { w: "自重",   r: "8",  s: "5", feel: "", done: true },
    "2026-10-06#1": { w: "120kg",  r: "8",  s: "4", feel: "腿部保持训练，加停顿和慢速，不继续冲重量", done: true },
    "2026-10-06#2": { w: "52.5kg", r: "10", s: "4", feel: "来了新机器，下周试试57kg×8×4", done: true },
    "2026-10-06#3": { w: "45kg",   r: "10", s: "4", feel: "新最大重量", done: true },
    "2026-10-06#4": { w: "55kg",   r: "10", s: "4", feel: "引体向上最后很难拉，回到双臂下拉，减少重量，顶峰收缩拉到底", done: true },
    "2026-10-06#5": { w: "10kg",   r: "8",  s: "2", feel: "主要练小臂，悬垂举腿、引体向上也能顺便练到小臂，后面不用安排", done: true },
    "2026-10-07#0": { w: "42.5kg", r: "9",  s: "4", feel: "下次卧推试试45kg×8×4", done: true },
    "2026-10-07#1": { w: "20kg",   r: "8",  s: "4", feel: "有点肩峰撞击的感觉，减少重量到20kg，后续不设置上斜卧推。胸没力了", done: true },
    "2026-10-07#2": { w: "25kg",   r: "8",  s: "3", feel: "", done: true },
    "2026-10-07#3": { w: "5kg",    r: "10", s: "3", feel: "", done: true },
    "2026-10-07#4": { w: "自重",   r: "8",  s: "3", feel: "", done: true },
    "2026-10-07#5": { w: "自重",   r: "15", s: "3", feel: "", done: true },
    "2026-10-23#0": { w: "120kg", r: "12", s: "4", feel: "改用倒蹬，机器自重53kg，合计约173kg；屈伸更大需扶膝。下周重量不变，争取不用手扶", done: true },
    "2026-10-23#2": { w: "47.5kg", r: "12", s: "4", feel: "下次试50kg", done: true },
    "2026-10-23#3": { w: "单只10kg", r: "每边12步", s: "3", feel: "共72步，每边12步", done: true },
    "2026-10-26#0": { w: "50kg", r: "12", s: "4", feel: "末组最后1-2个接近力竭，动作略走形；下周维持50kg", done: true },
    "2026-10-26#1": { w: "50kg", r: "12", s: "4", feel: "同前，末组最后1-2个力竭；下周维持50kg", done: true },
    "2026-10-26#2": { w: "50kg", r: "12", s: "4", feel: "前两组背已疲劳，明显没力；加长组间休息，末组只做10个", done: true },
    "2026-10-26#3": { w: "40/35/25/20kg", r: "12", s: "4", feel: "降重4组；沉肩、膝盖略高于坐台、身体不晃、坐直，想象双肘相碰", done: true },
    "2026-10-27#0": { w: "42/45/50kg", r: "12/12/9", s: "4", feel: "42kg×12余力多→45kg×12×2→50kg×9（留1-2个，怕力竭）", done: true },
    "2026-10-27#1": { w: "50kg", r: "6/8", s: "4", feel: "排在卧推后；前2组6个、后2组8个", done: true },
    "2026-10-27#2": { w: "10kg", r: "12", s: "4", feel: "下周保持", done: true },
    "2026-10-27#3": { w: "单只15kg", r: "8", s: "4", feel: "下周保持", done: true },
    "2026-10-28#0": { w: "7.5kg", r: "12", s: "4", feel: "降重护肩", done: true },
    "2026-10-28#1": { w: "7.5kg", r: "12", s: "4", feel: "稳定核心，小臂低于大臂；下周保持降重护肩、动作做标准", done: true },
    "2026-10-28#2": { w: "25kg", r: "12", s: "4", feel: "肘内收", done: true },
    "2026-10-28#3": { w: "20kg", r: "12", s: "4", feel: "开肘", done: true },
    "2026-10-28#4": { w: "15kg", r: "12", s: "4", feel: "小重量更有感觉", done: true },
    "2026-10-29#0": { w: "20kg", r: "12", s: "4", feel: "这个强度合适", done: true },
    "2026-10-29#1": { w: "25kg", r: "12", s: "4", feel: "这个强度合适", done: true },
    "2026-10-29#2": { w: "单只10kg", r: "12", s: "4", feel: "提升了重量，增加了组间休息", done: true },
    "2026-10-29#3": { w: "单只7.5kg", r: "12", s: "4", feel: "", done: true },
    "2026-10-29#4": { w: "15kg", r: "12", s: "4", feel: "替代哑铃坐姿臂屈伸", done: true },
    "2026-10-30#0": { w: "120kg", r: "12", s: "4", feel: "维持120；自重53kg合计约173kg", done: true },
    "2026-10-30#1": { w: "单只20/35kg", r: "12", s: "4", feel: "史密斯+哑铃深蹲合并；20kg×12×2 → 35kg×12×2；下周挑战单只40kg×12×4", done: true },
    "2026-10-30#2": { w: "50kg", r: "12", s: "4", feel: "完成50；下周试55kg", done: true },
    "2026-10-30#3": { w: "单只10kg", r: "每边12步", s: "4", feel: "维持10kg；4组", done: true },
    "2026-10-31#0": { w: "自重", r: "100秒", s: "3", feel: "最长100秒", done: true },
    "2026-10-31#1": { w: "自重", r: "每边65秒", s: "2", feel: "最长65秒", done: true },
    "2026-10-31#5": { w: "自重", r: "30", s: "1", feel: "约40秒；接近力竭但未到，自认做不到40个", done: true }
  },
  plan: {
    weekMondays: ["2026-08-31","2026-09-07","2026-09-14","2026-09-21","2026-09-28","2026-10-05","2026-10-12","2026-10-19","2026-10-26","2026-11-02"],
    weekNos: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    weeks: [
      // ── W36 ─────────────────────────────────────────────────────
      {
        week: 36, note: "",
        days: [
          { theme: "—", kind: "rest", exercises: [] },
          { theme: "—", kind: "rest", exercises: [] },
          { theme: "—", kind: "rest", exercises: [] },
          {
            theme: "推", kind: "normal",
            exercises: [
              { name: "卧推",       w: "30kg",  r: "8",  s: "4", feel: "", done: false },
              { name: "机械推胸",   w: "20kg",  r: "15", s: "4", feel: "", done: false },
              { name: "俯卧撑",     w: "自重",  r: "8",  s: "4", feel: "", done: false },
              { name: "绳索臂屈伸", w: "10kg",  r: "15", s: "4", feel: "", done: false }
            ]
          },
          {
            theme: "腿", kind: "normal",
            exercises: [
              { name: "山羊挺身", w: "自重",    r: "15", s: "4", feel: "", done: false },
              { name: "坐式蹬腿", w: "110kg",   r: "12", s: "4", feel: "", done: false },
              { name: "腿屈伸",   w: "40kg",    r: "12", s: "4", feel: "", done: false },
              { name: "腿弯举",   w: "40–45kg", r: "12", s: "4", feel: "", done: false }
            ]
          },
          { theme: "—", kind: "rest", exercises: [] },
          { theme: "—", kind: "rest", exercises: [] }
        ]
      },
      // ── W37 ─────────────────────────────────────────────────────
      {
        week: 37, note: "",
        days: [
          {
            theme: "腿", kind: "normal",
            exercises: [
              { name: "坐式蹬腿", w: "110kg", r: "12", s: "4", feel: "", done: false },
              { name: "腿屈伸",   w: "40kg",  r: "12", s: "4", feel: "", done: false },
              { name: "腿弯举",   w: "45kg",  r: "12", s: "4", feel: "", done: false },
              { name: "提踵",     w: "自重",  r: "20", s: "4", feel: "", done: false }
            ]
          },
          {
            theme: "拉", kind: "normal",
            exercises: [
              { name: "高位下拉",  w: "25kg",     r: "12", s: "4", feel: "", done: false },
              { name: "二头弯举",  w: "15kg",     r: "12", s: "4", feel: "", done: false },
              { name: "反向飞鸟",  w: "2.5–10kg", r: "15", s: "4", feel: "", done: false },
              { name: "双臂下拉",  w: "40kg",     r: "10", s: "4", feel: "", done: false }
            ]
          },
          {
            theme: "有氧", kind: "normal",
            exercises: [
              { name: "椭圆机", w: "—", r: "20分钟", s: "1", feel: "", done: false }
            ]
          },
          {
            theme: "推", kind: "normal",
            exercises: [
              { name: "卧推",     w: "30kg", r: "10",   s: "4",   feel: "停顿2秒", done: false },
              { name: "机械推胸", w: "20–30kg", r: "10–15", s: "4", feel: "",     done: false },
              { name: "俯卧撑",   w: "自重", r: "10",   s: "3+1", feel: "含斜板", done: false },
              { name: "臂屈伸",   w: "10kg", r: "12",   s: "4",   feel: "",       done: false }
            ]
          },
          {
            theme: "腿", kind: "normal",
            exercises: [
              { name: "坐式蹬腿",   w: "120kg", r: "12", s: "4", feel: "", done: false },
              { name: "内收",       w: "20kg",  r: "12", s: "4", feel: "", done: false },
              { name: "反向山羊挺身", w: "自重", r: "12", s: "4", feel: "", done: false },
              { name: "提踵",       w: "30kg",  r: "15", s: "4", feel: "", done: false }
            ]
          },
          { theme: "—", kind: "rest", exercises: [] },
          { theme: "—", kind: "rest", exercises: [] }
        ]
      },
      // ── W38 ─────────────────────────────────────────────────────
      {
        week: 38, note: "",
        days: [
          {
            theme: "腿", kind: "normal",
            exercises: [
              { name: "坐式蹬腿",  w: "120kg", r: "12", s: "4", feel: "", done: false },
              { name: "内收",      w: "20kg",  r: "15", s: "4", feel: "", done: false },
              { name: "山羊挺身",  w: "自重",  r: "15", s: "4", feel: "", done: false },
              { name: "坐姿收腹",  w: "25kg",  r: "10", s: "2", feel: "", done: false },
              { name: "坐姿收腹",  w: "40kg",  r: "8",  s: "2", feel: "", done: false }
            ]
          },
          {
            theme: "拉 / 有氧", kind: "normal",
            exercises: [
              { name: "高位下拉", w: "25kg",  r: "15",       s: "4", feel: "", done: false },
              { name: "双臂下拉", w: "60kg",  r: "4",        s: "4", feel: "", done: false },
              { name: "悬垂",     w: "自重",  r: "25秒",     s: "2", feel: "", done: false },
              { name: "跑步",     w: "—",     r: "4km / 30分钟", s: "1", feel: "", done: false }
            ]
          },
          {
            theme: "有氧", kind: "normal",
            exercises: [
              { name: "慢跑", w: "—",    r: "20分钟", s: "1", feel: "", done: false },
              { name: "悬垂", w: "自重", r: "30秒",   s: "4", feel: "", done: false }
            ]
          },
          { theme: "体检休息", kind: "deload", exercises: [] },
          { theme: "体检休息", kind: "rest",   exercises: [] },
          { theme: "—", kind: "rest", exercises: [] },
          { theme: "—", kind: "rest", exercises: [] }
        ]
      },
      // ── W39 ─────────────────────────────────────────────────────
      {
        week: 39, note: "",
        days: [
          {
            theme: "腿", kind: "normal",
            exercises: [
              { name: "山羊挺身",   w: "自重",  r: "12", s: "2", feel: "",       done: false },
              { name: "山羊挺身",   w: "10kg",  r: "10", s: "2", feel: "腰酸",   done: false },
              { name: "坐式蹬腿",   w: "120kg", r: "12", s: "4", feel: "力竭",   done: false },
              { name: "大腿内收",   w: "30kg",  r: "12", s: "3", feel: "拉扯感", done: false },
              { name: "反向山羊挺身", w: "自重", r: "15", s: "4", feel: "",      done: false }
            ]
          },
          {
            theme: "拉", kind: "normal",
            exercises: [
              { name: "双臂下拉", w: "60kg",   r: "8",    s: "4", feel: "", done: false },
              { name: "高位下拉", w: "30kg",   r: "15",   s: "4", feel: "", done: false },
              { name: "肩推",     w: "20kg",   r: "8",    s: "4", feel: "", done: false },
              { name: "悬垂",     w: "自重",   r: "35秒+", s: "3", feel: "", done: false },
              { name: "臂屈伸",   w: "12.5kg", r: "15",   s: "2", feel: "", done: false }
            ]
          },
          {
            theme: "推", kind: "normal",
            exercises: [
              { name: "平板卧推",     w: "35kg", r: "12", s: "4", feel: "最后3个肌肉力竭，体力还有", done: true },
              { name: "上斜机械推胸", w: "25kg", r: "10", s: "4", feel: "还好，不是很累",            done: true },
              { name: "哑铃侧平举",   w: "4kg",  r: "12", s: "4", feel: "没有5kg，只有4/6",          done: true },
              { name: "绳索臂屈伸",   w: "15kg", r: "10", s: "4", feel: "肌肉力竭，下次15kg冲12次",  done: true },
              { name: "窄距俯卧撑",   w: "自重", r: "10", s: "3", feel: "肌肉体力都力竭",            done: true }
            ]
          },
          {
            theme: "腿/核心", kind: "normal",
            exercises: [
              { name: "大腿外展", w: "52.5kg", r: "15", s: "4", feel: "这是器材的最大重量；正好肌肉力竭；再进步一点可能这个器械就不适用了", done: true },
              { name: "大腿内收", w: "40kg",   r: "15", s: "4", feel: "第3组开始最后几个需要手部辅助", done: true },
              { name: "平板支撑", w: "—",      r: "75秒", s: "4", feel: "75秒*1 + 40秒*3", done: true },
              { name: "坐姿收腹", w: "42.5kg", r: "12", s: "3", feel: "", done: true },
              { name: "引体向上", w: "自重",   r: "1",   s: "3", feel: "验证背部；目前能做一个标准引体。双臂下拉可以拉动80kg（自重）1次，所以想要尝试", done: true }
            ]
          },
          {
            theme: "拉", kind: "normal",
            exercises: [
              { name: "坐姿划船",       w: "40kg", r: "10",    s: "4", feel: "顶峰停1-2秒",                                                            done: true },
              { name: "双臂下拉",       w: "65kg", r: "6",     s: "4", feel: "顶峰收缩停1-2秒",                                                        done: true },
              { name: "二头弯举（EZ杆）", w: "20kg", r: "10",  s: "4", feel: "张开角度控制在90-135度，后续维持20kg，尝试放下角度在135度到180度",       done: true },
              { name: "反向飞鸟",       w: "3kg",  r: "12",    s: "3", feel: "我的肩太弱，后续稳定在5kg争取做到12个*4；另加5kg×8×1组",               done: true },
              { name: "慢跑",           w: "—",    r: "30分钟", s: "1", feel: "cardio",                                                                done: true }
            ]
          },
          { theme: "—", kind: "rest", exercises: [] },
          { theme: "—", kind: "rest", exercises: [] }
        ]
      },
      // ── W40 ─────────────────────────────────────────────────────
      {
        week: 40, note: "10/01居家仅平板支撑; 10/02推拉核心; 10/04周日补强",
        days: [
          {
            theme: "腿", kind: "normal",
            exercises: [
              { name: "坐式蹬腿",   w: "130kg",  r: "10", s: "4", feel: "体力和肌肉都几乎极限",           done: true },
              { name: "大腿内收",   w: "42.5kg", r: "8",  s: "4", feel: "极限了，下次可以这个重量加次数",  done: true },
              { name: "坐姿腿伸展", w: "45kg",   r: "12", s: "4", feel: "重量适中，下次加2.5kg",          done: true },
              { name: "坐姿腿弯举", w: "50kg",   r: "12", s: "4", feel: "重量适中，下次加2.5kg",          done: true }
            ]
          },
          { theme: "聚餐休息", kind: "rest", exercises: [] },
          {
            theme: "拉", kind: "normal",
            note: "小肌肉提前做（平时没怎么练、放后面怕做不动）；一小时太短，四组做不完，部分动作只能三组。",
            exercises: [
              { name: "悬垂",        w: "自重", r: "45秒", s: "3", feel: "极限了",                done: true },
              { name: "锤式弯举",    w: "10kg", r: "8",    s: "4", feel: "小臂从来没练过，非常薄弱", done: true },
              { name: "哑铃耸肩",    w: "10kg", r: "15",   s: "4", feel: "",                     done: true },
              { name: "高位下拉",    w: "35kg", r: "10",   s: "4", feel: "下次试 40kg×8×4",       done: true },
              { name: "Y字哑铃上举", w: "3kg",  r: "15",   s: "3", feel: "",                     done: true },
              { name: "面拉",        w: "10kg", r: "10",   s: "3", feel: "",                     done: true },
              { name: "坐姿划船",    w: "40kg", r: "10",   s: "3", feel: "",                     done: true }
            ]
          },
          {
            theme: "居家 · 核心", kind: "normal",
            exercises: [
              { name: "平板支撑", w: "自重", r: "60秒", s: "4", feel: "", done: true }
            ]
          },
          {
            theme: "推 · 拉 · 核心", kind: "normal",
            exercises: [
              { name: "平板卧推",   w: "40kg", r: "8",   s: "4", feel: "", done: true },
              { name: "双臂下拉",   w: "65kg", r: "8",   s: "4", feel: "", done: true },
              { name: "面拉",       w: "20kg", r: "10",  s: "4", feel: "", done: true },
              { name: "侧平板支撑", w: "自重", r: "60秒", s: "2", feel: "", done: true }
            ]
          },
          {
            theme: "推（补）", kind: "normal",
            exercises: [
              { name: "哑铃侧平举",   w: "6kg",   r: "12",  s: "3", feel: "", done: false },
              { name: "平板卧推",     w: "40kg",  r: "8",   s: "4", feel: "首组尝试10~12次", done: false },
              { name: "上斜机械推胸", w: "25kg",  r: "10",  s: "3", feel: "", done: false },
              { name: "肩推",         w: "22.5kg", r: "8",  s: "3", feel: "", done: false },
              { name: "绳索臂屈伸",   w: "15kg",  r: "12",  s: "3", feel: "", done: false },
              { name: "哑铃仰卧上拉", w: "10kg",  r: "12",  s: "3", feel: "", done: false },
              { name: "俄式转体",     w: "自重",  r: "15",  s: "3", feel: "", done: false }
            ]
          },
          {
            theme: "周日补强", kind: "normal",
            exercises: [
              { name: "罗马尼亚硬拉", w: "40kg", r: "10",  s: "3", feel: "", done: false },
              { name: "站姿提踵",     w: "30kg", r: "15",  s: "3", feel: "", done: false },
              { name: "脚尖勾起练习", w: "自重", r: "20",  s: "3", feel: "", done: false },
              { name: "悬垂举腿",     w: "自重", r: "8",   s: "3", feel: "", done: false },
              { name: "绳索内旋",     w: "5kg",  r: "12",  s: "3", feel: "", done: false },
              { name: "反握弯举",     w: "10kg", r: "12",  s: "3", feel: "", done: false }
            ]
          }
        ]
      },
      // ── W41 ─────────────────────────────────────────────────────
      {
        week: 41, note: "腿拉混合（周二实练）· 锤式弯举已撤 · 周六补课腿/小腿 · 10/07推日实练已记录；上斜动作全撤（肩峰撞击），上胸改用低位绳索夹胸（肩痛停止）；下次卧推45kg×8×4；肩推≥25kg×8×3；侧平举改5kg×12×3（主动降重非退步）；W42外展57kg×8×4",
        days: [
          { theme: "周一未练", kind: "rest", exercises: [] },
          {
            theme: "腿 · 拉", kind: "normal",
            exercises: [
              { name: "悬垂举腿（曲腿）", w: "自重",   r: "8",  s: "5", feel: "", done: true },
              { name: "坐式蹬腿",         w: "120kg",  r: "8",  s: "4", feel: "腿部保持训练，加停顿和慢速，不继续冲重量", done: true },
              { name: "大腿外展",         w: "52.5kg", r: "10", s: "4", feel: "来了新机器，下周试试57kg×8×4", done: true },
              { name: "大腿内收",         w: "45kg",   r: "10", s: "4", feel: "新最大重量", done: true },
              { name: "双臂下拉",         w: "55kg",   r: "10", s: "4", feel: "引体向上最后很难拉，回到双臂下拉，减少重量，顶峰收缩拉到底", done: true },
              { name: "锤式弯举",         w: "10kg",   r: "8",  s: "2", feel: "主要练小臂，悬垂举腿、引体向上也能顺便练到小臂，后面不用安排", done: true }
            ]
          },
          {
            theme: "推", kind: "normal",
            note: "实际训练 2026-10-07；上斜因肩峰撞击感已撤，后续以低位绳索夹胸代替上胸训练（肩部不适立即停止）",
            exercises: [
              { name: "平板卧推",     w: "42.5kg", r: "9",  s: "4", feel: "下次卧推试试45kg×8×4", done: true },
              { name: "上斜机械推胸", w: "20kg",   r: "8",  s: "4", feel: "有点肩峰撞击的感觉，减少重量到20kg，后续不设置上斜卧推。胸没力了", done: true },
              { name: "肩推",         w: "25kg",   r: "8",  s: "3", feel: "", done: true },
              { name: "哑铃侧平举",   w: "5kg",    r: "10", s: "3", feel: "", done: true },
              { name: "悬垂举腿",     w: "自重",   r: "8",  s: "3", feel: "", done: true },
              { name: "俄式转体",     w: "自重",   r: "15", s: "3", feel: "", done: true }
            ]
          },
          {
            theme: "腿（维持）/ 肩背", kind: "normal",
            exercises: [
              { name: "反握弯举",     w: "10kg",   r: "12",  s: "3", feel: "", done: false },
              { name: "面拉",         w: "20kg",   r: "12",  s: "3", feel: "", done: false },
              { name: "绳索侧平举",   w: "5kg",    r: "15",  s: "3", feel: "", done: false },
              { name: "罗马尼亚硬拉", w: "50kg",   r: "10",  s: "3", feel: "", done: false },
              { name: "髋外展",       w: "52.5kg", r: "15",  s: "3", feel: "", done: false },
              { name: "侧平板支撑",   w: "自重",   r: "60秒", s: "2", feel: "", done: false },
              { name: "侧弯哑铃",     w: "8kg",    r: "12",  s: "3", feel: "", done: false },
              { name: "哑铃耸肩",     w: "10kg",   r: "15",  s: "3", feel: "", done: false },
              { name: "哑铃仰卧上拉", w: "10kg",   r: "12",  s: "3", feel: "上胸/胸小肌/前锯肌补充；覆盖W41遗漏肌群", done: false }
            ]
          },
          {
            theme: "肩臂", kind: "normal",
            exercises: [
              { name: "绳索内旋",       w: "5kg",  r: "12",  s: "3", feel: "", done: false },
              { name: "面拉",           w: "20kg", r: "12",  s: "3", feel: "", done: false },
              { name: "Y字哑铃上举",    w: "3kg",  r: "15",  s: "3", feel: "", done: false },
              { name: "双臂下拉",       w: "55kg", r: "10",  s: "4", feel: "有意降重，专注顶峰收缩拉到底（非退步调整）", done: false },
              { name: "二头弯举（EZ杆）", w: "20kg", r: "10", s: "3", feel: "维持20kg，专注全程活动度", done: false },
              { name: "过头臂屈伸",     w: "15kg", r: "10",  s: "3", feel: "", done: false },
              { name: "窄距俯卧撑",     w: "自重", r: "12",  s: "3", feel: "", done: false },
              { name: "反握弯举",       w: "10kg", r: "12",  s: "3", feel: "", done: false }
            ]
          },
          {
            theme: "补课（腿 · 小腿）", kind: "normal",
            note: "补W41周一缺课：腘绳肌、腓肠肌、比目鱼肌、胫骨前肌",
            exercises: [
              { name: "坐姿腿伸展",   w: "47.5kg", r: "12", s: "3", feel: "", done: false },
              { name: "坐姿腿弯举",   w: "52.5kg", r: "12", s: "3", feel: "", done: false },
              { name: "站姿提踵",     w: "45kg",   r: "12", s: "3", feel: "", done: false },
              { name: "脚尖勾起练习", w: "自重",   r: "20", s: "3", feel: "", done: false },
              { name: "悬垂",         w: "自重",   r: "50秒", s: "3", feel: "", done: false }
            ]
          },
          { theme: "—", kind: "rest", exercises: [] }
        ]
      },
      // ── W42 ─────────────────────────────────────────────────────
      {
        week: 42,
        note: "",
        days: [
          {
            theme: "背",
            kind: "normal",
            exercises: [
              { name: "对握宽手下拉", w: "40kg", r: "12", s: "4", feel: "身体中立位", done: false },
              { name: "坐姿窄距下拉", w: "40kg", r: "12", s: "4", feel: "含胸位", done: false },
              { name: "高位下拉", w: "40kg", r: "12", s: "4", feel: "手肘向下回旋", done: false },
              { name: "固定器械划船", w: "40kg", r: "12", s: "4", feel: "全周伸；练完爬楼机20分钟；组间休50秒。", done: false }
            ]
          },
          {
            theme: "胸",
            kind: "normal",
            exercises: [
              { name: "史密斯推胸", w: "40kg", r: "12", s: "4", feel: "稳定肩胛，含杆重", done: false },
              { name: "固定坐姿推胸", w: "37.5kg", r: "12", s: "4", feel: "臂大肌贴紧靠背", done: false },
              { name: "哑铃上斜推胸", w: "单只12.5kg", r: "12", s: "4", feel: "臂大肌贴紧靠背，肩不适即停", done: false },
              { name: "站姿龙门架夹胸", w: "8kg", r: "12", s: "4", feel: "含胸位；练完爬楼机20分钟；组间休50秒。", done: false }
            ]
          },
          {
            theme: "肩",
            kind: "normal",
            exercises: [
              { name: "哑铃双臂上举", w: "10kg", r: "12", s: "4", feel: "", ss: 1, done: false },
              { name: "哑铃开合飞鸟", w: "10kg", r: "12", s: "4", feel: "稳定核心，小臂低于大臂", ss: 1, done: false },
              { name: "固定坐姿器械推肩", w: "20kg", r: "12", s: "4", feel: "肘内收", done: false },
              { name: "蝴蝶机反向飞鸟", w: "20kg", r: "12", s: "4", feel: "开肘", ss: 2, done: false },
              { name: "绳索面拉", w: "22.5kg", r: "12", s: "4", feel: "开肘；练完爬楼机20分钟；组间休50秒。", ss: 2, done: false }
            ]
          },
          {
            theme: "手臂",
            kind: "normal",
            exercises: [
              { name: "直杆绳索弯举", w: "15kg", r: "12", s: "4", feel: "夹肘", ss: 1, done: false },
              { name: "杠铃窄距弯举", w: "20kg", r: "12", s: "4", feel: "夹肘", ss: 1, done: false },
              { name: "哑铃坐姿臂屈伸", w: "单只10kg", r: "12", s: "4", feel: "核心稳定", ss: 2, done: false },
              { name: "俯身哑铃臂屈伸", w: "单只5kg", r: "12", s: "4", feel: "", ss: 2, done: false },
              { name: "杠铃宽距弯举", w: "17.5kg", r: "12", s: "4", feel: "肩后伸", ss: 3, done: false },
              { name: "哑铃坐姿弯举", w: "单只8kg", r: "12", s: "4", feel: "练完爬楼机20分钟；组间休50秒。", ss: 3, done: false }
            ]
          },
          {
            theme: "腿",
            kind: "normal",
            exercises: [
              { name: "倒蹬机", w: "120kg", r: "12", s: "4", feel: "腰背紧贴靠垫，停顿慢放，维持不加", done: false },
              { name: "史密斯深蹲", w: "40kg", r: "12", s: "4", feel: "躯干骨盆稳定，含杆重", done: false },
              { name: "坐姿腿弯举", w: "47.5kg", r: "12", s: "4", feel: "膝盖外旋", done: false },
              { name: "哑铃弓步走", w: "单只10kg", r: "14", s: "3", feel: "", ss: 1, done: false },
              { name: "哑铃深蹲", w: "单只10kg", r: "14", s: "3", feel: "练完爬楼机20分钟；组间休50秒。", ss: 1, done: false }
            ]
          },
          { theme: "—", kind: "rest", exercises: [] },
          { theme: "—", kind: "rest", exercises: [] }
        ]
      },
      // ── W43 ─────────────────────────────────────────────────────
      {
        week: 43,
        note: "10/23腿日：倒蹬120kg屈伸更大需扶膝；弓步走改单只10kg、72步（每边12步×3组）；腿弯举下次50kg",
        days: [
          {
            theme: "背",
            kind: "normal",
            exercises: [
              { name: "对握宽手下拉", w: "40kg", r: "12", s: "4", feel: "身体中立位", done: false },
              { name: "坐姿窄距下拉", w: "40kg", r: "12", s: "4", feel: "含胸位", done: false },
              { name: "高位下拉", w: "40kg", r: "12", s: "4", feel: "手肘向下回旋", done: false },
              { name: "固定器械划船", w: "40kg", r: "12", s: "4", feel: "全周伸；练完爬楼机20分钟；组间休50秒。", done: false }
            ]
          },
          {
            theme: "胸",
            kind: "normal",
            exercises: [
              { name: "史密斯推胸", w: "40kg", r: "12", s: "4", feel: "稳定肩胛，含杆重", done: false },
              { name: "固定坐姿推胸", w: "37.5kg", r: "12", s: "4", feel: "臂大肌贴紧靠背", done: false },
              { name: "哑铃上斜推胸", w: "单只12.5kg", r: "12", s: "4", feel: "臂大肌贴紧靠背，肩不适即停", done: false },
              { name: "站姿龙门架夹胸", w: "8kg", r: "12", s: "4", feel: "含胸位；练完爬楼机20分钟；组间休50秒。", done: false }
            ]
          },
          {
            theme: "肩",
            kind: "normal",
            exercises: [
              { name: "哑铃双臂上举", w: "10kg", r: "12", s: "4", feel: "", ss: 1, done: false },
              { name: "哑铃开合飞鸟", w: "10kg", r: "12", s: "4", feel: "稳定核心，小臂低于大臂", ss: 1, done: false },
              { name: "固定坐姿器械推肩", w: "20kg", r: "12", s: "4", feel: "肘内收", done: false },
              { name: "蝴蝶机反向飞鸟", w: "20kg", r: "12", s: "4", feel: "开肘", ss: 2, done: false },
              { name: "绳索面拉", w: "22.5kg", r: "12", s: "4", feel: "开肘；练完爬楼机20分钟；组间休50秒。", ss: 2, done: false }
            ]
          },
          {
            theme: "手臂",
            kind: "normal",
            exercises: [
              { name: "直杆绳索弯举", w: "15kg", r: "12", s: "4", feel: "夹肘", ss: 1, done: false },
              { name: "杠铃窄距弯举", w: "20kg", r: "12", s: "4", feel: "夹肘", ss: 1, done: false },
              { name: "哑铃坐姿臂屈伸", w: "单只10kg", r: "12", s: "4", feel: "核心稳定", ss: 2, done: false },
              { name: "俯身哑铃臂屈伸", w: "单只5kg", r: "12", s: "4", feel: "", ss: 2, done: false },
              { name: "杠铃宽距弯举", w: "17.5kg", r: "12", s: "4", feel: "肩后伸", ss: 3, done: false },
              { name: "哑铃坐姿弯举", w: "单只8kg", r: "12", s: "4", feel: "练完爬楼机20分钟；组间休50秒。", ss: 3, done: false }
            ]
          },
          {
            theme: "腿",
            kind: "normal",
            exercises: [
              { name: "倒蹬机", w: "120kg", r: "12", s: "4", feel: "机器自重53kg，合计约173kg；屈伸更大需扶膝，争取不用手扶", done: true },
              { name: "史密斯深蹲", w: "40kg", r: "12", s: "4", feel: "躯干骨盆稳定，含杆重", done: false },
              { name: "坐姿腿弯举", w: "47.5kg", r: "12", s: "4", feel: "下次试50kg", done: true },
              { name: "哑铃弓步走", w: "单只10kg", r: "每边12步", s: "3", feel: "共72步，每边12步", ss: 1, done: true },
              { name: "哑铃深蹲", w: "单只10kg", r: "14", s: "3", feel: "练完爬楼机20分钟；组间休50秒。", ss: 1, done: false }
            ]
          },
          { theme: "—", kind: "rest", exercises: [] },
          { theme: "—", kind: "rest", exercises: [] }
        ]
      },
      // ── W44 ─────────────────────────────────────────────────────
      {
        week: 44,
        note: "10/28肩日降重护肩已记。10/29手臂已记。10/30腿日：倒蹬120×12×4维持；史密斯+哑铃深蹲合并为哑铃深蹲单只20→35kg×12×4；腿弯举50×12×4；弓步走单只10kg×每边12步×4。周六：平板最长100秒，侧平板最长65秒；加练俯卧撑30个约40秒。Y字上举、仰卧上拉、脚尖勾起未做",
        days: [
          {
            theme: "背",
            kind: "normal",
            exercises: [
              { name: "对握宽手下拉", w: "50kg", r: "12", s: "4", feel: "末组最后1-2个接近力竭，动作略走形；下周维持50kg", done: true },
              { name: "坐姿窄距下拉", w: "50kg", r: "12", s: "4", feel: "同前，末组最后1-2个力竭；下周维持50kg", done: true },
              { name: "高位下拉", w: "50kg", r: "12", s: "4", feel: "前两组背已疲劳，明显没力；加长组间休息，末组只做10个", done: true },
              { name: "坐姿划船", w: "40/35/25/20kg", r: "12", s: "4", feel: "降重4组；沉肩、膝盖略高于坐台、身体不晃、坐直，想象双肘相碰", done: true }
            ]
          },
          {
            theme: "胸",
            kind: "normal",
            exercises: [
              { name: "杠铃卧推", w: "42/45/50kg", r: "12/12/9", s: "4", feel: "42kg×12余力多→45kg×12×2→50kg×9（留1-2个，怕力竭）", done: true },
              { name: "固定坐姿推胸", w: "50kg", r: "6/8", s: "4", feel: "排在卧推后；前2组6个、后2组8个", done: true },
              { name: "站姿龙门架夹胸", w: "10kg", r: "12", s: "4", feel: "下周保持", done: true },
              { name: "哑铃上斜推胸", w: "单只15kg", r: "8", s: "4", feel: "下周保持", done: true }
            ]
          },
          {
            theme: "肩",
            kind: "normal",
            exercises: [
              { name: "哑铃双臂上举", w: "7.5kg", r: "12", s: "4", feel: "降重护肩", ss: 1, done: true },
              { name: "哑铃开合飞鸟", w: "7.5kg", r: "12", s: "4", feel: "稳定核心，小臂低于大臂；下周保持降重护肩、动作做标准", ss: 1, done: true },
              { name: "固定坐姿器械推肩", w: "25kg", r: "12", s: "4", feel: "肘内收", ss: 2, done: true },
              { name: "蝴蝶机反向飞鸟", w: "20kg", r: "12", s: "4", feel: "开肘", ss: 2, done: true },
              { name: "绳索面拉", w: "15kg", r: "12", s: "4", feel: "小重量更有感觉", ss: 2, done: true }
            ]
          },
          {
            theme: "手臂",
            kind: "normal",
            exercises: [
              { name: "直杆绳索弯举", w: "20kg", r: "12", s: "4", feel: "这个强度合适", ss: 1, done: true },
              { name: "杠铃窄距弯举", w: "25kg", r: "12", s: "4", feel: "这个强度合适", ss: 1, done: true },
              { name: "哑铃坐姿弯举", w: "单只10kg", r: "12", s: "4", feel: "提升了重量，增加了组间休息", done: true },
              { name: "俯身哑铃臂屈伸", w: "单只7.5kg", r: "12", s: "4", feel: "", ss: 2, done: true },
              { name: "绳索臂屈伸", w: "15kg", r: "12", s: "4", feel: "替代哑铃坐姿臂屈伸", ss: 2, done: true }
            ]
          },
          {
            theme: "腿",
            kind: "normal",
            exercises: [
              { name: "倒蹬机", w: "120kg", r: "12", s: "4", feel: "维持120；自重53kg合计约173kg", done: true },
              { name: "哑铃深蹲", w: "单只20/35kg", r: "12", s: "4", feel: "史密斯+哑铃深蹲合并；20kg×12×2 → 35kg×12×2；下周挑战单只40kg×12×4", done: true },
              { name: "坐姿腿弯举", w: "50kg", r: "12", s: "4", feel: "完成50；下周试55kg", done: true },
              { name: "哑铃弓步走", w: "单只10kg", r: "每边12步", s: "4", feel: "维持10kg；4组", done: true }
            ]
          },
          {
            theme: "小肌群",
            kind: "normal",
            exercises: [
              { name: "平板支撑", w: "自重", r: "100秒", s: "3", feel: "最长100秒", done: true },
              { name: "侧平板支撑", w: "自重", r: "每边65秒", s: "2", feel: "最长65秒", done: true },
              { name: "Y字哑铃上举", w: "3kg", r: "12", s: "3", feel: "测试斜方下束；拇指朝上，肩不适即停", done: false },
              { name: "哑铃仰卧上拉", w: "8kg", r: "12", s: "3", feel: "测试前锯、胸小；肘微屈，肩不适即停", done: false },
              { name: "脚尖勾起练习", w: "自重", r: "20", s: "3", feel: "测试胫骨前肌；脚跟不离地", done: false },
              { name: "俯卧撑", w: "自重", r: "30", s: "1", feel: "约40秒；接近力竭但未到，自认做不到40个", done: true }
            ]
          },
          { theme: "—", kind: "rest", exercises: [] }
        ]
      },
      // ── W45 ─────────────────────────────────────────────────────
      {
        week: 45,
        note: "腿日：倒蹬维持120；哑铃深蹲挑战单只40kg×12×4（史密斯已并入）；腿弯举试55；弓步走维持单只10kg×4组。卧推50kg×12×4，坐姿推胸50kg冲12个；肩日维持10/28重量×12×4；手臂维持10/29重量×12×4；周六平板试110秒、侧平板每边70秒。对标人改为76kg/体脂14%",
        days: [
          {
            theme: "背",
            kind: "normal",
            exercises: [
              { name: "对握宽手下拉", w: "50kg", r: "12", s: "4", feel: "身体中立位", done: false },
              { name: "坐姿窄距下拉", w: "50kg", r: "12", s: "4", feel: "含胸位", done: false },
              { name: "高位下拉", w: "40kg", r: "12", s: "4", feel: "手肘向下回旋", done: false },
              { name: "固定器械划船", w: "40kg", r: "12", s: "4", feel: "全周伸；练完爬楼机20分钟；组间休50秒。", done: false }
            ]
          },
          {
            theme: "胸",
            kind: "normal",
            exercises: [
              { name: "杠铃卧推", w: "50kg", r: "12", s: "4", feel: "第一组冲12，后三组按余力做，别硬凑；组间休2-3分钟", done: false },
              { name: "固定坐姿推胸", w: "50kg", r: "12", s: "4", feel: "排在卧推后，争取12个×4；做不到就先稳8-10个", done: false },
              { name: "站姿龙门架夹胸", w: "10kg", r: "12", s: "4", feel: "保持", done: false }
            ]
          },
          {
            theme: "肩",
            kind: "normal",
            exercises: [
              { name: "哑铃双臂上举", w: "7.5kg", r: "12", s: "4", feel: "保持10/28重量，动作做标准", ss: 1, done: false },
              { name: "哑铃开合飞鸟", w: "7.5kg", r: "12", s: "4", feel: "稳定核心，小臂低于大臂；保持10/28重量，动作做标准", ss: 1, done: false },
              { name: "固定坐姿器械推肩", w: "25kg", r: "12", s: "4", feel: "肘内收", ss: 2, done: false },
              { name: "蝴蝶机反向飞鸟", w: "20kg", r: "12", s: "4", feel: "开肘", ss: 2, done: false },
              { name: "绳索面拉", w: "15kg", r: "12", s: "4", feel: "开肘；小重量更有感觉；练完爬楼机20分钟；组间休50秒。", ss: 2, done: false }
            ]
          },
          {
            theme: "手臂",
            kind: "normal",
            exercises: [
              { name: "直杆绳索弯举", w: "20kg", r: "12", s: "4", feel: "保持10/29重量，这个强度合适", ss: 1, done: false },
              { name: "杠铃窄距弯举", w: "25kg", r: "12", s: "4", feel: "保持10/29重量，这个强度合适", ss: 1, done: false },
              { name: "绳索臂屈伸", w: "20kg", r: "12", s: "4", feel: "替代哑铃坐姿臂屈伸", ss: 2, done: false },
              { name: "俯身哑铃臂屈伸", w: "单只10kg", r: "12", s: "4", feel: "保持10/29重量", ss: 2, done: false },
              { name: "杠铃宽距弯举", w: "17.5kg", r: "12", s: "4", feel: "肩后伸", ss: 3, done: false },
              { name: "哑铃坐姿弯举", w: "单只10kg", r: "12", s: "4", feel: "提升后保持；增加组间休息", ss: 3, done: false }
            ]
          },
          {
            theme: "腿",
            kind: "normal",
            exercises: [
              { name: "倒蹬机", w: "120kg", r: "12", s: "4", feel: "维持120；自重53kg合计约173kg", done: false },
              { name: "哑铃深蹲", w: "单只40kg", r: "12", s: "4", feel: "挑战；史密斯已并入哑铃深蹲", done: false },
              { name: "坐姿腿弯举", w: "55kg", r: "12", s: "4", feel: "上次50kg，本次试55kg", done: false },
              { name: "哑铃弓步走", w: "单只10kg", r: "每边12步", s: "4", feel: "维持10kg；4组", done: false }
            ]
          },
          {
            theme: "小肌群",
            kind: "normal",
            exercises: [
              { name: "平板支撑", w: "自重", r: "110秒", s: "3", feel: "对照10/31最长100秒", done: false },
              { name: "侧平板支撑", w: "自重", r: "每边70秒", s: "2", feel: "对照10/31最长65秒", done: false },
              { name: "侧卧哑铃外旋", w: "单只2kg", r: "12", s: "3", feel: "测试冈下、小圆；肘贴身，没有2kg就用最轻的哑铃", done: false },
              { name: "Y字哑铃上举", w: "3kg", r: "15", s: "3", feel: "斜方下束；肩不适即停", done: false },
              { name: "脚尖勾起练习", w: "自重", r: "20", s: "3", feel: "胫骨前肌", done: false },
              { name: "屈膝提踵", w: "自重", r: "15", s: "3", feel: "测试比目鱼肌；膝盖弯曲，慢起，顶峰停2秒", done: false }
            ]
          },
          { theme: "—", kind: "rest", exercises: [] }
        ]
      }
    ]
  }
};
