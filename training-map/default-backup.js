// Default training plan + muscle scores.
// Bundled from the canonical training-map-backup JSON.
// Loaded by app.js when localStorage keys are absent (first use)
// and used as the target for "restore default".
export const DEFAULT_BACKUP = {
  format: "training-map-backup",
  version: 1,
  exportedAt: "2026-10-09T08:00:00.000Z",
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
            theme: "腿（重）",
            kind: "normal",
            exercises: [
              { name: "髋外展", w: "57kg", r: "8", s: "4", feel: "", done: false },
              { name: "大腿内收", w: "45kg", r: "12", s: "4", feel: "", done: false },
              { name: "坐式蹬腿", w: "120kg", r: "8", s: "4", feel: "停顿慢放，维持不加", done: false },
              { name: "坐姿腿伸展", w: "47.5kg", r: "12", s: "4", feel: "", done: false },
              { name: "坐姿腿弯举", w: "52.5kg", r: "12", s: "4", feel: "", done: false }
            ]
          },
          {
            theme: "拉",
            kind: "normal",
            exercises: [
              { name: "悬垂", w: "自重", r: "50秒", s: "4", feel: "", done: false },
              { name: "引体向上", w: "自重", r: "尽量", s: "4", feel: "做不完可改高位下拉 40kg×8×4", done: false },
              { name: "坐姿划船", w: "40kg", r: "10", s: "4", feel: "", done: false },
              { name: "双臂下拉", w: "70kg", r: "6", s: "4", feel: "大臂W夹碰到背部", done: false },
              { name: "反握弯举", w: "10kg", r: "15", s: "4", feel: "", done: false }
            ]
          },
          {
            theme: "推",
            kind: "normal",
            exercises: [
              { name: "哑铃侧平举", w: "5kg", r: "12", s: "4", feel: "", done: false },
              { name: "器械推胸", w: "45kg", r: "8", s: "4", feel: "", done: false },
              { name: "低位绳索夹胸", w: "8kg", r: "15", s: "4", feel: "肩不适立即停止", done: false },
              { name: "肩推", w: "25kg", r: "8", s: "4", feel: "", done: false },
              { name: "绳索臂屈伸", w: "15kg", r: "12", s: "4", feel: "", done: false }
            ]
          },
          {
            theme: "后链/肩背",
            kind: "normal",
            exercises: [
              { name: "山羊挺身", w: "自重", r: "12", s: "4", feel: "", done: false },
              { name: "面拉", w: "22.5kg", r: "12", s: "4", feel: "顶峰停顿", done: false },
              { name: "Y字哑铃上举", w: "3kg", r: "15", s: "4", feel: "", done: false },
              { name: "悬垂举腿", w: "自重", r: "8", s: "4", feel: "", done: false },
              { name: "侧平板支撑", w: "自重", r: "60秒", s: "4", feel: "", done: false }
            ]
          },
          {
            theme: "肩臂",
            kind: "normal",
            exercises: [
              { name: "绳索内旋", w: "5kg", r: "12", s: "4", feel: "", done: false },
              { name: "面拉", w: "22.5kg", r: "12", s: "4", feel: "顶峰停顿", done: false },
              { name: "二头弯举（EZ杆）", w: "20kg", r: "15", s: "4", feel: "", done: false },
              { name: "过头臂屈伸", w: "15kg", r: "10", s: "4", feel: "", done: false },
              { name: "哑铃耸肩", w: "10kg", r: "15", s: "4", feel: "", done: false }
            ]
          },
          {
            theme: "查漏补缺",
            kind: "normal",
            exercises: [
              { name: "脚尖勾起练习", w: "自重", r: "20", s: "4", feel: "", done: false },
              { name: "站姿提踵", w: "45kg", r: "12", s: "4", feel: "", done: false },
              { name: "哑铃仰卧上拉", w: "10kg", r: "12", s: "4", feel: "", done: false },
              { name: "侧弯哑铃", w: "10kg", r: "15", s: "3", feel: "", done: false },
              { name: "俄式转体", w: "自重", r: "15", s: "4", feel: "", done: false },
              { name: "平板支撑", w: "自重", r: "60秒", s: "3", feel: "", done: false }
            ]
          }
        ]
      }
    ]
  }
};
