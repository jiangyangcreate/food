// Default training plan + muscle scores.
// Bundled from the canonical training-map-backup JSON.
// Loaded by app.js when localStorage keys are absent (first use)
// and used as the target for "restore default".
export const DEFAULT_BACKUP = {
  format: "training-map-backup",
  version: 1,
  exportedAt: "2026-09-28T08:00:00.000Z",
  goal: {
    heightCm: 187,
    weightKg: 80,
    bfPct: 15,
    lbmKg: 68,
    ffmi: 19.4,
    label: "187cm · 80kg · 体脂 15% 古典健美"
  },
  scores: {
    ant_delt: 2, mid_delt: 2, rear_delt: 2,
    pec_u: 2, pec_s: 2, pec_l: 3, pec_min: 2,
    serr: 2, supra: 2, infra: 2, teres_min: 2,
    teres_maj: 3, subscap: 1, bi: 3, brachialis: 3,
    tri_long: 3, tri_lat: 3, tri_med: 3,
    fore_flex: 3, fore_ext: 2,
    trap_u: 1, trap_m: 2, trap_l: 1,
    lats: 3, rhomb: 2, lev_scap: 1,
    erector: 2, ql: 1, abs: 3, obl: 2, obl_int: 1, tva: 2,
    hip: 1, quads: 4, sartorius: 1, add: 4,
    gmax: 3, gmed: 2, semi: 4, bf: 4,
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
    "2026-09-28#3": { w: "50kg",   r: "12", s: "4", feel: "重量适中，下次加2.5kg",          done: true }
  },
  plan: {
    weekMondays: ["2026-08-31","2026-09-07","2026-09-14","2026-09-21","2026-09-28","2026-10-05"],
    weekNos: [36, 37, 38, 39, 40, 41],
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
          }
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
          }
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
          { theme: "体检休息", kind: "rest",   exercises: [] }
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
          }
        ]
      },
      // ── W40 (进行中) ─────────────────────────────────────────────
      {
        week: 40, note: "进行中 · 腿周四改维持+肩背",
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
          {
            theme: "推", kind: "normal",
            exercises: [
              { name: "平板卧推",     w: "37.5kg", r: "8",  s: "4", feel: "", done: false },
              { name: "上斜机械推胸", w: "25kg",   r: "12", s: "4", feel: "", done: false },
              { name: "肩推",         w: "22.5kg", r: "8",  s: "4", feel: "", done: false },
              { name: "哑铃侧平举",   w: "6kg",    r: "12", s: "4", feel: "", done: false },
              { name: "绳索臂屈伸",   w: "15kg",   r: "12", s: "4", feel: "", done: false },
              { name: "哑铃仰卧上拉", w: "10kg",   r: "12", s: "3", feel: "", done: false },
              { name: "俄式转体",     w: "自重",   r: "15", s: "3", feel: "", done: false }
            ]
          },
          {
            theme: "拉", kind: "normal",
            exercises: [
              { name: "坐姿划船", w: "40kg",     r: "10",  s: "4", feel: "", done: false },
              { name: "高位下拉", w: "35kg",     r: "10",  s: "4", feel: "", done: false },
              { name: "面拉",     w: "力竭重量", r: "12",  s: "4", feel: "", done: false },
              { name: "锤式弯举", w: "15kg",     r: "12",  s: "4", feel: "", done: false },
              { name: "悬垂",     w: "自重",     r: "45秒", s: "3", feel: "", done: false },
              { name: "Y字哑铃上举", w: "3kg",   r: "12",  s: "3", feel: "", done: false },
              { name: "哑铃耸肩",    w: "10kg",  r: "15",  s: "3", feel: "", done: false }
            ]
          },
          {
            theme: "腿（维持）/ 肩背", kind: "normal",
            exercises: [
              { name: "罗马尼亚硬拉", w: "40kg",   r: "10", s: "3", feel: "", done: false },
              { name: "髋外展",       w: "52.5kg", r: "15", s: "4", feel: "", done: false },
              { name: "臀推",         w: "40kg",   r: "10", s: "3", feel: "", done: false },
              { name: "绳索侧平举",   w: "5kg",    r: "12", s: "3", feel: "", done: false },
              { name: "面拉",         w: "15kg",   r: "12", s: "3", feel: "", done: false },
              { name: "平板支撑",     w: "—",      r: "30秒", s: "3", feel: "", done: false },
              { name: "侧弯哑铃",     w: "8kg",    r: "12", s: "2", feel: "", done: false },
              { name: "脚尖勾起练习", w: "自重",   r: "20", s: "3", feel: "", done: false }
            ]
          },
          {
            theme: "肩臂", kind: "normal",
            exercises: [
              { name: "双臂下拉",     w: "65kg",   r: "8",  s: "4", feel: "", done: false },
              { name: "绳索侧平举",   w: "5kg",    r: "12", s: "3", feel: "", done: false },
              { name: "过头臂屈伸",   w: "12.5kg", r: "12", s: "3", feel: "", done: false },
              { name: "二头弯举",     w: "20kg",   r: "10", s: "4", feel: "", done: false },
              { name: "悬垂举腿",     w: "自重",   r: "8",  s: "3", feel: "", done: false },
              { name: "绳索内旋",     w: "5kg",    r: "12", s: "3", feel: "", done: false },
              { name: "站姿提踵",     w: "30kg",   r: "15", s: "3", feel: "", done: false },
              { name: "反握弯举",     w: "10kg",   r: "12", s: "3", feel: "", done: false }
            ]
          }
        ]
      },
      // ── W41 ─────────────────────────────────────────────────────
      {
        week: 41, note: "腿周四维持 + 肩背补量",
        days: [
          {
            theme: "腿", kind: "normal",
            exercises: [
              { name: "坐式蹬腿",   w: "130kg",  r: "10", s: "4", feel: "", done: false },
              { name: "坐姿腿伸展", w: "47.5kg", r: "12", s: "4", feel: "", done: false },
              { name: "坐姿腿弯举", w: "52.5kg", r: "12", s: "4", feel: "", done: false },
              { name: "大腿内收",   w: "42.5kg", r: "10", s: "4", feel: "", done: false },
              { name: "站姿提踵",   w: "45kg",   r: "12", s: "4", feel: "", done: false },
              { name: "脚尖勾起练习", w: "自重", r: "20", s: "3", feel: "", done: false },
              { name: "悬垂举腿",   w: "自重",   r: "8",  s: "3", feel: "", done: false }
            ]
          },
          {
            theme: "拉", kind: "normal",
            exercises: [
              { name: "坐姿划船", w: "42.5kg", r: "8",   s: "4", feel: "", done: false },
              { name: "高位下拉", w: "37.5kg", r: "10",  s: "4", feel: "", done: false },
              { name: "绳索侧平举", w: "5kg",  r: "15",  s: "4", feel: "", done: false },
              { name: "二头弯举", w: "20kg",   r: "10",  s: "4", feel: "", done: false },
              { name: "悬垂",     w: "自重",   r: "50秒", s: "3", feel: "", done: false },
              { name: "Y字哑铃上举", w: "3kg", r: "12",  s: "3", feel: "", done: false },
              { name: "哑铃耸肩",    w: "10kg", r: "15", s: "3", feel: "", done: false }
            ]
          },
          {
            theme: "推", kind: "normal",
            exercises: [
              { name: "平板卧推",     w: "40kg",   r: "6",  s: "4", feel: "", done: false },
              { name: "上斜机械推胸", w: "30kg",   r: "8",  s: "4", feel: "", done: false },
              { name: "哑铃侧平举",   w: "6kg",    r: "15", s: "4", feel: "", done: false },
              { name: "肩推",         w: "25kg",   r: "6",  s: "3", feel: "", done: false },
              { name: "绳索臂屈伸",   w: "17.5kg", r: "10", s: "4", feel: "", done: false },
              { name: "哑铃仰卧上拉", w: "12.5kg", r: "12", s: "3", feel: "", done: false },
              { name: "俄式转体",     w: "自重",   r: "15", s: "3", feel: "", done: false }
            ]
          },
          {
            theme: "腿（维持）/ 肩背", kind: "normal",
            exercises: [
              { name: "罗马尼亚硬拉", w: "50kg",   r: "10", s: "4", feel: "", done: false },
              { name: "髋外展",       w: "52.5kg", r: "15", s: "4", feel: "", done: false },
              { name: "臀推",         w: "50kg",   r: "10", s: "4", feel: "", done: false },
              { name: "绳索侧平举",   w: "5kg",    r: "15", s: "4", feel: "", done: false },
              { name: "面拉",         w: "15kg",   r: "12", s: "3", feel: "", done: false },
              { name: "平板支撑",     w: "—",      r: "30秒", s: "3", feel: "", done: false },
              { name: "侧弯哑铃",     w: "8kg",    r: "12", s: "2", feel: "", done: false }
            ]
          },
          {
            theme: "肩臂", kind: "normal",
            exercises: [
              { name: "面拉",       w: "力竭重量", r: "12", s: "4", feel: "", done: false },
              { name: "双臂下拉",   w: "70kg",    r: "6",  s: "3", feel: "", done: false },
              { name: "锤式弯举",   w: "17.5kg",  r: "10", s: "4", feel: "", done: false },
              { name: "过头臂屈伸", w: "15kg",    r: "10", s: "3", feel: "", done: false },
              { name: "窄距俯卧撑", w: "自重",    r: "12", s: "3", feel: "", done: false },
              { name: "绳索内旋",   w: "5kg",     r: "12", s: "3", feel: "", done: false },
              { name: "反握弯举",   w: "10kg",    r: "12", s: "3", feel: "", done: false }
            ]
          }
        ]
      }
    ]
  }
};
