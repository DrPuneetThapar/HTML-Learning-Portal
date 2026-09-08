/* ================================================================
   EDITOR ENGINE (js/editor.js)
   Wraps the Monaco Editor CDN build into a small reusable API used
   by playground.html (free-form) and practice.html (guided
   exercises). Depends on the Monaco loader script being present on
   the page and a container element with id="monacoContainer".
   ================================================================ */

const TEMPLATES = {
  "Blank boilerplate": `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Page Title</title>\n</head>\n<body>\n\n</body>\n</html>`,
  "Table": `<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"><title>Table</title></head>\n<body>\n  <table border="1" cellpadding="6">\n    <tr><th>Name</th><th>Score</th></tr>\n    <tr><td>Ada</td><td>98</td></tr>\n  </table>\n</body>\n</html>`,
  "Form": `<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"><title>Form</title></head>\n<body>\n  <form>\n    <label for="name">Name</label>\n    <input id="name" type="text">\n    <button type="submit">Send</button>\n  </form>\n</body>\n</html>`,
  "Nav bar": `<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"><title>Nav</title></head>\n<body>\n  <nav>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n</body>\n</html>`,
  "Image gallery": `<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"><title>Gallery</title></head>\n<body>\n  <ul style="display:flex;gap:10px;list-style:none;padding:0;">\n    <li><img src="https://picsum.photos/id/1015/140/100" alt="River"></li>\n    <li><img src="https://picsum.photos/id/1025/140/100" alt="Puppy"></li>\n  </ul>\n</body>\n</html>`,
  "SVG shapes": `<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"><title>SVG</title></head>\n<body>\n  <svg width="200" height="140" viewBox="0 0 200 140">\n    <circle cx="60" cy="70" r="40" fill="#C4406B"/>\n    <rect x="120" y="30" width="60" height="80" fill="#B9862E"/>\n  </svg>\n</body>\n</html>`
};

const EditorEngine = (function(){
  let monacoEditor = null;
  let debounceTimer = null;
  let onChangeCallback = null;

  function loadMonaco(containerId, starterCode, onReadyCb){
    require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.47.0/min/vs" } });
    require(["vs/editor/editor.main"], function(){
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      monacoEditor = monaco.editor.create(document.getElementById(containerId), {
        value: starterCode,
        language: "html",
        theme: dark ? "vs-dark" : "vs",
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 13,
        fontFamily: "'JetBrains Mono', monospace",
        wordWrap: "on",
        scrollBeyondLastLine: false,
        tabSize: 2
      });
      monacoEditor.onDidChangeModelContent(()=>{
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(()=>{ if(onChangeCallback) onChangeCallback(monacoEditor.getValue()); }, 450);
      });
      if(onReadyCb) onReadyCb(monacoEditor);
    });
  }

  return {
    init(containerId, starterCode, onChange){
      onChangeCallback = onChange;
      return new Promise((resolve)=> loadMonaco(containerId, starterCode, resolve));
    },
    getValue(){ return monacoEditor ? monacoEditor.getValue() : ""; },
    setValue(code){ if(monacoEditor) monacoEditor.setValue(code); },
    setTheme(dark){ if(window.monaco) monaco.editor.setTheme(dark ? "vs-dark" : "vs"); },
    insertAtCursor(text){
      if(!monacoEditor) return;
      const sel = monacoEditor.getSelection();
      monacoEditor.executeEdits("insert", [{ range: sel, text, forceMoveMarkers: true }]);
      monacoEditor.focus();
    },
    isReady(){ return !!monacoEditor; }
  };
})();

function renderToFrame(iframeEl, code){
  iframeEl.srcdoc = code;
}

function downloadHTML(code, filename){
  const blob = new Blob([code], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = (filename || "page") + ".html";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function buildTemplateMenu(menuEl, onPick){
  menuEl.innerHTML = "";
  Object.keys(TEMPLATES).forEach(name=>{
    const b = document.createElement("button");
    b.textContent = name;
    b.addEventListener("click", ()=>{ onPick(TEMPLATES[name]); menuEl.classList.remove("open"); });
    menuEl.appendChild(b);
  });
}

/* ================================================================
   PLAYGROUND PAGE WIRING (playground.html)
   ================================================================ */
function initPlaygroundPage(){
  const container = document.getElementById("monacoContainer");
  const templateMenu = document.getElementById("templateMenu");
  if(!container || document.getElementById("checkResult")) return; // not playground, or is practice page

  const starter = TEMPLATES["Blank boilerplate"];
  const frame = document.getElementById("previewFrame");

  EditorEngine.init("monacoContainer", starter, (code)=>{
    renderToFrame(frame, code);
    document.getElementById("renderStatus").textContent = "· up to date";
  }).then(()=> renderToFrame(frame, starter));

  document.getElementById("btnRun").addEventListener("click", ()=> renderToFrame(frame, EditorEngine.getValue()));
  document.getElementById("btnReset").addEventListener("click", ()=>{
    EditorEngine.setValue(starter);
    renderToFrame(frame, starter);
  });
  document.getElementById("btnCopy").addEventListener("click", ()=> copyText(EditorEngine.getValue()));
  document.getElementById("btnDownload").addEventListener("click", ()=> downloadHTML(EditorEngine.getValue(), "playground"));

  if(templateMenu){
    buildTemplateMenu(templateMenu, (code)=>{ EditorEngine.setValue(code); renderToFrame(frame, code); });
    document.getElementById("btnTemplates").addEventListener("click", ()=> templateMenu.classList.toggle("open"));
    document.addEventListener("click", (e)=>{
      if(!e.target.closest(".template-dropdown")) templateMenu.classList.remove("open");
    });
  }

  const fsBtn = document.getElementById("btnFullscreen");
  if(fsBtn){
    fsBtn.addEventListener("click", ()=>{
      document.getElementById("fsFrame").srcdoc = EditorEngine.getValue();
      document.getElementById("fsOverlay").classList.add("open");
    });
    document.getElementById("btnCloseFs").addEventListener("click", ()=> document.getElementById("fsOverlay").classList.remove("open"));
  }

  document.addEventListener("keydown", (e)=>{
    if((e.ctrlKey||e.metaKey) && e.key==="Enter"){ e.preventDefault(); renderToFrame(frame, EditorEngine.getValue()); }
    if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==="s"){ e.preventDefault(); downloadHTML(EditorEngine.getValue(), "playground"); }
  });
}

/* ================================================================
   PRACTICE PAGE WIRING (practice.html)
   Guided exercises with a lightweight heuristic checker — regex
   checks against the student's markup, no server required.
   ================================================================ */
const EXERCISES = [
  {
    id: "ex1", title: "Build a basic page", level: "basic",
    brief: "Create a valid HTML5 document with a <title> of 'My Page' and one <h1> that says 'Hello, World!'.",
    hint: "Remember: DOCTYPE, html, head with title, body with h1.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title></title>\n</head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has <!DOCTYPE html>", test: c => /<!DOCTYPE html>/i.test(c) },
      { label:"Title is 'My Page'", test: c => /<title>\s*My Page\s*<\/title>/i.test(c) },
      { label:"Has an <h1> containing 'Hello, World!'", test: c => /<h1[^>]*>\s*Hello, World!\s*<\/h1>/i.test(c) }
    ]
  },
  {
    id: "ex2", title: "Format a paragraph", level: "basic",
    brief: "Write a paragraph where one word is <strong>bold</strong> and another is <em>italic</em>.",
    hint: "Use <strong> and <em> inside a <p>.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Formatting</title></head>\n<body>\n  <p></p>\n</body>\n</html>",
    checks: [
      { label:"Contains a <p>", test: c => /<p>/i.test(c) },
      { label:"Contains <strong>…</strong>", test: c => /<strong>[^<]+<\/strong>/i.test(c) },
      { label:"Contains <em>…</em>", test: c => /<em>[^<]+<\/em>/i.test(c) }
    ]
  },
  {
    id: "ex3", title: "Build a navigation list", level: "basic",
    brief: "Create an unordered list of 3 links: Home, About, Contact — each a real <a> tag.",
    hint: "Wrap <li><a href=\"#\">…</a></li> three times inside a <ul>.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Nav</title></head>\n<body>\n  <ul>\n\n  </ul>\n</body>\n</html>",
    checks: [
      { label:"Has a <ul>", test: c => /<ul>/i.test(c) },
      { label:"Has at least 3 <li> items", test: c => (c.match(/<li>/gi)||[]).length >= 3 },
      { label:"Each <li> contains a link", test: c => { const items = c.match(/<li>[\s\S]*?<\/li>/gi)||[]; return items.length>=3 && items.every(li=>/<a\s+href=/i.test(li)); } }
    ]
  },
  {
    id: "ex4", title: "Add an accessible image", level: "basic",
    brief: "Insert an <img> tag with a src and meaningful alt text (not empty).",
    hint: "alt=\"\" is not enough — describe the image.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Image</title></head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has an <img> tag", test: c => /<img[^>]+>/i.test(c) },
      { label:"Has a src attribute", test: c => /<img[^>]+src\s*=\s*["'][^"']+["']/i.test(c) },
      { label:"Has meaningful alt text (not empty)", test: c => /<img[^>]+alt\s*=\s*["'][^"']{3,}["']/i.test(c) }
    ]
  },
  {
    id: "ex5", title: "Build a simple table", level: "basic",
    brief: "Create a table with a header row (Name, Score) and one data row.",
    hint: "Use <table>, <tr>, <th> for headers, <td> for data.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Table</title></head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has a <table>", test: c => /<table/i.test(c) },
      { label:"Has at least 2 <th> header cells", test: c => (c.match(/<th/gi)||[]).length >= 2 },
      { label:"Has at least 2 <td> data cells", test: c => (c.match(/<td/gi)||[]).length >= 2 }
    ]
  },
  {
    id: "ex6", title: "Semantic page layout", level: "basic",
    brief: "Build a page using <header>, <main>, and <footer> instead of plain <div>s.",
    hint: "Each semantic tag should wrap some content, even a single line.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Layout</title></head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has a <header>", test: c => /<header[\s>]/i.test(c) },
      { label:"Has a <main>", test: c => /<main[\s>]/i.test(c) },
      { label:"Has a <footer>", test: c => /<footer[\s>]/i.test(c) }
    ]
  },
  {
    id: "ex7", title: "Accessible contact form", level: "advanced", topics: "Forms · Input Types · Accessibility",
    brief: "Build a contact form: a labeled name field, a required email field, a labeled message <textarea>, and a submit button. Every field needs a properly associated <label>.",
    hint: "Match each <label for=\"x\"> to an input/textarea with id=\"x\". Use type=\"email\" and the required attribute together on the email field.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Contact</title></head>\n<body>\n  <form>\n\n  </form>\n</body>\n</html>",
    checks: [
      { label:"Has a <form>", test: c => /<form[\s>]/i.test(c) },
      { label:"Has at least 3 <label> elements", test: c => (c.match(/<label[\s>]/gi)||[]).length >= 3 },
      { label:"Has a required <input type=\"email\">", test: c => { const m = c.match(/<input[^>]*>/gi) || []; return m.some(tag => /type=["']email["']/i.test(tag) && /required/i.test(tag)); } },
      { label:"Has a <textarea>", test: c => /<textarea[\s>]/i.test(c) },
      { label:"Has a submit button", test: c => /<button[^>]*>|<input[^>]+type=["']submit["']/i.test(c) }
    ]
  },
  {
    id: "ex8", title: "Semantic blog post", level: "advanced", topics: "Semantic HTML · Text Formatting",
    brief: "Build a page with <header>, a <main> containing one <article>, an <aside>, and a <footer>. The article needs an <h1>, at least one <strong> or <em>, and a <time datetime=\"…\">.",
    hint: "<main> should wrap the <article>. <aside> is a sibling of <article>, not nested inside it, for this exercise.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Blog</title></head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has a <header>", test: c => /<header[\s>]/i.test(c) },
      { label:"Has <main> containing an <article>", test: c => { const m = c.match(/<main[\s\S]*?<\/main>/i); return !!m && /<article[\s>]/i.test(m[0]); } },
      { label:"Has an <aside>", test: c => /<aside[\s>]/i.test(c) },
      { label:"Has a <footer>", test: c => /<footer[\s>]/i.test(c) },
      { label:"Article has an <h1> and <strong> or <em>", test: c => /<h1[\s>]/i.test(c) && (/<strong[\s>]/i.test(c) || /<em[\s>]/i.test(c)) },
      { label:"Has a <time datetime=\"…\">", test: c => /<time[^>]+datetime\s*=\s*["'][^"']+["']/i.test(c) }
    ]
  },
  {
    id: "ex9", title: "Accessible data table", level: "advanced", topics: "Tables and Data Representation",
    brief: "Build a product table with a <caption>, a <thead> with column headers using scope=\"col\", and a <tbody> with at least 3 rows of 2 cells each.",
    hint: "<caption> must be the first child right after <table>. Give every <th> in the header row a scope=\"col\" attribute.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Products</title></head>\n<body>\n  <table>\n\n  </table>\n</body>\n</html>",
    checks: [
      { label:"Table has a <caption>", test: c => { const m = c.match(/<table[\s\S]*?<\/table>/i); return !!m && /<caption[\s>]/i.test(m[0]); } },
      { label:"Has a <thead> and a <tbody>", test: c => /<thead[\s>]/i.test(c) && /<tbody[\s>]/i.test(c) },
      { label:"Has at least 2 <th scope=\"col\"> header cells", test: c => (c.match(/<th[^>]+scope\s*=\s*["']col["']/gi)||[]).length >= 2 },
      { label:"Has at least 3 data rows (6+ <td> cells)", test: c => (c.match(/<td[\s>]/gi)||[]).length >= 6 }
    ]
  },
  {
    id: "ex10", title: "Sign-up form with validation", level: "advanced", topics: "Input Types · Form Validation",
    brief: "Build a sign-up form: a username field (required, minlength 3), a password field (type=\"password\", required, minlength 8), an age field (type=\"number\", min 13), and a required checkbox agreeing to terms.",
    hint: "Constraint attributes like required, minlength, and min can appear in any order inside the tag — just make sure they're all on the right input.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Sign up</title></head>\n<body>\n  <form>\n\n  </form>\n</body>\n</html>",
    checks: [
      { label:"Username input: required + minlength=\"3\"", test: c => { const m = c.match(/<input[^>]*>/gi) || []; return m.some(tag => /required/i.test(tag) && /minlength\s*=\s*["']3["']/i.test(tag)); } },
      { label:"Password input: type=\"password\" + required", test: c => { const m = c.match(/<input[^>]*>/gi) || []; return m.some(tag => /type=["']password["']/i.test(tag) && /required/i.test(tag)); } },
      { label:"Age input: type=\"number\" + min=\"13\"", test: c => { const m = c.match(/<input[^>]*>/gi) || []; return m.some(tag => /type=["']number["']/i.test(tag) && /min\s*=\s*["']13["']/i.test(tag)); } },
      { label:"A required checkbox for terms", test: c => { const m = c.match(/<input[^>]*>/gi) || []; return m.some(tag => /type=["']checkbox["']/i.test(tag) && /required/i.test(tag)); } }
    ]
  },
  {
    id: "ex11", title: "Responsive image gallery", level: "advanced", topics: "Responsive Structuring · Images",
    brief: "Build a responsive gallery: a <style> block with a CSS Grid using grid-template-columns, at least 3 <figure>+<img>+<figcaption> groups, and the viewport meta tag.",
    hint: "Something like grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); inside a <style> tag in <head>. Every <img> still needs real alt text.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Gallery</title>\n</head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has the viewport meta tag", test: c => /<meta[^>]+name=["']viewport["']/i.test(c) },
      { label:"Has a <style> block using grid-template-columns", test: c => { const m = c.match(/<style[\s\S]*?<\/style>/i); return !!m && /grid-template-columns/i.test(m[0]); } },
      { label:"Has at least 3 <img> tags with alt text", test: c => (c.match(/<img[^>]+alt\s*=\s*["'][^"']{2,}["']/gi)||[]).length >= 3 },
      { label:"Has at least 1 <figure> with a <figcaption>", test: c => { const m = c.match(/<figure[\s\S]*?<\/figure>/i); return !!m && /<figcaption[\s>]/i.test(m[0]); } }
    ]
  },
  {
    id: "ex12", title: "Accessible navigation with a skip link", level: "advanced", topics: "Page Layout · Accessibility",
    brief: "Build a page with a 'Skip to main content' link as the very first thing in <body>, a <nav> with an aria-label, and a <main id=\"mainContent\"> that the skip link actually points to.",
    hint: "The skip link's href value (e.g. #mainContent) must exactly match the id on <main>.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Site</title></head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"First element in <body> is a skip link to #mainContent", test: c => { const m = c.match(/<body[^>]*>([\s\S]*)<\/body>/i); if(!m) return false; const inner = m[1].trim(); return /^<a\s+href=["']#mainContent["']/i.test(inner); } },
      { label:"Has a <nav> with an aria-label", test: c => /<nav[^>]+aria-label\s*=\s*["'][^"']+["']/i.test(c) },
      { label:"Has <main id=\"mainContent\">", test: c => /<main[^>]+id\s*=\s*["']mainContent["']/i.test(c) },
      { label:"Has a <footer>", test: c => /<footer[\s>]/i.test(c) }
    ]
  },
  {
    id: "ex13", title: "Flexbox card gallery with hover effects", level: "advanced",
    topics: "Flexbox Layout · CSS Transitions · Images",
    brief: "Build a flex row of at least 3 cards (image + heading each). On hover, each card should lift up and gain a stronger shadow, animated with a transition — not an instant jump.",
    hint: "Put transition on the card's normal state, and only change transform/box-shadow inside the :hover rule.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Gallery</title>\n<style>\n\n</style>\n</head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has a flex container (display: flex)", test: c => /display\s*:\s*flex/i.test(c) },
      { label:"Has at least 3 card elements inside it", test: c => (c.match(/<(div|article)[^>]*class=["'][^"']*card[^"']*["']/gi)||[]).length >= 3 },
      { label:"Cards have a transition property", test: c => /\.card[^{]*\{[^}]*transition\s*:/is.test(c) || /transition\s*:[^;]+;[^}]*\}\s*\.card/is.test(c) || (c.match(/transition\s*:/gi)||[]).length >= 1 },
      { label:"A :hover rule changes transform or box-shadow", test: c => { const m = c.match(/:hover\s*\{[^}]*\}/gi) || []; return m.some(rule => /transform|box-shadow/i.test(rule)); } },
      { label:"Has at least 3 <img> tags with alt text", test: c => (c.match(/<img[^>]+alt\s*=\s*["'][^"']{2,}["']/gi)||[]).length >= 3 }
    ]
  },

  {
    id: "ex14", title: "Responsive CSS Grid dashboard", level: "advanced",
    topics: "CSS Grid · Responsive Web Design · Semantic HTML",
    brief: "Build a dashboard layout using grid-template-areas with a header, sidebar, and main content area, using semantic <header>, <aside>, and <main>. Add a media query that collapses it to a single column on narrow screens.",
    hint: "Give each semantic element a matching grid-area name, and redefine grid-template-areas (or grid-template-columns) inside your media query.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Dashboard</title>\n<style>\n\n</style>\n</head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has a grid container (display: grid)", test: c => /display\s*:\s*grid/i.test(c) },
      { label:"Uses grid-template-areas", test: c => /grid-template-areas/i.test(c) },
      { label:"Has a media query", test: c => /@media/i.test(c) },
      { label:"Uses semantic <header>, <aside>, and <main>", test: c => /<header[\s>]/i.test(c) && /<aside[\s>]/i.test(c) && /<main[\s>]/i.test(c) }
    ]
  },

  {
    id: "ex15", title: "Themeable button with CSS variables", level: "advanced",
    topics: "CSS Variables · Pseudo Classes · CSS Transitions",
    brief: "Build a button styled entirely through CSS custom properties (a background and text color variable), with a smooth :hover transition. Then add a second 'danger' button that overrides those same variables to a red theme, reusing the same base class.",
    hint: "Declare --btn-bg and --btn-color on the base .btn class, then override just those two variables on a .btn.danger class — no need to redeclare background/color themselves.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Buttons</title>\n<style>\n\n</style>\n</head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Declares at least one custom property (--name: value)", test: c => /--[a-zA-Z-]+\s*:\s*[^;]+;/.test(c) },
      { label:"Uses var() to apply a custom property", test: c => /var\(\s*--[a-zA-Z-]+/.test(c) },
      { label:"A second class/element overrides the variable's value", test: c => (c.match(/--[a-zA-Z-]+\s*:\s*[^;]+;/g)||[]).length >= 2 },
      { label:"Has a transition property", test: c => /transition\s*:/i.test(c) },
      { label:"Has a :hover rule", test: c => /:hover/i.test(c) }
    ]
  },

  {
    id: "ex16", title: "Animated accessible loading spinner", level: "advanced",
    topics: "CSS Animations · Accessibility Fundamentals",
    brief: "Build a spinning loading indicator using @keyframes and the animation property. Give it role=\"status\" and screen-reader-only text announcing 'Loading…', and respect prefers-reduced-motion by disabling the spin for users who've asked for less motion.",
    hint: "The visually-hidden text pattern from the Accessibility Fundamentals topic works well here — the spinner is decorative, but the loading STATE still needs to be announced.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Loading</title>\n<style>\n\n</style>\n</head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Defines a @keyframes animation", test: c => /@keyframes\s+[a-zA-Z-]+/.test(c) },
      { label:"Applies the animation property to an element", test: c => /animation\s*(-name)?\s*:/i.test(c) },
      { label:"Has role=\"status\" on the spinner", test: c => /role\s*=\s*["']status["']/i.test(c) },
      { label:"Has screen-reader-only 'Loading' text in the body", test: c => { const m = c.match(/<body[^>]*>([\s\S]*)<\/body>/i); return !!m && /Loading/i.test(m[1]); } },
      { label:"Respects prefers-reduced-motion", test: c => /prefers-reduced-motion/i.test(c) }
    ]
  },

  {
    id: "ex17", title: "Styled, validated sign-in form", level: "advanced",
    topics: "Form Styling · Pseudo Classes · Form Validation · Attribute Selectors",
    brief: "Build a sign-in form with a required, styled email input and a password input. Style the :focus state, style :invalid fields with a red border, and use an attribute selector (like input[type=\"submit\"] or input[type=\"email\"]) at least once instead of a class.",
    hint: "input[type=\"email\"] IS an attribute selector — you can use it both for base styling and combined with :invalid.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Sign in</title>\n<style>\n\n</style>\n</head>\n<body>\n  <form>\n\n  </form>\n</body>\n</html>",
    checks: [
      { label:"Has a required <input type=\"email\">", test: c => { const m = c.match(/<input[^>]*>/gi) || []; return m.some(tag => /type=["']email["']/i.test(tag) && /required/i.test(tag)); } },
      { label:"Has an attribute selector in the CSS (e.g. input[type=...])", test: c => /input\s*\[\s*type\s*=/i.test(c) },
      { label:"Has a :focus rule", test: c => /:focus/i.test(c) },
      { label:"Has an :invalid rule", test: c => /:invalid/i.test(c) },
      { label:"Has a <input type=\"password\">", test: c => { const m = c.match(/<input[^>]*>/gi) || []; return m.some(tag => /type=["']password["']/i.test(tag)); } }
    ]
  },

  {
    id: "ex18", title: "Capstone: a fully responsive semantic page", level: "advanced",
    topics: "Semantic HTML · Flexbox/Grid · CSS Variables · Responsive Web Design",
    brief: "Build a complete mini page: <header> with a <nav>, a <main> containing at least two <section>s, and a <footer> — laid out with Flexbox or Grid, styled using at least one CSS variable, with a media query that changes the layout on narrow screens.",
    hint: "This combines everything: semantic structure from Unit 2, and Flexbox/Grid, variables, and responsiveness from Unit 3. Build it piece by piece.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Capstone</title>\n  <style>\n\n  </style>\n</head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has <header> with a <nav>, a <main>, and a <footer>", test: c => { const m = c.match(/<header[\s\S]*?<\/header>/i); return !!m && /<nav[\s>]/i.test(m[0]) && /<main[\s>]/i.test(c) && /<footer[\s>]/i.test(c); } },
      { label:"Main contains at least 2 <section> elements", test: c => { const m = c.match(/<main[\s\S]*?<\/main>/i); return !!m && (m[0].match(/<section[\s>]/gi)||[]).length >= 2; } },
      { label:"Uses Flexbox or Grid for layout", test: c => /display\s*:\s*(flex|grid)/i.test(c) },
      { label:"Declares and uses at least one CSS variable", test: c => /--[a-zA-Z-]+\s*:\s*[^;]+;/.test(c) && /var\(\s*--[a-zA-Z-]+/.test(c) },
      { label:"Has a media query changing the layout", test: c => /@media[^{]*\{[\s\S]*?(display\s*:|grid-template|flex-direction)[\s\S]*?\}/i.test(c) }
    ]
  },
  {
    id: "ex19", title: "Debug: A broken profile page", level: "debug", topics: "HTML Fundamentals",
    brief: "This page has 5 real bugs: a missing language attribute, an unclosed <title>, a mismatched heading tag, an unclosed paragraph, and an image with no alt text. Find and fix all 5.",
    hint: "Read every opening tag and make sure its closing tag matches exactly. Every <img> needs a real, descriptive alt attribute.",
    starter: "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>My Profile\n</head>\n<body>\n<h1>Jordan Lee</h2>\n<p>Web developer based in Austin.\n<img src=\"profile.jpg\">\n</body>\n</html>",
    checks: [
      { label:"<html> has a lang attribute", test: c => /<html[^>]+lang\s*=\s*["'][a-z-]+["']/i.test(c) },
      { label:"<title> is properly closed", test: c => /<title>[^<]*<\/title>/i.test(c) },
      { label:"<h1> is closed with a matching </h1> (not </h2>)", test: c => /<h1[^>]*>[^<]*<\/h1>/i.test(c) },
      { label:"The paragraph is properly closed with </p>", test: c => /<p>Web developer based in Austin\.<\/p>/i.test(c) },
      { label:"<img> has real, descriptive alt text", test: c => { const m = c.match(/<img[^>]*>/i); return !!m && /alt\s*=\s*["'][^"']{4,}["']/i.test(m[0]); } }
    ]
  },
  {
    id: "ex20", title: "Debug: An inaccessible sign-up form", level: "debug", topics: "Forms · Accessibility",
    brief: "This form has 2 real bugs: neither field has an actual <label> (just plain text), and the email field uses the wrong input type. Fix both.",
    hint: "Every input needs a <label for=\"...\"> matched to its id. An email field should use type=\"email\", not type=\"text\", so the browser can validate the format and show the right mobile keyboard.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Sign up</title></head>\n<body>\n  <form>\n    Username: <input type=\"text\" id=\"username\" name=\"username\">\n    <br>\n    Email: <input type=\"text\" id=\"email\" name=\"email\">\n    <br>\n    <button type=\"submit\">Submit</button>\n  </form>\n</body>\n</html>",
    checks: [
      { label:"Has at least 2 <label> elements", test: c => (c.match(/<label[\s>]/gi)||[]).length >= 2 },
      { label:"Each label uses for=\"...\" matching a real input id", test: c => {
          const labelFors = [...c.matchAll(/<label[^>]+for\s*=\s*["']([^"']+)["']/gi)].map(m=>m[1]);
          const inputIds = [...c.matchAll(/<input[^>]+id\s*=\s*["']([^"']+)["']/gi)].map(m=>m[1]);
          return labelFors.length >= 2 && labelFors.every(f => inputIds.includes(f));
        }},
      { label:"The email field uses type=\"email\", not type=\"text\"", test: c => {
          const m = c.match(/<input[^>]+id\s*=\s*["']email["'][^>]*>/i);
          return !!m && /type\s*=\s*["']email["']/i.test(m[0]);
        }}
    ]
  },
  {
    id: "ex21", title: "Debug: A CSS specificity bug", level: "debug", topics: "CSS Selectors and Specificity",
    brief: "This alert message is supposed to be red, but it stays black. An ID selector (higher specificity) is silently overriding a class selector (lower specificity), no matter what order the rules are in. Fix the CSS so the text renders red.",
    hint: "The #message rule always beats the .alert rule on specificity alone, regardless of source order. You can fix this by removing the conflicting rule, or changing its color, rather than fighting specificity with !important.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Alert</title>\n<style>\n  #message { color: black; }\n  .alert { color: red; }\n</style>\n</head>\n<body>\n  <p id=\"message\" class=\"alert\">This should be red, but the ID selector is winning.</p>\n</body>\n</html>",
    checks: [
      { label:"No rule still sets #message's color to black", test: c => !/#message\s*\{[^}]*color\s*:\s*black/i.test(c) },
      { label:"The #message rule (if still present) is corrected to red, not black", test: c => {
          const m = c.match(/#message\s*\{[^}]*\}/i);
          if(!m) return true;
          return /color\s*:\s*red/i.test(m[0]);
        }}
    ]
  },
  {
    id: "ex22", title: "Debug: A Flexbox centering bug", level: "debug", topics: "Flexbox Layout",
    brief: "This box is supposed to center its content both horizontally and vertically, but vertical centering silently fails. There's a one-letter typo in a CSS property name — the browser ignores invalid properties without any error, so it fails silently. Find and fix it.",
    hint: "Check every Flexbox property name character by character against what you learned in the Flexbox Layout topic — align-items is the one that controls the cross-axis (vertical, in a row container).",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Center</title>\n<style>\n  .box {\n    display: flex;\n    justify-content: center;\n    align-item: center;\n    height: 200px;\n    background: #eee;\n  }\n</style>\n</head>\n<body>\n  <div class=\"box\">\n    <div class=\"inner\">Centered?</div>\n  </div>\n</body>\n</html>",
    checks: [
      { label:"align-items is spelled correctly (with the trailing 's')", test: c => /align-items\s*:\s*center/i.test(c) },
      { label:"The misspelled align-item property is gone", test: c => !/align-item(?!s)\s*:/i.test(c) }
    ]
  }
];
let PRACTICE_ACTIVE = null;

function initPracticePage(){
  const picker = document.getElementById("exercisePicker");
  if(!picker) return; // not practice.html
  picker.innerHTML = "";
  EXERCISES.forEach((ex, i)=>{
    const chip = document.createElement("button");
    chip.className = "exercise-chip" + (i===0 ? " active" : "");
    chip.innerHTML = (i+1) + ". " + escapeHtml(ex.title) + (ex.level === "advanced" ? ' <span class="exercise-level-badge">Advanced</span>' : ex.level === "debug" ? ' <span class="exercise-level-badge debug">Debug</span>' : "");
    chip.addEventListener("click", ()=> loadExercise(ex.id));
    picker.appendChild(chip);
  });

  const frame = document.getElementById("previewFrame");
  EditorEngine.init("monacoContainer", EXERCISES[0].starter, (code)=> renderToFrame(frame, code))
    .then(()=>{ loadExercise(EXERCISES[0].id); });

  document.getElementById("btnRun").addEventListener("click", ()=> renderToFrame(frame, EditorEngine.getValue()));
  document.getElementById("btnReset").addEventListener("click", ()=>{
    const ex = EXERCISES.find(e=>e.id===PRACTICE_ACTIVE);
    EditorEngine.setValue(ex.starter);
    renderToFrame(frame, ex.starter);
  });
  document.getElementById("btnCopy").addEventListener("click", ()=> copyText(EditorEngine.getValue()));
  document.getElementById("btnCheck").addEventListener("click", runExerciseCheck);
}

function loadExercise(id){
  PRACTICE_ACTIVE = id;
  const ex = EXERCISES.find(e=>e.id===id);
  document.querySelectorAll(".exercise-chip").forEach((c,i)=> c.classList.toggle("active", EXERCISES[i].id===id));
  document.getElementById("exerciseBrief").innerHTML = `<h2>${escapeHtml(ex.title)}${ex.level === "advanced" ? ' <span class="exercise-level-badge">Advanced</span>' : ex.level === "debug" ? ' <span class="exercise-level-badge debug">Debug</span>' : ""}</h2>${ex.topics ? `<p class="exercise-topics">${escapeHtml(ex.topics)}</p>` : ""}<p>${escapeHtml(ex.brief)}</p><p class="hint"><i class="fa-solid fa-lightbulb me-1"></i>${escapeHtml(ex.hint)}</p>`;
  document.getElementById("checkResult").className = "check-result";
  if(EditorEngine.isReady()){
    EditorEngine.setValue(ex.starter);
    renderToFrame(document.getElementById("previewFrame"), ex.starter);
  }
}

function runExerciseCheck(){
  const ex = EXERCISES.find(e=>e.id===PRACTICE_ACTIVE);
  const code = EditorEngine.getValue();
  const results = ex.checks.map(c=> ({ label:c.label, pass:c.test(code) }));
  const passed = results.filter(r=>r.pass).length;
  const box = document.getElementById("checkResult");
  box.className = "check-result show " + (passed===results.length ? "pass" : "fail");
  box.innerHTML = `<b>${passed}/${results.length} checks passed</b><ul style="margin:8px 0 0;padding-left:18px;">${
    results.map(r=>`<li>${r.pass?'✓':'✗'} ${escapeHtml(r.label)}</li>`).join('')
  }</ul>`;
  if(passed===results.length){
    ProgressStore.markTopicComplete("practice-" + ex.id);
    showToast("Exercise complete!");
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  initPlaygroundPage();
  initPracticePage();
});
