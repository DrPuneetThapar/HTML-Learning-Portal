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
    id: "ex1", title: "Build a basic page",
    brief: "Create a valid HTML5 document with a &lt;title&gt; of 'My Page' and one &lt;h1&gt; that says 'Hello, World!'.",
    hint: "Remember: DOCTYPE, html, head with title, body with h1.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title></title>\n</head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has <!DOCTYPE html>", test: c => /<!DOCTYPE html>/i.test(c) },
      { label:"Title is 'My Page'", test: c => /<title>\s*My Page\s*<\/title>/i.test(c) },
      { label:"Has an <h1> containing 'Hello, World!'", test: c => /<h1[^>]*>\s*Hello, World!\s*<\/h1>/i.test(c) }
    ]
  },
  {
    id: "ex2", title: "Format a paragraph",
    brief: "Write a paragraph where one word is &lt;strong&gt;bold&lt;/strong&gt; and another is &lt;em&gt;italic&lt;/em&gt;.",
    hint: "Use <strong> and <em> inside a <p>.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Formatting</title></head>\n<body>\n  <p></p>\n</body>\n</html>",
    checks: [
      { label:"Contains a <p>", test: c => /<p>/i.test(c) },
      { label:"Contains <strong>…</strong>", test: c => /<strong>[^<]+<\/strong>/i.test(c) },
      { label:"Contains <em>…</em>", test: c => /<em>[^<]+<\/em>/i.test(c) }
    ]
  },
  {
    id: "ex3", title: "Build a navigation list",
    brief: "Create an unordered list of 3 links: Home, About, Contact — each a real &lt;a&gt; tag.",
    hint: "Wrap <li><a href=\"#\">…</a></li> three times inside a <ul>.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Nav</title></head>\n<body>\n  <ul>\n\n  </ul>\n</body>\n</html>",
    checks: [
      { label:"Has a <ul>", test: c => /<ul>/i.test(c) },
      { label:"Has at least 3 <li> items", test: c => (c.match(/<li>/gi)||[]).length >= 3 },
      { label:"Each <li> contains a link", test: c => { const items = c.match(/<li>[\s\S]*?<\/li>/gi)||[]; return items.length>=3 && items.every(li=>/<a\s+href=/i.test(li)); } }
    ]
  },
  {
    id: "ex4", title: "Add an accessible image",
    brief: "Insert an &lt;img&gt; tag with a src and meaningful alt text (not empty).",
    hint: "alt=\"\" is not enough — describe the image.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Image</title></head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has an <img> tag", test: c => /<img[^>]+>/i.test(c) },
      { label:"Has a src attribute", test: c => /<img[^>]+src\s*=\s*["'][^"']+["']/i.test(c) },
      { label:"Has meaningful alt text (not empty)", test: c => /<img[^>]+alt\s*=\s*["'][^"']{3,}["']/i.test(c) }
    ]
  },
  {
    id: "ex5", title: "Build a simple table",
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
    id: "ex6", title: "Semantic page layout",
    brief: "Build a page using &lt;header&gt;, &lt;main&gt;, and &lt;footer&gt; instead of plain &lt;div&gt;s.",
    hint: "Each semantic tag should wrap some content, even a single line.",
    starter: "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Layout</title></head>\n<body>\n\n</body>\n</html>",
    checks: [
      { label:"Has a <header>", test: c => /<header[\s>]/i.test(c) },
      { label:"Has a <main>", test: c => /<main[\s>]/i.test(c) },
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
    chip.textContent = (i+1) + ". " + ex.title;
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
  document.getElementById("exerciseBrief").innerHTML = `<h2>${ex.title}</h2><p>${ex.brief}</p><p class="hint"><i class="fa-solid fa-lightbulb me-1"></i>${ex.hint}</p>`;
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
    results.map(r=>`<li>${r.pass?'✓':'✗'} ${r.label}</li>`).join('')
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
