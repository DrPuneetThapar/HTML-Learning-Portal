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
    chip.innerHTML = (i+1) + ". " + escapeHtml(ex.title) + (ex.level === "advanced" ? ' <span class="exercise-level-badge">Advanced</span>' : "");
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
  document.getElementById("exerciseBrief").innerHTML = `<h2>${escapeHtml(ex.title)}${ex.level === "advanced" ? ' <span class="exercise-level-badge">Advanced</span>' : ""}</h2>${ex.topics ? `<p class="exercise-topics">${escapeHtml(ex.topics)}</p>` : ""}<p>${escapeHtml(ex.brief)}</p><p class="hint"><i class="fa-solid fa-lightbulb me-1"></i>${escapeHtml(ex.hint)}</p>`;
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
