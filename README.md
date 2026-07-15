# HTML Learning Portal

A complete, production-ready, multi-page website for teaching HTML to undergraduate students — tutorials, a live Monaco-powered code editor, real-time preview, quizzes, guided practice exercises, a searchable tag reference, and progress tracking. Pure HTML5 + CSS3 + vanilla JavaScript. No build step, no backend, no npm install required.

## Quick start

You only need a static file server (the app fetches its content via `fetch()`, which most browsers block on `file://` URLs).

```bash
# from inside the HTML-Learning-Portal folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Or use any static host: GitHub Pages, Netlify, Vercel, or your school's web server — just upload the whole folder.

## Folder structure

```
HTML-Learning-Portal/
│
├── index.html          Landing page: hero, features, topic grid, dashboard preview
├── tutorial.html        16-module tutorial with sidebar, live examples, embedded quiz
├── practice.html        6 guided coding exercises with an automatic checker
├── quiz.html             Per-topic or mixed 12-question quiz mode with scoring
├── playground.html      Free-form Monaco editor + live preview + templates
├── reference.html        Searchable, filterable reference of 76 HTML tags
├── about.html            About the project, tech stack, and classroom usage notes
│
├── css/
│   ├── style.css         Design tokens, layout, navbar, cards, dark mode (loaded everywhere)
│   ├── tutorial.css      Sidebar + lesson + inline example styles (tutorial.html)
│   ├── editor.css        Split-screen studio styles (playground.html, practice.html)
│   └── quiz.css          Quiz card + results screen styles (quiz.html)
│
├── js/
│   ├── app.js            Theme toggle, the Progress Store (localStorage API), homepage topic grid
│   ├── editor.js          Monaco wrapper + playground wiring + practice exercises/checker
│   ├── tutorial.js        Tutorial sidebar, lesson rendering, embedded quiz
│   ├── quiz.js            Quiz picker, question flow, scoring, results/review
│   └── search.js         Tag reference search + category filtering
│
├── data/
│   ├── tutorials.json    16 topics: lessons + 152 runnable code examples
│   ├── quizzes.json      48 multiple-choice questions (3 per topic)
│   └── html-tags.json     76-entry searchable tag reference
│
├── assets/
│   ├── images/            Illustrations / photos (sample SVG included)
│   ├── icons/              favicon.svg (site mark, used as the favicon on every page)
│   └── videos/             Empty by default — drop in your own lecture clips
│
└── README.md
```

## Curriculum (16 modules)

1. Introduction to Internet and Web Technologies
2. Client–Server Architecture
3. HTML5 Fundamentals
4. HTML Document Structure
5. HTML Elements
6. HTML Attributes
7. Text Formatting
8. Lists
9. Hyperlinks
10. Images
11. SVG Graphics
12. Audio
13. Video
14. Iframes
15. SEO Fundamentals
16. HTML Best Practices

## Feature notes

- **Live Monaco editor** — loaded from a CDN build of the same engine behind VS Code, used in `playground.html` and `practice.html`.
- **Real-time preview** — every pane updates via an `<iframe srcdoc>`, debounced on keystroke.
- **Progress tracking** — a single `ProgressStore` object (in `js/app.js`) reads/writes one `localStorage` key (`hlp_progress_v1`) holding completed topics, quiz scores, bookmarks, and notes. All reads/writes are wrapped in `try/catch` and fall back to an in-memory object for the current page view if storage is unavailable (e.g. private browsing with storage disabled, or a restricted preview sandbox) — so the app never throws, though progress won't survive a reload in that fallback case.
- **Dark/Light mode** — toggled via a `data-theme` attribute on `<html>`, persisted to `localStorage`, applied before first paint to avoid a flash of the wrong theme.
- **Responsive design** — Bootstrap 5's grid plus custom breakpoints; the split-screen studio stacks vertically on narrow screens.
- **150+ examples requirement** — `data/tutorials.json` currently ships 152 runnable examples across the 16 topics.

## Extending it

- Add a topic: append an entry to `data/tutorials.json` (and matching questions to `data/quizzes.json`).
- Add a reference tag: append an entry to `data/html-tags.json` — the reference page picks it up automatically.
- Add a practice exercise: add an object to the `EXERCISES` array in `js/editor.js`, with a `checks` array of small regex-based tests.
- Restyle: all design tokens (colors, fonts, radii) live at the top of `css/style.css` as CSS custom properties.

## Credits / stack

HTML5 · CSS3 · Vanilla JavaScript (ES6+) · Bootstrap 5 · Font Awesome 6 · Monaco Editor · Google Fonts (Fraunces, Inter, JetBrains Mono).

Built as a teaching tool for undergraduate web technology courses. No accounts, no tracking, no server required.
