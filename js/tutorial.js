/* ================================================================
   TUTORIAL PAGE ENGINE (js/tutorial.js)
   Loaded only on tutorial.html. Uses the embedded TUTORIALS_DATA and
   QUIZZES_DATA globals (js/data-tutorials.js, js/data-quizzes.js) to
   render the topic sidebar, the active lesson (with runnable,
   copyable examples), and a per-topic quiz.
   ================================================================ */

let TUT_TOPICS = [];
let TUT_QUIZZES = {};
let TUT_ACTIVE = null;

function getTopicFromURL(){
  const params = new URLSearchParams(location.search);
  return params.get("topic");
}

function initTutorialPage(){
  const sidebar = document.getElementById("tutSidebarList");
  if(!sidebar) return; // not on tutorial.html
  try{
    if(!window.TUTORIALS_DATA) throw new Error("Tutorials data script (js/data-tutorials.js) did not load");
    if(!window.QUIZZES_DATA) throw new Error("Quiz data script (js/data-quizzes.js) did not load");
    TUT_TOPICS = window.TUTORIALS_DATA.topics;
    TUT_QUIZZES = window.QUIZZES_DATA.quizzes;
    const requested = getTopicFromURL();
    TUT_ACTIVE = (requested && TUT_TOPICS.find(t=>t.id===requested)) ? requested : TUT_TOPICS[0].id;
    renderSidebar();
    renderLesson(TUT_ACTIVE);
    document.getElementById("tutSearch").addEventListener("input", renderSidebar);
  }catch(e){
    document.getElementById("tutContentBody").innerHTML =
      `<p class="text-danger">Couldn't load tutorial content: ${e.message}</p>`;
  }
}

function renderSidebar(){
  const list = document.getElementById("tutSidebarList");
  const query = (document.getElementById("tutSearch").value || "").toLowerCase();
  list.innerHTML = "";
  TUT_TOPICS.forEach(t=>{
    if(query && !(t.title.toLowerCase().includes(query) || t.summary.toLowerCase().includes(query))) return;
    const done = ProgressStore.isTopicComplete(t.id);
    const btn = document.createElement("button");
    btn.className = "tut-topic-btn" + (t.id === TUT_ACTIVE ? " active" : "");
    btn.innerHTML = `<span class="n">${String(t.number).padStart(2,'0')}</span><span>${t.title}</span>${done ? '<i class="fa-solid fa-circle-check check"></i>' : ''}`;
    btn.addEventListener("click", ()=>{
      TUT_ACTIVE = t.id;
      history.replaceState(null, "", "tutorial.html?topic=" + t.id);
      renderSidebar();
      renderLesson(t.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    list.appendChild(btn);
  });
}

function renderLesson(topicId){
  const t = TUT_TOPICS.find(x=>x.id===topicId);
  const body = document.getElementById("tutContentBody");
  const idx = TUT_TOPICS.findIndex(x=>x.id===topicId);
  const prev = TUT_TOPICS[idx-1];
  const next = TUT_TOPICS[idx+1];
  const done = ProgressStore.isTopicComplete(t.id);
  const bookmarked = ProgressStore.isBookmarked(t.id);

  body.innerHTML = `
    <div class="tut-content-head">
      <div>
        <div class="num">&lt;${String(t.number).padStart(2,'0')} / 16&gt;</div>
        <h1>${t.title}</h1>
      </div>
      <div class="d-flex gap-2">
        <button class="icon-btn" id="tutBookmarkBtn"><i class="fa-${bookmarked?'solid':'regular'} fa-star"></i> ${bookmarked?'Saved':'Save'}</button>
        <button class="icon-btn" id="tutCompleteBtn"><i class="fa-solid fa-circle-check"></i> ${done?'Completed':'Mark complete'}</button>
      </div>
    </div>
    <p class="tut-summary lead-text">${t.summary}</p>

    <div id="tutLessons"></div>

    <h2 style="font-size:1.15rem;">Live examples</h2>
    <div class="example-list" id="tutExamples"></div>

    <div class="tut-quiz" id="tutQuizBlock">
      <h2>Quick check</h2>
      <div id="tutQuizQuestions"></div>
    </div>

    <div class="tut-footer-nav">
      ${prev ? `<button class="btn btn-outline-lg" id="prevTopicBtn"><i class="fa-solid fa-arrow-left"></i> ${prev.title}</button>` : '<span></span>'}
      ${next ? `<button class="btn btn-primary-lg" id="nextTopicBtn">${next.title} <i class="fa-solid fa-arrow-right"></i></button>` : '<a href="quiz.html" class="btn btn-primary-lg">Take the full quiz <i class="fa-solid fa-arrow-right"></i></a>'}
    </div>
  `;

  const lessonsWrap = document.getElementById("tutLessons");
  t.lessons.forEach(l=>{
    const div = document.createElement("div");
    div.className = "lesson-block";
    div.innerHTML = `<h3>${l.heading}</h3><p>${l.content}</p>`;
    lessonsWrap.appendChild(div);
  });

  const exWrap = document.getElementById("tutExamples");
  t.examples.forEach((ex, i)=>{
    const card = document.createElement("div");
    card.className = "example-card";
    card.innerHTML = `
      <div class="example-head">
        <span>${ex.title}</span>
        <div class="example-actions">
          <button class="ex-copy" data-i="${i}"><i class="fa-regular fa-copy"></i> Copy</button>
          <button class="ex-toggle" data-i="${i}"><i class="fa-solid fa-chevron-up"></i> Hide</button>
        </div>
      </div>
      <div class="example-body">
        <pre class="example-code">${escapeHtml(ex.code)}</pre>
        <div class="example-preview"><iframe title="${ex.title} preview" sandbox="allow-scripts"></iframe></div>
      </div>`;
    exWrap.appendChild(card);
    card.querySelector("iframe").srcdoc = ex.code;
  });

  // wire example buttons
  exWrap.querySelectorAll(".ex-copy").forEach(b=>{
    b.addEventListener("click", ()=> copyText(t.examples[+b.dataset.i].code));
  });
  exWrap.querySelectorAll(".ex-toggle").forEach(b=>{
    b.addEventListener("click", ()=>{
      const card = b.closest(".example-card");
      card.classList.toggle("collapsed");
      b.innerHTML = card.classList.contains("collapsed")
        ? '<i class="fa-solid fa-chevron-down"></i> Show'
        : '<i class="fa-solid fa-chevron-up"></i> Hide';
    });
  });

  renderTopicQuiz(t.id);

  document.getElementById("tutBookmarkBtn").addEventListener("click", ()=>{
    const nowBookmarked = ProgressStore.toggleBookmark(t.id);
    renderLesson(t.id);
  });
  document.getElementById("tutCompleteBtn").addEventListener("click", ()=>{
    ProgressStore.markTopicComplete(t.id);
    renderSidebar();
    renderLesson(t.id);
    showToast("Marked \"" + t.title + "\" complete");
  });
  if(prev) document.getElementById("prevTopicBtn").addEventListener("click", ()=>{
    TUT_ACTIVE = prev.id; history.replaceState(null,"","tutorial.html?topic="+prev.id);
    renderSidebar(); renderLesson(prev.id); window.scrollTo({top:0,behavior:"smooth"});
  });
  if(next) document.getElementById("nextTopicBtn").addEventListener("click", ()=>{
    TUT_ACTIVE = next.id; history.replaceState(null,"","tutorial.html?topic="+next.id);
    renderSidebar(); renderLesson(next.id); window.scrollTo({top:0,behavior:"smooth"});
  });
}

function renderTopicQuiz(topicId){
  const questions = TUT_QUIZZES[topicId] || [];
  const mount = document.getElementById("tutQuizQuestions");
  mount.innerHTML = "";
  let answeredCount = 0;
  const total = questions.length;

  questions.forEach((q, qi)=>{
    const qBlock = document.createElement("div");
    qBlock.className = "tq-q";
    qBlock.innerHTML = `<p class="qtext">${qi+1}. ${q.q}</p><div class="tq-opts"></div><p class="tq-explain">${q.explain}</p>`;
    const optsWrap = qBlock.querySelector(".tq-opts");
    q.opts.forEach((optText, oi)=>{
      const b = document.createElement("button");
      b.className = "tq-opt";
      b.textContent = optText;
      b.addEventListener("click", ()=>{
        if(optsWrap.dataset.answered) return;
        optsWrap.dataset.answered = "1";
        answeredCount++;
        [...optsWrap.children].forEach((c,ci)=>{
          if(ci===q.answer) c.classList.add("correct");
          else if(ci===oi) c.classList.add("wrong");
        });
        qBlock.querySelector(".tq-explain").classList.add("show");
        if(answeredCount === total && total>0){
          ProgressStore.recordQuizScore(topicId, total, total); // topic quiz completion here is participation-based
          ProgressStore.markTopicComplete(topicId);
          renderSidebar();
          showToast("Nice work — topic marked complete!");
        }
      });
      optsWrap.appendChild(b);
    });
    mount.appendChild(qBlock);
  });

  if(!questions.length){
    mount.innerHTML = "<p>No quiz questions for this topic yet.</p>";
  }
}

function escapeHtml(s){
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

document.addEventListener("DOMContentLoaded", initTutorialPage);
