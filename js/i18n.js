/*
   Language switch for the Code Lab.

   English is built in here as the fallback; the Chinese strings live in js/lang-zh.js (ZH).
   Every piece of text a student reads goes through one of these:

     I18N.t('key', { n: 3 })      interface strings ("Submit Activity {id}")
     I18N.lab()                   the config.js strings (title, lead, footer, "How it works")
     I18N.act(activity)           one activity's story, steps, checks and practise tags
     I18N.found(text)             the "We found:" line the checker produced while grading
     I18N.lint(text)              the "Also worth a look" notes from checker.js
     I18N.verdict(score)          [headline, sentence] for the score ring

   A missing translation simply falls back to English, so a partial dictionary is safe.
   To add a language: copy js/lang-zh.js, translate it, and add it to DATA below.

   Code is never translated: the fix snippets and step code blocks stay in English so
   students can copy them and have them run.
*/
const I18N = (() => {
  const STORE = (typeof LAB !== 'undefined' && LAB.storageKey ? LAB.storageKey : 'codeLab.v1') + '.lang';

  /* ------------------------------------------------------------- English (fallback) */
  const EN = {
    meta: { code: 'en', label: 'English', htmlLang: 'en', other: '中文' },
    ui: {
      skipToContent: 'Skip to content',
      homeAria: 'Home',
      activitiesNav: 'Activities',
      myResults: 'My results',
      studentGuide: 'Student guide (PDF)',
      studentGuideBtn: '📘 Student guide (PDF)',
      progressNote: 'Your progress is saved in this browser only.',
      switchLang: 'Switch language / 切换语言',

      startActivity: 'Start Activity {n}',
      continueWith: 'Continue with Activity {n}',
      seeResults: 'See my results',
      yourName: 'Your name (shown on your results)',
      namePlaceholder: 'e.g. Jordan Lee',
      runProgress: 'Run {n}: {done} of {total} submitted · {pct}% so far',

      howItWorks: 'How it works',
      unlockNote: 'Submit an activity to unlock the next one. You can redo any activity, and start the whole lab again as many times as you like.',
      newHere: ' New here? Read the <a href="{link}" target="_blank" rel="noopener">student guide</a> first.',
      theActivities: 'The activities',
      openStatus: 'Open',
      andJoin: ' and ',

      earlierRuns: 'Your earlier runs',
      thRun: 'Run',
      thFinished: 'Finished',
      thOverall: 'Overall',
      bestOverall: 'Best overall so far:',

      activityLabel: 'Activity {n}',
      lockedSuffix: ' (locked)',
      activityLocked: 'Activity {id} is locked',
      lockedBody: 'Submit Activity {prev} first. Each activity unlocks when you submit the one before it.',
      goToActivity: 'Go to Activity {id}',

      activityOf: 'Activity {id} of {n}',
      youWrite: 'You write the <strong>{kind}</strong> in <code>{file}</code>.',
      givenOne: ' The {given} is given.',
      givenMany: ' The {given} are given.',
      yourTask: 'Your task',
      whatChecked: 'What will be checked ({n} items)',
      pt: '{n} pt',
      pts: '{n} pts',

      tabEdit: 'edit',
      tabGiven: 'given',
      reset: 'Reset',
      resetTitle: 'Put the starter code back',
      resetConfirm: 'Replace your code with the starter code for this activity?',
      readonlyNote: 'This file is given and read-only. Switch to the tab marked EDIT to write your code.',

      yourPage: 'Your page',
      goalTab: 'Goal',
      desktop: 'Desktop',
      phone: 'Phone',
      previewAria: 'What to preview',
      sizeAria: 'Screen size',
      updatesAsYouType: 'Updates as you type',
      aimingFor: 'This is what you are aiming for',

      consoleLabel: 'Console',
      nothingLogged: '(nothing logged yet)',
      previewTitle: 'Preview of your page',
      submitHint: 'Happy with it? Submit to see your score, your mistakes, and the proper code.',
      submitActivity: 'Submit Activity {id}',
      checking: 'Checking…',
      submitAgain: 'Submit again',

      resultHead: 'Activity {id} result · attempt {n}',
      earned: 'You earned <strong>{earned} of {total}</strong> points.',
      whatToFix: 'What to fix ({n})',
      weFound: 'We found:',
      whyLabel: 'Why:',
      correctCode: 'The correct code:',
      allGood: '✓ Every check passed. Nicely done!',
      alsoWorth: 'Also worth a look in your code (not scored):',
      whatRight: '✓ What you got right ({n})',
      compareCode: 'Compare your {kind} with the proper code',
      legend: '<span class="ln del">red</span> lines in yours are different or extra · <span class="ln add">green</span> lines in the proper code are the ones you were missing or wrote differently.',
      yourCode: 'Your code',
      properCode: 'Proper code',
      compareResults: 'Compare the results',
      submittedPage: 'Your submitted page',
      goalPage: 'The goal page',
      tryAgain: 'Try this activity again',
      finalResults: 'See my final results →',
      nextActivity: 'Next: Activity {id} →',

      resultsSoFar: 'Your results so far',
      submittedSoFar: 'You have submitted <strong>{done} of {total}</strong> activities in run {n}. Finish all {total} to get your full-cycle score.',
      fullCycle: 'Full cycle · Run {n} complete',
      finishedNamed: '{name}, you finished the {lab}!',
      finishedAnon: 'You finished the {lab}!',
      approxScore: 'Approximate overall score.',
      approxScoreScope: 'Approximate overall score across {scope}.',
      bestEarlier: ' Your best earlier run: {n}%.',
      scoreByActivity: 'Score by activity',
      practiseNext: 'Where to practise next',
      adviceItem: 'Activity {id}: {title}: {score}% ({module}, {topic})',
      belowMark: ' · below {pass}%',
      printBtn: 'Print or save as PDF',
      newRunBtn: 'Start the lab again',
      newRunConfirm: 'Start a new run? This run’s scores are saved in your history, and every activity starts fresh.',
      printNote: 'Printed {date} · {name} · Run {n}',
      student: 'Student',

      notFound: 'not found',
      elementNotFound: '(element not found)',
      babelMissing: 'Babel did not load (check your internet connection)'
    },
    lab: null,          // not needed: LAB itself holds the English text
    acts: {},           // not needed: activities.js holds the English text
    verdicts: [
      ['Excellent', 'You have this topic nailed.'],
      ['Good work', 'A few details to tidy up.'],
      ['Getting there', 'Review the explanations below and try again.'],
      ['Keep practising', 'Read each explanation, compare with the proper code, and try again.']
    ],
    foundRules: [],
    lintRules: []
  };

  const DATA = { en: EN, zh: (typeof ZH !== 'undefined' ? ZH : null) };

  /* ------------------------------------------------------------- current language */
  function detect() {
    try {
      const saved = localStorage.getItem(STORE);
      if (saved && DATA[saved]) return saved;
    } catch (e) {}
    try {
      const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
      if (nav.indexOf('zh') === 0) return 'zh';
    } catch (e) {}
    return 'en';
  }
  let lang = detect();
  const dict = () => DATA[lang] || EN;

  const fmt = (s, v) => v ? String(s).replace(/\{(\w+)\}/g, (m, k) => (v[k] != null ? v[k] : m)) : String(s);

  /* ------------------------------------------------------------- public helpers */
  function t(key, vars) {
    let s = dict().ui ? dict().ui[key] : null;
    if (s == null) s = EN.ui[key];
    return s == null ? key : fmt(s, vars);
  }

  /* config.js text: title, kicker, lead, footer, and the four "How it works" cards. */
  function lab() {
    const over = dict().lab;
    return over ? Object.assign({}, LAB, over) : LAB;
  }

  /* One activity's teaching text, with English for anything not translated yet.
     Steps and checks keep the original shape (string or { text, code }) so the
     engine does not have to know about translation at all. */
  function act(a) {
    const over = dict().acts ? dict().acts[a.id] : null;
    if (!over) return a;

    const steps = (over.steps && over.steps.length === a.steps.length)
      ? a.steps.map((s, i) => {
          const z = over.steps[i];
          if (typeof z === 'string') return z;
          if (z && typeof z === 'object') return Object.assign({}, s, { text: z.text || s.text });
          return s;
        })
      : a.steps;

    const checks = (over.checks && over.checks.length === a.checks.length)
      ? a.checks.map((c, i) => {
          const z = over.checks[i] || {};
          return Object.assign({}, c, {
            text: z.text || c.text,
            explain: z.explain || c.explain,
            fix: z.fix || c.fix
          });
        })
      : a.checks;

    return Object.assign({}, a, {
      title: over.title || a.title,
      topic: over.topic || a.topic,
      module: over.module || a.module,
      story: over.story || a.story,
      practise: over.practise || a.practise,
      steps, checks
    });
  }

  /* The module label, e.g. "Module 4" / "模块 4". */
  const moduleOf = a => act(a).module || a.module;

  /* Grading feedback built at run time, matched with regular expressions. */
  function translate(text, rules) {
    if (!text) return text;
    for (const [re, zh] of rules) if (re.test(text)) return text.replace(re, zh);
    return text;
  }
  const found = s => translate(s, dict().foundRules || []);
  const lint = s => translate(s, dict().lintRules || []);

  function verdict(p) {
    const i = p >= 90 ? 0 : p >= 75 ? 1 : p >= 50 ? 2 : 3;
    const v = dict().verdicts ? dict().verdicts[i] : null;
    return v || EN.verdicts[i];
  }

  /* ------------------------------------------------------------- switching */
  function set(next) {
    if (!DATA[next] || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORE, next); } catch (e) {}
    window.dispatchEvent(new CustomEvent('lab:langchange', { detail: { lang: next } }));
  }
  const codes = () => Object.keys(DATA).filter(k => !!DATA[k]);
  const current = () => lang;
  /* The button shows the language you switch *to*. */
  const buttonLabel = () => (dict().meta && dict().meta.other) || '中文';
  const htmlLang = () => (dict().meta && dict().meta.htmlLang) || 'en';

  return { t, lab, act, moduleOf, found, lint, verdict, set, codes, current, buttonLabel, htmlLang };
})();
