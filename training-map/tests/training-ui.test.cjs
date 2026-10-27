const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
function loadRange(start, end, globals = {}) {
  const context = vm.createContext({ esc, ...globals });
  vm.runInContext(source.slice(source.indexOf(start), source.indexOf(end, source.indexOf(start))), context);
  return context;
}

test('old completion flags do not style exercises; supersets and feedback remain', () => {
  const context = loadRange('function renderExItem(', 'function renderPlanTable(');
  const output = context.renderExList([
    { name: '动作一', w: '10kg', r: '12', s: '4', feel: '未练：肩部不适', done: true, ss: 1 },
    { name: '动作二', done: false, ss: 1 },
  ]);
  assert.equal((output.match(/class="ss-group"/g) || []).length, 1);
  assert.match(output, /未练：肩部不适/);
  assert.match(output, /10kg · 12 · 4/);
  assert.doesNotMatch(output, /is-done|checkbox|✓/);
});

test('applying a legacy log still keeps weight and feedback without completion effects', () => {
  const meta = {};
  const feel = {};
  const art = { querySelector: selector => selector === '.meta' ? meta : feel };
  const context = loadRange('function applyEdit(', 'function toggleEditor(', {
    formatMeta: (w, r, s) => [w, r, s].join(' · '),
  });
  context.applyEdit(art, { w: '10kg', r: '12', s: '3', feel: '未练', done: true });
  assert.equal(meta.textContent, '10kg · 12 · 3');
  assert.equal(feel.textContent, '未练');
});

test('today panel shows exercise count and location button, not completion controls', () => {
  const bar = { innerHTML: '', querySelectorAll: () => [] };
  const art = {
    dataset: { key: '2026-10-22#0' },
    querySelector: selector => selector === '.n' ? { firstChild: { textContent: '弯举' } } : { textContent: '15kg · 12 · 4' },
  };
  const td = { dataset: { date: '2026-10-22' }, querySelectorAll: () => [art], querySelector: () => ({ textContent: '手臂' }) };
  const document = { getElementById: () => bar, querySelectorAll: () => [td] };
  const context = loadRange('function renderTodayBar(', '// ─────────────────────────────────────────────────────────────────\n// INIT', { document });
  context.renderTodayBar();
  assert.match(bar.innerHTML, /1 个动作/);
  assert.match(bar.innerHTML, /在表中定位/);
  assert.doesNotMatch(bar.innerHTML, /checkbox|完成|is-done/);
  document.querySelectorAll = () => [];
  context.renderTodayBar();
  assert.match(bar.innerHTML, /今天不在记录范围内/);
});

test('editing workout values and feedback remains functional', () => {
  const meta = {};
  const feel = {};
  const fields = { '.ed-w': '10kg', '.ed-r': '12', '.ed-s': '3', '.ed-f': '未练：休息' };
  let saved;
  const context = loadRange('function saveEditor(', '// ── Today bar', {
    formatMeta: (w, r, s) => [w, r, s].join(' · '),
    saveLogEdit: (key, data) => { saved = { key, ...data }; },
    renderTodayBar: () => {},
  });
  context.saveEditor({ dataset: { key: 'date#0' }, querySelector: selector => selector === '.meta' ? meta : feel }, {
    querySelector: selector => ({ value: fields[selector] }), classList: { remove: () => {} },
  });
  assert.equal(saved.feel, '未练：休息');
  assert.equal(saved.s, '3');
  assert.equal(Object.hasOwn(saved, 'done'), false);
});

test('backup toolbar, completion listeners and styles are removed', () => {
  assert.doesNotMatch(html, /btnExport|btnImport|btnRestoreDefault|importFileInput|train-io-bar|is-done|today-item-check/);
  assert.doesNotMatch(source, /toggleDone|setupExportImportUI|function exportBackup|function importFromFile|function restoreDefault|is-done|type="checkbox"/);
});

test('score defaults reapply once after a version bump, then saved values win', () => {
  const code = source.slice(source.indexOf('const SCORES_VERSION'), source.indexOf('function restoreAuto'));
  const run = seed => {
    const store = {};
    if (seed) store.k = JSON.stringify(seed);
    const context = vm.createContext({
      GROUPS: [{ id: 'lats', auto: 3 }, { id: 'add', auto: 5 }],
      DEFAULT_BACKUP: { scores: { lats: 4, add: 5 } },
      SCORE_KEY: 'k',
      localStorage: { getItem: key => store[key] ?? null, setItem: (key, value) => { store[key] = value; } },
    });
    vm.runInContext(code, context);
    context.loadScores();
    return { scores: { ...context.scores }, saved: store.k ? JSON.parse(store.k) : null };
  };

  const version = Number(source.match(/const SCORES_VERSION = (\d+);/)[1]);

  const upgraded = run({ __v: version - 1, lats: 2, add: 5 });
  assert.equal(upgraded.scores.lats, 4);
  assert.equal(upgraded.saved.__v, version);

  const kept = run({ __v: version, lats: 2, add: 5 });
  assert.equal(kept.scores.lats, 2);

  const fresh = run(null);
  assert.equal(fresh.scores.lats, 4);
});

test('weekly muscle coverage weights exercises and ignores unknown ones', () => {
  const code = source.slice(source.indexOf('// ── 动作 → 肌群覆盖'), source.indexOf('function renderDetail(g) {'));
  const context = vm.createContext({});
  vm.runInContext(code, context);
  const sets = context.weeklyMuscleSets({
    days: [
      { exercises: [{ name: '杠铃卧推', s: '4' }, { name: '坐姿划船', s: '4' }, { name: '未知动作', s: '4' }] },
      { exercises: [{ name: '站姿龙门架夹胸', s: '4' }, { name: '杠铃卧推', s: '4' }] },
    ],
  });
  assert.equal(sets.pec_s, 8 * 1 + 4 * 0.8);
  assert.equal(sets.rhomb, 4);
  assert.equal(sets.pec_u, 8 * 0.4);
  assert.equal(Object.values(sets).some(v => Number.isNaN(v)), false);
  assert.equal(Object.keys(context.weeklyMuscleSets(null)).length, 0);
});
