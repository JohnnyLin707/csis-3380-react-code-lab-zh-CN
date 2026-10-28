/*
   简体中文翻译数据 (Simplified Chinese data for the React Code Lab).

   这个文件只包含“内容”，不包含逻辑：翻译引擎在 js/i18n.js。
   想再增加一种语言，复制这个文件改成另一种语言，并在 js/i18n.js 的 DATA 里登记即可。

   注意：代码块 (fix / code) 保持英文原样 —— 代码不应该被翻译，
   否则学生会复制出跑不起来的代码。
*/
const ZH = {
  meta: { code: 'zh', label: '简体中文', htmlLang: 'zh-CN', other: 'English' },

  /* ------------------------------------------------------------------ 界面文案 */
  ui: {
    skipToContent: '跳到主要内容',
    homeAria: '首页',
    activitiesNav: '练习',
    myResults: '我的成绩',
    studentGuide: '学生指南 (PDF)',
    studentGuideBtn: '📘 学生指南 (PDF)',
    progressNote: '你的进度只保存在这台浏览器中。',
    switchLang: '切换语言 / Switch language',

    startActivity: '开始练习 {n}',
    continueWith: '继续练习 {n}',
    seeResults: '查看我的成绩',
    yourName: '你的名字（会显示在成绩单上）',
    namePlaceholder: '例如：张小明',
    runProgress: '第 {n} 轮：已提交 {done} / {total} · 目前 {pct}%',

    howItWorks: '使用方法',
    unlockNote: '提交一个练习即可解锁下一个。你可以重做任意练习，也可以随时重新开始整轮实验。',
    newHere: '第一次来？请先阅读<a href="{link}" target="_blank" rel="noopener">学生指南</a>。',
    theActivities: '练习列表',
    openStatus: '可开始',
    andJoin: ' 和 ',

    earlierRuns: '你之前的几轮',
    thRun: '轮次',
    thFinished: '完成时间',
    thOverall: '总成绩',
    bestOverall: '历史最好总成绩：',

    activityLabel: '练习 {n}',
    lockedSuffix: '（未解锁）',
    activityLocked: '练习 {id} 尚未解锁',
    lockedBody: '请先提交练习 {prev}。每个练习在提交前一个之后才会解锁。',
    goToActivity: '前往练习 {id}',

    activityOf: '练习 {id} / 共 {n}',
    youWrite: '你只需要编写 <strong>{kind}</strong> 文件里的 <code>{file}</code>。',
    givenOne: '其中 {given} 已给出。',
    givenMany: '其中 {given} 已给出。',
    yourTask: '你的任务',
    whatChecked: '评分标准（共 {n} 项）',
    pt: '{n} 分',
    pts: '{n} 分',

    tabEdit: '编写',
    tabGiven: '已给出',
    reset: '重置',
    resetTitle: '恢复本练习的初始代码',
    resetConfirm: '用本练习的初始代码替换你现在的代码吗？',
    readonlyNote: '该文件已给出且为只读。请切换到标有“编写”的标签页来写代码。',

    yourPage: '你的页面',
    goalTab: '目标效果',
    desktop: '桌面',
    phone: '手机',
    previewAria: '预览内容',
    sizeAria: '屏幕尺寸',
    updatesAsYouType: '随输入实时更新',
    aimingFor: '这就是你要达成的效果',

    consoleLabel: '控制台',
    nothingLogged: '（暂无输出）',
    previewTitle: '你的页面预览',
    previewAriaLabel: '预览你的页面',
    submitHint: '满意了？提交后即可看到得分、错误原因和标准代码对照。',
    submitActivity: '提交练习 {id}',
    checking: '正在检查…',
    submitAgain: '再次提交',

    resultHead: '练习 {id} 结果 · 第 {n} 次尝试',
    earned: '你获得了 <strong>{total} 分中的 {earned} 分</strong>。',
    whatToFix: '需要修改的地方（{n}）',
    weFound: '系统发现：',
    whyLabel: '原因：',
    correctCode: '正确代码：',
    allGood: '✓ 全部检查通过。做得漂亮！',
    alsoWorth: '你的代码中还有这些值得注意的地方（不计分）：',
    whatRight: '✓ 你做对的地方（{n}）',
    compareCode: '把你的 {kind} 与标准代码对比',
    legend: '<span class="ln del">红色</span>行是你的代码中不同或多出来的 · <span class="ln add">绿色</span>行是标准代码中你缺少或写法不同的部分。',
    yourCode: '你的代码',
    properCode: '标准代码',
    compareResults: '效果对比',
    submittedPage: '你提交的页面',
    goalPage: '目标页面',
    tryAgain: '再试一次本练习',
    finalResults: '查看我的最终成绩 →',
    nextActivity: '下一个：练习 {id} →',

    resultsSoFar: '你目前的成绩',
    submittedSoFar: '第 {n} 轮中你已经提交了 <strong>{done} / {total}</strong> 个练习。完成全部 {total} 个即可得到整轮成绩。',
    fullCycle: '完整一轮 · 第 {n} 轮已完成',
    finishedNamed: '{name}，你完成了「{lab}」！',
    finishedAnon: '你完成了「{lab}」！',
    approxScore: '本轮总成绩（估算）。',
    approxScoreScope: '涵盖{scope}的总成绩（估算）。',
    bestEarlier: '你之前最好的一轮：{n}%。',
    scoreByActivity: '各练习得分',
    practiseNext: '接下来该重点练习',
    adviceItem: '练习 {id}：{title}：{score}%（{module}，{topic}）',
    belowMark: ' · 低于 {pass}%',
    printBtn: '打印或保存为 PDF',
    newRunBtn: '重新开始整轮实验',
    newRunConfirm: '开始新的一轮吗？本轮成绩会保存到你的历史记录中，所有练习都会重新开始。',
    printNote: '打印时间 {date} · {name} · 第 {n} 轮',
    student: '同学',

    notFound: '未找到',
    elementNotFound: '（未找到该元素）',
    babelMissing: 'Babel 没有加载成功（请检查网络连接）'
  },

  /* ------------------------------------------------------------------ config.js 文案 */
  lab: {
    title: 'React 代码实验室',
    brand: 'React 代码实验室',
    kicker: 'CSIS 3380 · 第 4–7 模块',
    scope: '第 4–7 模块',
    lead: '十个简短、可动手操作的 React 练习，基于课程案例「**电影之夜**」和「**咖啡馆**」。写代码、即时预览、提交作答，系统会逐条解释你的错误，并把标准代码放在旁边供你对照。',
    footer: 'CSIS 3380 · Web 应用开发',
    heroAlt: '「电影之夜」应用，显示《布达佩斯大饭店》详情页',
    how: [
      { title: '阅读任务', text: '每个练习都延续「电影之夜」或咖啡馆应用，并列出具体步骤。' },
      { title: '编写代码', text: '通常你要用 JSX 编写 app.js；练习 1 编写 HTML。其余文件已给出。' },
      { title: '运行与提交', text: '你输入时应用会实时重新渲染。觉得和目标一致时即可提交。' },
      { title: '从报告中学习', text: '查看每一处错误、原因、标准代码以及你的得分。' }
    ]
  },

  /* ------------------------------------------------------------------ 十个练习的内容 */
  acts: {
    1: {
      module: '模块 4',
      topic: '在页面中加入 React',
      title: '为「电影之夜」页面加入 React',
      story: '「电影之夜」的 `app.js` 已经写好，但 `index.html` 什么都没有加载，所以页面是空的。一个 React 页面需要四样东西：一个供 React 填充的空元素、React 库、JSX 的翻译器（Babel），以及你自己的代码。这里不需要安装任何东西：库文件来自 **unpkg**，一个免费的 CDN（提供代码文件的网站），和课堂上一样。',
      steps: [
        { text: '把注释 1 替换为**根元素**。它一开始是空的；React 会把整个应用画在里面。' },
        { text: '把注释 2 替换为下面**两个 script 标签**，顺序不能变。第一个加载 **React**，负责构建组件；第二个加载 **ReactDOM**，负责把它们画到页面上。ReactDOM 依赖 React，所以 React 必须在前面。' },
        { text: '把注释 3 替换为 **Babel**。浏览器看不懂 JSX（`app.js` 里那种类似 HTML 的代码）；Babel 会把它翻译成普通的 JavaScript。' },
        { text: '把注释 4 替换为你的**应用代码**。`type="text/babel"` 会告诉 Babel 在运行前先翻译这个文件。' },
        '看一下预览：「电影之夜」的标题栏和四部电影会出现。如果页面一直是空的，请阅读预览下方**控制台**栏里的红色提示。'
      ],
      practise: ['script 顺序', '根元素', 'type="text/babel"'],
      checks: [
        { text: '页面中有 `<div id="root">`',
          explain: '`ReactDOM.createRoot(document.getElementById("root"))` 需要一个带该 id 的元素。React 会把所有内容渲染到它里面。' },
        { text: 'React 在 ReactDOM 之前加载',
          explain: 'ReactDOM 建立在 React 之上：它的 script 运行时会去找全局的 `React`，所以 React 必须已经加载好。' },
        { text: '已加载 Babel standalone',
          explain: '浏览器不认识 JSX。Babel standalone 会在浏览器里把 `<h1>…</h1>` 翻译成 `React.createElement(…)`。' },
        { text: '`app.js` 使用了 `type="text/babel"` 加载',
          explain: 'Babel 只会翻译标了 `type="text/babel"` 的 script。没有它，浏览器会把 JSX 当作普通 JavaScript 执行，并在第一个 `<` 处报错停止。' },
        { text: 'script 标签放在 `#root` 之后',
          explain: 'script 一加载就会执行。把它们放在 `<body>` 末尾，意味着 `app.js` 查找 `#root` 时它已经存在了。' },
        { text: '「电影之夜」在预览中成功渲染',
          explain: '当 React、ReactDOM、根元素和 app.js 都就位后，`root.render(<App />)` 就会把应用画出来。' }
      ]
    },

    2: {
      module: '模块 4',
      topic: 'JSX、表达式与条件判断',
      title: '用 JSX 编写页头',
      story: '请用数据（而不是写死的文字）来构建「电影之夜」的页头和页脚：如果新增一部电影，数字必须自动更新。',
      steps: [
        '在 `App` 中，于 `<header>` 内渲染 `<h1>{ title }</h1>`：使用 `title` 变量，不要直接写文字。',
        '在 `<h1>` 之后渲染 `<span className="stats">Movies: { movies.length }</span>`，但**仅当** `showStats` 为 true 时才显示（使用 `&&`）。',
        '在 `<footer>` 中使用**三元运算符**（`? :`）：当 `watchedCount === movies.length` 时显示 `All watched!`，否则显示 `Watched 2 of 4`（由 `watchedCount` 和 `movies.length` 拼出）。',
        '请记住：JSX 使用 `className`，而不是 `class`。'
      ],
      practise: ['{ } 表达式', '&&', '? :', 'className'],
      checks: [
        { text: '`<h1>` 显示的是 `title` 变量',
          explain: '花括号可以把 JavaScript 表达式放进 JSX。`{ title }` 会显示变量当前的值，所以数据一变，页面就跟着变。' },
        { text: '统计徽章通过 `movies.length` 显示「Movies: 4」',
          explain: '`movies.length` 会统计数组长度，所以新增电影时徽章依然正确。直接写 4 就会过时。' },
        { text: '徽章使用 `showStats &&` 来控制显示',
          explain: '`condition && <element>` 只在条件为 true 时渲染该元素；为 false 时 React 什么也不渲染。' },
        { text: '页脚使用三元运算符显示「Watched 2 of 4」',
          explain: '`condition ? A : B` 是一个表达式，因此可以放进 `{ }` 里；而 `if` 语句不行。' },
        { text: '数字不是写死的',
          explain: '写死的数字不会随数据变化。请始终从数组里计算出来。' },
        { text: 'JSX 使用 `className`，而不是 `class`',
          explain: '`class` 是 JavaScript 的保留字，所以 JSX 使用 `className`。React 看到 `class` 时会在控制台给出警告。' }
      ]
    },

    3: {
      module: '模块 4',
      topic: '组件与 props',
      title: '构建 Movie 组件',
      story: '每一行电影的外观都一样，只有数据不同。请创建一个可复用的 `Movie` 组件，并通过 props 把每部电影的信息传进去。',
      steps: [
        '编写组件 `Movie`，接收 `props`，返回一个 `<div className="movie">`，其中包含 `<div className="movie-info">`。',
        '在其中显示 `<span className="movie-title">{ props.title }</span>` 和 `<span className="movie-meta">{ props.year } · { props.genre }</span>`。',
        '在 `App` 中渲染 `<Header title="Movie Night" totalMovies={ movies.length } />`（Header 已给出）。',
        '在它下面为 `movies[0]` 和 `movies[1]` 渲染**两个** `<Movie />` 元素，并把数组中的 `title`、`year`、`genre` 传进去。'
      ],
      practise: ['函数组件', 'props', '组合组件'],
      checks: [
        { text: '定义并使用了 `Movie` 组件',
          explain: '组件就是一个返回 JSX 的函数。它的名字必须以大写字母开头，这样 JSX 才会把 `<Movie />` 当作组件，而不是 HTML 标签。' },
        { text: '页头通过 props 显示「Movie Night」和「Movies: 4」',
          explain: 'props 就是写在组件上的属性。`Header` 通过 `props.title` 和 `props.totalMovies` 来读取它们。' },
        { text: '两行电影：《千与千寻》和《盗梦空间》',
          explain: '同一个组件可以渲染不同的数据：每个 `<Movie />` 都会收到属于自己的 props。' },
        { text: '每行显示年份和类型：「2001 · Animation」',
          explain: '一个元素里可以放多个表达式：`{ props.year } · { props.genre }`。' },
        { text: '数据来自数组，而不是写死在 JSX 里',
          explain: '请把 `movies[0].title` 作为 prop 传入，而不是直接写 "Spirited Away"：这样组件对任何电影都适用。' }
      ]
    },

    4: {
      module: '模块 4',
      topic: '用 map() 渲染列表与 key',
      title: '用 map() 渲染整个片单',
      story: '一部电影写一个 `<Movie />` 是无法扩展的。请用 `map()` 把数组转成组件列表，并给 React 提供它需要的 key。',
      steps: [
        '在 `App` 中，把注释替换为 `{ props.movies.map(movie => <Movie … />) }`。',
        '把每部 `movie` 的 `title`、`year`、`genre`、`watched` 和 `staffPick` 传进去。',
        '给每个 `<Movie />` 一个来自电影 `id` 的 `key`：`key={ movie.id }`。',
        '把 `watchedCount` 设为 `watched: true` 的电影数量（使用 `filter`），这样页脚才正确。'
      ],
      practise: ['map()', 'key', 'filter()', '条件徽章'],
      checks: [
        { text: '四部电影全部渲染出来',
          explain: '`map()` 会对每个元素调用一次你的函数，并返回一个由 `<Movie />` 元素组成的新数组，React 会按顺序渲染它们。' },
        { text: '列表用 `map()` 生成，而不是写了四遍',
          explain: '用 `map()`，一行 JSX 就能处理任意数量的电影，包括以后新增的。' },
        { text: '每部电影都有来自 `id` 的 `key`（无 React 警告）',
          explain: 'key 告诉 React 每次渲染时哪个元素对应哪个数据。请使用数据中稳定的 id；用数组下标在增删或排序时会出问题。' },
        { text: '徽章显示：《千与千寻》是 STAFF PICK 且 WATCHED；《寻梦环游记》是 NOT YET',
          explain: '只有把 `watched` 和 `staffPick` 作为 props 传下去，徽章才会正常显示。' },
        { text: '页脚用 `filter` 统计并显示「Watched 2 of 4」',
          explain: '`filter()` 会保留通过测试的项，`.length` 用来统计数量。' }
      ]
    },

    5: {
      module: '模块 5',
      topic: '类组件与 state',
      title: '用 State 统计咖啡馆订单',
      story: 'Alex 的咖啡馆需要一个订单统计：+ 和 − 改变每样商品的数量，页头显示订单总额。菜单行已给出；你要编写持有 state 的 `App` 类。',
      steps: [
        '编写 `class App extends React.Component`，并加上 `state = { items: this.props.items }`。',
        { text: '添加一个箭头函数方法 `handleQtyChange(delta, id)`。它基于上一次的 state 请求新 state：遍历 items，只把该 `id` 的项替换成带新数量的副本（数量不能小于 0）。' },
        '在 `render()` 中计算 `orderTotal`：`price * qty` 的总和，并用 `.toFixed(2)` 处理。',
        '返回 `<div className="menu">`，包含 `<MenuHeader itemCount={…} orderTotal={orderTotal} />`，以及每个条目对应的 `<MenuItem key={item.id} {...item} changeQty={this.handleQtyChange} />`。'
      ],
      practise: ['类组件', 'this.state', 'setState(prevState => …)', '不可变更新'],
      checks: [
        { text: '`App` 是继承 `React.Component` 的类，并渲染菜单',
          explain: '类组件把数据保存在 `this.state` 中，并在 `render()` 里把它画出来。' },
        { text: '点击 Espresso 的 + 后数量为 1，订单金额为 $3.25',
          explain: '`setState` 保存新的 items 并让 React 再次调用 `render()`，于是数量和总额会一起更新。' },
        { text: '点击 Maple Latte 两次：数量 2，订单金额变为 $14.25',
          explain: '只有被点击 `id` 的那一项会变化；其余项由 `map()` 原样返回。' },
        { text: '− 按钮可以把数量再减回去',
          explain: '同一个处理函数服务于两个按钮：`delta` 为 +1 或 −1。' },
        { text: '总额始终显示两位小数（只点 Maple Latte 时为 $5.50）',
          explain: '价格就是金额：`5.5` 应显示为 `5.50`。`toFixed(2)` 会把数字转成恰好两位小数的字符串。' },
        { text: '用 `setState(prevState => …)` 更新 state，绝不直接修改',
          explain: '直接修改 `this.state` 不会触发重新渲染。更新函数形式会使用最新的 state，这在频繁更新时很重要。' },
        { text: '每个菜单项都有 `key`',
          explain: '组件列表需要稳定的 `key`，例如条目的 `id`。' }
      ]
    },

    6: {
      module: '模块 5',
      topic: '状态提升',
      title: '把「已观看」状态提升到 App',
      story: '每部电影都需要一个「标记已看」按钮，页脚必须统计已看的电影数。页脚无法看到 `Movie` 内部的数据，所以状态必须放在它们共同的父组件 `App` 中。',
      steps: [
        '在 `App` 中添加 `handleToggleWatched = (id) => { … }`，使用 `setState(prevState => …)` 来翻转该 `id` 电影的 `watched`（配合 map 和展开运算符）。',
        '把它传给每一部电影：`<Movie … onToggle={ this.handleToggleWatched } />`。',
        '在 `Movie` 中添加 `<button className="toggle">`，点击时调用 `props.onToggle(props.id)`。已看时按钮文字为 `Mark unwatched`，否则为 `Mark watched`。',
        '页脚已经从 `this.state.movies` 统计，所以它会自动更新。'
      ],
      practise: ['状态提升', '函数作为 props 传递', '事件向上、数据向下'],
      checks: [
        { text: '每部电影都有一个文字正确的切换按钮',
          explain: '三元运算符根据 `watched` prop 决定按钮文字。' },
        { text: '页面加载无报错，页脚显示「Watched 2 of 4」',
          explain: '写成 `onClick={ props.onToggle(props.id) }` 会在渲染时就调用函数，导致渲染期间设置 state 而崩溃。应该传一个函数：`onClick={() => props.onToggle(props.id)}`。' },
        { text: '点击《寻梦环游记》的按钮会标记为已看，页脚显示 3 of 4',
          explain: '子组件把点击事件向上报告（`props.onToggle(id)`）；App 更新自己的 state；新数据再向下流回该行和页脚。' },
        { text: '点击《盗梦空间》的按钮会标记为未看（回到 2 of 4）',
          explain: '`!movie.watched` 会在 true 和 false 之间来回翻转。' },
        { text: '状态保留在 App 中（Movie 自身没有状态）',
          explain: '单一数据源：如果每个 Movie 各自保存 `watched` 状态，页脚就永远无法知道。' },
        { text: '更新时复制对象，而不是直接修改',
          explain: 'React 通过比较新旧对象来决定重新渲染什么。就地修改旧对象会把变化隐藏起来。' }
      ]
    },

    7: {
      module: '模块 6',
      topic: 'useState 与受控输入',
      title: '用受控表单添加电影',
      story: '「电影之夜」改用函数组件和 Hook。请添加一个小型表单，把新电影加入列表，并让输入框由 React state 控制。',
      steps: [
        '在 `App` 中创建两个 state：`const [movies, setMovies] = React.useState(initialMovies);` 和 `const [title, setTitle] = React.useState("");`。',
        '让输入框受控：`value={ title }` 和 `onChange={ e => setTitle(e.target.value) }`。',
        { text: '编写 `handleSubmit`。它要阻止页面刷新、忽略空白标题、把新电影加入一个**新**数组，并清空输入框。请填写 `…` 部分：' },
        '用 `<form className="add" onSubmit={ handleSubmit }>` 连接它，在徽章中显示 `{ movies.length }`，并用 `movies.map` 渲染列表。'
      ],
      practise: ['useState', '受控输入', 'onSubmit + preventDefault', '展开添加'],
      checks: [
        { text: '加载时显示四部电影和「Movies: 4」，并使用 `useState`',
          explain: '`useState(initial)` 返回当前值和一个 setter。调用 setter 会重新渲染组件。' },
        { text: '输入框由 state 控制',
          explain: '有了 `value` 和 `onChange`，React state 就是唯一数据源：每次按键都会更新 state，而 state 决定输入框显示什么。' },
        { text: '输入「Arrival」并提交后，它会被加到列表末尾',
          explain: '`setMovies([...movies, newMovie])` 会创建一个包含原有全部内容加上新电影的新数组。React 需要新数组才能察觉到变化。' },
        { text: '添加后输入框被清空',
          explain: '因为输入框是受控的，`setTitle("")` 就能把它清空。' },
        { text: '提交空标题或纯空格时不会添加任何内容',
          explain: '`title.trim()` 会去掉空格；空字符串是假值，所以 `if (!title.trim()) return;` 会提前返回。' },
        { text: '表单使用了带 `preventDefault()` 的 `onSubmit`',
          explain: '表单提交时通常会刷新页面，那样会清空应用的状态。' }
      ]
    },

    8: {
      module: '模块 6',
      topic: 'useEffect 与 useRef',
      title: '副作用：标题、聚焦与倒计时',
      story: '「电影之夜」有三个小副作用：让浏览器标签页标题保持最新、加载时把光标放进搜索框、以及显示一个隐藏时能干净停止的倒计时。',
      steps: [
        { text: '在 `App` 中添加一个副作用，把浏览器标签页标题设为 `Movie Night (2/4)`（已看 / 总数）。末尾的数组列出该副作用依赖的值，因此 `watchedCount` 变化时会重新执行：' },
        '创建 `const searchRef = React.useRef(null);`，在搜索框上用 `ref={ searchRef }` 绑定它，并在首次渲染后聚焦一次（依赖数组为 `[]` 的副作用）。',
        { text: '在 `Countdown` 中，用副作用启动一个定时器，每秒把 `seconds` 减 1，并**返回一个清理函数**。组件消失时 React 会调用这个清理函数：' },
        '已给出的「Hide countdown」按钮会卸载 `Countdown`；有了清理函数，它的定时器就会停止。'
      ],
      practise: ['useEffect 与依赖数组', '清理函数', 'useRef', 'document.title'],
      checks: [
        { text: '标签页标题显示为「Movie Night (2/4)」',
          explain: '修改 `document.title` 是副作用：它改动了 React 之外的东西，因此应放在渲染之后执行的 `useEffect` 里。' },
        { text: '切换电影状态后标题会更新（3/4）',
          explain: '依赖数组 `[watchedCount]` 告诉 React：该值变化时就重新运行这个副作用。' },
        { text: '首次渲染后搜索框获得焦点，且使用了 `useRef`',
          explain: '`useRef` 让你在 `ref.current` 里拿到真实的 DOM 元素。依赖数组为 `[]` 的副作用只会执行一次，且在元素存在之后运行。' },
        { text: '倒计时每秒递减',
          explain: '`setInterval` 每 1000 毫秒调用一次你的函数；`setSeconds(s => s - 1)` 始终使用最新的值。' },
        { text: '隐藏倒计时会停止它的定时器（清理）',
          explain: '组件卸载时，React 会执行你的副作用返回的函数。没有 `clearInterval`，定时器会继续运行，并尝试更新一个已经不存在的组件。' }
      ]
    },

    9: {
      module: '模块 6',
      topic: 'useContext',
      title: '用 Context 共享浅色/深色主题',
      story: '「电影之夜」要加入深色模式。页头按钮和外层盒子都需要主题，以后会有更多组件需要。与其逐层传递 props，不如用 context 共享它。',
      steps: [
        '在组件外部创建 context：`const ThemeContext = React.createContext(null);`。',
        '在 `App` 中保留 `const [theme, setTheme] = React.useState("light");`，并写一个在 `"light"` 和 `"dark"` 之间切换的 `toggleTheme`。',
        '用 `<ThemeContext.Provider value={{ theme, toggleTheme }}>` 包住整个应用，并给外层盒子加上 `className={ "watchlist " + theme }`。',
        '在 `Header` 中用 `React.useContext(ThemeContext)` 读取 context（不用 props），并显示一个 `<button className="theme-btn">`：浅色模式下文字为 `Dark`，深色模式下为 `Light`，点击时调用 `toggleTheme`。'
      ],
      practise: ['createContext', 'Provider', 'useContext', '避免 props 逐层传递'],
      checks: [
        { text: '创建了 context 并在应用外层提供了它',
          explain: 'Provider 会把它的 `value` 提供给内部的每一个组件，无论层级多深。' },
        { text: '应用初始为浅色模式，按钮显示「Dark」',
          explain: '外层盒子上的主题类让已给出的 CSS 能分别设置浅色和深色样式。' },
        { text: '点击按钮切换到深色（按钮变为「Light」）',
          explain: 'Header 从 context 中调用 `toggleTheme`；App 的 state 改变；所有读取该 context 的组件都会重新渲染。' },
        { text: '再次点击会切回浅色',
          explain: '切换开关必须双向都能工作。' },
        { text: 'Header 使用 `useContext` 读取主题，而不是 props',
          explain: '这正是 context 的意义：避免 props 逐层传递。任何组件都可以调用 `useContext`，直接从最近的 Provider 拿到值。' }
      ]
    },

    10: {
      module: '模块 7',
      topic: 'React Router',
      title: '路由跳转到电影详情页',
      story: '「电影之夜」要有页面了：`/` 是片单，每部电影的详情页在 `/movies/:id`，其他地址则显示「未找到」页面。',
      steps: [
        { text: '在 `App` 中，于已给出的 `<MemoryRouter>` 内部添加路由。每个 `<Route>` 把一个地址（`path`）和要显示的页面（`element`）配对；`:id` 是占位符，`*` 匹配其他所有地址：' },
        '在 `MovieList` 中，把每个标题做成 `<Link className="movie-link" to={ "/movies/" + movie.id }>`（不要用 `<a href>`）。',
        '在 `MovieDetail` 中用 `const { id } = useParams();` 读取 id，用 `movies.find(m => m.id === Number(id))` 找到电影，并显示 `<h2>{ movie.title }</h2>`、一个包含年份和类型的 `<p>`，以及 `<Link to="/">← Back to the watchlist</Link>`。',
        '在预览中点击一部电影，然后再点击返回链接。'
      ],
      practise: ['Routes 与 Route', 'Link', 'useParams', '通配路由'],
      checks: [
        { text: '首页路由显示四个电影链接',
          explain: '`<Route path="/" element={ <MovieList /> } />` 会在地址为 `/` 时渲染列表。`<Link>` 会渲染一个由 React Router 控制的 `<a>`。' },
        { text: '链接使用 `<Link to>`，而不是 `<a href>`',
          explain: '`<a href>` 会重新加载整个页面并丢失 React 的状态。`<Link>` 则无需刷新即可切换路由。' },
        { text: '点击《布达佩斯大饭店》会打开它的详情页',
          explain: '`path="/movies/:id"` 匹配 `/movies/3`；`useParams()` 返回 `{ id: "3" }`。id 是字符串，比较前请用 `Number()` 转换。' },
        { text: '返回链接可以回到片单',
          explain: '`<Link to="/">` 会导航回首页路由。' },
        { text: '详情页使用了 `useParams`，并且存在通配路由',
          explain: '`path="*"` 会匹配其他路由都没匹配到的地址，这样访客看到的是「Page not found」，而不是一片空白。' }
      ]
    }
  },

  /* ------------------------------------------------------------------ 自动判分反馈（动态生成，用正则匹配） */
  foundRules: [
    [/^found “root”, but not as <div id="root">$/, '找到了 “root”，但不是 <div id="root"> 的形式'],
    [/^no root element$/, '没有根元素'],
    [/^no React script$/, '没有 React 的 script'],
    [/^no ReactDOM script$/, '没有 ReactDOM 的 script'],
    [/^ReactDOM is loaded before React$/, 'ReactDOM 被放在了 React 之前'],
    [/^no @babel\/standalone script$/, '没有 @babel/standalone 的 script'],
    [/^tag: ([\s\S]*)$/, '标签：$1'],
    [/^no <script> loads app\.js$/, '没有加载 app.js 的 <script>'],
    [/^a React script comes before #root$/, '有 React 的 script 出现在 #root 之前'],
    [/^(\d+) movies rendered$/, '渲染出 $1 部电影'],
    [/^nothing rendered$/, '没有渲染出任何内容'],
    [/^h1: “([\s\S]*)”$/, 'h1：「$1」'],
    [/^h1: “([\s\S]*)”, but the text is typed in instead of \{ title \}$/, 'h1：「$1」，但文字是写死的，而不是 { title }'],
    [/^no h1 in the header$/, '页头里没有 h1'],
    [/^badge: “([\s\S]*)”$/, '徽章：「$1」'],
    [/^no \.stats badge$/, '没有 .stats 徽章'],
    [/^no “showStats &&” in your JSX$/, 'JSX 中没有 “showStats &&”'],
    [/^footer: “([\s\S]*)”$/, '页脚：「$1」'],
    [/^no badge yet$/, '还没有徽章'],
    [/^found a typed-in “4” in your JSX$/, 'JSX 中发现写死的 “4”'],
    [/^no element with className="stats" yet$/, '还没有 className="stats" 的元素'],
    [/^found class= in your JSX$/, 'JSX 中发现 class='],
    [/^Movie is defined but never rendered as <Movie \/>$/, '定义了 Movie，但没有用 <Movie /> 渲染它'],
    [/^no component named Movie$/, '没有名为 Movie 的组件'],
    [/^h1 “([\s\S]*)”, badge “([\s\S]*)”$/, 'h1「$1」，徽章「$2」'],
    [/^titles: ([\s\S]*)$/, '片名：$1'],
    [/^no \.movie rows$/, '没有 .movie 行'],
    [/^first meta: “([\s\S]*)”$/, '第一个 meta：「$1」'],
    [/^no \.movie-meta$/, '没有 .movie-meta'],
    [/^no movies rendered yet$/, '还没有渲染出任何电影'],
    [/^the movie titles appear more than once in your code$/, '电影片名在你的代码中出现了不止一次'],
    [/^(\d+) movie row\(s\)$/, '$1 行电影'],
    [/^(\d+) movie row\(s\) \(([\s\S]*)\)$/, '$1 行电影（$2）'],
    [/^(\d+) <Movie> element\(s\) written in your code$/, '你的代码中写了 $1 个 <Movie> 元素'],
    [/^React warned: each child in a list should have a unique "key" prop$/, 'React 警告：列表中的每个子元素都应有一个唯一的 "key" 属性'],
    [/^Spirited Away row: “([\s\S]*)”$/, '《千与千寻》这一行：「$1」'],
    [/^movie rows missing$/, '缺少电影行'],
    [/^(\d+) menu item\(s\) rendered$/, '渲染出 $1 个菜单项'],
    [/^Espresso shows ([\s\S]*), header “([\s\S]*)”$/, 'Espresso 显示 $1，页头「$2」'],
    [/^Maple Latte shows ([\s\S]*), header “([\s\S]*)”$/, 'Maple Latte 显示 $1，页头「$2」'],
    [/^Maple Latte shows ([\s\S]*) after −$/, '点击 − 后 Maple Latte 显示 $1'],
    [/^header “([\s\S]*)”$/, '页头「$1」'],
    [/^use this\.setState\(prevState => …\) and build new objects with \{ \.\.\.item \}$/, '请使用 this.setState(prevState => …) 并用 { ...item } 创建新对象'],
    [/^React warned about a missing key$/, 'React 警告缺少 key'],
    [/^no menu items rendered yet$/, '还没有渲染出任何菜单项'],
    [/^labels: ([\s\S]*)$/, '按钮文字：$1'],
    [/^no \.toggle buttons$/, '没有 .toggle 按钮'],
    [/^no toggle buttons yet$/, '还没有切换按钮'],
    [/^no toggle button on Coco$/, '《寻梦环游记》上没有切换按钮'],
    [/^Coco: ([\s\S]*), footer “([\s\S]*)”$/, '《寻梦环游记》：$1，页脚「$2」'],
    [/^no toggle button on Inception$/, '《盗梦空间》上没有切换按钮'],
    [/^Inception: ([\s\S]*), footer “([\s\S]*)”$/, '《盗梦空间》：$1，页脚「$2」'],
    [/^no handleToggleWatched in App yet$/, 'App 中还没有 handleToggleWatched'],
    [/^state found outside App$/, '在 App 之外发现了 state'],
    [/^use \{ \.\.\.movie, watched: !movie\.watched \}$/, '请使用 { ...movie, watched: !movie.watched }'],
    [/^(\d+) movies, badge “([\s\S]*)”$/, '$1 部电影，徽章「$2」'],
    [/^the input needs value=\{ title \} and an onChange$/, '输入框需要 value={ title } 和一个 onChange'],
    [/^titles: ([\s\S]*); badge “([\s\S]*)”$/, '片名：$1；徽章「$2」'],
    [/^the box still says “([\s\S]*)”$/, '输入框里仍然写着「$1」'],
    [/^nothing was added$/, '没有添加任何内容'],
    [/^no #newTitle$/, '没有 #newTitle'],
    [/^(\d+) movies after submitting spaces$/, '提交空格后有 $1 部电影'],
    [/^need onSubmit=\{ handleSubmit \} and e\.preventDefault\(\)$/, '需要 onSubmit={ handleSubmit } 和 e.preventDefault()'],
    [/^document\.title is “([\s\S]*)” \(([\s\S]*)\)$/, 'document.title 是「$1」（$2）'],
    [/^document\.title is “([\s\S]*)”$/, 'document.title 是「$1」'],
    [/^after toggling: “([\s\S]*)”$/, '切换之后：「$1」'],
    [/^focused element: ([\s\S]*)$/, '获得焦点的元素：$1'],
    [/^went from (\S+) to (\S+) in about one second$/, '大约一秒内从 $1 变成 $2'],
    [/^running timers: (\d+) before hiding, (\d+) after$/, '运行中的定时器：隐藏前 $1 个，隐藏后 $2 个'],
    [/^need React\.createContext\(\) and <ThemeContext\.Provider value=\{…\}>$/, '需要 React.createContext() 和 <ThemeContext.Provider value={…}>'],
    [/^box classes: “([\s\S]*)”, button “([\s\S]*)”$/, '盒子的 class：「$1」，按钮「$2」'],
    [/^box classes: “([\s\S]*)”$/, '盒子的 class：「$1」'],
    [/^no \.theme-btn button$/, '没有 .theme-btn 按钮'],
    [/^Header still receives the theme as a prop$/, 'Header 仍然通过 prop 接收主题'],
    [/^no useContext\(ThemeContext\)$/, '没有 useContext(ThemeContext)'],
    [/^(\d+) link\(s\) with class movie-link$/, '有 $1 个带 movie-link 类的链接'],
    [/^no <Link to=\{ "\/movies\/" \+ movie\.id \}> in MovieList$/, 'MovieList 中没有 <Link to={ "/movies/" + movie.id }>'],
    [/^no link to The Grand Budapest Hotel$/, '没有指向《布达佩斯大饭店》的链接'],
    [/^details page: “([\s\S]*)” \/ “([\s\S]*)”$/, '详情页：「$1」/「$2」'],
    [/^no details page after clicking$/, '点击后没有出现详情页'],
    [/^no back link on the details page$/, '详情页上没有返回链接'],
    [/^(\d+) movie links after going back$/, '返回后有 $1 个电影链接'],
    [/^no <Route path="\*">$/, '没有 <Route path="*">'],
    [/^MovieDetail does not call useParams\(\)$/, 'MovieDetail 没有调用 useParams()'],
    [/^not found$/, '未找到'],
    [/^could not check \(([\s\S]*)\)$/, '无法检查（$1）']
  ],

  /* ------------------------------------------------------------------ 代码检查提示（checker.js 生成） */
  lintRules: [
    [/^`(<[a-z0-9]+>)` is opened (\d+)× but closed (\d+)×: check for a missing `(<\/[a-z0-9]+>)`\.$/,
      '`$1` 被打开了 $2×，却只关闭了 $3×：请检查是否漏写了 `$4`。'],
    [/^`(<\/[a-z0-9]+>)` appears (\d+)× but `(<[a-z0-9]+>)` only (\d+)×: check for an extra closing tag\.$/,
      '`$1` 出现了 $2×，但 `$3` 只有 $4×：请检查是否多写了一个结束标签。'],
    [/^An `<img>` has no `alt` attribute\.$/, '有一个 `<img>` 标签没有 `alt` 属性。'],
    [/^Your CSS has (\d+) `\{` but (\d+) `\}`: a rule is not closed, so the rules after it may be ignored\.$/,
      '你的 CSS 有 $1 个 `{` 却只有 $2 个 `}`：有一条规则没有闭合，后面的规则可能会被忽略。'],
    [/^A semicolon is missing after `([\s\S]*)`, so the next declaration is ignored too\.$/,
      '`$1` 后面缺少分号，因此下一条声明也会被忽略。'],
    [/^A colour like `#3B26` has the wrong number of digits; use 3 or 6 hex digits\.$/,
      '像 `#3B26` 这样的颜色值位数不对；请使用 3 位或 6 位十六进制数字。'],
    [/^Your code has a syntax error: ([\s\S]*)\. Nothing in the file runs until it is fixed\.$/,
      '你的代码有语法错误：$1。修正之前，文件里的代码一句都不会执行。'],
    [/^Your JavaScript has a syntax error: ([\s\S]*)\. Nothing in the file runs until it is fixed\.$/,
      '你的 JavaScript 有语法错误：$1。修正之前，文件里的代码一句都不会执行。'],
    [/^When the page ran, the browser reported: `([\s\S]*)`\.$/, '页面运行时，浏览器报告：`$1`。'],
    [/^The console showed a warning: `([\s\S]*)`\.$/, '控制台显示了一条警告：`$1`。'],
    [/^\(element not found\)$/, '（未找到该元素）'],
    [/^Babel did not load \(check your internet connection\)$/, 'Babel 没有加载成功（请检查网络连接）']
  ]
};
