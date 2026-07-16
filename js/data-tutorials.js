/* Tutorials dataset — auto-generated from data/tutorials.json so the site works as pure static files (no fetch()/CORS needed) */
window.TUTORIALS_DATA = {
  "topics": [
    {
      "id": "internet",
      "number": 1,
      "tag": "web-basics",
      "title": "Introduction to Internet and Web Technologies",
      "icon": "fa-solid fa-globe",
      "summary": "How the Internet, the Web, browsers and servers fit together.",
      "lessons": [
        {
          "heading": "What is the Internet?",
          "content": "The Internet is a global network of interconnected computers that can exchange data using standard protocols. It is the physical and logical infrastructure that everything else — email, streaming, the Web — runs on top of."
        },
        {
          "heading": "What is the World Wide Web (WWW)?",
          "content": "The Web is a system of linked documents (pages) identified by URLs and accessed over the Internet using HTTP/HTTPS. The Internet is the network; the Web is one service that runs on it."
        },
        {
          "heading": "Web Browser",
          "content": "A browser (Chrome, Firefox, Safari, Edge) is the client application that requests pages from servers and renders HTML, CSS and JavaScript into what you see on screen."
        },
        {
          "heading": "Web Server",
          "content": "A server is a computer (or program) that stores website files and responds to browser requests, returning HTML, images, and other assets."
        },
        {
          "heading": "URL Structure",
          "content": "A URL (Uniform Resource Locator) names exactly what resource you want: scheme, domain, optional port, path, query string, and fragment."
        },
        {
          "heading": "Domain Names",
          "content": "A domain name (example.com) is a human-readable label mapped to a numeric IP address by DNS, so people don't have to memorize numbers."
        },
        {
          "heading": "HTTP and HTTPS",
          "content": "HTTP is the protocol browsers and servers use to exchange requests and responses. HTTPS is HTTP encrypted with TLS, protecting data in transit."
        },
        {
          "heading": "Static vs Dynamic Websites",
          "content": "Static sites serve fixed files that look the same for every visitor. Dynamic sites generate pages on the fly, often pulling content from a database."
        },
        {
          "heading": "Client–Server Communication",
          "content": "The browser (client) sends a request; the server processes it and sends back a response. This single exchange is the foundation of everything on the Web."
        }
      ],
      "examples": [
        {
          "title": "Smallest possible web page",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n  <p>Hello, Internet!</p>\n</body>\n</html>",
          "note": "The minimum markup a browser will still render correctly."
        },
        {
          "title": "A page declaring its character encoding",
          "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Encoding Example</title>\n</head>\n<body>\n  <p>Special characters render correctly: café, naïve, 日本語.</p>\n</body>\n</html>",
          "note": ""
        },
        {
          "title": "Anatomy of a URL, as a comment",
          "code": "<!--\n  https://www.example.com:443/products/shoes?color=red#reviews\n  scheme: https\n  subdomain: www\n  domain: example.com\n  port: 443\n  path: /products/shoes\n  query: ?color=red\n  fragment: #reviews\n-->",
          "note": ""
        },
        {
          "title": "Linking to an HTTPS resource",
          "code": "<a href=\"https://developer.mozilla.org\" target=\"_blank\" rel=\"noopener\">Visit MDN over HTTPS</a>",
          "note": ""
        },
        {
          "title": "A relative vs absolute link",
          "code": "<a href=\"/about.html\">Relative link (same site)</a>\n<a href=\"https://example.com/about\">Absolute link (any site)</a>",
          "note": ""
        },
        {
          "title": "Static page: fixed content for every visitor",
          "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head><title>Static Page</title></head>\n<body>\n  <h1>Company Hours</h1>\n  <p>Mon–Fri, 9am–5pm. This text never changes between visits.</p>\n</body>\n</html>",
          "note": ""
        },
        {
          "title": "Marking a page for a dynamic greeting (server would fill this in)",
          "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head><title>Welcome</title></head>\n<body>\n  <!-- A server-rendered app would replace {{username}} before sending this HTML -->\n  <h1>Welcome back, {{username}}!</h1>\n</body>\n</html>",
          "note": ""
        },
        {
          "title": "Meta tag naming the viewport (used by every modern responsive page)",
          "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
          "note": ""
        },
        {
          "title": "A simple contact link using the mailto scheme",
          "code": "<a href=\"mailto:hello@example.com\">Email us</a>",
          "note": ""
        },
        {
          "title": "Domain vs subdomain in markup comments",
          "code": "<!--\n  example.com        -> root domain\n  www.example.com     -> 'www' subdomain\n  blog.example.com    -> 'blog' subdomain\n-->",
          "note": ""
        },
        {
          "title": "A page linking its own sitemap for crawlers",
          "code": "<link rel=\"sitemap\" type=\"application/xml\" href=\"/sitemap.xml\">",
          "note": ""
        }
      ]
    },
    {
      "id": "clientserver",
      "number": 2,
      "tag": "web-basics",
      "title": "Client–Server Architecture",
      "icon": "fa-solid fa-arrow-right-arrow-left",
      "summary": "Requests, responses, the HTTP lifecycle, and DNS resolution.",
      "lessons": [
        {
          "heading": "Client",
          "content": "The client is the program requesting a resource — almost always a browser, but could be a mobile app or another server."
        },
        {
          "heading": "Server",
          "content": "The server listens for requests and returns responses: HTML documents, JSON data, images, or an error."
        },
        {
          "heading": "Request",
          "content": "A request includes a method (GET, POST…), a URL, headers, and sometimes a body."
        },
        {
          "heading": "Response",
          "content": "A response includes a status code (200, 404, 500…), headers, and a body — often HTML."
        },
        {
          "heading": "HTTP Lifecycle",
          "content": "Connect → send request → server processes → server sends response → connection closes or is reused (keep-alive)."
        },
        {
          "heading": "DNS Resolution",
          "content": "Before any request can be sent, the browser resolves the domain name to an IP address via DNS, often cached for speed."
        }
      ],
      "examples": [
        {
          "title": "A page that documents its own request cycle",
          "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head><title>Request Demo</title></head>\n<body>\n  <h1>You just completed a GET request</h1>\n  <p>Your browser asked this server for '/', and this HTML is the response body.</p>\n</body>\n</html>",
          "note": ""
        },
        {
          "title": "A minimal HTML form that triggers a GET request",
          "code": "<form action=\"/search\" method=\"GET\">\n  <input type=\"text\" name=\"q\" placeholder=\"Search…\">\n  <button type=\"submit\">Search</button>\n</form>",
          "note": ""
        },
        {
          "title": "A minimal HTML form that triggers a POST request",
          "code": "<form action=\"/subscribe\" method=\"POST\">\n  <input type=\"email\" name=\"email\" required>\n  <button type=\"submit\">Subscribe</button>\n</form>",
          "note": ""
        },
        {
          "title": "Documenting common status codes",
          "code": "<!--\n  200 OK              -> request succeeded\n  301 Moved Permanently -> resource has a new URL\n  404 Not Found        -> no resource at this URL\n  500 Internal Server Error -> server-side failure\n-->",
          "note": ""
        },
        {
          "title": "A custom 404 page",
          "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head><title>404 — Not Found</title></head>\n<body>\n  <h1>404</h1>\n  <p>We couldn't find that page. <a href=\"/\">Return home</a>.</p>\n</body>\n</html>",
          "note": ""
        },
        {
          "title": "A link that triggers a fresh DNS-resolved request to another domain",
          "code": "<a href=\"https://www.wikipedia.org\">Go to a different domain (new DNS lookup)</a>",
          "note": ""
        },
        {
          "title": "Preconnecting to speed up DNS + connection setup",
          "code": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">",
          "note": ""
        },
        {
          "title": "A page that redirects via meta refresh (client-side)",
          "code": "<meta http-equiv=\"refresh\" content=\"5; url=https://example.com/new-page\">",
          "note": ""
        },
        {
          "title": "Caching hint via meta tag",
          "code": "<meta http-equiv=\"Cache-Control\" content=\"no-cache\">",
          "note": ""
        }
      ]
    },
    {
      "id": "html5",
      "number": 3,
      "tag": "foundations",
      "title": "HTML5 Fundamentals",
      "icon": "fa-solid fa-star",
      "summary": "What HTML5 introduced and why it replaced older versions.",
      "lessons": [
        {
          "heading": "Introduction to HTML5",
          "content": "HTML5 is the current standard version of HTML, finalized to simplify markup and add native support for multimedia, graphics, and semantics."
        },
        {
          "heading": "Features of HTML5",
          "content": "Semantic tags, native audio/video, canvas & SVG, form validation, offline storage APIs, and a simplified doctype."
        },
        {
          "heading": "HTML Versions",
          "content": "HTML has evolved from HTML 2.0 through HTML 4.01 and XHTML to HTML5 — each version adding capability while HTML5 also simplified authoring."
        },
        {
          "heading": "Advantages of HTML5",
          "content": "Less reliance on plugins like Flash, better accessibility through semantics, and consistent behavior across modern browsers."
        }
      ],
      "examples": [
        {
          "title": "The HTML5 doctype (compare to older, verbose versions)",
          "code": "<!DOCTYPE html>",
          "note": ""
        },
        {
          "title": "A minimal valid HTML5 document",
          "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>HTML5 Basics</title>\n</head>\n<body>\n  <h1>This is HTML5</h1>\n</body>\n</html>",
          "note": ""
        },
        {
          "title": "Semantic layout tags introduced by HTML5",
          "code": "<header>Site header</header>\n<nav>Main navigation</nav>\n<main>\n  <article>An article</article>\n  <aside>Related links</aside>\n</main>\n<footer>Site footer</footer>",
          "note": ""
        },
        {
          "title": "Native input types added in HTML5",
          "code": "<input type=\"email\" placeholder=\"you@example.com\">\n<input type=\"date\">\n<input type=\"range\" min=\"0\" max=\"100\">\n<input type=\"color\">",
          "note": ""
        },
        {
          "title": "Built-in HTML5 form validation, no JavaScript required",
          "code": "<form>\n  <input type=\"email\" required>\n  <button type=\"submit\">Submit</button>\n</form>",
          "note": ""
        },
        {
          "title": "Native audio without a plugin",
          "code": "<audio controls src=\"song.mp3\"></audio>",
          "note": ""
        },
        {
          "title": "Native video without a plugin",
          "code": "<video controls width=\"320\" src=\"clip.mp4\"></video>",
          "note": ""
        },
        {
          "title": "A canvas element for drawing with JavaScript",
          "code": "<canvas id=\"scene\" width=\"200\" height=\"100\"></canvas>",
          "note": ""
        },
        {
          "title": "The <mark> and <time> semantic text tags",
          "code": "<p>Meet us on <time datetime=\"2026-09-01\">September 1</time>. <mark>Seats are limited.</mark></p>",
          "note": ""
        },
        {
          "title": "Data attributes, an HTML5 addition for custom data",
          "code": "<button data-user-id=\"482\" data-role=\"admin\">Edit user</button>",
          "note": ""
        }
      ]
    },
    {
      "id": "structure",
      "number": 4,
      "tag": "foundations",
      "title": "HTML Document Structure",
      "icon": "fa-solid fa-sitemap",
      "summary": "DOCTYPE, html, head, title and body — the skeleton of every page.",
      "lessons": [
        {
          "heading": "<!DOCTYPE html>",
          "content": "Declares the document as HTML5 and puts the browser into standards mode."
        },
        {
          "heading": "<html>",
          "content": "The root element. Every other element lives inside it. The lang attribute names the page's language."
        },
        {
          "heading": "<head>",
          "content": "Holds metadata that isn't rendered directly: title, charset, stylesheets, scripts, meta tags."
        },
        {
          "heading": "<title>",
          "content": "The text shown in the browser tab, bookmarks, and search-engine results."
        },
        {
          "heading": "<body>",
          "content": "Contains everything the visitor actually sees and interacts with."
        }
      ],
      "examples": [
        {
          "title": "The full skeleton, annotated",
          "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Page Title</title>\n</head>\n<body>\n  <!-- visible content goes here -->\n</body>\n</html>",
          "note": ""
        },
        {
          "title": "Setting the page language for accessibility and SEO",
          "code": "<html lang=\"en\">",
          "note": ""
        },
        {
          "title": "Setting a different language",
          "code": "<html lang=\"fr\">",
          "note": ""
        },
        {
          "title": "Character set declaration",
          "code": "<meta charset=\"UTF-8\">",
          "note": ""
        },
        {
          "title": "A descriptive, unique <title>",
          "code": "<title>Contact Us — Bean & Brew Coffee Roasters</title>",
          "note": ""
        },
        {
          "title": "Linking a stylesheet inside <head>",
          "code": "<head>\n  <meta charset=\"UTF-8\">\n  <title>Styled Page</title>\n  <link rel=\"stylesheet\" href=\"css/style.css\">\n</head>",
          "note": ""
        },
        {
          "title": "Placing a script at the end of <body>",
          "code": "<body>\n  <h1>Content loads first</h1>\n  <script src=\"js/app.js\"></script>\n</body>",
          "note": ""
        },
        {
          "title": "A favicon reference in <head>",
          "code": "<link rel=\"icon\" href=\"/assets/icons/favicon.ico\">",
          "note": ""
        },
        {
          "title": "Comments inside the structure (not rendered)",
          "code": "<body>\n  <!-- TODO: replace placeholder hero image -->\n  <h1>Welcome</h1>\n</body>",
          "note": ""
        },
        {
          "title": "Body with only whitespace content still renders a blank page",
          "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head><title>Empty Body</title></head>\n<body>\n</body>\n</html>",
          "note": ""
        },
        {
          "title": "Marking the document ready for print styling too",
          "code": "<link rel=\"stylesheet\" href=\"print.css\" media=\"print\">",
          "note": ""
        }
      ]
    },
    {
      "id": "elements",
      "number": 5,
      "tag": "foundations",
      "title": "HTML Elements",
      "icon": "fa-solid fa-cubes",
      "summary": "Opening/closing tags, empty tags, and nesting rules.",
      "lessons": [
        {
          "heading": "Opening and Closing Tags",
          "content": "Most elements wrap content between an opening tag and a matching closing tag, e.g. <p>text</p>."
        },
        {
          "heading": "Empty (Void) Tags",
          "content": "Some elements never wrap content and have no closing tag, e.g. <img>, <br>, <hr>, <input>."
        },
        {
          "heading": "Nested Elements",
          "content": "Elements can contain other elements. Nesting must be properly closed in the reverse order it was opened."
        },
        {
          "heading": "Block vs Inline Elements",
          "content": "Block elements (like <div>, <p>) start on a new line; inline elements (like <span>, <a>) flow within text."
        }
      ],
      "examples": [
        {
          "title": "A simple paired element",
          "code": "<p>This is a paragraph.</p>",
          "note": ""
        },
        {
          "title": "An empty/void element — the line break",
          "code": "Line one.<br>Line two.",
          "note": ""
        },
        {
          "title": "An empty/void element — the horizontal rule",
          "code": "<p>Section one.</p>\n<hr>\n<p>Section two.</p>",
          "note": ""
        },
        {
          "title": "Properly nested elements",
          "code": "<div>\n  <p>A paragraph <strong>with bold text</strong> inside a div.</p>\n</div>",
          "note": ""
        },
        {
          "title": "Incorrect nesting (for teaching what NOT to do)",
          "code": "<!-- Wrong: tags close out of order -->\n<p><strong>Bold text</p></strong>",
          "note": ""
        },
        {
          "title": "Corrected nesting",
          "code": "<p><strong>Bold text</strong></p>",
          "note": ""
        },
        {
          "title": "Block element: <div> starts a new line",
          "code": "<div>Block one</div>\n<div>Block two</div>",
          "note": ""
        },
        {
          "title": "Inline element: <span> flows within a line",
          "code": "<p>This sentence has a <span style=\"color:crimson\">highlighted word</span> inline.</p>",
          "note": ""
        },
        {
          "title": "A generic container with no semantic meaning",
          "code": "<div class=\"card\">\n  <p>Generic content wrapper.</p>\n</div>",
          "note": ""
        },
        {
          "title": "Self-closing syntax (valid, optional in HTML5)",
          "code": "<img src=\"media/logo.png\" alt=\"Logo\" />",
          "note": ""
        },
        {
          "title": "A <span> used purely for scripting hooks, no visual change",
          "code": "<p>Price: <span id=\"price\">$19.99</span></p>",
          "note": ""
        }
      ]
    },
    {
      "id": "attributes",
      "number": 6,
      "tag": "foundations",
      "title": "HTML Attributes",
      "icon": "fa-solid fa-tags",
      "summary": "Global attributes: id, class, style, title, and more.",
      "lessons": [
        {
          "heading": "What is an attribute?",
          "content": "An attribute adds information to a tag, written as name=\"value\" inside the opening tag."
        },
        {
          "heading": "id",
          "content": "A unique identifier for exactly one element on the page — used for anchors, labels, and scripting."
        },
        {
          "heading": "class",
          "content": "A reusable label that can apply to many elements, used for styling and scripting groups."
        },
        {
          "heading": "style",
          "content": "Applies inline CSS directly to one element — convenient for quick tests, best avoided in production code."
        },
        {
          "heading": "title",
          "content": "Adds a tooltip shown on hover, and provides extra context for accessibility tools."
        }
      ],
      "examples": [
        {
          "title": "Using id to target one unique element",
          "code": "<h1 id=\"page-title\">Welcome</h1>",
          "note": ""
        },
        {
          "title": "Using class to style a group of elements",
          "code": "<p class=\"highlight\">First</p>\n<p class=\"highlight\">Second</p>",
          "note": ""
        },
        {
          "title": "Multiple classes on one element",
          "code": "<button class=\"btn btn-primary btn-large\">Save</button>",
          "note": ""
        },
        {
          "title": "Inline style attribute",
          "code": "<p style=\"color:#C4406B; font-weight:bold;\">Styled inline.</p>",
          "note": ""
        },
        {
          "title": "Title attribute as a tooltip",
          "code": "<abbr title=\"HyperText Markup Language\">HTML</abbr>",
          "note": ""
        },
        {
          "title": "A boolean attribute — disabled",
          "code": "<button disabled>Can't click me</button>",
          "note": ""
        },
        {
          "title": "A boolean attribute — required (on a form field)",
          "code": "<input type=\"text\" required>",
          "note": ""
        },
        {
          "title": "Combining several attributes on one tag",
          "code": "<a id=\"cta\" class=\"btn btn-tag\" href=\"/signup\" title=\"Create a free account\">Sign up</a>",
          "note": ""
        },
        {
          "title": "data-* custom attributes for JavaScript hooks",
          "code": "<li data-item-id=\"42\" data-in-stock=\"true\">Wireless Mouse</li>",
          "note": ""
        },
        {
          "title": "The lang attribute on a specific element (not just <html>)",
          "code": "<p>The French word <span lang=\"fr\">bonjour</span> means hello.</p>",
          "note": ""
        },
        {
          "title": "The hidden boolean attribute",
          "code": "<p hidden>You won't see this paragraph render.</p>",
          "note": ""
        }
      ]
    },
    {
      "id": "text",
      "number": 7,
      "tag": "content",
      "title": "Text Formatting",
      "icon": "fa-solid fa-font",
      "summary": "Headings, emphasis, quotes, and preformatted text.",
      "lessons": [
        {
          "heading": "Headings",
          "content": "<h1> through <h6> establish a page's outline, in decreasing order of importance."
        },
        {
          "heading": "Paragraphs",
          "content": "<p> is the standard block for a run of text."
        },
        {
          "heading": "Bold, Italic, Underline",
          "content": "<strong>/<b> for bold, <em>/<i> for italics, <u> for underline — prefer <strong>/<em> for semantic meaning."
        },
        {
          "heading": "Mark, Small, Sub, Sup",
          "content": "<mark> highlights, <small> de-emphasizes, <sub>/<sup> position text below/above the baseline."
        },
        {
          "heading": "Blockquote and Preformatted Text",
          "content": "<blockquote> marks a quoted passage; <pre> preserves whitespace and line breaks exactly as typed."
        }
      ],
      "examples": [
        {
          "title": "The six heading levels",
          "code": "<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>",
          "note": ""
        },
        {
          "title": "A basic paragraph",
          "code": "<p>The quick brown fox jumps over the lazy dog.</p>",
          "note": ""
        },
        {
          "title": "Bold vs strong (visually identical, semantically different)",
          "code": "<b>Visually bold</b>\n<strong>Semantically important</strong>",
          "note": ""
        },
        {
          "title": "Italic vs emphasis",
          "code": "<i>Visually italic</i>\n<em>Semantically emphasized</em>",
          "note": ""
        },
        {
          "title": "Underlined text",
          "code": "<p>This word is <u>underlined</u>.</p>",
          "note": ""
        },
        {
          "title": "Highlighted text with <mark>",
          "code": "<p>Remember to bring your <mark>student ID</mark> to the exam.</p>",
          "note": ""
        },
        {
          "title": "Fine print with <small>",
          "code": "<p>Full price $49.99. <small>Taxes calculated at checkout.</small></p>",
          "note": ""
        },
        {
          "title": "Subscript and superscript",
          "code": "<p>Water is H<sub>2</sub>O. Einstein wrote E = mc<sup>2</sup>.</p>",
          "note": ""
        },
        {
          "title": "A block quotation with a citation",
          "code": "<blockquote cite=\"https://example.com/source\">\n  Good design is as little design as possible.\n</blockquote>",
          "note": ""
        },
        {
          "title": "Preformatted text preserving whitespace",
          "code": "<pre>\n  function greet() {\n    return \"hi\";\n  }\n</pre>",
          "note": ""
        },
        {
          "title": "A horizontal rule as a thematic break between sections",
          "code": "<p>End of section one.</p>\n<hr>\n<p>Start of section two.</p>",
          "note": ""
        },
        {
          "title": "Deleted and inserted text markers (useful for edits/tracked changes)",
          "code": "<p><del>Old price: $40</del> <ins>New price: $30</ins></p>",
          "note": ""
        }
      ]
    },
    {
      "id": "lists",
      "number": 8,
      "tag": "content",
      "title": "Lists",
      "icon": "fa-solid fa-list-ul",
      "summary": "Ordered, unordered, description, and nested lists.",
      "lessons": [
        {
          "heading": "Unordered Lists",
          "content": "<ul> creates a bulleted list; each item is an <li>."
        },
        {
          "heading": "Ordered Lists",
          "content": "<ol> creates a numbered list; the type and start attributes control numbering style."
        },
        {
          "heading": "Description Lists",
          "content": "<dl> pairs a term (<dt>) with its definition (<dd>) — good for glossaries and key-value data."
        },
        {
          "heading": "Nested Lists",
          "content": "Any list can contain another list inside one of its <li> items, forming a sub-list."
        }
      ],
      "examples": [
        {
          "title": "A basic unordered list",
          "code": "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>",
          "note": ""
        },
        {
          "title": "A basic ordered list",
          "code": "<ol>\n  <li>Preheat the oven</li>\n  <li>Mix the batter</li>\n  <li>Bake for 25 minutes</li>\n</ol>",
          "note": ""
        },
        {
          "title": "An ordered list starting at a custom number",
          "code": "<ol start=\"5\">\n  <li>Step five</li>\n  <li>Step six</li>\n</ol>",
          "note": ""
        },
        {
          "title": "An ordered list with roman numerals",
          "code": "<ol type=\"I\">\n  <li>First</li>\n  <li>Second</li>\n</ol>",
          "note": ""
        },
        {
          "title": "A nested unordered list",
          "code": "<ul>\n  <li>Fruits\n    <ul>\n      <li>Apple</li>\n      <li>Banana</li>\n    </ul>\n  </li>\n  <li>Vegetables</li>\n</ul>",
          "note": ""
        },
        {
          "title": "A description list (glossary style)",
          "code": "<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>",
          "note": ""
        },
        {
          "title": "Mixing an ordered list inside an unordered one",
          "code": "<ul>\n  <li>Weekly tasks\n    <ol>\n      <li>Plan</li>\n      <li>Build</li>\n      <li>Ship</li>\n    </ol>\n  </li>\n</ul>",
          "note": ""
        },
        {
          "title": "A list used for site navigation",
          "code": "<nav>\n  <ul>\n    <li><a href=\"/\">Home</a></li>\n    <li><a href=\"/about\">About</a></li>\n  </ul>\n</nav>",
          "note": ""
        },
        {
          "title": "A list with no bullets, styled as a horizontal menu (CSS-driven, HTML shown)",
          "code": "<ul class=\"menu-inline\">\n  <li>Home</li>\n  <li>Shop</li>\n  <li>Contact</li>\n</ul>",
          "note": ""
        },
        {
          "title": "A description list documenting HTML attributes (glossary use case)",
          "code": "<dl>\n  <dt>src</dt>\n  <dd>The file path of a resource.</dd>\n  <dt>alt</dt>\n  <dd>Fallback text for an image.</dd>\n</dl>",
          "note": ""
        }
      ]
    },
    {
      "id": "links",
      "number": 9,
      "tag": "content",
      "title": "Hyperlinks",
      "icon": "fa-solid fa-link",
      "summary": "Internal, external, and email links, plus link attributes.",
      "lessons": [
        {
          "heading": "The Anchor Tag",
          "content": "<a href=\"…\"> creates a clickable link; the href attribute names the destination."
        },
        {
          "heading": "Internal Links",
          "content": "Point to another page or section on the same site, often with a relative path."
        },
        {
          "heading": "External Links",
          "content": "Point to a different site, typically with a full https:// URL."
        },
        {
          "heading": "Email Links",
          "content": "Use the mailto: scheme to open the visitor's email client."
        },
        {
          "heading": "Link Attributes",
          "content": "target=\"_blank\" opens a new tab; rel=\"noopener\" protects against a security issue when doing so."
        }
      ],
      "examples": [
        {
          "title": "A basic internal link",
          "code": "<a href=\"/tutorial.html\">Go to Tutorials</a>",
          "note": ""
        },
        {
          "title": "A link to a section on the same page",
          "code": "<a href=\"#topics\">Jump to Topics</a>",
          "note": ""
        },
        {
          "title": "An external link opening in a new tab safely",
          "code": "<a href=\"https://developer.mozilla.org\" target=\"_blank\" rel=\"noopener noreferrer\">MDN Web Docs</a>",
          "note": ""
        },
        {
          "title": "An email link",
          "code": "<a href=\"mailto:support@example.com\">Email Support</a>",
          "note": ""
        },
        {
          "title": "An email link pre-filling a subject line",
          "code": "<a href=\"mailto:support@example.com?subject=Help%20Request\">Email with subject</a>",
          "note": ""
        },
        {
          "title": "A telephone link",
          "code": "<a href=\"tel:+15551234567\">Call us: (555) 123-4567</a>",
          "note": ""
        },
        {
          "title": "A download link",
          "code": "<a href=\"files/syllabus.pdf\" download>Download syllabus (PDF)</a>",
          "note": ""
        },
        {
          "title": "A link wrapping an image (image as a clickable link)",
          "code": "<a href=\"/gallery\"><img src=\"media/thumb.jpg\" alt=\"View gallery\"></a>",
          "note": ""
        },
        {
          "title": "A disabled-looking link using aria-disabled",
          "code": "<a href=\"#\" aria-disabled=\"true\" class=\"disabled\">Coming soon</a>",
          "note": ""
        },
        {
          "title": "A named anchor target for deep linking",
          "code": "<h2 id=\"faq\">Frequently Asked Questions</h2>\n<!-- linked to via <a href=\"#faq\">FAQ</a> -->",
          "note": ""
        },
        {
          "title": "A link with rel=\"nofollow\" for untrusted user-submitted URLs",
          "code": "<a href=\"https://usersite.example\" rel=\"nofollow noopener\" target=\"_blank\">User's website</a>",
          "note": ""
        }
      ]
    },
    {
      "id": "images",
      "number": 10,
      "tag": "content",
      "title": "Images",
      "icon": "fa-solid fa-image",
      "summary": "The img tag, its attributes, and responsive images.",
      "lessons": [
        {
          "heading": "The Image Tag",
          "content": "<img> is a void element that embeds an image; it always needs src and alt."
        },
        {
          "heading": "Image Attributes",
          "content": "src (file location), alt (fallback/accessible text), width/height (reserve layout space)."
        },
        {
          "heading": "Responsive Images",
          "content": "srcset and sizes let the browser choose the best image file for the viewer's screen."
        },
        {
          "heading": "Figures and Captions",
          "content": "<figure> and <figcaption> associate an image with a caption semantically."
        }
      ],
      "examples": [
        {
          "title": "A basic image with required alt text",
          "code": "<img src=\"media/beans.jpg\" alt=\"Bag of freshly roasted coffee beans\">",
          "note": ""
        },
        {
          "title": "An image with explicit width and height to avoid layout shift",
          "code": "<img src=\"media/hero.jpg\" alt=\"Team photo\" width=\"800\" height=\"400\">",
          "note": ""
        },
        {
          "title": "A decorative image with empty alt (ignored by screen readers)",
          "code": "<img src=\"media/divider-swirl.png\" alt=\"\">",
          "note": ""
        },
        {
          "title": "An image wrapped in a figure with a caption",
          "code": "<figure>\n  <img src=\"media/chart.png\" alt=\"Quarterly revenue chart\">\n  <figcaption>Fig. 1 — Revenue grew 18% in Q2.</figcaption>\n</figure>",
          "note": ""
        },
        {
          "title": "Responsive images with srcset",
          "code": "<img src=\"media/photo-800.jpg\"\n     srcset=\"media/photo-400.jpg 400w, media/photo-800.jpg 800w, media/photo-1200.jpg 1200w\"\n     sizes=\"(max-width: 600px) 400px, 800px\"\n     alt=\"Mountain landscape\">",
          "note": ""
        },
        {
          "title": "A three-image mini gallery",
          "code": "<ul class=\"gallery\">\n  <li><img src=\"media/g1.jpg\" alt=\"Sunset over the bay\"></li>\n  <li><img src=\"media/g2.jpg\" alt=\"City skyline at night\"></li>\n  <li><img src=\"media/g3.jpg\" alt=\"Forest trail in autumn\"></li>\n</ul>",
          "note": ""
        },
        {
          "title": "Lazy-loading an offscreen image",
          "code": "<img src=\"media/footer-banner.jpg\" alt=\"Seasonal promotion\" loading=\"lazy\">",
          "note": ""
        },
        {
          "title": "An image used as a link",
          "code": "<a href=\"/product/42\"><img src=\"media/product-42.jpg\" alt=\"Wireless headphones, black\"></a>",
          "note": ""
        },
        {
          "title": "The <picture> element for art-directed responsive images",
          "code": "<picture>\n  <source media=\"(min-width: 800px)\" srcset=\"media/wide.jpg\">\n  <img src=\"media/narrow.jpg\" alt=\"Team at the conference\">\n</picture>",
          "note": ""
        },
        {
          "title": "An SVG used as an <img> source (crisp icon, small file size)",
          "code": "<img src=\"/assets/icons/arrow.svg\" alt=\"Arrow icon\" width=\"24\" height=\"24\">",
          "note": ""
        }
      ]
    },
    {
      "id": "svg",
      "number": 11,
      "tag": "graphics",
      "title": "SVG Graphics",
      "icon": "fa-solid fa-shapes",
      "summary": "Vector shapes drawn directly in markup.",
      "lessons": [
        {
          "heading": "What is SVG?",
          "content": "Scalable Vector Graphics describes images mathematically, so they stay crisp at any zoom level or screen size."
        },
        {
          "heading": "Basic Shapes",
          "content": "<circle>, <rect>, <line>, <polygon>, and <text> are the core drawing primitives."
        },
        {
          "heading": "The viewBox",
          "content": "viewBox defines the coordinate system your shapes are drawn in, independent of the element's displayed size."
        },
        {
          "heading": "Gradients",
          "content": "<linearGradient> and <radialGradient> create smooth color transitions you can apply as a fill."
        }
      ],
      "examples": [
        {
          "title": "An SVG canvas with a circle",
          "code": "<svg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\">\n  <circle cx=\"60\" cy=\"60\" r=\"40\" fill=\"#C4406B\" />\n</svg>",
          "note": ""
        },
        {
          "title": "A rectangle",
          "code": "<svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\">\n  <rect x=\"10\" y=\"10\" width=\"100\" height=\"60\" fill=\"#B9862E\" />\n</svg>",
          "note": ""
        },
        {
          "title": "A straight line",
          "code": "<svg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\">\n  <line x1=\"10\" y1=\"10\" x2=\"110\" y2=\"110\" stroke=\"#3F7D5C\" stroke-width=\"4\" />\n</svg>",
          "note": ""
        },
        {
          "title": "A polygon (triangle)",
          "code": "<svg width=\"120\" height=\"110\" viewBox=\"0 0 120 110\">\n  <polygon points=\"60,10 110,100 10,100\" fill=\"#6B6F94\" />\n</svg>",
          "note": ""
        },
        {
          "title": "Text drawn inside SVG",
          "code": "<svg width=\"160\" height=\"60\" viewBox=\"0 0 160 60\">\n  <text x=\"10\" y=\"35\" font-size=\"20\" fill=\"#1C1B22\">Hello SVG</text>\n</svg>",
          "note": ""
        },
        {
          "title": "A linear gradient fill",
          "code": "<svg width=\"140\" height=\"80\" viewBox=\"0 0 140 80\">\n  <defs>\n    <linearGradient id=\"g1\">\n      <stop offset=\"0%\" stop-color=\"#C4406B\"/>\n      <stop offset=\"100%\" stop-color=\"#B9862E\"/>\n    </linearGradient>\n  </defs>\n  <rect x=\"10\" y=\"10\" width=\"120\" height=\"60\" fill=\"url(#g1)\" />\n</svg>",
          "note": ""
        },
        {
          "title": "Combining multiple shapes into a simple icon",
          "code": "<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\">\n  <circle cx=\"50\" cy=\"35\" r=\"20\" fill=\"#B9862E\" />\n  <rect x=\"30\" y=\"55\" width=\"40\" height=\"30\" fill=\"#6B6F94\" />\n</svg>",
          "note": ""
        },
        {
          "title": "An inline SVG icon used like a logo",
          "code": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\">\n  <path d=\"M4 12h16M12 4v16\" stroke-width=\"2\"/>\n</svg>",
          "note": ""
        },
        {
          "title": "A radial gradient fill",
          "code": "<svg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\">\n  <defs>\n    <radialGradient id=\"g2\">\n      <stop offset=\"0%\" stop-color=\"#fff\"/>\n      <stop offset=\"100%\" stop-color=\"#3E7CB1\"/>\n    </radialGradient>\n  </defs>\n  <circle cx=\"60\" cy=\"60\" r=\"50\" fill=\"url(#g2)\" />\n</svg>",
          "note": ""
        }
      ]
    },
    {
      "id": "audio",
      "number": 12,
      "tag": "media",
      "title": "Audio",
      "icon": "fa-solid fa-volume-high",
      "summary": "Embedding native audio with controls, autoplay and loop.",
      "lessons": [
        {
          "heading": "The Audio Tag",
          "content": "<audio> embeds sound; the controls attribute shows native play/pause/volume UI."
        },
        {
          "heading": "Controls, Autoplay, Loop",
          "content": "controls shows the UI; autoplay starts playback automatically (often requires muted); loop repeats the track."
        },
        {
          "heading": "Multiple Sources",
          "content": "Nesting <source> elements lets the browser pick a format it supports."
        }
      ],
      "examples": [
        {
          "title": "A basic audio player",
          "code": "<audio controls src=\"podcast-ep1.mp3\"></audio>",
          "note": ""
        },
        {
          "title": "Audio with multiple format sources",
          "code": "<audio controls>\n  <source src=\"track.mp3\" type=\"audio/mpeg\">\n  <source src=\"track.ogg\" type=\"audio/ogg\">\n  Your browser does not support the audio element.\n</audio>",
          "note": ""
        },
        {
          "title": "Looping background audio (muted, since autoplay with sound is blocked)",
          "code": "<audio autoplay muted loop src=\"ambient.mp3\"></audio>",
          "note": ""
        },
        {
          "title": "Audio without visible controls (for scripted playback)",
          "code": "<audio id=\"clickSound\" src=\"click.mp3\" preload=\"auto\"></audio>",
          "note": ""
        },
        {
          "title": "Preload hint set to none, to save bandwidth",
          "code": "<audio controls preload=\"none\" src=\"long-interview.mp3\"></audio>",
          "note": ""
        }
      ]
    },
    {
      "id": "video",
      "number": 13,
      "tag": "media",
      "title": "Video",
      "icon": "fa-solid fa-video",
      "summary": "Embedding native video with controls, poster, and dimensions.",
      "lessons": [
        {
          "heading": "The Video Tag",
          "content": "<video> embeds a video file directly, with native playback controls."
        },
        {
          "heading": "Controls, Poster",
          "content": "controls shows the play bar; poster sets a preview image shown before playback starts."
        },
        {
          "heading": "Width/Height",
          "content": "Setting width and height (or aspect-ratio in CSS) reserves layout space and prevents content jumping."
        }
      ],
      "examples": [
        {
          "title": "A basic video player",
          "code": "<video controls width=\"320\" src=\"demo.mp4\"></video>",
          "note": ""
        },
        {
          "title": "Video with a poster (preview) image",
          "code": "<video controls width=\"320\" poster=\"preview.jpg\" src=\"demo.mp4\"></video>",
          "note": ""
        },
        {
          "title": "Video with multiple format sources",
          "code": "<video controls width=\"400\">\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  <source src=\"movie.webm\" type=\"video/webm\">\n  Your browser does not support the video tag.\n</video>",
          "note": ""
        },
        {
          "title": "Muted autoplaying background video, looping",
          "code": "<video autoplay muted loop playsinline width=\"600\" src=\"hero-loop.mp4\"></video>",
          "note": ""
        },
        {
          "title": "Video with captions via a track element",
          "code": "<video controls width=\"400\" src=\"lecture.mp4\">\n  <track kind=\"captions\" src=\"captions-en.vtt\" srclang=\"en\" label=\"English\">\n</video>",
          "note": ""
        }
      ]
    },
    {
      "id": "iframes",
      "number": 14,
      "tag": "media",
      "title": "Iframes",
      "icon": "fa-solid fa-window-restore",
      "summary": "Embedding other pages, videos, and maps.",
      "lessons": [
        {
          "heading": "Embedding Websites",
          "content": "<iframe src=\"…\"> nests another HTML document inside the current page."
        },
        {
          "heading": "Embedding Videos",
          "content": "YouTube, Vimeo and similar services provide an iframe embed snippet for their players."
        },
        {
          "heading": "Embedding Maps",
          "content": "Map providers also expose an iframe embed for a location, often with query parameters for zoom and marker."
        },
        {
          "heading": "Security Considerations",
          "content": "The sandbox attribute restricts what an embedded page can do, reducing risk from third-party content."
        }
      ],
      "examples": [
        {
          "title": "A basic iframe embedding another page",
          "code": "<iframe src=\"https://example.com\" width=\"400\" height=\"300\" title=\"Embedded example.com\"></iframe>",
          "note": ""
        },
        {
          "title": "An iframe with a descriptive title (required for accessibility)",
          "code": "<iframe src=\"widgets/calendar.html\" title=\"Event calendar widget\" width=\"320\" height=\"240\"></iframe>",
          "note": ""
        },
        {
          "title": "A sandboxed iframe restricting scripts",
          "code": "<iframe src=\"untrusted-widget.html\" sandbox=\"allow-scripts\" title=\"Third-party widget\"></iframe>",
          "note": ""
        },
        {
          "title": "A video embed pattern (structure used by most providers)",
          "code": "<iframe width=\"420\" height=\"236\" src=\"https://www.youtube.com/embed/VIDEO_ID\"\n        title=\"Video player\" allowfullscreen></iframe>",
          "note": ""
        },
        {
          "title": "A map embed pattern",
          "code": "<iframe src=\"https://www.google.com/maps/embed?pb=…\" width=\"400\" height=\"300\" title=\"Campus location map\" loading=\"lazy\"></iframe>",
          "note": ""
        },
        {
          "title": "A responsive iframe wrapper using CSS aspect ratio",
          "code": "<div style=\"aspect-ratio:16/9;\">\n  <iframe src=\"video.html\" title=\"Responsive video\" style=\"width:100%; height:100%; border:0;\"></iframe>\n</div>",
          "note": ""
        }
      ]
    },
    {
      "id": "seo",
      "number": 15,
      "tag": "quality",
      "title": "SEO Fundamentals",
      "icon": "fa-solid fa-magnifying-glass-chart",
      "summary": "Meta tags, semantics, and how search engines read a page.",
      "lessons": [
        {
          "heading": "What is SEO?",
          "content": "Search Engine Optimization is the practice of structuring content so search engines can understand and rank it well."
        },
        {
          "heading": "Meta Tags",
          "content": "title and meta description are the two most visible elements in search results."
        },
        {
          "heading": "Semantic HTML",
          "content": "Using the right element (nav, article, h1…) helps both search engines and assistive technology understand structure."
        },
        {
          "heading": "Accessibility and SEO",
          "content": "Alt text, logical heading order, and readable link text improve accessibility and search visibility together."
        }
      ],
      "examples": [
        {
          "title": "A well-formed title tag for search results",
          "code": "<title>Best Coffee Beans Online | Bean & Brew</title>",
          "note": ""
        },
        {
          "title": "A meta description summarizing the page",
          "code": "<meta name=\"description\" content=\"Shop single-origin coffee beans, roasted weekly and shipped fresh nationwide.\">",
          "note": ""
        },
        {
          "title": "Canonical URL to avoid duplicate-content issues",
          "code": "<link rel=\"canonical\" href=\"https://example.com/products/dark-roast\">",
          "note": ""
        },
        {
          "title": "Open Graph tags for rich social sharing",
          "code": "<meta property=\"og:title\" content=\"Bean & Brew — Fresh Roasted Coffee\">\n<meta property=\"og:description\" content=\"Single-origin beans, roasted weekly.\">\n<meta property=\"og:image\" content=\"/assets/images/og-cover.jpg\">",
          "note": ""
        },
        {
          "title": "A logical single h1 with a clear heading hierarchy",
          "code": "<h1>Dark Roast Coffee Beans</h1>\n<h2>Tasting Notes</h2>\n<h2>Brewing Guide</h2>",
          "note": ""
        },
        {
          "title": "Descriptive, keyword-relevant alt text",
          "code": "<img src=\"media/dark-roast.jpg\" alt=\"250g bag of dark roast coffee beans from Bean & Brew\">",
          "note": ""
        },
        {
          "title": "Descriptive link text instead of 'click here'",
          "code": "<a href=\"/guide/pour-over\">Read our pour-over brewing guide</a>",
          "note": ""
        },
        {
          "title": "A robots meta tag controlling indexing",
          "code": "<meta name=\"robots\" content=\"index, follow\">",
          "note": ""
        },
        {
          "title": "Structured data (JSON-LD) describing a product",
          "code": "<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Product\",\n  \"name\": \"Dark Roast Coffee\",\n  \"brand\": \"Bean & Brew\"\n}\n</script>",
          "note": ""
        },
        {
          "title": "A meta tag naming the author",
          "code": "<meta name=\"author\" content=\"Bean & Brew Editorial Team\">",
          "note": ""
        }
      ]
    },
    {
      "id": "bestpractices",
      "number": 16,
      "tag": "quality",
      "title": "HTML Best Practices",
      "icon": "fa-solid fa-check-double",
      "summary": "Semantics, accessibility, indentation, and validation.",
      "lessons": [
        {
          "heading": "Semantic HTML",
          "content": "Prefer elements that describe meaning (nav, main, article) over generic div/span for structural content."
        },
        {
          "heading": "Accessibility Guidelines",
          "content": "Provide alt text, label form fields, keep a logical heading order, and ensure sufficient color contrast."
        },
        {
          "heading": "Proper Indentation",
          "content": "Consistent indentation makes nested structure easy to scan and mistakes easy to spot."
        },
        {
          "heading": "Code Organization",
          "content": "Separate structure (HTML), presentation (CSS), and behavior (JS) into their own files."
        },
        {
          "heading": "Validation",
          "content": "Run markup through a validator to catch unclosed tags, invalid nesting, and missing required attributes."
        },
        {
          "heading": "Performance",
          "content": "Compress images, load scripts with defer/async, and avoid unnecessary inline styles."
        }
      ],
      "examples": [
        {
          "title": "Semantic layout vs div soup",
          "code": "<!-- Prefer this -->\n<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>\n\n<!-- Over this -->\n<div class=\"header\">...</div>\n<div class=\"nav\">...</div>",
          "note": ""
        },
        {
          "title": "A properly labeled form field",
          "code": "<label for=\"email\">Email address</label>\n<input id=\"email\" type=\"email\" name=\"email\">",
          "note": ""
        },
        {
          "title": "Consistent, readable indentation",
          "code": "<ul>\n  <li>Item one</li>\n  <li>Item two\n    <ul>\n      <li>Nested item</li>\n    </ul>\n  </li>\n</ul>",
          "note": ""
        },
        {
          "title": "Separating structure from styling",
          "code": "<!-- HTML references an external stylesheet instead of inline style -->\n<link rel=\"stylesheet\" href=\"css/style.css\">\n<p class=\"intro\">Styled by a class, not an inline style attribute.</p>",
          "note": ""
        },
        {
          "title": "Loading a script without blocking rendering",
          "code": "<script src=\"js/app.js\" defer></script>",
          "note": ""
        },
        {
          "title": "Keeping exactly one h1 per page",
          "code": "<h1>Page's Main Topic</h1>\n<h2>Sub-topic A</h2>\n<h2>Sub-topic B</h2>",
          "note": ""
        },
        {
          "title": "Accessible image with meaningful alt text",
          "code": "<img src=\"media/team.jpg\" alt=\"Five team members standing in front of the office\">",
          "note": ""
        },
        {
          "title": "Using button for actions, not a styled div or link",
          "code": "<button type=\"button\" onclick=\"saveDraft()\">Save draft</button>",
          "note": ""
        },
        {
          "title": "A comment documenting a tricky section for future maintainers",
          "code": "<!-- Sticky nav: keep height in sync with CSS var --nav-h in style.css -->",
          "note": ""
        },
        {
          "title": "Avoiding inline styles in favor of a class",
          "code": "<!-- Avoid -->\n<p style=\"color:red;font-size:20px;\">Warning</p>\n\n<!-- Prefer -->\n<p class=\"warning-text\">Warning</p>",
          "note": ""
        },
        {
          "title": "Grouping related form fields with fieldset and legend",
          "code": "<fieldset>\n  <legend>Shipping details</legend>\n  <label for=\"addr\">Address</label>\n  <input id=\"addr\" type=\"text\">\n</fieldset>",
          "note": ""
        }
      ]
    }
  ]
};
