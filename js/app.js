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
   { completedTopics: string[], quizScores: { [topicId]: {score,total,at} },
     quizHistory: { [topicId]: {score,total,at}[] }, notes: {}, bookmarks: string[],
     flagged: string[] }
   All reads/writes are wrapped in try/catch: if storage is blocked
   (e.g. a restricted preview sandbox), the app falls back to an
   in-memory object for the current page view instead of throwing.
   read() always merges in defaults for any field missing from data saved
   by an earlier version of the site, so old localStorage data upgrades safely.
------------------------------------------------------------------ */
const ProgressStore = (function(){
  const KEY = "hlp_progress_v1";
  const DEFAULTS = { completedTopics:[], quizScores:{}, quizHistory:{}, notes:{}, bookmarks:[], flagged:[] };
  let memoryFallback = { ...DEFAULTS };
  let usingFallback = false;

  function withDefaults(d){
    return {
      completedTopics: d.completedTopics || [],
      quizScores: d.quizScores || {},
      quizHistory: d.quizHistory || {},
      notes: d.notes || {},
      bookmarks: d.bookmarks || [],
      flagged: d.flagged || []
    };
  }

  function read(){
    if(usingFallback) return memoryFallback;
    try{
      const raw = localStorage.getItem(KEY);
      return raw ? withDefaults(JSON.parse(raw)) : { ...DEFAULTS };
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
      const attempt = { score, total, at: new Date().toISOString() };
      d.quizScores[topicId] = attempt;
      if(!d.quizHistory[topicId]) d.quizHistory[topicId] = [];
      d.quizHistory[topicId].push(attempt);
      if(score === total) this.markTopicComplete(topicId);
      write(d);
    },
    getQuizScore(topicId){ return read().quizScores[topicId] || null; },
    getQuizHistory(topicId){ return read().quizHistory[topicId] || []; },
    toggleBookmark(topicId){
      const d = read();
      const i = d.bookmarks.indexOf(topicId);
      if(i>-1) d.bookmarks.splice(i,1); else d.bookmarks.push(topicId);
      write(d);
      return d.bookmarks.includes(topicId);
    },
    isBookmarked(topicId){ return read().bookmarks.includes(topicId); },
    toggleFlag(topicId){
      const d = read();
      const i = d.flagged.indexOf(topicId);
      if(i>-1) d.flagged.splice(i,1); else d.flagged.push(topicId);
      write(d);
      return d.flagged.includes(topicId);
    },
    isFlagged(topicId){ return read().flagged.includes(topicId); },
    getFlagged(){ return read().flagged; },
    saveNote(topicId, text){
      const d = read(); d.notes[topicId] = text; write(d);
    },
    getNote(topicId){ return read().notes[topicId] || ""; },
    stats(totalTopics){
      const d = read();
      const done = d.completedTopics.length;
      return { done, total: totalTopics, pct: totalTopics ? Math.round((done/totalTopics)*100) : 0 };
    },
    reset(){ write({ ...DEFAULTS }); }
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
    updateHomeDashboard(topics);
  }catch(e){
    grid.innerHTML = `<div class="col-12 text-center text-muted py-4">Couldn't load the curriculum (data/tutorials.json). ${e.message}</div>`;
  }
}

const UNIT_NAMES = { 1: "Unit 1 — Web &amp; HTML Fundamentals", 2: "Unit 2 — Semantic HTML and Forms", 3: "Unit 3 — Cascading Style Sheets" };

function updateHomeDashboard(topics){
  const bar = document.getElementById("homeProgressBar");
  const pct = document.getElementById("homeProgressPct");
  const label = document.getElementById("homeProgressLabel");
  if(!bar) return;
  const totalTopics = topics.length;
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

  const unitWrap = document.getElementById("homeUnitProgress");
  if(unitWrap){
    const units = {};
    topics.forEach(t=>{
      const u = t.unit || 1;
      if(!units[u]) units[u] = { total:0, done:0 };
      units[u].total++;
      if(ProgressStore.isTopicComplete(t.id)) units[u].done++;
    });
    unitWrap.innerHTML = Object.keys(units).sort().map(u=>{
      const { total, done } = units[u];
      const upct = total ? Math.round((done/total)*100) : 0;
      return `<div class="unit-progress-row">
        <div class="unit-progress-top"><span>${UNIT_NAMES[u] || ("Unit " + u)}</span><span>${done}/${total}</span></div>
        <div class="progress-outer small"><div class="progress-inner" style="width:${upct}%;"></div></div>
      </div>`;
    }).join("");
  }
}

/* ---------- 5. Site-wide Search ---------- */
const SiteSearch = {
  open(){
    const overlay = document.getElementById("searchOverlay");
    if(!overlay) return;
    overlay.classList.add("show");
    const input = document.getElementById("searchInput");
    input.value = "";
    document.getElementById("searchResults").innerHTML = "";
    setTimeout(()=> input.focus(), 30);
  },
  close(){
    const overlay = document.getElementById("searchOverlay");
    if(overlay) overlay.classList.remove("show");
  },
  render(query){
    const results = document.getElementById("searchResults");
    if(!query){ results.innerHTML = ""; return; }
    if(!window.SEARCH_INDEX){ results.innerHTML = `<p class="text-muted p-3">Search index unavailable.</p>`; return; }
    const q = query.toLowerCase();
    const matches = window.SEARCH_INDEX.filter(item =>
      item.title.toLowerCase().includes(q) || item.sub.toLowerCase().includes(q)
    ).slice(0, 30);
    if(!matches.length){
      results.innerHTML = `<p class="text-muted p-3">No matches for &quot;${escapeHtml(query)}&quot;.</p>`;
      return;
    }
    results.innerHTML = matches.map(item => `
      <a class="search-result-item" href="${item.url}">
        <i class="${item.icon}"></i>
        <div>
          <div class="search-result-title">${escapeHtml(item.title)} <span class="search-result-type">${item.type}</span></div>
          <div class="search-result-sub">${escapeHtml(item.sub)}</div>
        </div>
      </a>
    `).join("");
  },
  init(){
    const trigger = document.getElementById("searchTrigger");
    const overlay = document.getElementById("searchOverlay");
    const closeBtn = document.getElementById("searchClose");
    const input = document.getElementById("searchInput");
    if(!trigger || !overlay) return;
    trigger.addEventListener("click", ()=> this.open());
    closeBtn.addEventListener("click", ()=> this.close());
    overlay.addEventListener("click", (e)=>{ if(e.target === overlay) this.close(); });
    input.addEventListener("input", ()=> this.render(input.value));
    document.addEventListener("keydown", (e)=>{
      if(e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA"){
        e.preventDefault();
        this.open();
      } else if(e.key === "Escape" && overlay.classList.contains("show")){
        this.close();
      }
    });
  }
};

/* ---------- 6. Nav active-link highlighting ---------- */
function highlightActiveNav(){
  const page = location.pathname.split("/").pop() || "index.html";
  let dropdownHasActive = false;
  document.querySelectorAll(".nav-link").forEach(link=>{
    const href = link.getAttribute("href");
    if(href === page){
      link.classList.add("active");
      if(link.classList.contains("dropdown-item")) dropdownHasActive = true;
    } else {
      link.classList.remove("active");
    }
  });
  const dropdownToggle = document.getElementById("moreDropdown");
  if(dropdownToggle) dropdownToggle.classList.toggle("active", dropdownHasActive);
}

/* ---------- 7. Init ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  Theme.init();
  highlightActiveNav();
  SiteSearch.init();
  const themeBtn = document.getElementById("themeToggle");
  if(themeBtn) themeBtn.addEventListener("click", ()=> Theme.toggle());
  initHomepageTopics();
  initScrollReveal();
});

if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").catch(()=>{ /* offline support unavailable, fail silently */ });
  });
}
