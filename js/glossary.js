/* ================================================================
   GLOSSARY PAGE (js/glossary.js)
   Loaded only on glossary.html. Uses the embedded GLOSSARY_DATA
   global (js/data-glossary.js) and renders a searchable,
   category-filterable term grid — the same pattern as js/search.js
   uses for the tag reference, but for plain-English jargon terms.
   ================================================================ */

let GLOSSARY_TERMS = [];
let GLOSSARY_CATEGORY = "all";

function escapeHtmlGlossary(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function initGlossaryPage(){
  const grid = document.getElementById("glossaryGrid");
  if(!grid) return; // not on glossary.html
  try{
    if(!window.GLOSSARY_DATA) throw new Error("Glossary data script (js/data-glossary.js) did not load");
    GLOSSARY_TERMS = window.GLOSSARY_DATA.terms;
    buildGlossaryCategoryChips();
    const params = new URLSearchParams(location.search);
    const termParam = params.get("term");
    if(termParam){
      document.getElementById("glossarySearch").value = termParam;
    }
    renderGlossaryGrid();
    document.getElementById("glossarySearch").addEventListener("input", renderGlossaryGrid);
  }catch(e){
    grid.innerHTML = `<p class="text-danger">Couldn't load the glossary: ${e.message}</p>`;
  }
}

function buildGlossaryCategoryChips(){
  const wrap = document.getElementById("glossaryCategoryChips");
  const categories = ["all", ...new Set(GLOSSARY_TERMS.map(t=>t.category))];
  wrap.innerHTML = "";
  categories.forEach(cat=>{
    const b = document.createElement("button");
    b.className = "chip" + (cat === GLOSSARY_CATEGORY ? " active" : "");
    b.textContent = cat === "all" ? "All" : cat;
    b.addEventListener("click", ()=>{
      GLOSSARY_CATEGORY = cat;
      wrap.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
      b.classList.add("active");
      renderGlossaryGrid();
    });
    wrap.appendChild(b);
  });
}

function renderGlossaryGrid(){
  const grid = document.getElementById("glossaryGrid");
  const query = (document.getElementById("glossarySearch").value || "").toLowerCase();
  let list = GLOSSARY_TERMS.filter(t=>
    (GLOSSARY_CATEGORY === "all" || t.category === GLOSSARY_CATEGORY) &&
    (t.term.toLowerCase().includes(query) || t.definition.toLowerCase().includes(query))
  );
  document.getElementById("glossaryCount").textContent = `${list.length} of ${GLOSSARY_TERMS.length} terms`;
  if(!list.length){
    grid.innerHTML = `<div class="col-12 text-center text-muted py-5">No terms match your search.</div>`;
    return;
  }
  grid.innerHTML = list.map(t => `
    <div class="col-md-6 col-lg-4">
      <div class="ref-card h-100">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <b class="ref-tag-name" style="font-family:var(--font-body); text-transform:none;">${escapeHtmlGlossary(t.term)}</b>
          <span class="badge-tag">${escapeHtmlGlossary(t.category)}</span>
        </div>
        <p class="ref-desc mb-0">${escapeHtmlGlossary(t.definition)}</p>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", initGlossaryPage);
