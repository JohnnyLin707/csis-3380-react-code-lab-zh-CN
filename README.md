# React Code Lab (CSIS 3380, Modules 4–7)

https://johnnylin707.github.io/csis-3380-react-code-lab-zh-CN/

Ten auto-graded React activities built on the course case studies (Movie Night and Alex's Café).
Students write JSX (`app.js`) or HTML in the browser, see it render, submit, and get a score, an
explanation of every mistake, and the proper code side by side. Progress stays in the browser.

| # | Module | Students write | Topic |
|---|--------|----------------|-------|
| 1 | 4 | HTML | Adding React to a page (CDN scripts, root, `text/babel`) |
| 2 | 4 | JSX | JSX expressions and conditionals |
| 3 | 4 | JSX | Components and props |
| 4 | 4 | JSX | Lists with `map()` and keys |
| 5 | 5 | JSX | Class components and state (café order tally) |
| 6 | 5 | JSX | Lifting state up |
| 7 | 6 | JSX | `useState` and controlled inputs |
| 8 | 6 | JSX | `useEffect` (title, cleanup) and `useRef` (focus) |
| 9 | 6 | JSX | `useContext` (light/dark theme) |
| 10 | 7 | JSX | React Router (routes, `Link`, `useParams`, catch-all) |

React 18 and React Router 6 load from unpkg as in the course's CDN projects; Activity 10 uses
`MemoryRouter` because the preview has no address bar (a Vite app uses `BrowserRouter`).

## Language switch

The **中文 / English** button in the top bar swaps the whole tutorial — headings, the story, the
task steps, the checklist, the verdict and the "We found:" feedback — between Simplified Chinese
and English. The choice is remembered in the browser (localStorage), and the language is guessed
from the browser language on a first visit.

The switch lives in three files:

| File | What it holds |
|------|---------------|
| `js/i18n.js` | the switch itself plus the English strings (the fallback) |
| `js/lang-zh.js` | the Simplified Chinese strings |
| `js/app.js` | every `t('key')` / `I18N.act(activity)` call that renders text |

Code is deliberately **not** translated: the `fix` snippets and the step `code` blocks stay in
English so students can copy them and have them run. To add another language, copy
`js/lang-zh.js`, translate it, and register it in the `DATA` map at the top of `js/i18n.js`.

Built with the `code-lab-builder` skill. To change an activity, edit `js/activities.js`, add a typical
mistake to `tests/mistakes.js`, and run `node <skill>/scripts/verify_lab.js .` before publishing.
