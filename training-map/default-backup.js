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
              { name: "哑铃坐姿推肩", w: "单只10kg", r: "12", s: "4", feel: "", done: false },
              { name: "固定坐姿器械推肩", w: "20kg", r: "12", s: "4", feel: "肘内收", done: false },
              { name: "哑铃飞鸟（侧平举）", w: "5kg", r: "12", s: "4", feel: "稳定核心，小臂低于大臂", done: false },
              { name: "蝴蝶机反向飞鸟", w: "20kg", r: "12", s: "4", feel: "超级组，开肘", done: false },
              { name: "绳索面拉", w: "22.5kg", r: "12", s: "4", feel: "超级组，开肘；练完爬楼机20分钟；组间休50秒。", done: false }
            ]
          },
          {
            theme: "手臂",
            kind: "normal",
            exercises: [
              { name: "直杆绳索弯举", w: "15kg", r: "12", s: "4", feel: "夹肘", done: false },
              { name: "杠铃窄距弯举", w: "20kg", r: "12", s: "4", feel: "夹肘", done: false },
              { name: "哑铃坐姿臂屈伸", w: "单只10kg", r: "12", s: "4", feel: "核心稳定", done: false },
              { name: "俯身哑铃臂屈伸", w: "单只5kg", r: "12", s: "4", feel: "", done: false },
              { name: "杠铃宽距弯举", w: "17.5kg", r: "12", s: "4", feel: "肩后伸", done: false },
              { name: "哑铃坐姿弯举", w: "单只8kg", r: "12", s: "4", feel: "练完爬楼机20分钟；组间休50秒。", done: false }
            ]
          },
          {
            theme: "腿",
            kind: "normal",
            exercises: [
              { name: "倒蹬机", w: "120kg", r: "12", s: "4", feel: "腰背紧贴靠垫，停顿慢放，维持不加", done: false },
              { name: "史密斯深蹲", w: "40kg", r: "12", s: "4", feel: "躯干骨盆稳定，含杆重", done: false },
              { name: "坐姿腿弯举", w: "47.5kg", r: "12", s: "4", feel: "膝盖外旋", done: false },
              { name: "哑铃弓步走", w: "单只8kg", r: "14", s: "3", feel: "超级组", done: false },
              { name: "哑铃深蹲", w: "单只8kg", r: "14", s: "3", feel: "超级组；练完爬楼机20分钟；组间休50秒。", done: false }
            ]
          },
          { theme: "—", kind: "rest", exercises: [] }
        ]
      }
    ]
  }
};
