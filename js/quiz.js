/* ================================================================
   QUIZ PAGE ENGINE (js/quiz.js)
   Loaded only on quiz.html. Uses the embedded TUTORIALS_DATA and
   QUIZZES_DATA globals (js/data-tutorials.js, js/data-quizzes.js).
   Lets the student pick one topic (or a mixed "All topics" run),
   answer questions one at a time, and see a scored results screen
   with a review of every answer.
   ================================================================ */

function escapeHtml(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

let QZ_TOPICS = [];
let QZ_BANK = {};
let QZ_SESSION = null; // { topicId, questions:[], index, correctCount, answers:[] }

function initQuizPage(){
  const picker = document.getElementById("quizPickerGrid");
  if(!picker) return; // not on quiz.html
  try{
    if(!window.TUTORIALS_DATA) throw new Error("Tutorials data script (js/data-tutorials.js) did not load");
    if(!window.QUIZZES_DATA) throw new Error("Quiz data script (js/data-quizzes.js) did not load");
    QZ_TOPICS = window.TUTORIALS_DATA.topics;
    QZ_BANK = window.QUIZZES_DATA.quizzes;
    renderPicker();
  }catch(e){
    picker.innerHTML = `<p class="text-danger">Couldn't load quiz data: ${e.message}</p>`;
  }
}

function renderPicker(){
  const grid = document.getElementById("quizPickerGrid");
  grid.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = "quiz-topic-btn";
  const totalQ = Object.values(QZ_BANK).reduce((a,b)=>a+b.length,0);
  allBtn.innerHTML = `<b><i class="fa-solid fa-shuffle"></i> All topics (mixed)</b><span class="qcount">${totalQ} questions</span>`;
  allBtn.addEventListener("click", ()=> startQuiz("all"));
  grid.appendChild(allBtn);

  QZ_TOPICS.forEach(t=>{
    const qs = QZ_BANK[t.id] || [];
    const score = ProgressStore.getQuizScore(t.id);
    const btn = document.createElement("button");
    btn.className = "quiz-topic-btn";
    btn.innerHTML = `<b>${escapeHtml(t.title)}</b><span class="qcount">${qs.length} questions${score ? ' · last score ' + score.score + '/' + score.total : ''}</span>`;
    btn.addEventListener("click", ()=> startQuiz(t.id));
    grid.appendChild(btn);
  });
}

function startQuiz(topicId){
  let questions = [];
  if(topicId === "all"){
    Object.entries(QZ_BANK).forEach(([tid, qs])=>{
      qs.forEach(q=> questions.push({ ...q, topicId: tid }));
    });
    // shuffle for a mixed run
    questions.sort(()=> Math.random() - 0.5);
    questions = questions.slice(0, 12); // keep a mixed run to a manageable length
  } else {
    questions = (QZ_BANK[topicId] || []).map(q=> ({ ...q, topicId }));
  }
  QZ_SESSION = { topicId, questions, index:0, correctCount:0, answers:[] };
  document.getElementById("quizPickerScreen").classList.add("d-none");
  document.getElementById("quizPlayScreen").classList.remove("d-none");
  document.getElementById("quizResultsScreen").classList.add("d-none");
  renderQuestion();
}

function renderQuestion(){
  const s = QZ_SESSION;
  const q = s.questions[s.index];
  document.getElementById("quizProgressLabel").textContent = `Question ${s.index+1} of ${s.questions.length}`;
  document.getElementById("quizProgressScore").textContent = `Score: ${s.correctCount}/${s.index}`;

  const card = document.getElementById("quizCard");
  const letters = ["A","B","C","D"];
  card.innerHTML = `
    <div class="qnum">Q${s.index+1}</div>
    <h2>${escapeHtml(q.q)}</h2>
    <div id="quizOptions"></div>
    <div class="quiz-explain-box" id="quizExplainBox">${escapeHtml(q.explain)}</div>
    <div class="quiz-nav-row"><button class="btn btn-primary-lg d-none" id="quizNextBtn">Next <i class="fa-solid fa-arrow-right"></i></button></div>
  `;
  const optsWrap = document.getElementById("quizOptions");
  q.opts.forEach((optText, oi)=>{
    const b = document.createElement("button");
    b.className = "quiz-option";
    b.innerHTML = `<span class="quiz-option-letter">${letters[oi]}</span>${escapeHtml(optText)}`;
    b.addEventListener("click", ()=>{
      if(optsWrap.dataset.answered) return;
      optsWrap.dataset.answered = "1";
      const correct = oi === q.answer;
      if(correct) s.correctCount++;
      s.answers.push({ q: q.q, correct, chosen: optText, correctText: q.opts[q.answer] });
      [...optsWrap.children].forEach((c,ci)=>{
        if(ci===q.answer) c.classList.add("correct");
        else if(ci===oi) c.classList.add("wrong");
      });
      document.getElementById("quizExplainBox").classList.add("show");
      document.getElementById("quizProgressScore").textContent = `Score: ${s.correctCount}/${s.index+1}`;
      const nextBtn = document.getElementById("quizNextBtn");
      nextBtn.classList.remove("d-none");
      nextBtn.textContent = (s.index === s.questions.length-1) ? "See results" : "Next";
      nextBtn.onclick = ()=>{
        s.index++;
        if(s.index >= s.questions.length) showResults(); else renderQuestion();
      };
    });
    optsWrap.appendChild(b);
  });
}

function showResults(){
  const s = QZ_SESSION;
  document.getElementById("quizPlayScreen").classList.add("d-none");
  const resultsScreen = document.getElementById("quizResultsScreen");
  resultsScreen.classList.remove("d-none");

  const pct = Math.round((s.correctCount / s.questions.length) * 100);
  document.getElementById("scoreCircleText").textContent = s.correctCount + "/" + s.questions.length;
  document.getElementById("resultsHeadline").textContent =
    pct === 100 ? "Perfect score!" : pct >= 70 ? "Great work!" : pct >= 40 ? "Good start" : "Keep practicing";
  document.getElementById("resultsSub").textContent =
    `You answered ${s.correctCount} out of ${s.questions.length} questions correctly (${pct}%).`;

  if(s.topicId !== "all"){
    ProgressStore.recordQuizScore(s.topicId, s.correctCount, s.questions.length);
  } else {
    // record per-topic results for a mixed run too
    const byTopic = {};
    s.questions.forEach((q,i)=>{
      byTopic[q.topicId] = byTopic[q.topicId] || { correct:0, total:0 };
      byTopic[q.topicId].total++;
      if(s.answers[i] && s.answers[i].correct) byTopic[q.topicId].correct++;
    });
    Object.entries(byTopic).forEach(([tid, r])=> ProgressStore.recordQuizScore(tid, r.correct, r.total));
  }

  const review = document.getElementById("quizReview");
  review.innerHTML = "";
  s.answers.forEach(a=>{
    const div = document.createElement("div");
    div.className = "quiz-review-item " + (a.correct ? "correct" : "incorrect");
    div.innerHTML = `<span class="status">${a.correct ? "✓" : "✗"}</span>${escapeHtml(a.q)} ${a.correct ? "" : `<br><span class="text-muted">You chose "${escapeHtml(a.chosen)}" — correct answer: "${escapeHtml(a.correctText)}"</span>`}`;
    review.appendChild(div);
  });
}

function retakeQuiz(){
  document.getElementById("quizResultsScreen").classList.add("d-none");
  document.getElementById("quizPickerScreen").classList.remove("d-none");
  renderPicker();
}

document.addEventListener("DOMContentLoaded", ()=>{
  initQuizPage();
  const retakeBtn = document.getElementById("quizRetakeBtn");
  if(retakeBtn) retakeBtn.addEventListener("click", retakeQuiz);
});
