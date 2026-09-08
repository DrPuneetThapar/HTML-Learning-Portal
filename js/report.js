/* ================================================================
   PROGRESS REPORT PAGE (js/report.js)
   Loaded only on report.html. Reads ProgressStore (js/app.js) and
   TUTORIALS_DATA (js/data-tutorials.js) to render a printable
   summary: overall + per-unit completion, quiz scores with attempt
   history, and the "flagged for review" list. Nothing here talks to
   a server — this is a client-side-only report over localStorage data.
   ================================================================ */

const REPORT_UNIT_NAMES = { 1: "Unit 1 — Web & HTML Fundamentals", 2: "Unit 2 — Semantic HTML and Forms", 3: "Unit 3 — Cascading Style Sheets" };
const REPORT_NAME_KEY = "hlp_student_name";

function initReportPage(){
  const root = document.getElementById("reportOverallBar");
  if(!root) return; // not on report.html
  if(!window.TUTORIALS_DATA){
    document.querySelector(".report-card").innerHTML = `<p class="text-danger">Couldn't load progress data: tutorials dataset did not load.</p>`;
    return;
  }
  const topics = window.TUTORIALS_DATA.topics;

  document.getElementById("reportDate").textContent = "Generated " + new Date().toLocaleDateString(undefined, { year:"numeric", month:"long", day:"numeric" });

  const nameInput = document.getElementById("studentNameInput");
  let savedName = "";
  try{ savedName = localStorage.getItem(REPORT_NAME_KEY) || ""; }catch(e){}
  nameInput.value = savedName;
  document.getElementById("studentNamePrint").textContent = savedName || "Student";
  nameInput.addEventListener("input", ()=>{
    document.getElementById("studentNamePrint").textContent = nameInput.value || "Student";
    try{ localStorage.setItem(REPORT_NAME_KEY, nameInput.value); }catch(e){}
  });

  document.getElementById("printReportBtn").addEventListener("click", ()=> window.print());

  renderOverall(topics);
  renderScores(topics);
  renderFlagged(topics);
}

function renderOverall(topics){
  const stats = ProgressStore.stats(topics.length);
  document.getElementById("reportOverallBar").style.width = stats.pct + "%";
  document.getElementById("reportOverallPct").textContent = stats.pct + "%";
  document.getElementById("reportOverallLabel").textContent = `${stats.done} of ${stats.total} topics completed`;

  const units = {};
  topics.forEach(t=>{
    const u = t.unit || 1;
    if(!units[u]) units[u] = { total:0, done:0 };
    units[u].total++;
    if(ProgressStore.isTopicComplete(t.id)) units[u].done++;
  });
  document.getElementById("reportUnitProgress").innerHTML = Object.keys(units).sort().map(u=>{
    const { total, done } = units[u];
    const pct = total ? Math.round((done/total)*100) : 0;
    return `<div class="unit-progress-row">
      <div class="unit-progress-top"><span>${REPORT_UNIT_NAMES[u] || ("Unit " + u)}</span><span>${done}/${total}</span></div>
      <div class="progress-outer small"><div class="progress-inner" style="width:${pct}%;"></div></div>
    </div>`;
  }).join("");

  const badgeDefs = [["explorer","Explorer","fa-seedling",0.25],["builder","Builder","fa-hammer",0.5],["architect","Architect","fa-drafting-compass",0.75],["master","Master","fa-graduation-cap",1.0]];
  const frac = stats.total ? stats.done/stats.total : 0;
  document.getElementById("reportBadges").innerHTML = badgeDefs.map(([id,label,icon,threshold])=>{
    const earned = frac >= threshold && stats.total > 0;
    return `<span class="badge-pill${earned ? " earned" : ""}"><i class="fa-solid ${icon}"></i> ${label}</span>`;
  }).join("");
}

function renderScores(topics){
  const tbody = document.getElementById("reportScoreBody");
  const all = ProgressStore.getAll();
  const rows = Object.keys(all.quizScores).map(topicId=>{
    const topic = topics.find(t=>t.id === topicId);
    const best = all.quizScores[topicId];
    const history = ProgressStore.getQuizHistory(topicId);
    return { topicId, title: topic ? topic.title : topicId, best, attempts: history.length };
  }).sort((a,b)=> a.title.localeCompare(b.title));

  if(!rows.length){
    document.getElementById("reportNoScores").style.display = "block";
    return;
  }
  tbody.innerHTML = rows.map(r=>{
    const pct = r.best.total ? Math.round((r.best.score/r.best.total)*100) : 0;
    const cls = pct >= 80 ? "score-good" : pct >= 50 ? "score-mid" : "score-low";
    const date = new Date(r.best.at).toLocaleDateString(undefined, { year:"numeric", month:"short", day:"numeric" });
    return `<tr>
      <td>${escapeHtml(r.title)}</td>
      <td><span class="score-pill ${cls}">${r.best.score}/${r.best.total}</span></td>
      <td>${r.attempts}</td>
      <td>${date}</td>
    </tr>`;
  }).join("");
}

function renderFlagged(topics){
  const list = document.getElementById("reportFlaggedList");
  const flagged = ProgressStore.getFlagged();
  if(!flagged.length){
    document.getElementById("reportNoFlagged").style.display = "block";
    return;
  }
  list.innerHTML = flagged.map(topicId=>{
    const topic = topics.find(t=>t.id === topicId);
    const title = topic ? topic.title : topicId;
    const unit = topic ? topic.unit : "?";
    return `<li><i class="fa-solid fa-flag" style="color:var(--tag); margin-right:8px;"></i>${escapeHtml(title)} <span class="text-muted small">(Unit ${unit})</span></li>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", initReportPage);
