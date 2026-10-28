/* Code Lab engine: views, editors, progress, and scoring. Settings come from config.js (LAB).
   All text a student reads goes through I18N (js/i18n.js), so the lab can switch language. */
(() => {
  const KEY = LAB.storageKey || 'codeLab.v1';
  const N = ACTIVITIES.length;
  const FILES = Checker.NAMES;                       // file names shown on the tabs (LAB.files)
  const MODES = { html: 'htmlmixed', css: 'css', js: LAB.jsx ? 'jsx' : 'javascript' };
  const $ = (s, el = document) => el.querySelector(s);
  const view = $('#view');

  const t = (k, v) => I18N.t(k, v);                  // interface strings
  const Z = a => I18N.act(a);                        // translated activity content
  const M = a => I18N.moduleOf(a);                   // "Module 4" / "模块 4"
  const L = () => I18N.lab();                       // translated config.js text

  /* ---------------------------------------------------------------- state */
  const fresh = () => ({ name: '', run: newRun(1), history: [] });
  function newRun(n) { return { n, started: new Date().toISOString(), results: {}, drafts: {} }; }
  function loadState() { try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.run) return s; } catch (e) {} return fresh(); }
  let state = loadState();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  const result = id => state.run.results[id];
  const unlocked = id => id === 1 || !!result(id - 1);
  const nextOpen = () => { for (let i = 1; i <= N; i++) if (!result(i)) return i; return null; };
  const overall = () => { const r = ACTIVITIES.map(a => result(a.id)).filter(Boolean); return r.length ? Math.round(r.reduce((s, x) => s + x.score, 0) / N) : 0; };
  const bestEver = () => state.history.reduce((m, h) => Math.max(m, h.overall), 0);
  const filesOf = a => Object.keys(FILES).filter(f => a.starter[f] != null || a.solution[f] != null);
  const kind = f => f === 'js' && LAB.jsx ? 'JSX' : f.toUpperCase();   // what students call the file they write

  /* ---------------------------------------------------------------- helpers */
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const md = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  const band = p => p >= 90 ? 'great' : p >= 75 ? 'good' : p >= 50 ? 'ok' : 'low';
  /* An image, or a coloured banner when there is no picture. */
  const art = (src, cls, label, alt = '') => src ? `<img class="${cls}" src="${src}" alt="${esc(alt)}">` : `<div class="${cls} art-fallback" aria-hidden="true"><span>${esc(label)}</span></div>`;
  function ring(p, size = 120) {
    const r = size / 2 - 9, C = 2 * Math.PI * r;
    return `<svg class="ring ${band(p)}" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${p} percent">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-bg"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-fg" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - p / 100)}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
      <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">${p}%</text></svg>`;
  }
  const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

  /* Line diff (LCS) so students can see which lines differ from the proper code. */
  function diff(a, b) {
    const norm = l => l.trim().replace(/\s+/g, ' ').toLowerCase();
    const A = String(a).replace(/\s+$/, '').split('\n'), B = String(b).replace(/\s+$/, '').split('\n');
    const n = A.length, m = B.length, dp = Array.from({ length: n + 1 }, () => new Int16Array(m + 1));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
      dp[i][j] = norm(A[i]) === norm(B[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const left = [], right = [];
    let i = 0, j = 0;
    while (i < n || j < m) {
      if (i < n && j < m && norm(A[i]) === norm(B[j])) { left.push([A[i], 'same']); right.push([B[j], 'same']); i++; j++; }
      else if (j < m && (i >= n || dp[i][j + 1] >= dp[i + 1][j])) { right.push([B[j], norm(B[j]) ? 'add' : 'same']); j++; }
      else { left.push([A[i], norm(A[i]) ? 'del' : 'same']); i++; }
    }
    return { left, right };
  }
  const codeLines = (lines) => '<pre class="diff">' + lines.map(([t, k], i) => `<span class="ln ${k}"><i>${i + 1}</i>${esc(t) || ' '}</span>`).join('') + '</pre>';

  /* ---------------------------------------------------------------- top bar */
  function renderTop() {
    const lab = L();
    document.title = lab.title;
    $('.brand').innerHTML = (LAB.logo ? `<img src="${LAB.logo}" alt="">` : '') + `<span>${esc(lab.brand || lab.title)}</span>`;
    $('.brand').classList.toggle('no-logo', !LAB.logo);
    $('.brand').setAttribute('aria-label', t('homeAria'));
    $('#stepper').setAttribute('aria-label', t('activitiesNav'));
    $('#summaryLink').textContent = t('myResults');
    $('#footText').innerHTML = esc(lab.footer || lab.title) +
      (LAB.guide ? ` · <a href="${LAB.guide}" target="_blank" rel="noopener">${esc(t('studentGuide'))}</a>` : '') +
      ' · ' + esc(t('progressNote'));

    const btn = $('#langBtn');
    if (btn) {
      btn.textContent = I18N.buttonLabel();
      btn.setAttribute('aria-label', t('switchLang'));
      btn.title = t('switchLang');
    }
    document.documentElement.lang = I18N.htmlLang();
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', String(lab.lead || '').replace(/[*`]/g, ''));
    $('.skip').textContent = t('skipToContent');
  }
  function renderStepper(current) {
    $('#stepper').innerHTML = ACTIVITIES.map(a => {
      const r = result(a.id), open = unlocked(a.id);
      const cls = ['step', r ? 'done ' + band(r.score) : '', a.id === current ? 'current' : '', open ? '' : 'locked'].join(' ');
      const label = `${t('activityLabel', { n: a.id })}: ${Z(a).title}` + (r ? `, ${r.score}%` : open ? '' : t('lockedSuffix'));
      return open ? `<a class="${cls}" href="#/activity/${a.id}" title="${esc(label)}" aria-label="${esc(label)}">${a.id}</a>`
                  : `<span class="${cls}" title="${esc(label)}" aria-label="${esc(label)}">${a.id}</span>`;
    }).join('');
  }

  /* ---------------------------------------------------------------- home */
  function home() {
    renderStepper(0);
    const lab = L();
    const next = nextOpen(), done = Object.keys(state.run.results).length;
    const startLabel = done === 0 ? t('startActivity', { n: 1 }) : next ? t('continueWith', { n: next }) : t('seeResults');
    const startHref = next ? `#/activity/${next}` : '#/summary';
    const guide = LAB.guide ? `<a class="btn ghost" href="${LAB.guide}" target="_blank" rel="noopener" id="guideBtn">${esc(t('studentGuideBtn'))}</a>` : '';
    view.innerHTML = `
    <section class="hero">
      <div class="hero-text">
        <p class="kicker">${esc(lab.kicker || '')}</p>
        <h1>${esc(lab.title)}</h1>
        <p class="lead">${md(lab.lead || '')}</p>
        <label class="name-field">${esc(t('yourName'))}
          <input id="nameInput" type="text" autocomplete="name" placeholder="${esc(t('namePlaceholder'))}" value="${esc(state.name)}">
        </label>
        <div class="hero-actions">
          <a class="btn primary" href="${startHref}" id="startBtn">${esc(startLabel)}</a>
          ${guide}
          ${done ? `<span class="muted">${esc(t('runProgress', { n: state.run.n, done, total: N, pct: overall() }))}</span>` : ''}
        </div>
      </div>
      ${art(LAB.heroArt, 'hero-art', lab.title, lab.heroAlt)}
    </section>

    <section class="how">
      <h2>${esc(t('howItWorks'))}</h2>
      <ol class="how-list">
        ${(lab.how || []).map((h, i) => `<li>${art(h.img, 'how-art', String(i + 1))}<strong>${esc(h.title)}</strong><span>${esc(h.text)}</span></li>`).join('')}
      </ol>
      <p class="muted">${esc(t('unlockNote'))}${LAB.guide ? t('newHere', { link: LAB.guide }) : ''}</p>
    </section>

    <section class="cards-grid">
      <h2>${esc(t('theActivities'))}</h2>
      <div class="act-grid">
        ${ACTIVITIES.map(a => { const r = result(a.id), open = unlocked(a.id); return `
        <${open ? 'a' : 'div'} class="act-card ${open ? '' : 'locked'}" ${open ? `href="#/activity/${a.id}"` : 'aria-disabled="true"'}>
          ${art(a.art, 'act-art', String(a.id))}
          <div class="act-body">
            <span class="chip">${esc(M(a))} · ${kind(a.edit)}</span>
            <strong>${a.id}. ${esc(Z(a).title)}</strong>
            <span class="muted">${esc(Z(a).topic)}</span>
          </div>
          <span class="act-status ${r ? band(r.score) : ''}">${r ? r.score + '%' : open ? esc(t('openStatus')) : '🔒'}</span>
        </${open ? 'a' : 'div'}>`; }).join('')}
      </div>
    </section>

    ${state.history.length ? `
    <section class="history">
      <h2>${esc(t('earlierRuns'))}</h2>
      <table><thead><tr><th>${esc(t('thRun'))}</th><th>${esc(t('thFinished'))}</th><th>${esc(t('thOverall'))}</th></tr></thead><tbody>
      ${state.history.slice().reverse().map(h => `<tr><td>${h.n}</td><td>${new Date(h.finished).toLocaleString()}</td><td><span class="pill ${band(h.overall)}">${h.overall}%</span></td></tr>`).join('')}
      </tbody></table>
      <p class="muted">${esc(t('bestOverall'))} <strong>${bestEver()}%</strong></p>
    </section>` : ''}`;
    $('#nameInput').addEventListener('input', e => { state.name = e.target.value.slice(0, 60); save(); });
  }

  /* ---------------------------------------------------------------- editors */
  let cm = null;
  function editors() {
    if (cm) return cm;
    const mk = mode => CodeMirror(document.createElement('div'), { mode, lineNumbers: true, tabSize: 2, indentUnit: 2, lineWrapping: true,
      autoCloseTags: mode === 'htmlmixed', autoCloseBrackets: true, matchBrackets: true, viewportMargin: Infinity });
    cm = { html: mk(MODES.html), css: mk(MODES.css), js: mk(MODES.js) };
    return cm;
  }
  const current = () => { const ed = editors(); return { html: ed.html.getValue(), css: ed.css.getValue(), js: ed.js.getValue() }; };

  /* ---------------------------------------------------------------- activity */
  function activity(id) {
    const a = ACTIVITIES[id - 1];
    if (!a) return go('#/');
    renderStepper(id);
    if (!unlocked(id)) {
      const nxt = nextOpen();
      view.innerHTML = `<section class="locked-view">${art(LAB.summaryArt, 'locked-art', '🔒')}<h1>${esc(t('activityLocked', { id }))}</h1>
        <p>${esc(t('lockedBody', { prev: id - 1 }))}</p>
        <a class="btn primary" href="#/activity/${nxt}">${esc(t('goToActivity', { id: nxt }))}</a></section>`;
      return;
    }
    const draft = state.run.drafts[id] || {};
    const files = filesOf(a);
    const start = f => draft[f] != null ? draft[f] : (a.starter[f] || '');
    const given = files.filter(f => f !== a.edit).map(f => kind(f) === 'JSX' ? 'JS' : kind(f));
    const A = Z(a);
    const givenNote = given.length ? esc(t(given.length > 1 ? 'givenMany' : 'givenOne', { given: given.join(t('andJoin')) })) : '';

    view.innerHTML = `
    <div class="workspace">
      <aside class="brief">
        ${art(a.art, 'brief-art', M(a) + ' · ' + t('activityLabel', { n: a.id }))}
        <p class="chip-row"><span class="chip">${esc(M(a))}</span><span class="chip outline">${esc(A.topic)}</span></p>
        <h1><span class="num">${esc(t('activityOf', { id: a.id, n: N }))}</span>${esc(A.title)}</h1>
        <p>${md(A.story)}</p>
        <div class="you-edit ${a.edit}">${md(t('youWrite', { kind: kind(a.edit), file: FILES[a.edit] }))}${givenNote}</div>
        <h2>${esc(t('yourTask'))}</h2>
        <ol class="steps">${A.steps.map(s => typeof s === 'string' ? `<li>${md(s)}</li>` : `<li>${md(s.text)}${s.code ? `<pre class="step-code">${esc(s.code)}</pre>` : ''}</li>`).join('')}</ol>
        <details class="checklist"><summary>${esc(t('whatChecked', { n: A.checks.length }))}</summary>
          <ul>${A.checks.map(c => `<li>${md(c.text)} <span class="pts">${esc(t(c.pts > 1 ? 'pts' : 'pt', { n: c.pts }))}</span></li>`).join('')}</ul>
        </details>
        <p class="practise">${(A.practise || []).map(p => `<span class="tag">${esc(p)}</span>`).join('')}</p>
      </aside>

      <section class="work">
        <div class="panel editor-panel">
          <div class="tabs" role="tablist">
            ${files.map(f => `<button role="tab" class="tab" data-file="${f}">${FILES[f]} ${a.edit === f ? `<em>${esc(t('tabEdit'))}</em>` : `<em class="lock">${esc(t('tabGiven'))}</em>`}</button>`).join('')}
            <span class="spacer"></span>
            <button class="btn small ghost" id="resetBtn" title="${esc(t('resetTitle'))}">${esc(t('reset'))}</button>
          </div>
          <div class="cm-host" id="cmHost"></div>
          <p class="readonly-note" id="roNote" hidden>${esc(t('readonlyNote'))}</p>
        </div>

        <div class="panel preview-panel">
          <div class="preview-bar">
            <div class="seg" role="group" aria-label="${esc(t('previewAria'))}">
              <button class="on" data-show="mine">${esc(t('yourPage'))}</button><button data-show="goal">${esc(t('goalTab'))}</button>
            </div>
            <div class="seg" role="group" aria-label="${esc(t('sizeAria'))}">
              <button class="on" data-size="desk">${esc(t('desktop'))}</button><button data-size="phone">${esc(t('phone'))}</button>
            </div>
            <span class="spacer"></span>
            <span class="live" id="liveNote">${esc(t('updatesAsYouType'))}</span>
          </div>
          <div class="frame-wrap" id="frameWrap"><iframe id="preview" title="${esc(t('previewTitle'))}"></iframe></div>
          ${files.includes('js') ? `<div class="console" aria-live="polite"><span class="console-label">${esc(t('consoleLabel'))}</span><pre id="consoleOut">${esc(t('nothingLogged'))}</pre></div>` : ''}
        </div>

        <div class="submit-row">
          <p class="muted">${esc(t('submitHint'))}</p>
          <button class="btn primary big" id="submitBtn">${esc(t('submitActivity', { id: a.id }))}</button>
        </div>

        <section id="report" class="report" tabindex="-1" hidden></section>
      </section>
    </div>`;
    $('#frameWrap').style.setProperty('--phone', (LAB.phoneWidth || 400) + 'px');

    const ed = editors();
    for (const f of Object.keys(FILES)) {
      $('#cmHost').appendChild(ed[f].getWrapperElement());
      ed[f].off('change', ed[f]._keep);
      ed[f].setValue(start(f));
      ed[f].setOption('readOnly', a.edit !== f);
      ed[f].clearHistory();
    }

    let showing = 'mine';
    const preview = $('#preview');
    /* Console panel (JS activities): mirror the preview's console.log output and errors. */
    clearInterval(window.__labConsole);
    if ($('#consoleOut')) {
      let last = '';
      window.__labConsole = setInterval(() => {
        const out = $('#consoleOut'); if (!out) return clearInterval(window.__labConsole);
        const lab = preview.contentWindow && preview.contentWindow.__lab;
        const text = lab ? [...lab.logs, ...[...new Set(lab.warnings || [])].filter(w => !Checker.IGNORE.some(re => re.test(w))).map(w => '△ ' + w.replace(/\s+/g, ' ').slice(0, 300)), ...lab.errors.map(e => '⚠ ' + e)].join('\n') : '';
        if (text !== last) { last = text; out.textContent = text || I18N.t('nothingLogged'); out.classList.toggle('has-error', !!(lab && lab.errors.length)); out.classList.toggle('has-warning', /△/.test(text)); }
      }, 400);
    }
    const run = () => {
      const s = showing === 'goal' ? a.solution : current();
      preview.srcdoc = Checker.compose(s.html, s.css, s.js);
    };
    const keep = debounce(() => { state.run.drafts[id] = current(); save(); if (showing === 'mine') run(); }, 450);
    for (const f of Object.keys(FILES)) { ed[f]._keep = keep; ed[f].on('change', keep); }

    const tabs = [...view.querySelectorAll('.tab')];
    const show = f => {
      tabs.forEach(t => t.setAttribute('aria-selected', t.dataset.file === f));
      for (const g of Object.keys(FILES)) ed[g].getWrapperElement().style.display = g === f ? '' : 'none';
      $('#roNote').hidden = f === a.edit;
      ed[f].refresh(); if (f === a.edit) ed[f].focus();
    };
    tabs.forEach(t => t.addEventListener('click', () => show(t.dataset.file)));
    show(a.edit);

    view.querySelectorAll('[data-show]').forEach(b => b.addEventListener('click', () => {
      showing = b.dataset.show;
      view.querySelectorAll('[data-show]').forEach(x => x.classList.toggle('on', x === b));
      $('#liveNote').textContent = showing === 'goal' ? t('aimingFor') : t('updatesAsYouType');
      run();
    }));
    view.querySelectorAll('[data-size]').forEach(b => b.addEventListener('click', () => {
      view.querySelectorAll('[data-size]').forEach(x => x.classList.toggle('on', x === b));
      $('#frameWrap').classList.toggle('phone', b.dataset.size === 'phone');
    }));
    $('#resetBtn').addEventListener('click', () => {
      if (!confirm(t('resetConfirm'))) return;
      ed[a.edit].setValue(a.starter[a.edit] || '');
    });
    $('#submitBtn').addEventListener('click', () => submit(a));
    run();
    if (result(id)) report(a, result(id), false);
  }

  async function submit(a) {
    const btn = $('#submitBtn');
    btn.disabled = true; btn.textContent = t('checking');
    const files = current();
    const g = await Checker.grade(a, files);
    const prev = result(a.id);
    const r = { score: g.score, earned: g.earned, total: g.total, at: new Date().toISOString(), attempts: (prev ? prev.attempts : 0) + 1,
                files, passed: g.results.map(x => x.ok), found: g.results.map(x => x.found), lint: g.lint };
    state.run.results[a.id] = r; save();
    btn.disabled = false; btn.textContent = t('submitAgain');
    renderStepper(a.id);
    report(a, r, true);
  }

  function report(a, r, focus) {
    const A = Z(a);
    const el = $('#report');
    const [title, sub] = I18N.verdict(r.score);
    const files = r.files || { html: r.html, css: r.css, js: r.js };
    const d = diff(files[a.edit] || '', a.solution[a.edit] || '');
    const failed = A.checks.map((c, i) => ({ c, ok: r.passed[i], found: r.found[i] })).filter(x => !x.ok);
    const passed = A.checks.map((c, i) => ({ c, ok: r.passed[i] })).filter(x => x.ok);
    const last = a.id === N;
    el.hidden = false;
    el.innerHTML = `
      <div class="report-head">
        ${ring(r.score)}
        <div>
          <p class="kicker">${esc(t('resultHead', { id: a.id, n: r.attempts }))}</p>
          <h2>${esc(title)}: ${r.score}%</h2>
          <p>${esc(sub)} ${t('earned', { earned: r.earned, total: r.total })}</p>
        </div>
      </div>

      ${failed.length ? `<h3 class="bad-h">${esc(t('whatToFix', { n: failed.length }))}</h3>
      <ol class="results">${failed.map(x => `
        <li class="fail">
          <p class="r-title">✗ ${md(x.c.text)} <span class="pts">0 / ${x.c.pts}</span></p>
          ${x.found ? `<p class="found"><strong>${esc(t('weFound'))}</strong> ${esc(I18N.found(x.found))}</p>` : ''}
          <p class="why"><strong>${esc(t('whyLabel'))}</strong> ${md(x.c.explain)}</p>
          <p class="fix-label">${esc(t('correctCode'))}</p>
          <pre class="fix">${esc(x.c.fix)}</pre>
        </li>`).join('')}</ol>` : `<p class="all-good">${esc(t('allGood'))}</p>`}

      ${r.lint && r.lint.length ? `<div class="lint"><strong>${esc(t('alsoWorth'))}</strong><ul>${r.lint.map(n => `<li>${md(I18N.lint(n))}</li>`).join('')}</ul></div>` : ''}

      ${passed.length ? `<details class="passed"><summary>✓ ${esc(t('whatRight', { n: passed.length }))}</summary>
        <ul>${passed.map(x => `<li>${md(x.c.text)} <span class="pts">${x.c.pts} / ${x.c.pts}</span><br><span class="muted">${md(x.c.explain)}</span></li>`).join('')}</ul></details>` : ''}

      <h3>${esc(t('compareCode', { kind: kind(a.edit) }))}</h3>
      <p class="muted legend">${t('legend')}</p>
      <div class="compare">
        <div><h4>${esc(t('yourCode'))}</h4>${codeLines(d.left)}</div>
        <div><h4>${esc(t('properCode'))}</h4>${codeLines(d.right)}</div>
      </div>

      <h3>${esc(t('compareResults'))}</h3>
      <div class="compare">
        <div><h4>${esc(t('yourPage'))}</h4><div class="mini-frame"><iframe title="${esc(t('submittedPage'))}" id="mineFrame"></iframe></div></div>
        <div><h4>${esc(t('goalTab'))}</h4><div class="mini-frame"><iframe title="${esc(t('goalPage'))}" id="goalFrame"></iframe></div></div>
      </div>

      <div class="report-actions">
        <button class="btn ghost" id="retryBtn">${esc(t('tryAgain'))}</button>
        <a class="btn primary big" href="${last ? '#/summary' : '#/activity/' + (a.id + 1)}">${esc(last ? t('finalResults') : t('nextActivity', { id: a.id + 1 }))}</a>
      </div>`;
    $('#mineFrame').srcdoc = Checker.compose(files.html, files.css, files.js);
    $('#goalFrame').srcdoc = Checker.compose(a.solution.html, a.solution.css, a.solution.js);
    $('#retryBtn').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); editors()[a.edit].focus(); });
    if (focus) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); el.focus({ preventScroll: true }); }
  }

  /* ---------------------------------------------------------------- summary */
  function summary() {
    renderStepper(0);
    const lab = L();
    const done = ACTIVITIES.filter(a => result(a.id)).length, p = overall();
    if (done < N) {
      const nxt = nextOpen();
      view.innerHTML = `<section class="locked-view">${art(LAB.summaryArt, 'locked-art', lab.title)}
        <h1>${esc(t('resultsSoFar'))}</h1>
        <p>${t('submittedSoFar', { done, total: N, n: state.run.n })}</p>
        ${bars()}
        <a class="btn primary" href="#/activity/${nxt}">${esc(t('continueWith', { n: nxt }))}</a></section>`;
      return;
    }
    const [title, sub] = I18N.verdict(p), best = bestEver();
    const pass = LAB.passMark || 80;
    const weakest = ACTIVITIES.slice().sort((x, y) => result(x.id).score - result(y.id).score).slice(0, 3).filter(a => result(a.id).score < 100);
    view.innerHTML = `
    <section class="summary">
      <div class="summary-head">
        ${art(LAB.summaryArt, 'summary-art', '✓')}
        <div>
          <p class="kicker">${esc(t('fullCycle', { n: state.run.n }))}</p>
          <h1>${esc(state.name ? t('finishedNamed', { name: state.name, lab: lab.title }) : t('finishedAnon', { lab: lab.title }))}</h1>
          <div class="summary-score">${ring(p, 150)}<div><h2>${esc(title)}</h2><p>${esc(sub)}</p>
            <p class="muted">${esc(lab.scope ? t('approxScoreScope', { scope: lab.scope }) : t('approxScore'))}${best ? esc(t('bestEarlier', { n: best })) : ''}</p></div></div>
        </div>
      </div>
      <h2>${esc(t('scoreByActivity'))}</h2>
      ${bars()}
      ${weakest.length ? `<div class="advice"><h3>${esc(t('practiseNext'))}</h3><ul>${weakest.map(a => `<li><a href="#/activity/${a.id}">${esc(t('activityLabel', { n: a.id }))}: ${esc(Z(a).title)}</a>: ${result(a.id).score}% (${esc(M(a))}, ${esc(Z(a).topic)})${result(a.id).score < pass ? esc(t('belowMark', { pass })) : ''}</li>`).join('')}</ul></div>` : ''}
      <div class="report-actions">
        <button class="btn ghost" onclick="window.print()">${esc(t('printBtn'))}</button>
        <button class="btn primary big" id="newRun">${esc(t('newRunBtn'))}</button>
      </div>
      <p class="muted print-note">${esc(t('printNote', { date: new Date().toLocaleString(), name: state.name || t('student'), n: state.run.n }))}</p>
    </section>`;
    $('#newRun').addEventListener('click', () => {
      if (!confirm(t('newRunConfirm'))) return;
      state.history.push({ n: state.run.n, finished: new Date().toISOString(), overall: p, scores: ACTIVITIES.map(a => result(a.id).score) });
      state.run = newRun(state.run.n + 1); save(); go('#/activity/1');
    });
  }
  function bars() {
    return `<ol class="bars">${ACTIVITIES.map(a => { const r = result(a.id); const s = r ? r.score : 0; return `
      <li><a href="${unlocked(a.id) ? '#/activity/' + a.id : '#/'}"><span class="b-label">${a.id}. ${esc(Z(a).title)} <em>${esc(M(a))}</em></span>
      <span class="b-track"><span class="b-fill ${r ? band(s) : 'none'}" style="width:${s}%"></span></span>
      <span class="b-val">${r ? s + '%' : '–'}</span></a></li>`; }).join('')}</ol>`;
  }

  /* ---------------------------------------------------------------- language */
  function initLang() {
    const btn = $('#langBtn');
    if (!btn) return;
    const codes = I18N.codes();
    btn.addEventListener('click', () => {
      const i = codes.indexOf(I18N.current());
      I18N.set(codes[(i + 1) % codes.length]);
    });
    /* Flush whatever the student was typing, then redraw everything in the new language. */
    window.addEventListener('lab:langchange', () => {
      const m = location.hash.match(/^#\/activity\/(\d+)/);
      if (m && cm) { state.run.drafts[+m[1]] = current(); save(); }
      renderTop();
      route();
    });
  }

  /* ---------------------------------------------------------------- router */
  function go(h) { if (location.hash === h) route(); else location.hash = h; }
  function route() {
    const h = location.hash || '#/';
    let m;
    if ((m = h.match(/^#\/activity\/(\d+)/))) activity(+m[1]);
    else if (h.startsWith('#/summary')) summary();
    else home();
    view.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
  renderTop();
  initLang();
  window.addEventListener('hashchange', route);
  route();
})();
