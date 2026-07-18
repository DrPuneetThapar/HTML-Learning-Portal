/* ================================================================
   TAG REFERENCE SEARCH (js/search.js)
   Loaded only on reference.html. Uses the embedded HTML_TAGS_DATA
   global (js/data-tags.js) and renders a searchable,
   category-filterable card grid.
   ================================================================ */

let REF_TAGS = [];
let REF_CATEGORY = "all";

function initReferencePage(){
  const grid = document.getElementById("refGrid");
  if(!grid) return; // not on reference.html
  try{
    if(!window.HTML_TAGS_DATA) throw new Error("Tag reference data script (js/data-tags.js) did not load");
    REF_TAGS = window.HTML_TAGS_DATA.tags;
    buildCategoryChips();
    renderRefGrid();
    document.getElementById("refSearch").addEventListener("input", renderRefGrid);
  }catch(e){
    grid.innerHTML = `<p class="text-danger">Couldn't load the tag reference: ${e.message}</p>`;
  }
}

function buildCategoryChips(){
  const wrap = document.getElementById("refCategoryChips");
  const categories = ["all", ...new Set(REF_TAGS.map(t=>t.category))];
  wrap.innerHTML = "";
  categories.forEach(cat=>{
    const b = document.createElement("button");
    b.className = "chip" + (cat === REF_CATEGORY ? " active" : "");
    b.textContent = cat === "all" ? "All" : cat;
    b.addEventListener("click", ()=>{
      REF_CATEGORY = cat;
      wrap.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
      b.classList.add("active");
      renderRefGrid();
    });
    wrap.appendChild(b);
  });
}

function renderRefGrid(){
  const grid = document.getElementById("refGrid");
  const query = (document.getElementById("refSearch").value || "").toLowerCase();
  const filtered = REF_TAGS.filter(t=>{
    const matchesCategory = REF_CATEGORY === "all" || t.category === REF_CATEGORY;
    const matchesQuery = !query ||
      t.tag.toLowerCase().includes(query) ||
      t.description.toLowerCase().includes(query) ||
      t.category.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  document.getElementById("refCount").textContent = `${filtered.length} of ${REF_TAGS.length} tags`;

  grid.innerHTML = "";
  if(!filtered.length){
    grid.innerHTML = `<div class="col-12 text-center text-muted py-5">No tags match "${query}".</div>`;
    return;
  }
  filtered.forEach(t=>{
    const col = document.createElement("div");
    col.className = "col-sm-6 col-lg-4";
    col.innerHTML = `
      <div class="ref-card">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <code class="ref-tag-name">${escapeHtmlRef(t.tag)}</code>
          <span class="badge-tag">${escapeHtmlRef(t.category)}</span>
        </div>
        <p class="ref-desc">${escapeHtmlRef(t.description)}</p>
        <div class="ref-syntax"><span class="ref-label">Syntax</span><code>${escapeHtmlRef(t.syntax)}</code></div>
        <div class="ref-example">
          <div class="ref-example-head">
            <span class="ref-label">Example</span>
            <button class="ref-copy-btn" data-code="${encodeURIComponent(t.example)}"><i class="fa-regular fa-copy"></i></button>
          </div>
          <pre>${escapeHtmlRef(t.example)}</pre>
        </div>
      </div>`;
    grid.appendChild(col);
  });

  grid.querySelectorAll(".ref-copy-btn").forEach(b=>{
    b.addEventListener("click", ()=> copyText(decodeURIComponent(b.dataset.code)));
  });
}

function escapeHtmlRef(s){
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

document.addEventListener("DOMContentLoaded", initReferencePage);
