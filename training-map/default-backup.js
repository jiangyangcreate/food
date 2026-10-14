// Default training plan + muscle scores.
// Bundled from the canonical training-map-backup JSON.
// Loaded by app.js when localStorage keys are absent (first use)
// and used as the target for "restore default".
export const DEFAULT_BACKUP = {
  format: "training-map-backup",
  version: 1,
  exportedAt: "2026-10-14T08:00:00.000Z",
  goal: {
    heightCm: 187,
    weightKg: 80,
    bfPct: 15,
    lbmKg: 68,
    ffmi: 19.4,
    label: "187cm · 80kg · 体脂 15% 古典健美"
  },
  scores: {
    ant_delt: 2, mid_delt: 2, rear_delt: 4,
    pec_u: 2, pec_s: 3, pec_l: 3, pec_min: 2,
    serr: 2, supra: 2, infra: 2, teres_min: 2,
    teres_maj: 3, subscap: 1, bi: 3, brachialis: 3,
    tri_long: 3, tri_lat: 3, tri_med: 3,
    fore_flex: 2, fore_ext: 2,
    trap_u: 3, trap_m: 3, trap_l: 2,
    lats: 3, rhomb: 3, lev_scap: 2,
    erector: 2, ql: 2, abs: 3, obl: 3, obl_int: 1, tva: 3,
    hip: 2, quads: 4, sartorius: 1, add: 5,
    gmax: 3, gmed: 3, semi: 4, bf: 4,
    gastroc_m: 3, gastroc_l: 3, soleus: 1, ta: 2
  },
  logEdits: {},
  plan: {
    weekMondays: ["2026-10-12"],
    weekNos: [42],
    weeks: [
      {
        week: 42,
        note: "五分化：一个循环完休息两天（按自身情况调整）；每次约1小时",
        days: [
          {
            theme: "背",
            kind: "normal",
            exercises: [
              { name: "对握坐姿下拉", w: "1RM 70–80%", r: "12", s: "4", feel: "背阔·身体中立位", done: false },
              { name: "坐姿窄距下拉", w: "1RM 70–80%", r: "12", s: "4", feel: "背阔·含胸位", done: false },
              { name: "高位下拉", w: "1RM 70–80%", r: "12", s: "4", feel: "大小圆·肩胛骨下回旋", done: false },
              { name: "固定器械划船", w: "1RM 70–80%", r: "12", s: "4", feel: "中上斜方+菱形·全肩伸", done: false },
              { name: "爬楼机（有氧）", w: "—", r: "20分钟", s: "1", feel: "力量完可带；组间歇约50s，不太喘就继续", done: false }
            ]
          },
          {
            theme: "胸",
            kind: "normal",
            exercises: [
              { name: "史密斯推胸", w: "1RM 70–80%", r: "12", s: "4", feel: "整体·稳定肩胛夹肘", done: false },
              { name: "固定坐姿推胸", w: "1RM 70–80%", r: "12", s: "4", feel: "整体·臂大肌贴紧靠背", done: false },
              { name: "哑铃上斜推胸", w: "1RM 70–80%", r: "12", s: "4", feel: "上胸·臂大肌贴紧靠背", done: false },
              { name: "站姿龙门架夹胸", w: "1RM 70–80%", r: "12", s: "4", feel: "下胸·含胸位", done: false },
              { name: "爬楼机（有氧）", w: "—", r: "20分钟", s: "1", feel: "力量完可带；组间歇约50s，不太喘就继续", done: false }
            ]
          },
          {
            theme: "肩",
            kind: "normal",
            exercises: [
              { name: "哑铃坐姿推肩", w: "1RM 70–80%", r: "12", s: "4", feel: "前束·臂大肌紧贴靠背", done: false },
              { name: "固定坐姿器械推肩", w: "1RM 70–80%", r: "12", s: "4", feel: "前束·肘内收", done: false },
              { name: "哑铃飞鸟（侧平举）", w: "1RM 70–80%", r: "12", s: "4", feel: "中束·稳定核心，小臂低于大臂", done: false },
              { name: "蝴蝶机反向飞鸟+绳索面拉", w: "1RM 70–80%", r: "12", s: "4", feel: "后束·开肘·超级组", done: false },
              { name: "爬楼机（有氧）", w: "—", r: "20分钟", s: "1", feel: "力量完可带；组间歇约50s，不太喘就继续", done: false }
            ]
          },
          {
            theme: "手臂",
            kind: "normal",
            exercises: [
              { name: "直杆绳索弯举+杠铃窄距弯举", w: "1RM 70–80%", r: "12", s: "4", feel: "二头·夹肘·超级组", done: false },
              { name: "哑铃坐姿臂屈伸+俯身哑铃臂屈伸", w: "1RM 70–80%", r: "12", s: "4", feel: "三头·核心稳定·超级组", done: false },
              { name: "杠铃宽距弯举+哑铃坐姿弯举", w: "1RM 70–80%", r: "12", s: "4", feel: "二头三头·肩伸·超级组", done: false },
              { name: "爬楼机（有氧）", w: "—", r: "20分钟", s: "1", feel: "力量完可带；组间歇约50s，不太喘就继续", done: false }
            ]
          },
          {
            theme: "腿",
            kind: "normal",
            exercises: [
              { name: "倒蹬机", w: "1RM 70–80%", r: "12", s: "4", feel: "腰背紧贴靠背", done: false },
              { name: "史密斯深蹲", w: "1RM 70–80%", r: "12", s: "4", feel: "躯干骨盆稳定", done: false },
              { name: "坐姿腿弯举", w: "1RM 70–80%", r: "12", s: "4", feel: "膝盖外旋", done: false },
              { name: "哑铃弓步走+哑铃深蹲", w: "1RM 70–80%", r: "14", s: "3", feel: "超级组", done: false },
              { name: "爬楼机（有氧）", w: "—", r: "20分钟", s: "1", feel: "力量完可带；组间歇约50s，不太喘就继续", done: false }
            ]
          },
          { theme: "—", kind: "rest", exercises: [] }
        ]
      }
    ]
  }
};
