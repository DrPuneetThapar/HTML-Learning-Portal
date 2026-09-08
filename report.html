<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Progress — HTML Learning Portal</title>
<link rel="icon" type="image/svg+xml" href="assets/icons/favicon.svg">
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#1C1B22">
<link rel="apple-touch-icon" href="assets/icons/icon-192.png">
<meta name="description" content="A printable summary of your progress: topics completed, quiz scores, badges earned, and topics flagged for review.">

<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="vendor/fontawesome/css/all.min.css">
<link rel="stylesheet" href="vendor/fonts/fonts.css">

<link rel="stylesheet" href="css/style.css">
<style>
  .report-card{background:var(--paper-raised);border:1px solid var(--line);border-radius:var(--radius);padding:24px;margin-bottom:20px;}
  .report-name-row{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:20px;}
  .report-name-row input{border:1px solid var(--line);border-radius:8px;padding:8px 12px;font-size:14px;max-width:260px;}
  .score-table{width:100%;border-collapse:collapse;font-size:13.5px;}
  .score-table th,.score-table td{text-align:left;padding:8px 10px;border-bottom:1px solid var(--line);}
  .score-table th{font-family:var(--font-mono);font-size:11px;text-transform:uppercase;color:var(--ink-soft);}
  .score-pill{display:inline-block;font-family:var(--font-mono);font-size:11.5px;padding:2px 9px;border-radius:999px;font-weight:700;}
  .score-good{background:rgba(60,154,95,.12);color:#3c9a5f;}
  .score-mid{background:rgba(185,134,46,.12);color:#b9862e;}
  .score-low{background:rgba(217,83,79,.12);color:#d9534f;}
  .flagged-list{list-style:none;padding:0;margin:0;}
  .flagged-list li{padding:8px 0;border-bottom:1px solid var(--line);font-size:14px;}
  .flagged-list li:last-child{border-bottom:none;}
  .report-print-only{display:none;}
  @media print{
    #siteHeader, #siteFooter, .no-print, #searchOverlay{display:none!important;}
    body{background:#fff!important;}
    .report-print-only{display:block;}
    .report-card{box-shadow:none;border:1px solid #ccc;break-inside:avoid;}
    section{padding:0!important;}
  }
</style>
</head>
<body>

<header id="siteHeader">
  <nav class="navbar navbar-expand-lg" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="index.html"><span class="brk">&lt;</span>HTML Learning Portal<span class="brk">/&gt;</span></a><span class="navbar-byline d-none d-md-inline">by Dr. Puneet Thapar</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="tutorial.html">Tutorials</a></li>
          <li class="nav-item"><a class="nav-link" href="practice.html">Practice</a></li>
          <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="quiz.html">Quiz</a></li>
          <li class="nav-item"><a class="nav-link" href="playground.html">Playground</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="moreDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreDropdown">
              <li><a class="dropdown-item nav-link" href="reference.html">Reference</a></li>
              <li><a class="dropdown-item nav-link" href="glossary.html">Glossary</a></li>
              <li><a class="dropdown-item nav-link active" href="report.html">My Progress</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item">
            <button id="searchTrigger" class="btn btn-icon" aria-label="Search the site" title="Search (press /)">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
          <li class="nav-item">
            <button id="themeToggle" class="btn btn-icon" aria-label="Toggle dark mode" title="Toggle dark / light mode">
              <i class="fa-solid fa-moon"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

<!-- ============ SITE-WIDE SEARCH MODAL ============ -->
<div id="searchOverlay" class="search-overlay" role="dialog" aria-modal="true" aria-label="Site search">
  <div class="search-panel">
    <div class="search-input-row">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" id="searchInput" placeholder="Search tutorials, quizzes, tags, projects&hellip;" autocomplete="off">
      <button id="searchClose" class="btn btn-icon" aria-label="Close search"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div id="searchResults" class="search-results"></div>
  </div>
</div>

<section class="section-pad" style="padding-bottom:20px;">
  <div class="container" style="max-width:820px;">
    <div class="eyebrow no-print">my progress</div>
    <div class="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-3">
      <div>
        <h1 class="mb-1">Progress Report</h1>
        <p class="text-muted mb-0 report-print-only" id="reportDate"></p>
      </div>
      <div class="no-print d-flex gap-2">
        <button class="btn btn-outline-lg" id="printReportBtn"><i class="fa-solid fa-print"></i> Print / Save as PDF</button>
      </div>
    </div>

    <div class="report-name-row no-print">
      <label for="studentNameInput" class="mb-0 small text-muted">Name (shown on the printed report):</label>
      <input type="text" id="studentNameInput" placeholder="Your name">
    </div>
    <p class="report-print-only" id="studentNamePrint" style="font-size:18px; font-weight:600;"></p>

    <div class="report-card">
      <h2 class="mb-3" style="font-size:1.2rem;">Overall Completion</h2>
      <div class="d-flex justify-content-between mb-1">
        <b id="reportOverallLabel">0 of 0 topics completed</b>
        <span id="reportOverallPct">0%</span>
      </div>
      <div class="progress-outer"><div class="progress-inner" id="reportOverallBar" style="width:0%;"></div></div>
      <div id="reportUnitProgress" class="unit-progress-list"></div>
      <div class="badge-row mt-3" id="reportBadges"></div>
    </div>

    <div class="report-card">
      <h2 class="mb-3" style="font-size:1.2rem;">Quiz Scores</h2>
      <table class="score-table" id="reportScoreTable">
        <thead><tr><th>Topic</th><th>Best score</th><th>Attempts</th><th>Last attempt</th></tr></thead>
        <tbody id="reportScoreBody"></tbody>
      </table>
      <p class="text-muted small mb-0 mt-2" id="reportNoScores" style="display:none;">No quizzes taken yet.</p>
    </div>

    <div class="report-card">
      <h2 class="mb-3" style="font-size:1.2rem;">Flagged for Review</h2>
      <p class="text-muted small">Topics you marked "Still confused?" on the tutorial page &mdash; a ready-made revision list.</p>
      <ul class="flagged-list" id="reportFlaggedList"></ul>
      <p class="text-muted small mb-0" id="reportNoFlagged" style="display:none;">Nothing flagged for review right now &mdash; nice work.</p>
    </div>

    <p class="text-muted small no-print">This report is generated entirely from data stored in your browser (nothing is sent to a server). Use "Print / Save as PDF" to export a copy.</p>
  </div>
</section>

<footer id="siteFooter">
  <div class="container">
    <p class="text-center small text-muted mb-0">© 2026 Dr. Puneet Thapar. All rights reserved. HTML Learning Portal — built for classroom and self-paced learning.</p>
  </div>
</footer>

<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="js/data-tutorials.js"></script>
<script src="js/data-search-index.js"></script>
<script src="js/app.js"></script>
<script src="js/report.js"></script>
</body>
</html>
