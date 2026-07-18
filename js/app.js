/* ================================================================
   HTML LEARNING PORTAL — SHARED APP SCRIPT (js/app.js)
   Loaded on EVERY page. Responsible for:
     1) dark/light theme toggle (persisted)
     2) the Progress Store — a small localStorage-backed API used
        by tutorial.js, quiz.js and editor.js (practice page) to record
     3) homepage-only: populating the topic grid + dashboard preview
        from the embedded TUTORIALS_DATA (js/data-tutorials.js)
     4) small shared utilities: toast, scroll-reveal
   ================================================================ */

/* ---------- 1. Theme ---------- */
const Theme = {
  KEY: "hlp_theme",
  init(){
    let saved = "light";
    try { saved = localStorage.getItem(this.KEY) || "light"; } catch(e){ /* storage unavailable */ }
    document.documentElement.setAttribute("data-theme", saved);
    document.body && document.body.setAttribute("data-theme", saved);
    this.syncIcon(saved);
  },
  toggle(){
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    document.body.setAttribute("data-theme", next);
    try { localStorage.setItem(this.KEY, next); } catch(e){}
    this.syncIcon(next);
  },
  syncIcon(mode){
    const btn = document.getElementById("themeToggle");
    if(!btn) return;
    const icon = btn.querySelector("i");
    if(icon) icon.className = mode === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
};
// Apply theme ASAP (before DOMContentLoaded) to avoid a flash of the wrong theme.
(function(){
  let saved = "light";
  try { saved = localStorage.getItem("hlp_theme") || "light"; } catch(e){}
  document.documentElement.setAttribute("data-theme", saved);
})();

/* ---------- 2. Progress Store ----------
   Shape kept in localStorage under one key:
   { completedTopics: string[], quizScores: { [topicId]: {score,total,at} }, notes: {}, bookmarks: string[] }
   All reads/writes are wrapped in try/catch: if storage is blocked
   (e.g. a restricted preview sandbox), the app falls back to an
   in-memory object for the current page view instead of throwing.
------------------------------------------------------------------ */
const ProgressStore = (function(){
  const KEY = "hlp_progress_v1";
  let memoryFallback = { completedTopics:[], quizScores:{}, notes:{}, bookmarks:[] };
  let usingFallback = false;

  function read(){
    if(usingFallback) return memoryFallback;
    try{
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : { completedTopics:[], quizScores:{}, notes:{}, bookmarks:[] };
    }catch(e){
      usingFallback = true;
      return memoryFallback;
    }
  }
  function write(data){
    if(usingFallback){ memoryFallback = data; return; }
    try{
      localStorage.setItem(KEY, JSON.stringify(data));
    }catch(e){
      usingFallback = true;
      memoryFallback = data;
    }
  }
  return {
    getAll(){ return read(); },
    markTopicComplete(topicId){
      const d = read();
      if(!d.completedTopics.includes(topicId)) d.completedTopics.push(topicId);
      write(d);
    },
    isTopicComplete(topicId){ return read().completedTopics.includes(topicId); },
    recordQuizScore(topicId, score, total){
      const d = read();
      d.quizScores[topicId] = { score, total, at: new Date().toISOString() };
      if(score === total) this.markTopicComplete(topicId);
      write(d);
    },
    getQuizScore(topicId){ return read().quizScores[topicId] || null; },
    toggleBookmark(topicId){
      const d = read();
      const i = d.bookmarks.indexOf(topicId);
      if(i>-1) d.bookmarks.splice(i,1); else d.bookmarks.push(topicId);
      write(d);
      return d.bookmarks.includes(topicId);
    },
    isBookmarked(topicId){ return read().bookmarks.includes(topicId); },
    saveNote(topicId, text){
      const d = read(); d.notes[topicId] = text; write(d);
    },
    getNote(topicId){ return read().notes[topicId] || ""; },
    stats(totalTopics){
      const d = read();
      const done = d.completedTopics.length;
      return { done, total: totalTopics, pct: totalTopics ? Math.round((done/totalTopics)*100) : 0 };
    },
    reset(){ write({ completedTopics:[], quizScores:{}, notes:{}, bookmarks:[] }); }
  };
})();

/* ---------- 3. Shared utilities ---------- */
function escapeHtml(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function showToast(message){
  let toast = document.querySelector(".copy-toast");
  if(!toast){
    toast = document.createElement("div");
    toast.className = "copy-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(()=> toast.classList.remove("show"), 1800);
}

function copyText(text){
  navigator.clipboard.writeText(text).then(()=> showToast("Copied to clipboard")).catch(()=> showToast("Copy failed"));
}

function initScrollReveal(){
  const items = document.querySelectorAll(".reveal");
  if(!items.length) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold:0.12 });
  items.forEach(i=> io.observe(i));
}

/* ---------- 4. Homepage: topic grid + dashboard preview ---------- */
function initHomepageTopics(){
  const grid = document.getElementById("topicGrid");
  if(!grid) return; // not on the homepage
  try{
    if(!window.TUTORIALS_DATA) throw new Error("Tutorials data script (js/data-tutorials.js) did not load");
    const topics = window.TUTORIALS_DATA.topics;
    grid.innerHTML = "";
    topics.forEach(t=>{
      const done = ProgressStore.isTopicComplete(t.id);
      const col = document.createElement("div");
      col.className = "col-sm-6 col-lg-3";
      col.innerHTML = `
        <a href="tutorial.html?topic=${t.id}" class="topic-card text-decoration-none d-block">
          <div class="d-flex justify-content-between align-items-center">
            <span class="topic-num">&lt;${String(t.number).padStart(2,'0')}&gt;</span>
            <i class="${t.icon} topic-icon"></i>
          </div>
          <h4>${escapeHtml(t.title)}</h4>
          <p>${escapeHtml(t.summary)}</p>
          <div class="topic-bar"><i style="width:${done?100:0}%;"></i></div>
          <span class="topic-open">Open module <i class="fa-solid fa-arrow-right"></i></span>
        </a>`;
      grid.appendChild(col);
    });
    updateHomeDashboard(topics.length);
  }catch(e){
    grid.innerHTML = `<div class="col-12 text-center text-muted py-4">Couldn't load the curriculum (data/tutorials.json). ${e.message}</div>`;
  }
}

function updateHomeDashboard(totalTopics){
  const bar = document.getElementById("homeProgressBar");
  const pct = document.getElementById("homeProgressPct");
  const label = document.getElementById("homeProgressLabel");
  if(!bar) return;
  const stats = ProgressStore.stats(totalTopics);
  bar.style.width = stats.pct + "%";
  pct.textContent = stats.pct + "%";
  label.textContent = `${stats.done} of ${stats.total} topics completed`;

  const badgeDefs = [["explorer",0.25],["builder",0.5],["architect",0.75],["master",1.0]];
  badgeDefs.forEach(([id, threshold])=>{
    const el = document.getElementById("badge-" + id);
    if(!el) return;
    el.classList.toggle("earned", (stats.done/stats.total) >= threshold && stats.total>0);
  });
}

/* ---------- 5. Nav active-link highlighting ---------- */
function highlightActiveNav(){
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link=>{
    const href = link.getAttribute("href");
    if(href === page) link.classList.add("active"); else link.classList.remove("active");
  });
}

/* ---------- 6. Init ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  Theme.init();
  highlightActiveNav();
  const themeBtn = document.getElementById("themeToggle");
  if(themeBtn) themeBtn.addEventListener("click", ()=> Theme.toggle());
  initHomepageTopics();
  initScrollReveal();
});
