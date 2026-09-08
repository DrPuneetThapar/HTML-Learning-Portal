/* ================================================================
   SERVICE WORKER (sw.js)
   Makes the site work offline after the first visit. Rather than
   hardcoding a giant precache list of every file (fragile — easy to
   miss a file, or forget to update it as content changes), this uses
   a small "app shell" precache plus runtime caching: as the visitor
   browses, every page/asset they load gets cached automatically, so
   the more of the site they've seen, the more works offline.

   Strategy:
   - Navigations (HTML pages): network-first, falling back to cache,
     so visitors online always get the latest content, and the last
     version they saw still works offline.
   - Everything else (css/js/images/fonts/pdfs): cache-first, with a
     background fetch to keep the cache warm for next time.

   Bump CACHE_NAME whenever site content changes meaningfully, so
   returning visitors pick up the new version instead of a stale cache.
   ================================================================ */

const CACHE_NAME = "hlp-cache-v1";

const APP_SHELL = [
  "index.html",
  "css/style.css",
  "js/app.js",
  "js/data-search-index.js",
  "vendor/bootstrap/css/bootstrap.min.css",
  "vendor/bootstrap/js/bootstrap.bundle.min.js",
  "vendor/fontawesome/css/all.min.css",
  "vendor/fonts/fonts.css",
  "assets/icons/favicon.svg",
  "manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch(() => {}) // don't fail install if one shell asset is briefly unreachable
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return; // don't intercept POSTs etc.
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // only handle same-origin requests

  if (req.mode === "navigate") {
    // Network-first for page navigations
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match("index.html")))
    );
    return;
  }

  // Cache-first for static assets, with a background revalidate
  event.respondWith(
    caches.match(req).then((cached) => {
      const networkFetch = fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
