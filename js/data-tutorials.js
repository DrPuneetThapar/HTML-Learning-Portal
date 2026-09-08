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
      ],
      "unit": 1
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
      ],
      "unit": 1
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
      ],
      "unit": 1
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
      ],
      "unit": 1
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
          "content": "Most elements wrap content between an opening tag and a matching closing tag, e.g. <code>&lt;p&gt;</code>text</p>."
        },
        {
          "heading": "Empty (Void) Tags",
          "content": "Some elements never wrap content and have no closing tag, e.g. <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;input&gt;</code>."
        },
        {
          "heading": "Nested Elements",
          "content": "Elements can contain other elements. Nesting must be properly closed in the reverse order it was opened."
        },
        {
          "heading": "Block vs Inline Elements",
          "content": "Block elements (like <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>) start on a new line; inline elements (like <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>) flow within text."
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
      ],
      "unit": 1
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
      ],
      "unit": 1
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
          "content": "<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> establish a page's outline, in decreasing order of importance."
        },
        {
          "heading": "Paragraphs",
          "content": "<code>&lt;p&gt;</code> is the standard block for a run of text."
        },
        {
          "heading": "Bold, Italic, Underline",
          "content": "<code>&lt;strong&gt;</code>/<code>&lt;b&gt;</code> for bold, <code>&lt;em&gt;</code>/<code>&lt;i&gt;</code> for italics, <code>&lt;u&gt;</code> for underline — prefer <code>&lt;strong&gt;</code>/<code>&lt;em&gt;</code> for semantic meaning."
        },
        {
          "heading": "Mark, Small, Sub, Sup",
          "content": "<code>&lt;mark&gt;</code> highlights, <code>&lt;small&gt;</code> de-emphasizes, <code>&lt;sub&gt;</code>/<code>&lt;sup&gt;</code> position text below/above the baseline."
        },
        {
          "heading": "Blockquote and Preformatted Text",
          "content": "<code>&lt;blockquote&gt;</code> marks a quoted passage; <code>&lt;pre&gt;</code> preserves whitespace and line breaks exactly as typed."
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
      ],
      "unit": 1
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
          "content": "<code>&lt;ul&gt;</code> creates a bulleted list; each item is an <code>&lt;li&gt;</code>."
        },
        {
          "heading": "Ordered Lists",
          "content": "<code>&lt;ol&gt;</code> creates a numbered list; the type and start attributes control numbering style."
        },
        {
          "heading": "Description Lists",
          "content": "<code>&lt;dl&gt;</code> pairs a term (<code>&lt;dt&gt;</code>) with its definition (<code>&lt;dd&gt;</code>) — good for glossaries and key-value data."
        },
        {
          "heading": "Nested Lists",
          "content": "Any list can contain another list inside one of its <code>&lt;li&gt;</code> items, forming a sub-list."
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
      ],
      "unit": 1
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
          "content": "<code>&lt;a href=\"…\"&gt;</code> creates a clickable link; the href attribute names the destination."
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
      ],
      "unit": 1
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
          "content": "<code>&lt;img&gt;</code> is a void element that embeds an image; it always needs src and alt."
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
          "content": "<code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> associate an image with a caption semantically."
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
      ],
      "unit": 1
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
          "content": "<code>&lt;circle&gt;</code>, <code>&lt;rect&gt;</code>, <code>&lt;line&gt;</code>, <code>&lt;polygon&gt;</code>, and <code>&lt;text&gt;</code> are the core drawing primitives."
        },
        {
          "heading": "The viewBox",
          "content": "viewBox defines the coordinate system your shapes are drawn in, independent of the element's displayed size."
        },
        {
          "heading": "Gradients",
          "content": "<code>&lt;linearGradient&gt;</code> and <code>&lt;radialGradient&gt;</code> create smooth color transitions you can apply as a fill."
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
      ],
      "unit": 1
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
          "content": "<code>&lt;audio&gt;</code> embeds sound; the controls attribute shows native play/pause/volume UI."
        },
        {
          "heading": "Controls, Autoplay, Loop",
          "content": "controls shows the UI; autoplay starts playback automatically (often requires muted); loop repeats the track."
        },
        {
          "heading": "Multiple Sources",
          "content": "Nesting <code>&lt;source&gt;</code> elements lets the browser pick a format it supports."
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
      ],
      "unit": 1
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
          "content": "<code>&lt;video&gt;</code> embeds a video file directly, with native playback controls."
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
      ],
      "unit": 1
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
          "content": "<code>&lt;iframe src=\"…\"&gt;</code> nests another HTML document inside the current page."
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
      ],
      "unit": 1
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
      ],
      "unit": 1
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
      ],
      "unit": 1
    },
    {
      "id": "semantics",
      "number": 17,
      "tag": "semantics",
      "title": "Semantic HTML Elements",
      "icon": "fa-solid fa-layer-group",
      "summary": "Elements that describe meaning, not just appearance: header, nav, main, article, section, aside, footer, and more.",
      "lessons": [
        {
          "heading": "Why Semantics Matter",
          "content": "Semantic elements describe the *meaning* of a section of content, not just how it looks. <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> carry no meaning at all — they're generic boxes. <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, and similar elements tell the browser, search engines, and assistive technology what a piece of content actually is."
        },
        {
          "heading": "Sectioning Landmarks",
          "content": "<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> mark out the major regions of a page. Screen readers expose these automatically as navigable landmarks, so a keyboard or screen-reader user can jump straight to <code>&lt;main&gt;</code> without tabbing through the whole navigation menu first."
        },
        {
          "heading": "Grouping Content: article, section, aside",
          "content": "<code>&lt;article&gt;</code> is content that could stand alone and be redistributed on its own (a blog post, a news story, a forum comment). <code>&lt;section&gt;</code> groups thematically related content and should normally have its own heading. <code>&lt;aside&gt;</code> holds content that's tangentially related to the surrounding content, like a pull-quote or related-links panel."
        },
        {
          "heading": "New Semantic Text-Level Elements",
          "content": "<code>&lt;time&gt;</code> marks a date or time in a machine-readable way, <code>&lt;address&gt;</code> marks contact information for a page or article, and <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code> build a native expand/collapse widget with zero JavaScript."
        }
      ],
      "examples": [
        {
          "title": "Semantic markup vs. the same page built from divs",
          "code": "<!-- Semantic -->\n<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>\n\n<!-- \"Div soup\" — visually identical, means nothing to a screen reader -->\n<div class=\"header\">...</div>\n<div class=\"nav\">...</div>\n<div class=\"main\">...</div>\n<div class=\"footer\">...</div>",
          "note": "Both can look identical with CSS, but only the semantic version is understood by assistive technology and search engines."
        },
        {
          "title": "A page <header> with a logo and tagline",
          "code": "<header>\n  <h1>Bean &amp; Brew</h1>\n  <p>Small-batch coffee, roasted weekly.</p>\n</header>",
          "note": ""
        },
        {
          "title": "<nav> with aria-label to distinguish multiple navigation regions",
          "code": "<nav aria-label=\"Primary\">\n  <a href=\"/\">Home</a>\n  <a href=\"/shop\">Shop</a>\n</nav>\n\n<nav aria-label=\"Footer\">\n  <a href=\"/privacy\">Privacy</a>\n  <a href=\"/terms\">Terms</a>\n</nav>",
          "note": "A page can have more than one <nav>. aria-label gives each one a distinct accessible name."
        },
        {
          "title": "One <main> per page",
          "code": "<body>\n  <header>...</header>\n  <main>\n    <h1>Today's Roasts</h1>\n    <p>The unique content of this page goes here.</p>\n  </main>\n  <footer>...</footer>\n</body>",
          "note": "There should be exactly one visible <main> per page — it's the one landmark a screen reader user can jump to directly."
        },
        {
          "title": "<article> for a self-contained blog post",
          "code": "<article>\n  <h2>Why We Switched to Compostable Cups</h2>\n  <p>Posted <time datetime=\"2026-03-02\">March 2, 2026</time></p>\n  <p>Last year we swapped every disposable cup...</p>\n</article>",
          "note": "This article would still make complete sense if it were syndicated to another site or an RSS reader."
        },
        {
          "title": "<section> grouping related content under its own heading",
          "code": "<section>\n  <h2>Our Locations</h2>\n  <p>Three cafés across the city, all open from 7am.</p>\n</section>\n<section>\n  <h2>Catering</h2>\n  <p>Coffee carts and pastry boxes for offices and events.</p>\n</section>",
          "note": "Reach for <section> when a chunk of content is thematically distinct and deserves its own heading — not just any wrapper div."
        },
        {
          "title": "<aside> for tangential or related content",
          "code": "<article>\n  <h2>Latte Art for Beginners</h2>\n  <p>Start with steamed milk that's silky, not bubbly...</p>\n</article>\n<aside>\n  <h3>Related</h3>\n  <ul>\n    <li><a href=\"#\">Choosing a milk frother</a></li>\n    <li><a href=\"#\">Espresso ratios explained</a></li>\n  </ul>\n</aside>",
          "note": ""
        },
        {
          "title": "Nesting an <article> inside another (a post with comments)",
          "code": "<article>\n  <h2>Our New Winter Menu</h2>\n  <p>Four new drinks, back for the season...</p>\n  <article>\n    <h3>Comment from Priya</h3>\n    <p>The chai latte is incredible this year!</p>\n  </article>\n</article>",
          "note": "A comment is self-contained and independently attributable, so it's a nested <article> of its own."
        },
        {
          "title": "<time> with a machine-readable datetime",
          "code": "<p>The workshop starts at <time datetime=\"2026-09-10T18:00\">6:00 PM on Sept 10</time>.</p>",
          "note": "The visible text can be human-friendly while the datetime attribute stays in a format machines (and calendars) can parse."
        },
        {
          "title": "<address> for contact information",
          "code": "<address>\n  Bean &amp; Brew Roastery<br>\n  221 Filter St, Portland<br>\n  <a href=\"mailto:hello@beanandbrew.example\">hello@beanandbrew.example</a>\n</address>",
          "note": "<address> is for contact info for the page or article's author/owner — not for any postal address that happens to appear in the content."
        },
        {
          "title": "<details> and <summary> for a native disclosure widget",
          "code": "<details>\n  <summary>What are your opening hours?</summary>\n  <p>Monday to Friday, 7am – 6pm. Weekends, 8am – 4pm.</p>\n</details>",
          "note": "Click the summary line to expand or collapse — no JavaScript required."
        }
      ],
      "unit": 2
    },
    {
      "id": "layout",
      "number": 18,
      "tag": "layout",
      "title": "Page Structure and Layout",
      "icon": "fa-solid fa-diagram-project",
      "summary": "Composing landmarks into a full page skeleton, and arranging them responsively with Flexbox and Grid.",
      "lessons": [
        {
          "heading": "Composing a Full Page Skeleton",
          "content": "A typical page combines the landmarks from the previous topic into one coherent structure: <code>&lt;header&gt;</code> at the top, <code>&lt;nav&gt;</code> for wayfinding, <code>&lt;main&gt;</code> holding one or more <code>&lt;section&gt;</code>/<code>&lt;article&gt;</code> elements (optionally beside an <code>&lt;aside&gt;</code>), and <code>&lt;footer&gt;</code> at the bottom."
        },
        {
          "heading": "Landmark Roles for Assistive Tech",
          "content": "Semantic elements automatically map to ARIA landmark roles: <code>&lt;header&gt;</code> becomes 'banner', <code>&lt;nav&gt;</code> becomes 'navigation', <code>&lt;main&gt;</code> becomes 'main', <code>&lt;aside&gt;</code> becomes 'complementary', and <code>&lt;footer&gt;</code> becomes 'contentinfo'. Screen-reader users can jump between these regions with a single keystroke — you get this for free just by using the right element."
        },
        {
          "heading": "Skip Navigation Links",
          "content": "A 'Skip to main content' link, placed first in the page and visible on focus, lets keyboard and screen-reader users bypass a long navigation menu that repeats on every page."
        },
        {
          "heading": "Arranging Landmarks with Flexbox and Grid",
          "content": "HTML structure describes meaning; CSS decides visual arrangement. The same semantic markup can be arranged as a single column, a sidebar layout, or a full dashboard grid just by changing the CSS — the underlying <code>&lt;header&gt;</code>/<code>&lt;main&gt;</code>/<code>&lt;aside&gt;</code>/<code>&lt;footer&gt;</code> structure doesn't need to change."
        }
      ],
      "examples": [
        {
          "title": "A full page skeleton: header, nav, main, footer",
          "code": "<body>\n  <header>\n    <h1>Site Name</h1>\n    <nav>\n      <a href=\"/\">Home</a>\n      <a href=\"/blog\">Blog</a>\n    </nav>\n  </header>\n\n  <main>\n    <h2>Page Title</h2>\n    <p>Main content goes here.</p>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Site Name</p>\n  </footer>\n</body>",
          "note": ""
        },
        {
          "title": "Two-column layout: <main> content beside an <aside>",
          "code": "<div style=\"display:grid; grid-template-columns: 2fr 1fr; gap:24px;\">\n  <main>\n    <h2>Article Title</h2>\n    <p>The primary content column.</p>\n  </main>\n  <aside>\n    <h3>Related</h3>\n    <p>A narrower secondary column.</p>\n  </aside>\n</div>",
          "note": "The wrapping <div> here is purely a CSS Grid container — it adds no meaning, only layout."
        },
        {
          "title": "A flexbox navbar aligning a logo and links",
          "code": "<header style=\"display:flex; justify-content:space-between; align-items:center;\">\n  <span>Logo</span>\n  <nav style=\"display:flex; gap:16px;\">\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n</header>",
          "note": ""
        },
        {
          "title": "A \"Skip to main content\" link",
          "code": "<body>\n  <a href=\"#mainContent\" class=\"skip-link\">Skip to main content</a>\n  <header>...</header>\n  <main id=\"mainContent\">\n    <h1>Page Title</h1>\n  </main>\n</body>",
          "note": "Style .skip-link to be visually hidden until it receives keyboard focus, then have it appear at the top of the viewport."
        },
        {
          "title": "Implicit ARIA landmark roles (annotated)",
          "code": "<header>   <!-- role: banner        -->\n<nav>      <!-- role: navigation    -->\n<main>     <!-- role: main          -->\n<aside>    <!-- role: complementary -->\n<footer>   <!-- role: contentinfo  -->",
          "note": "These roles are added by the browser automatically — you never need role=\"banner\" etc. when you've already used <header>."
        },
        {
          "title": "A sticky footer using CSS Grid on <body>",
          "code": "<style>\n  body{ display:grid; grid-template-rows: auto 1fr auto; min-height:100vh; margin:0; }\n</style>\n<header>Header</header>\n<main>Main content (grows to fill space)</main>\n<footer>Footer stays at the bottom</footer>",
          "note": "The 1fr row lets <main> absorb any leftover vertical space, so a short page still keeps its footer at the bottom of the viewport."
        },
        {
          "title": "A responsive container with a max width",
          "code": "<div style=\"max-width:1100px; margin:0 auto; padding:0 20px;\">\n  <main>Content stays readable on very wide screens.</main>\n</div>",
          "note": ""
        },
        {
          "title": "A page split into anchor-linked <section>s",
          "code": "<nav>\n  <a href=\"#about\">About</a>\n  <a href=\"#services\">Services</a>\n  <a href=\"#contact\">Contact</a>\n</nav>\n\n<section id=\"about\"><h2>About</h2></section>\n<section id=\"services\"><h2>Services</h2></section>\n<section id=\"contact\"><h2>Contact</h2></section>",
          "note": "A common pattern for single-page marketing sites: one page, several sections, and a nav that jumps between them."
        },
        {
          "title": "A responsive card grid using CSS Grid auto-fit",
          "code": "<div style=\"display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px;\">\n  <article>Card 1</article>\n  <article>Card 2</article>\n  <article>Card 3</article>\n</div>",
          "note": "auto-fit + minmax() lets the grid decide how many columns fit — no media query needed for this part."
        },
        {
          "title": "Reflowing a two-column layout to one column at narrow widths",
          "code": "<style>\n  .layout{ display:grid; grid-template-columns: 2fr 1fr; gap:24px; }\n  @media (max-width: 700px){\n    .layout{ grid-template-columns: 1fr; }\n  }\n</style>\n<div class=\"layout\">\n  <main>Main content</main>\n  <aside>Sidebar</aside>\n</div>",
          "note": "Below 700px, the sidebar drops underneath the main content instead of squeezing beside it."
        }
      ],
      "unit": 2
    },
    {
      "id": "a11y-fundamentals",
      "number": 19,
      "tag": "accessibility",
      "title": "Accessibility Fundamentals",
      "icon": "fa-solid fa-universal-access",
      "summary": "Meaningful alt text, keyboard operability, and the basics of ARIA — writing HTML that works for everyone.",
      "lessons": [
        {
          "heading": "What Accessibility Means",
          "content": "Web accessibility means people with visual, motor, auditory, or cognitive disabilities can perceive, understand, and use your page. It's often summarized by the POUR principles: content must be Perceivable, Operable, Understandable, and Robust. Many accessibility features — captions, keyboard shortcuts, clear language — improve the experience for everyone, not only people with disabilities."
        },
        {
          "heading": "Meaningful Text Alternatives",
          "content": "Every image needs an alt attribute — descriptive for meaningful images, empty (alt=\"\") for purely decorative ones. Icon-only buttons and links need an accessible name from somewhere, even if there's no visible alt attribute to add it to."
        },
        {
          "heading": "Keyboard Operability",
          "content": "Every interactive control must be reachable and usable using only a keyboard — not everyone can use a mouse or touchscreen. Focus order should follow the visual and logical reading order, and the currently focused element should always have a visible outline."
        },
        {
          "heading": "ARIA: Use Native HTML First",
          "content": "The first rule of ARIA is: don't use ARIA if a native HTML element already provides the semantics and behavior you need. A <code>&lt;button&gt;</code> is already operable by keyboard and has an implicit role; a <code>&lt;div onclick&gt;</code> re-built to act like a button needs role, tabindex, and keyboard handlers just to catch up."
        },
        {
          "heading": "Color and Visual Design",
          "content": "Never use color as the only way to convey information (e.g. red text alone for an error) — pair it with an icon, label, or text so colorblind users don't miss it. Text also needs enough contrast against its background to be legible for users with low vision."
        }
      ],
      "examples": [
        {
          "title": "Meaningful alt text vs. a decorative image",
          "code": "<img src=\"media/team.jpg\" alt=\"Five team members standing in front of the office\">\n\n<!-- Purely decorative — screen readers skip it entirely -->\n<img src=\"media/divider-swirl.png\" alt=\"\">",
          "note": ""
        },
        {
          "title": "An accessible name for an icon-only button",
          "code": "<button aria-label=\"Close dialog\">\n  <i class=\"fa-solid fa-xmark\" aria-hidden=\"true\"></i>\n</button>",
          "note": "Without aria-label, a screen reader would announce this button with no name at all — just \"button\"."
        },
        {
          "title": "Visually-hidden text for screen readers only",
          "code": "<style>\n  .sr-only{\n    position:absolute; width:1px; height:1px; overflow:hidden;\n    clip:rect(0,0,0,0); white-space:nowrap; border:0;\n  }\n</style>\n<a href=\"/cart\">\n  <i class=\"fa-solid fa-cart-shopping\" aria-hidden=\"true\"></i>\n  <span class=\"sr-only\">View shopping cart (3 items)</span>\n</a>",
          "note": "The .sr-only pattern hides text visually while keeping it in the accessibility tree — the opposite of display:none, which hides it from everyone."
        },
        {
          "title": "tabindex: 0, -1, and why to avoid positive numbers",
          "code": "<div tabindex=\"0\">Focusable in normal document order</div>\n<div tabindex=\"-1\">Focusable only via JavaScript, skipped by Tab</div>\n<div tabindex=\"3\">Avoid — jumps the natural tab order and confuses users</div>",
          "note": ""
        },
        {
          "title": "A visible focus style",
          "code": "<style>\n  a:focus-visible, button:focus-visible {\n    outline: 3px solid #2563eb;\n    outline-offset: 2px;\n  }\n</style>",
          "note": "Never remove an outline (outline:none) without replacing it — keyboard users rely on it to see where they are on the page."
        },
        {
          "title": "An aria-live region announcing a dynamic update",
          "code": "<div aria-live=\"polite\" id=\"status\"></div>\n\n<!-- JavaScript later sets: -->\n<!-- document.getElementById('status').textContent = 'Item added to cart'; -->",
          "note": "aria-live tells screen readers to announce new text inside this element automatically, without the user needing to navigate to it."
        },
        {
          "title": "aria-hidden hiding a purely decorative icon",
          "code": "<p><i class=\"fa-solid fa-mug-hot\" aria-hidden=\"true\"></i> Fresh coffee, every morning.</p>",
          "note": "The icon adds nothing a screen reader user needs — aria-hidden keeps it from being announced as meaningless noise."
        },
        {
          "title": "Conveying meaning with more than color alone",
          "code": "<!-- Relies on color alone -->\n<p style=\"color:red;\">Payment failed</p>\n\n<!-- Better: icon + text, color is just a bonus -->\n<p style=\"color:red;\"><i class=\"fa-solid fa-circle-exclamation\" aria-hidden=\"true\"></i> Error: payment failed</p>",
          "note": ""
        },
        {
          "title": "Descriptive link text instead of \"click here\"",
          "code": "<!-- Unhelpful out of context -->\n<p>To see our menu, <a href=\"/menu\">click here</a>.</p>\n\n<!-- Descriptive on its own -->\n<p>See our full <a href=\"/menu\">seasonal coffee menu</a>.</p>",
          "note": "Screen-reader users often browse a page's links out of context in a list — \"click here\" repeated ten times tells them nothing."
        },
        {
          "title": "lang attribute on a phrase in a different language",
          "code": "<p>Their motto is <span lang=\"fr\">laissez-faire, laissez-passer</span>.</p>",
          "note": "This tells a screen reader to switch pronunciation rules for just that phrase, so it isn't read with English pronunciation."
        }
      ],
      "unit": 2
    },
    {
      "id": "forms",
      "number": 20,
      "tag": "forms",
      "title": "Forms and Form Controls",
      "icon": "fa-solid fa-clipboard-list",
      "summary": "The <form> element, core controls, labeling, and grouping related fields together.",
      "lessons": [
        {
          "heading": "The <form> Element",
          "content": "<code>&lt;form&gt;</code> wraps a set of controls that get submitted together. The action attribute names where the data is sent, and method chooses how — GET appends data to the URL (fine for searches), POST sends it in the request body (needed for anything sensitive or large). enctype must be set to multipart/form-data when the form includes a file upload."
        },
        {
          "heading": "Basic Form Controls",
          "content": "<code>&lt;input&gt;</code> covers most single-value fields, <code>&lt;textarea&gt;</code> handles multi-line text, <code>&lt;select&gt;</code>/<code>&lt;option&gt;</code> offer a dropdown of choices, and <code>&lt;button&gt;</code> triggers an action — these four elements are the core vocabulary of almost every form."
        },
        {
          "heading": "Labeling Every Control",
          "content": "Every input needs a <code>&lt;label&gt;</code>, connected either with a matching for/id pair or by wrapping the input inside the label. Labels aren't optional polish — screen readers announce them, and clicking a label focuses (or checks) its control, which matters hugely on touchscreens."
        },
        {
          "heading": "Grouping Related Controls",
          "content": "<code>&lt;fieldset&gt;</code> groups related controls, and its required first child <code>&lt;legend&gt;</code> names the group. This matters most for radio button and checkbox groups, where a screen reader needs to announce the group's purpose (e.g. \"Shipping speed\") before reading each option."
        },
        {
          "heading": "Buttons Inside Forms",
          "content": "Inside a <code>&lt;form&gt;</code>, a plain <code>&lt;button&gt;</code> defaults to type=\"submit\" — it submits the form unless you explicitly set type=\"button\" or type=\"reset\". This default trips people up constantly when they add a button for some other purpose inside a form."
        }
      ],
      "examples": [
        {
          "title": "A minimal form using method=\"get\"",
          "code": "<form action=\"/search\" method=\"get\">\n  <label for=\"q\">Search</label>\n  <input id=\"q\" name=\"q\" type=\"text\">\n  <button type=\"submit\">Go</button>\n</form>",
          "note": "GET is a natural fit here — the query ends up as a shareable, bookmarkable URL like /search?q=coffee."
        },
        {
          "title": "A form using method=\"post\" and enctype for file uploads",
          "code": "<form action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n  <label for=\"resume\">Upload your resume</label>\n  <input id=\"resume\" name=\"resume\" type=\"file\" accept=\".pdf\">\n  <button type=\"submit\">Upload</button>\n</form>",
          "note": ""
        },
        {
          "title": "A text input with an explicit <label for>",
          "code": "<label for=\"fullName\">Full name</label>\n<input id=\"fullName\" name=\"fullName\" type=\"text\">",
          "note": ""
        },
        {
          "title": "A <textarea> for multi-line input",
          "code": "<label for=\"feedback\">Your feedback</label>\n<textarea id=\"feedback\" name=\"feedback\" rows=\"4\" cols=\"40\"></textarea>",
          "note": "rows/cols set a starting size — CSS can still resize or restyle it."
        },
        {
          "title": "A <select> dropdown with grouped <optgroup> options",
          "code": "<label for=\"roast\">Choose a roast</label>\n<select id=\"roast\" name=\"roast\">\n  <optgroup label=\"Light roasts\">\n    <option value=\"blonde\">Blonde</option>\n    <option value=\"cinnamon\">Cinnamon</option>\n  </optgroup>\n  <optgroup label=\"Dark roasts\">\n    <option value=\"french\">French</option>\n    <option value=\"italian\">Italian</option>\n  </optgroup>\n</select>",
          "note": ""
        },
        {
          "title": "A multi-select list using the multiple attribute",
          "code": "<label for=\"toppings\">Toppings (select any)</label>\n<select id=\"toppings\" name=\"toppings\" multiple size=\"4\">\n  <option value=\"cinnamon\">Cinnamon</option>\n  <option value=\"cocoa\">Cocoa</option>\n  <option value=\"whip\">Whipped cream</option>\n</select>",
          "note": "With multiple, users Ctrl/Cmd-click (or shift-click) to select more than one option."
        },
        {
          "title": "A radio button group inside <fieldset>/<legend>",
          "code": "<fieldset>\n  <legend>Shipping speed</legend>\n  <label><input type=\"radio\" name=\"speed\" value=\"standard\" checked> Standard (5-7 days)</label>\n  <label><input type=\"radio\" name=\"speed\" value=\"express\"> Express (2 days)</label>\n</fieldset>",
          "note": "All radios in a group share the same name, so choosing one automatically deselects the others."
        },
        {
          "title": "A checkbox group for multiple choices",
          "code": "<fieldset>\n  <legend>Email preferences</legend>\n  <label><input type=\"checkbox\" name=\"pref\" value=\"offers\"> Special offers</label>\n  <label><input type=\"checkbox\" name=\"pref\" value=\"news\"> Product news</label>\n</fieldset>",
          "note": "Unlike radios, each checkbox in a group is independent — any number can be checked at once."
        },
        {
          "title": "submit vs. reset vs. button — the three button types",
          "code": "<button type=\"submit\">Submit the form</button>\n<button type=\"reset\">Clear all fields</button>\n<button type=\"button\" onclick=\"alert('Just a click, no submit')\">Just a click</button>",
          "note": ""
        },
        {
          "title": "Implicit labeling by wrapping the input inside the label",
          "code": "<label>\n  Newsletter opt-in\n  <input type=\"checkbox\" name=\"newsletter\">\n</label>",
          "note": "No for/id pair needed here — wrapping already creates the association."
        },
        {
          "title": "<datalist> for input suggestions",
          "code": "<label for=\"city\">City</label>\n<input id=\"city\" name=\"city\" list=\"cityOptions\">\n<datalist id=\"cityOptions\">\n  <option value=\"Chandigarh\">\n  <option value=\"Delhi\">\n  <option value=\"Mumbai\">\n</datalist>",
          "note": "Unlike <select>, the user can still type any value — the datalist only offers suggestions."
        }
      ],
      "unit": 2
    },
    {
      "id": "forminputs",
      "number": 21,
      "tag": "forms",
      "title": "Input Types and Attributes",
      "icon": "fa-solid fa-keyboard",
      "summary": "Every HTML5 input type, from email to color, plus the attributes that constrain and describe them.",
      "lessons": [
        {
          "heading": "Text-based Input Types",
          "content": "type=\"email\", \"password\", \"search\", \"tel\", and \"url\" all look like a plain text box but each brings free built-in behavior: the right on-screen keyboard on mobile, and (for email/url) basic format checking before the form can submit."
        },
        {
          "heading": "Numeric and Date/Time Types",
          "content": "type=\"number\" and \"range\" collect numeric values (a spinner and a slider, respectively); \"date\", \"time\", \"month\", \"week\", and \"datetime-local\" all give the browser's native date/time picker instead of asking users to type a format correctly."
        },
        {
          "heading": "Selection and File Types",
          "content": "type=\"checkbox\" and \"radio\" handle single or grouped choices, \"color\" opens a native color picker, and \"file\" lets the user choose one or more files from their device to upload."
        },
        {
          "heading": "Attributes That Shape Any Input",
          "content": "placeholder shows a hint (never a substitute for a real label), required and disabled control whether a field must be filled in or can be interacted with at all, min/max/step bound numeric and date values, minlength/maxlength bound text length, pattern enforces a custom format with a regular expression, and autocomplete hints at what kind of data a browser's autofill should offer."
        }
      ],
      "examples": [
        {
          "title": "email input — built-in format checking",
          "code": "<label for=\"email\">Email</label>\n<input id=\"email\" name=\"email\" type=\"email\" required>",
          "note": "The browser blocks submission until the value at least looks like name@domain — no JavaScript needed."
        },
        {
          "title": "password input — characters masked automatically",
          "code": "<label for=\"pwd\">Password</label>\n<input id=\"pwd\" name=\"pwd\" type=\"password\" minlength=\"8\" required>",
          "note": ""
        },
        {
          "title": "number input with min, max, and step",
          "code": "<label for=\"qty\">Quantity</label>\n<input id=\"qty\" name=\"qty\" type=\"number\" min=\"1\" max=\"10\" step=\"1\" value=\"1\">",
          "note": ""
        },
        {
          "title": "range slider input",
          "code": "<label for=\"strength\">Brew strength</label>\n<input id=\"strength\" name=\"strength\" type=\"range\" min=\"1\" max=\"5\" value=\"3\">",
          "note": ""
        },
        {
          "title": "date input with a native date picker",
          "code": "<label for=\"visit\">Preferred visit date</label>\n<input id=\"visit\" name=\"visit\" type=\"date\" min=\"2026-01-01\">",
          "note": ""
        },
        {
          "title": "time input",
          "code": "<label for=\"pickup\">Pickup time</label>\n<input id=\"pickup\" name=\"pickup\" type=\"time\">",
          "note": ""
        },
        {
          "title": "color input — a native color picker",
          "code": "<label for=\"favColor\">Favorite mug color</label>\n<input id=\"favColor\" name=\"favColor\" type=\"color\" value=\"#c4406b\">",
          "note": ""
        },
        {
          "title": "file input accepting only images, multiple files",
          "code": "<label for=\"photos\">Upload photos</label>\n<input id=\"photos\" name=\"photos\" type=\"file\" accept=\"image/*\" multiple>",
          "note": ""
        },
        {
          "title": "search input",
          "code": "<label for=\"siteSearch\">Search the site</label>\n<input id=\"siteSearch\" name=\"q\" type=\"search\" placeholder=\"Search…\">",
          "note": "Some browsers add a small 'clear' (×) button inside a search input automatically."
        },
        {
          "title": "tel input with a pattern for a phone format",
          "code": "<label for=\"phone\">Phone number</label>\n<input id=\"phone\" name=\"phone\" type=\"tel\" pattern=\"[0-9]{10}\" placeholder=\"10 digits, no spaces\">",
          "note": "type=\"tel\" doesn't validate a format by itself — pattern is what actually enforces one."
        },
        {
          "title": "placeholder, required, and disabled combined",
          "code": "<label for=\"coupon\">Coupon code</label>\n<input id=\"coupon\" name=\"coupon\" type=\"text\" placeholder=\"e.g. SAVE10\" required disabled>",
          "note": "disabled here would prevent any input and exclude the field from submission entirely — useful for fields that unlock after another action."
        },
        {
          "title": "autocomplete attribute hinting at a field's purpose",
          "code": "<label for=\"ship-addr\">Shipping address</label>\n<input id=\"ship-addr\" name=\"ship-addr\" type=\"text\" autocomplete=\"shipping street-address\">",
          "note": "Standard autocomplete values let the browser's autofill fill the field correctly instead of guessing."
        }
      ],
      "unit": 2
    },
    {
      "id": "formvalidation",
      "number": 22,
      "tag": "forms",
      "title": "Form Validation Basics",
      "icon": "fa-solid fa-circle-check",
      "summary": "Built-in constraint validation, styling valid/invalid states, and when to reach for novalidate.",
      "lessons": [
        {
          "heading": "Built-in Constraint Validation",
          "content": "required, pattern, min/max, minlength/maxlength, and type-based checks (like email) are all enforced by the browser automatically — the form simply won't submit until every constraint is satisfied, with zero JavaScript required."
        },
        {
          "heading": "Styling Valid and Invalid Fields",
          "content": "The :valid and :invalid CSS pseudo-classes match a field based on its current constraint-validation state, so you can style a field green or red as the user types, right out of the box."
        },
        {
          "heading": "Custom Validation Messages",
          "content": "setCustomValidity() (a small bit of JavaScript) lets you replace the browser's generic default message (\"Please fill out this field\") with wording specific to your form, like \"Username is already taken\"."
        },
        {
          "heading": "Opting Out with novalidate",
          "content": "Adding novalidate to a <code>&lt;form&gt;</code> disables the browser's automatic validation and error bubbles entirely, for pages that need to run their own fully custom validation UI in JavaScript instead."
        }
      ],
      "examples": [
        {
          "title": "A required field",
          "code": "<label for=\"username\">Username</label>\n<input id=\"username\" name=\"username\" type=\"text\" required>",
          "note": ""
        },
        {
          "title": "pattern attribute enforcing a specific format",
          "code": "<label for=\"zip\">Postal code</label>\n<input id=\"zip\" name=\"zip\" type=\"text\" pattern=\"[0-9]{6}\" title=\"6-digit postal code\">",
          "note": "The title attribute's text is shown by some browsers as part of the validation hint."
        },
        {
          "title": "min and max on a number and a date input",
          "code": "<input type=\"number\" min=\"18\" max=\"65\" name=\"age\">\n<input type=\"date\" min=\"2026-01-01\" max=\"2026-12-31\" name=\"eventDate\">",
          "note": ""
        },
        {
          "title": "minlength and maxlength on a text field",
          "code": "<label for=\"bio\">Short bio</label>\n<textarea id=\"bio\" name=\"bio\" minlength=\"10\" maxlength=\"200\"></textarea>",
          "note": ""
        },
        {
          "title": "Built-in checking for the email input type",
          "code": "<input type=\"email\" name=\"email\" required>\n<!-- Submitting \"not-an-email\" is blocked automatically -->",
          "note": ""
        },
        {
          "title": "Styling :valid and :invalid states with CSS",
          "code": "<style>\n  input:invalid{ border-color: #d9534f; }\n  input:valid{ border-color: #3c9a5f; }\n</style>\n<input type=\"email\" required>",
          "note": "An empty required field is :invalid before the user has even typed anything — many sites only apply this styling after the field has been touched, using the :user-invalid selector where supported."
        },
        {
          "title": "A custom validation message with setCustomValidity()",
          "code": "<input id=\"promo\" type=\"text\" oninput=\"this.setCustomValidity(this.value==='EXPIRED' ? 'This promo code has expired.' : '')\">",
          "note": "Calling setCustomValidity('') clears the custom error so the field can become valid again."
        },
        {
          "title": "novalidate on the form to disable native validation",
          "code": "<form novalidate>\n  <input type=\"email\" required>\n  <button type=\"submit\">Submit</button>\n</form>",
          "note": "With novalidate, this form submits even with an empty required field — validation would need to be handled entirely in JavaScript instead."
        },
        {
          "title": "A required checkbox (\"I agree to the terms\")",
          "code": "<label>\n  <input type=\"checkbox\" name=\"agree\" required>\n  I agree to the Terms of Service\n</label>",
          "note": ""
        },
        {
          "title": "Combining several constraints on one field",
          "code": "<label for=\"newUsername\">New username</label>\n<input id=\"newUsername\" name=\"newUsername\" type=\"text\"\n       required minlength=\"3\" maxlength=\"20\" pattern=\"[A-Za-z0-9_]+\"\n       title=\"3-20 letters, numbers, or underscores\">",
          "note": ""
        }
      ],
      "unit": 2
    },
    {
      "id": "tables",
      "number": 23,
      "tag": "tables",
      "title": "Tables and Data Representation",
      "icon": "fa-solid fa-table",
      "summary": "Rows, cells, headers, spanning, and the markup that makes tabular data accessible.",
      "lessons": [
        {
          "heading": "Basic Table Structure",
          "content": "<code>&lt;table&gt;</code> wraps the whole table, <code>&lt;tr&gt;</code> defines each row, and each cell inside a row is either <code>&lt;td&gt;</code> (a plain data cell) or <code>&lt;th&gt;</code> (a header cell for a row or column)."
        },
        {
          "heading": "Table Sections: thead, tbody, tfoot",
          "content": "<code>&lt;thead&gt;</code> groups the header row(s), <code>&lt;tbody&gt;</code> groups the main data rows, and <code>&lt;tfoot&gt;</code> groups summary or total rows. This isn't just organizational — it gives you clear hooks for styling and lets long tables repeat the header when printed."
        },
        {
          "heading": "Captions and Column Groups",
          "content": "<code>&lt;caption&gt;</code> gives the whole table a title, announced by screen readers right after they enter the table. <code>&lt;colgroup&gt;</code> and <code>&lt;col&gt;</code> let you apply styling to an entire column at once, without touching every individual cell."
        },
        {
          "heading": "Spanning Cells",
          "content": "colspan merges a cell across multiple columns; rowspan merges a cell down multiple rows. Both take the number of columns/rows the cell should occupy."
        },
        {
          "heading": "Accessible Tables",
          "content": "scope=\"col\" or scope=\"row\" on a <code>&lt;th&gt;</code> tells assistive technology exactly which cells that header describes. For complex tables with multiple header levels, headers/id can explicitly link a data cell to every header that applies to it. Tables should be reserved for genuinely tabular data — not for visually arranging a page layout."
        }
      ],
      "examples": [
        {
          "title": "A basic table: rows, headers, and data cells",
          "code": "<table>\n  <tr>\n    <th>Drink</th>\n    <th>Price</th>\n  </tr>\n  <tr>\n    <td>Espresso</td>\n    <td>$3.00</td>\n  </tr>\n  <tr>\n    <td>Latte</td>\n    <td>$4.50</td>\n  </tr>\n</table>",
          "note": ""
        },
        {
          "title": "A table using thead, tbody, and tfoot",
          "code": "<table>\n  <thead>\n    <tr><th>Item</th><th>Qty</th><th>Price</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Latte</td><td>2</td><td>$9.00</td></tr>\n    <tr><td>Muffin</td><td>1</td><td>$3.50</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td colspan=\"2\">Total</td><td>$12.50</td></tr>\n  </tfoot>\n</table>",
          "note": ""
        },
        {
          "title": "A table caption",
          "code": "<table>\n  <caption>Weekly café sales by drink</caption>\n  <tr><th>Drink</th><th>Units sold</th></tr>\n  <tr><td>Latte</td><td>142</td></tr>\n</table>",
          "note": "<caption> must come immediately after the opening <table> tag."
        },
        {
          "title": "colspan — merging cells across columns",
          "code": "<table>\n  <tr><td colspan=\"3\">Order Summary</td></tr>\n  <tr><td>Latte</td><td>Qty 2</td><td>$9.00</td></tr>\n</table>",
          "note": ""
        },
        {
          "title": "rowspan — merging cells across rows",
          "code": "<table>\n  <tr><th rowspan=\"2\">Morning</th><td>Espresso</td></tr>\n  <tr><td>Cappuccino</td></tr>\n</table>",
          "note": ""
        },
        {
          "title": "scope=\"col\" and scope=\"row\" for accessible header cells",
          "code": "<table>\n  <tr>\n    <th scope=\"col\">Drink</th>\n    <th scope=\"col\">Calories</th>\n  </tr>\n  <tr>\n    <th scope=\"row\">Latte</th>\n    <td>190</td>\n  </tr>\n</table>",
          "note": "scope tells a screen reader \"this header describes this whole column\" or \"...this whole row\", read aloud as it moves between cells."
        },
        {
          "title": "colgroup and col for styling entire columns",
          "code": "<table>\n  <colgroup>\n    <col style=\"background:#f7f4ec;\">\n    <col span=\"2\">\n  </colgroup>\n  <tr><th>Drink</th><th>Size</th><th>Price</th></tr>\n  <tr><td>Latte</td><td>Medium</td><td>$4.50</td></tr>\n</table>",
          "note": ""
        },
        {
          "title": "A complex table linking cells to headers explicitly",
          "code": "<table>\n  <tr>\n    <th id=\"drink\">Drink</th>\n    <th id=\"morning\">Morning</th>\n    <th id=\"evening\">Evening</th>\n  </tr>\n  <tr>\n    <th id=\"latte\">Latte</th>\n    <td headers=\"latte morning\">32</td>\n    <td headers=\"latte evening\">18</td>\n  </tr>\n</table>",
          "note": "headers/id pairs are mainly needed for tables too complex for a single scope attribute to describe unambiguously."
        },
        {
          "title": "A responsive table wrapper for small screens",
          "code": "<div style=\"overflow-x:auto;\">\n  <table>\n    <tr><th>Drink</th><th>Size</th><th>Price</th><th>Calories</th></tr>\n    <tr><td>Latte</td><td>Large</td><td>$5.00</td><td>250</td></tr>\n  </table>\n</div>",
          "note": "Rather than shrinking a wide table until it's unreadable, let it scroll horizontally inside its own container."
        },
        {
          "title": "Data table vs. layout table",
          "code": "<!-- Good: a table for genuinely tabular data -->\n<table>\n  <tr><th>Month</th><th>Revenue</th></tr>\n  <tr><td>January</td><td>$12,400</td></tr>\n</table>\n\n<!-- Avoid: using a table just to position unrelated page content -->\n<!-- <table><tr><td>Logo</td><td>Search box</td></tr></table> -->",
          "note": "Screen readers announce row/column counts and header relationships — confusing for content that isn't actually a data grid. Use CSS Grid or Flexbox for layout instead."
        }
      ],
      "unit": 2
    },
    {
      "id": "a11y-standards",
      "number": 24,
      "tag": "accessibility",
      "title": "Accessibility Standards",
      "icon": "fa-solid fa-scale-balanced",
      "summary": "WCAG, conformance levels, where these standards apply, and how accessibility gets tested.",
      "lessons": [
        {
          "heading": "WCAG at a Glance",
          "content": "The Web Content Accessibility Guidelines (WCAG), maintained by the W3C, are the standard almost every accessibility rule traces back to. WCAG 2.1 and 2.2 organize dozens of testable \"success criteria\" under the four POUR principles: Perceivable, Operable, Understandable, Robust."
        },
        {
          "heading": "Conformance Levels A, AA, AAA",
          "content": "WCAG success criteria are graded A (minimum), AA (mid-range), and AAA (highest). Level AA is the most common target in practice — most organizational policies and legal requirements reference AA, not the much stricter (and sometimes impractical for every use case) AAA."
        },
        {
          "heading": "Where These Standards Show Up",
          "content": "Several laws and policies point back to WCAG: the Americans with Disabilities Act (ADA) in the US, Section 508 for US federal agencies, and EN 301 549 across the EU. This is general orientation, not legal advice — specific obligations vary by organization, sector, and country."
        },
        {
          "heading": "Testing for Accessibility",
          "content": "Automated tools (axe, WAVE, Lighthouse) are a fast first pass, but they only catch a fraction of real issues — often estimated around 30-40%. Manual testing, especially navigating with just a keyboard and trying a screen reader, catches problems automated tools simply can't detect, like an illogical focus order or a confusing accessible name."
        }
      ],
      "examples": [
        {
          "title": "WCAG 1.1.1 Non-text Content — satisfied with meaningful alt text",
          "code": "<img src=\"media/chart.png\" alt=\"Quarterly revenue rising from $10k to $42k over four quarters\">",
          "note": "Success criterion 1.1.1 requires a text alternative for any non-text content — this alt text conveys the same information the chart shows visually."
        },
        {
          "title": "WCAG 2.4.4 Link Purpose — satisfied with descriptive link text",
          "code": "<a href=\"/reports/2026-q1.pdf\">Download the Q1 2026 financial report (PDF)</a>",
          "note": ""
        },
        {
          "title": "WCAG 3.1.1 Language of Page — set with the lang attribute",
          "code": "<html lang=\"en\">",
          "note": "Every page needs this on <html> — it's one of the simplest success criteria to satisfy, and one of the most commonly forgotten."
        },
        {
          "title": "WCAG 2.4.1 Bypass Blocks — satisfied with a skip link",
          "code": "<a href=\"#mainContent\" class=\"skip-link\">Skip to main content</a>\n...\n<main id=\"mainContent\">...</main>",
          "note": "This lets users bypass a block of repeated content (like a long nav menu) that appears on every page."
        },
        {
          "title": "WCAG 4.1.2 Name, Role, Value — a labeled custom control",
          "code": "<div role=\"button\" tabindex=\"0\" aria-pressed=\"false\" onclick=\"toggle(this)\">\n  Toggle dark mode\n</div>",
          "note": "A native <button> would satisfy this automatically; when a custom control is unavoidable, role/tabindex/aria-* must recreate that same accessible name, role, and state."
        },
        {
          "title": "WCAG 4.1.3 Status Messages — announced without moving focus",
          "code": "<div role=\"alert\">Your changes have been saved.</div>",
          "note": "role=\"alert\" announces this message to screen readers immediately, without forcing the user's keyboard focus to jump to it."
        },
        {
          "title": "aria-labelledby computing an accessible name from existing text",
          "code": "<h2 id=\"billing\">Billing Address</h2>\n<button aria-labelledby=\"billing\">Edit</button>",
          "note": "The button's accessible name becomes \"Billing Address\" — reusing visible text instead of duplicating it in a separate aria-label."
        },
        {
          "title": "A short accessibility statement",
          "code": "<section>\n  <h2>Accessibility Statement</h2>\n  <p>This site targets WCAG 2.1 Level AA conformance. If you encounter an\n     accessibility barrier, contact us at access@example.com.</p>\n</section>",
          "note": "Publishing an accessibility statement is common practice for organizations formally committing to a conformance level."
        },
        {
          "title": "Documenting a page's WCAG conformance target",
          "code": "<!-- Accessibility target: WCAG 2.1 Level AA -->\n<!-- Last audited: 2026-06-01 -->\n<html lang=\"en\">",
          "note": ""
        }
      ],
      "unit": 2
    },
    {
      "id": "responsive-structure",
      "number": 25,
      "tag": "layout",
      "title": "Responsive Content Structuring",
      "icon": "fa-solid fa-mobile-screen",
      "summary": "The viewport meta tag, fluid grids, media queries, and reordering content for smaller screens.",
      "lessons": [
        {
          "heading": "The Viewport Meta Tag",
          "content": "Without <code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code>, mobile browsers render the page at a fixed desktop-like width and then zoom the whole thing out to fit — text becomes tiny and unreadable. This one line is the foundation every responsive page is built on."
        },
        {
          "heading": "Fluid Grids and Flexible Units",
          "content": "Percentages, minmax(), and CSS Grid's auto-fit/auto-fill let a layout reflow its own column count as the viewport changes width, without a single media query."
        },
        {
          "heading": "Media Queries and Breakpoints",
          "content": "A mobile-first approach writes base styles for small screens first, then adds min-width media queries to layer on more complexity as the viewport grows — rather than writing desktop styles first and trying to undo them for mobile."
        },
        {
          "heading": "Reordering and Prioritizing Content",
          "content": "Flexbox's order property can change the *visual* order of elements without touching their order in the HTML source — which matters, because screen readers and keyboard tab order still follow the source order, not the visual one. Non-essential content can also be hidden on small screens, as long as an equivalent way to reach it still exists."
        }
      ],
      "examples": [
        {
          "title": "The viewport meta tag",
          "code": "<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>",
          "note": "This belongs in the <head> of every responsive page — without it, none of the CSS below behaves the way you'd expect on a phone."
        },
        {
          "title": "A responsive card grid using CSS Grid auto-fit",
          "code": "<div style=\"display:grid; grid-template-columns:repeat(auto-fit, minmax(200px,1fr)); gap:16px;\">\n  <div>Card A</div>\n  <div>Card B</div>\n  <div>Card C</div>\n</div>",
          "note": "The grid decides how many columns fit at the current width — no breakpoint math required."
        },
        {
          "title": "A mobile-first media query",
          "code": "<style>\n  .cards{ display:flex; flex-direction:column; }\n  @media (min-width: 700px){\n    .cards{ flex-direction:row; gap:16px; }\n  }\n</style>",
          "note": "Base styles target small screens by default; the media query only adds complexity once there's room for it."
        },
        {
          "title": "Stacking a two-column layout into one column",
          "code": "<style>\n  .layout{ display:grid; grid-template-columns: 2fr 1fr; }\n  @media (max-width: 700px){\n    .layout{ grid-template-columns: 1fr; }\n  }\n</style>",
          "note": ""
        },
        {
          "title": "Responsive typography using clamp()",
          "code": "<style>\n  h1{ font-size: clamp(1.5rem, 4vw, 3rem); }\n</style>\n<h1>Scales smoothly between mobile and desktop</h1>",
          "note": "clamp(min, preferred, max) lets font size grow with the viewport, but never below or above the bounds you set."
        },
        {
          "title": "A responsive table wrapper",
          "code": "<div style=\"overflow-x:auto;\">\n  <table>\n    <tr><th>Plan</th><th>Price</th><th>Storage</th><th>Support</th></tr>\n    <tr><td>Basic</td><td>$5</td><td>10GB</td><td>Email</td></tr>\n  </table>\n</div>",
          "note": "A wide table scrolls horizontally inside its own box, rather than squeezing illegibly to fit a phone screen."
        },
        {
          "title": "Reordering content visually with the flex order property",
          "code": "<div style=\"display:flex; flex-direction:column;\">\n  <aside style=\"order:2;\">Sidebar (appears second visually)</aside>\n  <main style=\"order:1;\">Main content (appears first visually)</main>\n</div>",
          "note": "The HTML source keeps <aside> before <main> for reading/tab order — only the visual position changes."
        },
        {
          "title": "Hiding non-essential content on small screens",
          "code": "<style>\n  @media (max-width: 600px){\n    .desktop-only-tip{ display:none; }\n  }\n</style>\n<p class=\"desktop-only-tip\">Tip: press \"/\" to jump to search.</p>",
          "note": "Fine for a supplementary hint like this one — but never hide content this way if it's the only way to reach essential information or functionality."
        },
        {
          "title": "Fluid width using percentages instead of fixed pixels",
          "code": "<div style=\"width:90%; max-width:960px; margin:0 auto;\">\n  Scales with the viewport, capped at 960px on large screens.\n</div>",
          "note": ""
        }
      ],
      "unit": 2
    },
    {
      "id": "css-intro",
      "number": 26,
      "tag": "css-basics",
      "unit": 3,
      "title": "Introduction to CSS",
      "icon": "fa-solid fa-palette",
      "summary": "What CSS is for, the three ways to add it to a page, and the basic syntax of a rule.",
      "lessons": [
        {
          "heading": "What CSS Does",
          "content": "CSS (Cascading Style Sheets) separates presentation from content. HTML describes what a piece of content *is* — a heading, a list, a paragraph. CSS describes how it *looks* — its color, spacing, size, and position. Keeping the two separate means the same HTML can be restyled completely without touching its structure."
        },
        {
          "heading": "Three Ways to Add CSS",
          "content": "Inline CSS lives in a style attribute on one element. Internal CSS lives in a <code>&lt;style&gt;</code> block inside <code>&lt;head&gt;</code> and applies to the whole page. External CSS lives in a separate .css file linked with <code>&lt;link rel=\"stylesheet\"&gt;</code>, and is almost always the best choice — it's cacheable, reusable across many pages, and keeps markup clean."
        },
        {
          "heading": "The Cascade, Briefly",
          "content": "When more than one rule targets the same element, the browser has to decide which one wins. This decision — the 'cascade' — depends on specificity, source order, and importance. This topic introduces just enough to get started; the next topic covers specificity in depth."
        },
        {
          "heading": "Basic Rule Syntax",
          "content": "A CSS rule is a selector followed by a declaration block in curly braces: selector { property: value; }. Each declaration is a property and a value separated by a colon, ending in a semicolon."
        }
      ],
      "examples": [
        {
          "title": "Inline CSS with the style attribute",
          "code": "<p style=\"color: navy; font-weight: bold;\">Styled directly on the element.</p>",
          "note": "Inline styles have very high specificity and are hard to reuse or override — reach for them rarely, mostly for one-off JavaScript-driven changes."
        },
        {
          "title": "Internal CSS in a <style> block",
          "code": "<head>\n  <style>\n    p { color: navy; }\n  </style>\n</head>\n<body>\n  <p>Styled by the internal stylesheet.</p>\n</body>",
          "note": ""
        },
        {
          "title": "External CSS via <link>",
          "code": "<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n\n<!-- styles.css -->\n<!-- p { color: navy; } -->",
          "note": "This is the recommended approach for anything beyond a quick demo — one file, reused across every page that links it."
        },
        {
          "title": "Anatomy of a rule, annotated",
          "code": "p {              /* selector: targets every <p> */\n  color: navy;   /* property: value; */\n  font-size: 16px;\n}",
          "note": ""
        },
        {
          "title": "Multiple declarations in one rule",
          "code": "<style>\n  .card {\n    background: white;\n    border-radius: 8px;\n    padding: 16px;\n  }\n</style>\n<div class=\"card\">A styled card</div>",
          "note": ""
        },
        {
          "title": "Comments in CSS",
          "code": "<style>\n  /* This comment is ignored by the browser */\n  p { color: navy; }\n</style>",
          "note": "CSS comments use /* ... */, not // or <!-- -->."
        },
        {
          "title": "One rule targeting multiple selectors",
          "code": "<style>\n  h1, h2, h3 {\n    font-family: Georgia, serif;\n  }\n</style>",
          "note": "A comma-separated selector list applies the same declarations to every listed selector, avoiding repetition."
        },
        {
          "title": "A first look at the cascade: last rule wins on a tie",
          "code": "<style>\n  p { color: navy; }\n  p { color: crimson; }  /* wins: same specificity, comes later */\n</style>\n<p>This text is crimson.</p>",
          "note": "When two rules have equal specificity, the one that appears later in the stylesheet wins."
        }
      ]
    },
    {
      "id": "css-selectors",
      "number": 27,
      "tag": "css-basics",
      "unit": 3,
      "title": "CSS Selectors and Specificity",
      "icon": "fa-solid fa-crosshairs",
      "summary": "Type, class, ID, and combinator selectors, and how the browser resolves conflicting rules.",
      "lessons": [
        {
          "heading": "Basic Selectors",
          "content": "A type selector matches every element of that tag (p, div). A class selector (.name) matches every element with that class. An ID selector (#name) matches the one element with that ID. The universal selector (*) matches everything."
        },
        {
          "heading": "Combinators",
          "content": "A descendant combinator (a space) matches an element nested anywhere inside another: div p. A child combinator (>) matches only a direct child: div > p. An adjacent sibling combinator (+) matches an element immediately after another at the same level: h2 + p. A general sibling combinator (~) matches any later sibling: h2 ~ p."
        },
        {
          "heading": "Grouping and Compound Selectors",
          "content": "A comma groups independent selectors that should get the same rule. Writing selectors with no space between them, like p.intro, creates a compound selector: it matches only a <code>&lt;p&gt;</code> that also has the class intro — both conditions on the same element."
        },
        {
          "heading": "Specificity",
          "content": "When multiple rules could apply, the browser scores each selector's specificity: inline styles score highest, then ID selectors, then classes/attribute selectors/pseudo-classes, then element selectors/pseudo-elements. The highest-specificity rule wins regardless of source order; !important overrides normal specificity entirely and should be used sparingly, since it makes later overrides harder."
        }
      ],
      "examples": [
        {
          "title": "Type (element) selector",
          "code": "<style>\n  p { line-height: 1.6; }\n</style>",
          "note": ""
        },
        {
          "title": "Class selector",
          "code": "<style>\n  .highlight { background: yellow; }\n</style>\n<p class=\"highlight\">Highlighted text</p>",
          "note": ""
        },
        {
          "title": "ID selector",
          "code": "<style>\n  #pageHeader { font-size: 2rem; }\n</style>\n<h1 id=\"pageHeader\">Title</h1>",
          "note": "IDs must be unique per page, so an ID selector should only ever match one element."
        },
        {
          "title": "Universal selector",
          "code": "<style>\n  * { box-sizing: border-box; }\n</style>",
          "note": "A very common reset rule — applies border-box sizing to literally every element."
        },
        {
          "title": "Descendant combinator",
          "code": "<style>\n  article p { color: #333; }\n</style>\n<article><p>Matched — nested anywhere inside article</p></article>",
          "note": ""
        },
        {
          "title": "Child combinator >",
          "code": "<style>\n  ul > li { list-style: square; }\n</style>\n<ul><li>Direct child — matched</li></ul>",
          "note": "Unlike the descendant combinator, this only matches li elements that are direct children of ul, not nested deeper."
        },
        {
          "title": "Adjacent sibling combinator +",
          "code": "<style>\n  h2 + p { font-weight: bold; }\n</style>\n<h2>Heading</h2>\n<p>Only this first paragraph is bold.</p>\n<p>This one is not.</p>",
          "note": ""
        },
        {
          "title": "General sibling combinator ~",
          "code": "<style>\n  h2 ~ p { color: gray; }\n</style>\n<h2>Heading</h2>\n<p>Gray</p>\n<p>Also gray</p>",
          "note": "Matches every <p> that comes after the <h2> at the same level, not just the first one."
        },
        {
          "title": "Specificity resolving a conflict",
          "code": "<style>\n  p { color: navy; }          /* specificity: 0-0-1 */\n  .note { color: green; }     /* specificity: 0-1-0 — wins over p */\n  #warning { color: red; }    /* specificity: 1-0-0 — wins over both */\n</style>\n<p id=\"warning\" class=\"note\">This text is red.</p>",
          "note": "The ID selector has the highest specificity of the three, so it wins regardless of source order."
        }
      ]
    },
    {
      "id": "css-colors-backgrounds",
      "number": 28,
      "tag": "css-basics",
      "unit": 3,
      "title": "Colors and Backgrounds",
      "icon": "fa-solid fa-fill-drip",
      "summary": "Color formats, background images and gradients, and the difference between opacity and alpha transparency.",
      "lessons": [
        {
          "heading": "Color Formats",
          "content": "Colors can be written as named keywords (crimson, navy), hex codes (#c4406b), rgb()/rgba() (red, green, blue, and an optional alpha channel), or hsl()/hsla() (hue, saturation, lightness). hsl() is often the easiest for humans to reason about — sliding just the lightness value gives predictable lighter/darker shades of the same color."
        },
        {
          "heading": "Background Color and Images",
          "content": "background-color sets a solid fill. background-image sets one or more images (or gradients) drawn on top of that color. background-repeat, background-position, and background-size control how that image tiles, where it sits, and how large it renders."
        },
        {
          "heading": "Gradients",
          "content": "linear-gradient() and radial-gradient() generate a gradient image on the fly, used as a background-image value — no image file needed. A direction and a list of color stops control the transition."
        },
        {
          "heading": "Opacity vs. Alpha Transparency",
          "content": "opacity makes an entire element — including its text and children — partially transparent as a whole. An alpha channel in rgba()/hsla() only makes that one color value (like just the background) partially transparent, leaving text and children fully opaque."
        }
      ],
      "examples": [
        {
          "title": "Named color keyword",
          "code": "<p style=\"color: crimson;\">Crimson text</p>",
          "note": ""
        },
        {
          "title": "Hex color",
          "code": "<p style=\"color: #c4406b;\">Hex-coded pink</p>",
          "note": ""
        },
        {
          "title": "rgb() and rgba()",
          "code": "<div style=\"background: rgb(196, 64, 107);\">Solid</div>\n<div style=\"background: rgba(196, 64, 107, 0.4);\">40% opacity fill</div>",
          "note": ""
        },
        {
          "title": "hsl() and hsla()",
          "code": "<div style=\"background: hsl(340, 60%, 45%);\"></div>\n<div style=\"background: hsl(340, 60%, 75%);\"></div>",
          "note": "Same hue and saturation, only lightness changed — an easy way to build a consistent color palette."
        },
        {
          "title": "background-image with size, position, and repeat",
          "code": "<style>\n  .hero {\n    background-image: url('media/hero.jpg');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 200px;\n  }\n</style>\n<div class=\"hero\"></div>",
          "note": ""
        },
        {
          "title": "linear-gradient background",
          "code": "<div style=\"height:100px; background: linear-gradient(135deg, #c4406b, #211f2e);\"></div>",
          "note": ""
        },
        {
          "title": "radial-gradient background",
          "code": "<div style=\"height:100px; background: radial-gradient(circle, #f7f4ec, #211f2e);\"></div>",
          "note": ""
        },
        {
          "title": "Multiple background layers",
          "code": "<div style=\"height:120px; background:\n  linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)),\n  url('media/hero.jpg');\n  background-size: cover;\">\n</div>",
          "note": "Layers stack in the order listed — the first is on top. This is a common pattern for a readable text overlay on a photo."
        },
        {
          "title": "opacity vs. rgba alpha, compared",
          "code": "<!-- opacity: fades the box AND its text together -->\n<div style=\"opacity:0.5; background:navy; color:white; padding:10px;\">Everything faded</div>\n\n<!-- rgba: only the background is translucent -->\n<div style=\"background:rgba(0,0,128,0.5); color:white; padding:10px;\">Only background faded</div>",
          "note": ""
        }
      ]
    },
    {
      "id": "css-units",
      "number": 29,
      "tag": "css-basics",
      "unit": 3,
      "title": "Units and Measurements",
      "icon": "fa-solid fa-ruler",
      "summary": "Absolute vs. relative units, viewport units, percentages, and the calc() function.",
      "lessons": [
        {
          "heading": "Absolute Units",
          "content": "px is the most common absolute unit — a fixed size regardless of any parent or the viewport. Other absolute units like cm, mm, and pt exist mostly for print stylesheets and are rarely used for screen design."
        },
        {
          "heading": "Relative Units: em and rem",
          "content": "1em equals the font-size of the current element's parent — which means em values compound as they nest, sometimes unpredictably. 1rem always equals the root <code>&lt;html&gt;</code> element's font-size (typically 16px by default), regardless of nesting, which makes rem far more predictable for consistent sizing."
        },
        {
          "heading": "Viewport Units",
          "content": "vw and vh are 1% of the viewport's width and height respectively. vmin and vmax are 1% of whichever of the two is currently smaller or larger. These make an element's size respond directly to the browser window, without a media query."
        },
        {
          "heading": "Percentages",
          "content": "A percentage value is relative to the corresponding property on the parent element — width: 50% means half the parent's width, not half the viewport."
        },
        {
          "heading": "The calc() Function",
          "content": "calc() lets you mix units in one expression, like calc(100% - 40px) — full width minus a fixed margin. This is something percentages or fixed units alone can't express."
        }
      ],
      "examples": [
        {
          "title": "px — an absolute unit",
          "code": "<p style=\"font-size: 16px;\">Always 16px, everywhere.</p>",
          "note": ""
        },
        {
          "title": "em — relative to the parent's font-size",
          "code": "<div style=\"font-size: 20px;\">\n  <span style=\"font-size: 1.5em;\">This is 30px (1.5 &times; 20px)</span>\n</div>",
          "note": ""
        },
        {
          "title": "rem — relative to the root font-size",
          "code": "<html style=\"font-size: 16px;\">\n<!-- ... -->\n<p style=\"font-size: 1.5rem;\">Always 24px, regardless of nesting.</p>",
          "note": ""
        },
        {
          "title": "em compounding across nested elements",
          "code": "<div style=\"font-size: 1.2em;\">\n  <div style=\"font-size: 1.2em;\">\n    <div style=\"font-size: 1.2em;\">Compounded — much bigger than 1.2em!</div>\n  </div>\n</div>",
          "note": "Each nested 1.2em multiplies against its own parent, growing fast. This is exactly the surprise rem avoids."
        },
        {
          "title": "Viewport units: vw and vh",
          "code": "<div style=\"width: 50vw; height: 30vh; background: #eee;\">\n  Half the viewport's width, 30% of its height.\n</div>",
          "note": ""
        },
        {
          "title": "Percentage width relative to the parent",
          "code": "<div style=\"width: 400px;\">\n  <div style=\"width: 50%; background: #eee;\">200px — half of the 400px parent</div>\n</div>",
          "note": ""
        },
        {
          "title": "calc() mixing units",
          "code": "<div style=\"width: calc(100% - 60px); background: #eee;\">\n  Full width minus a fixed 60px, always.\n</div>",
          "note": ""
        },
        {
          "title": "Unitless line-height (best practice)",
          "code": "<p style=\"font-size: 16px; line-height: 1.6;\">\n  A unitless line-height scales proportionally if font-size changes later — safer than a fixed px line-height.\n</p>",
          "note": ""
        },
        {
          "title": "The same value in different units, compared",
          "code": "<p style=\"font-size: 16px;\">16px</p>\n<p style=\"font-size: 1rem;\">1rem (= 16px, if root is 16px)</p>\n<p style=\"font-size: 100%;\">100% (= 16px, same context)</p>",
          "note": "All three render identically here — the difference shows up once you start changing the root font-size or nesting."
        }
      ]
    },
    {
      "id": "css-typography",
      "number": 30,
      "tag": "css-text",
      "unit": 3,
      "title": "Typography",
      "icon": "fa-solid fa-font",
      "summary": "Font families and fallback stacks, sizing and weight, line height, letter spacing, and web fonts.",
      "lessons": [
        {
          "heading": "Font Family and Fallback Stacks",
          "content": "font-family takes a comma-separated list, tried in order until one is available on the user's device, ending in a generic family (serif, sans-serif, monospace) as a guaranteed fallback."
        },
        {
          "heading": "Font Size, Weight, and Style",
          "content": "font-size sets the text size (rem is the usual recommended unit). font-weight can be a keyword (normal, bold) or a numeric value from 100 to 900, if the loaded font supports those weights. font-style sets italic or oblique text."
        },
        {
          "heading": "Line Height and Letter Spacing",
          "content": "line-height controls the vertical space a line of text occupies — a value like 1.5 or 1.6 (unitless, multiplying the font-size) usually reads more comfortably than the browser default. letter-spacing adds or removes space between characters, useful for small caps or tightly-set headings."
        },
        {
          "heading": "Web Fonts",
          "content": "@font-face (or a service like Google Fonts) loads a custom font file so text isn't limited to whatever's already installed on a user's device. This is how a design achieves a distinctive typeface rather than defaulting to system fonts."
        }
      ],
      "examples": [
        {
          "title": "A font-family fallback stack",
          "code": "<p style=\"font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\">\n  Falls through the list until one font is found.\n</p>",
          "note": ""
        },
        {
          "title": "font-size with rem",
          "code": "<h1 style=\"font-size: 2.5rem;\">Heading</h1>\n<p style=\"font-size: 1rem;\">Body text</p>",
          "note": ""
        },
        {
          "title": "font-weight: named vs. numeric",
          "code": "<p style=\"font-weight: normal;\">Normal (400)</p>\n<p style=\"font-weight: bold;\">Bold (700)</p>\n<p style=\"font-weight: 300;\">Light (300), if supported</p>",
          "note": ""
        },
        {
          "title": "font-style: italic",
          "code": "<p style=\"font-style: italic;\">Italicized text</p>",
          "note": ""
        },
        {
          "title": "line-height for readability",
          "code": "<p style=\"line-height: 1.6; max-width: 500px;\">\n  A generous line-height like 1.6 makes multi-line paragraphs noticeably easier to read than the tight browser default.\n</p>",
          "note": ""
        },
        {
          "title": "letter-spacing",
          "code": "<h2 style=\"letter-spacing: 0.08em; text-transform: uppercase;\">Section Title</h2>",
          "note": "A little positive letter-spacing is a common finishing touch on small uppercase headings."
        },
        {
          "title": "The font shorthand property",
          "code": "<p style=\"font: italic bold 1.2rem/1.5 Georgia, serif;\">\n  style weight size/line-height family, all in one declaration.\n</p>",
          "note": "The shorthand order is strict: style, weight, size/line-height, then family."
        },
        {
          "title": "@font-face for a custom web font (annotated)",
          "code": "<style>\n  @font-face {\n    font-family: 'BrandSans';\n    src: url('fonts/brand-sans.woff2') format('woff2');\n    font-weight: 400;\n  }\n  body { font-family: 'BrandSans', sans-serif; }\n</style>",
          "note": "This declares the font once; every rule can then reference 'BrandSans' by name like any system font."
        }
      ]
    },
    {
      "id": "css-text-styling",
      "number": 31,
      "tag": "css-text",
      "unit": 3,
      "title": "Text Styling",
      "icon": "fa-solid fa-text-height",
      "summary": "Alignment, decoration, case transforms, and controlling overflow of long or unbreakable text.",
      "lessons": [
        {
          "heading": "Alignment and Decoration",
          "content": "text-align controls horizontal alignment (left, right, center, justify). text-decoration adds or removes lines like underline or line-through, and its sub-properties (text-decoration-color, -style, -thickness) style that line independently of the text color."
        },
        {
          "heading": "Case and Transform",
          "content": "text-transform changes the displayed case — uppercase, lowercase, or capitalize — without altering the actual text content in the HTML, which matters for accessibility tools and copy-pasting."
        },
        {
          "heading": "Whitespace and Overflow",
          "content": "white-space: nowrap prevents text from wrapping onto a new line. Combined with overflow: hidden and text-overflow: ellipsis, it produces the classic single-line truncation with a trailing \"…\" when text is too long for its box."
        },
        {
          "heading": "Text Shadow and Indent",
          "content": "text-shadow adds one or more drop shadows behind text (horizontal offset, vertical offset, blur radius, color). text-indent pushes just the first line of a block inward, a traditional print-style paragraph convention."
        }
      ],
      "examples": [
        {
          "title": "text-align values",
          "code": "<p style=\"text-align: center;\">Centered</p>\n<p style=\"text-align: right;\">Right-aligned</p>\n<p style=\"text-align: justify;\">Justified text stretches to fill the line on both edges, like a newspaper column, which can look great or leave odd gaps depending on the content.</p>",
          "note": ""
        },
        {
          "title": "text-decoration with sub-properties",
          "code": "<a href=\"#\" style=\"text-decoration: underline wavy red;\">A wavy red underline</a>",
          "note": "The shorthand can combine the line, style, and color in one declaration."
        },
        {
          "title": "text-transform",
          "code": "<p style=\"text-transform: uppercase;\">shouting, visually only</p>\n<p style=\"text-transform: capitalize;\">each word capitalized</p>",
          "note": "The underlying HTML text stays lowercase — only the display changes."
        },
        {
          "title": "text-shadow",
          "code": "<h1 style=\"text-shadow: 2px 2px 4px rgba(0,0,0,0.4);\">Shadowed heading</h1>",
          "note": ""
        },
        {
          "title": "text-indent",
          "code": "<p style=\"text-indent: 2em;\">Only the first line of this paragraph is pushed inward, in a classic print-style layout.</p>",
          "note": ""
        },
        {
          "title": "white-space: nowrap",
          "code": "<p style=\"white-space: nowrap; width: 150px; border: 1px solid #ccc;\">This text refuses to wrap and will overflow its box.</p>",
          "note": ""
        },
        {
          "title": "The 3-property ellipsis truncation pattern",
          "code": "<p style=\"width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border: 1px solid #ccc;\">\n  This long sentence gets cut off with a trailing ellipsis.\n</p>",
          "note": "All three properties are required together — text-overflow alone does nothing without nowrap and overflow:hidden."
        },
        {
          "title": "word-break for long unbreakable words",
          "code": "<p style=\"width: 120px; overflow-wrap: break-word; border: 1px solid #ccc;\">\n  Supercalifragilisticexpialidocious\n</p>",
          "note": "overflow-wrap: break-word lets a single long word break mid-word rather than overflowing its container."
        }
      ]
    },
    {
      "id": "css-box-model",
      "number": 32,
      "tag": "css-layout",
      "unit": 3,
      "title": "Box Model",
      "icon": "fa-solid fa-square",
      "summary": "Content, padding, border, and margin — and the box-sizing property that changes what width actually measures.",
      "lessons": [
        {
          "heading": "Content, Padding, Border, Margin",
          "content": "Every element is a box made of four layers, from the inside out: the content itself, padding (space inside the border), the border, and margin (space outside the border, separating it from other elements)."
        },
        {
          "heading": "box-sizing: content-box vs. border-box",
          "content": "By default (content-box), width and height set only the content area's size — padding and border are added on top, making the box bigger than the width you set. box-sizing: border-box instead makes width and height include padding and border, so the box you set is the box you get. Most modern stylesheets set border-box globally."
        },
        {
          "heading": "Margin Collapsing",
          "content": "When two block elements stack vertically, the space between them is not the sum of both their margins — the larger of the two margins wins, and they 'collapse' into just that one gap."
        },
        {
          "heading": "Shorthand Properties",
          "content": "margin and padding accept 1, 2, 3, or 4 values: one value applies to all sides; two are vertical then horizontal; four go clockwise from the top (top, right, bottom, left)."
        }
      ],
      "examples": [
        {
          "title": "The four box-model layers, annotated",
          "code": "<div style=\"\n  margin: 20px;      /* outside the border */\n  border: 2px solid #333;\n  padding: 16px;     /* inside the border */\n  width: 200px;      /* the content area */\n\">\n  Content\n</div>",
          "note": ""
        },
        {
          "title": "content-box vs. border-box, compared",
          "code": "<div style=\"box-sizing: content-box; width: 200px; padding: 20px; border: 5px solid; background:#eee;\">\n  Renders 250px wide total (200 + 40 + 10)\n</div>\n<div style=\"box-sizing: border-box; width: 200px; padding: 20px; border: 5px solid; background:#eee;\">\n  Renders exactly 200px wide total\n</div>",
          "note": ""
        },
        {
          "title": "A global border-box reset",
          "code": "<style>\n  *, *::before, *::after { box-sizing: border-box; }\n</style>",
          "note": "This single rule is one of the most common lines in any modern stylesheet — it makes sizing behave predictably everywhere."
        },
        {
          "title": "margin shorthand: 1, 2, and 4 values",
          "code": "<div style=\"margin: 10px;\">All sides 10px</div>\n<div style=\"margin: 10px 20px;\">Vertical 10px, horizontal 20px</div>\n<div style=\"margin: 10px 20px 5px 0;\">Top 10, right 20, bottom 5, left 0</div>",
          "note": ""
        },
        {
          "title": "padding shorthand",
          "code": "<div style=\"padding: 8px 16px; background:#eee;\">8px top/bottom, 16px left/right</div>",
          "note": ""
        },
        {
          "title": "border shorthand",
          "code": "<div style=\"border: 2px dashed crimson; padding: 10px;\">width style color, in one declaration</div>",
          "note": ""
        },
        {
          "title": "margin: auto for horizontal centering",
          "code": "<div style=\"width: 300px; margin: 0 auto; background:#eee;\">\n  Centered inside its parent (needs a defined width)\n</div>",
          "note": ""
        },
        {
          "title": "Margin collapsing between two paragraphs",
          "code": "<p style=\"margin-bottom: 30px;\">First paragraph</p>\n<p style=\"margin-top: 10px;\">Second paragraph — the gap between them is 30px, not 40px</p>",
          "note": "The larger of the two adjoining margins (30px) wins; they don't add together."
        },
        {
          "title": "box-shadow, a common box-model companion",
          "code": "<div style=\"width:150px; padding:16px; box-shadow: 0 4px 10px rgba(0,0,0,.2); background:#fff;\">\n  A soft drop shadow\n</div>",
          "note": ""
        }
      ]
    },
    {
      "id": "css-positioning",
      "number": 33,
      "tag": "css-layout",
      "unit": 3,
      "title": "Positioning Techniques",
      "icon": "fa-solid fa-arrows-up-down-left-right",
      "summary": "static, relative, absolute, fixed, and sticky positioning, plus z-index stacking.",
      "lessons": [
        {
          "heading": "static and relative",
          "content": "position: static is the default — an element sits in normal document flow and top/left/etc. have no effect. position: relative also stays in normal flow, but now top/right/bottom/left can nudge it from where it would otherwise be, and — just as importantly — it becomes an anchor point for any absolutely positioned children."
        },
        {
          "heading": "absolute and fixed",
          "content": "position: absolute removes an element from normal flow entirely and positions it relative to its nearest ancestor that has a position other than static (falling back to the page itself if none exists). position: fixed positions relative to the viewport and stays in place even as the page scrolls."
        },
        {
          "heading": "sticky",
          "content": "position: sticky behaves like relative until the element would scroll out of view past a given offset (like top: 0), at which point it 'sticks' in place — like a fixed element, but only within its containing block."
        },
        {
          "heading": "z-index and Stacking Context",
          "content": "When positioned elements overlap, z-index (a plain number, higher on top) decides which one renders in front. z-index only has an effect on elements that have a position value other than static."
        }
      ],
      "examples": [
        {
          "title": "position: static (the default)",
          "code": "<div style=\"position: static; top: 50px;\">\n  top:50px does nothing here — static ignores offset properties.\n</div>",
          "note": ""
        },
        {
          "title": "position: relative with an offset",
          "code": "<div style=\"position: relative; top: 10px; left: 10px; background:#eee;\">\n  Nudged 10px down and right from its normal spot.\n</div>",
          "note": ""
        },
        {
          "title": "position: absolute inside a relative parent",
          "code": "<div style=\"position: relative; height: 120px; border: 1px solid #ccc;\">\n  <span style=\"position: absolute; top: 8px; right: 8px;\">Badge</span>\n</div>",
          "note": "The badge positions relative to the nearest ancestor with position:relative — not the whole page."
        },
        {
          "title": "position: fixed navbar",
          "code": "<nav style=\"position: fixed; top: 0; left: 0; width: 100%; background:#211f2e; color:white; padding:10px;\">\n  Stays pinned to the top of the viewport while scrolling.\n</nav>",
          "note": ""
        },
        {
          "title": "position: sticky section header",
          "code": "<div style=\"height: 200px; overflow-y: auto; border:1px solid #ccc;\">\n  <h3 style=\"position: sticky; top: 0; background: #f7f4ec; margin:0; padding:6px;\">Sticky Header</h3>\n  <p>Scroll inside this box — the header sticks to the top once it reaches it.</p>\n  <p style=\"height:250px;\">(tall filler content)</p>\n</div>",
          "note": ""
        },
        {
          "title": "z-index stacking two overlapping boxes",
          "code": "<div style=\"position: relative;\">\n  <div style=\"position:absolute; top:0; left:0; width:80px; height:80px; background:crimson; z-index:1;\"></div>\n  <div style=\"position:absolute; top:20px; left:20px; width:80px; height:80px; background:navy; z-index:2;\"></div>\n</div>",
          "note": "The navy box (z-index:2) renders on top of the crimson one (z-index:1)."
        },
        {
          "title": "Centering an element with absolute + transform",
          "code": "<div style=\"position: relative; height: 150px; border:1px solid #ccc;\">\n  <div style=\"position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); background:#eee; padding:10px;\">\n    Perfectly centered\n  </div>\n</div>",
          "note": "transform: translate(-50%, -50%) shifts the element back by half its own size — a classic centering trick that works without knowing the element's exact dimensions."
        },
        {
          "title": "A practical badge on a card",
          "code": "<div style=\"position: relative; width: 220px; border:1px solid #ccc; padding:12px;\">\n  <span style=\"position:absolute; top:-8px; right:-8px; background:crimson; color:white; border-radius:999px; padding:2px 8px; font-size:11px;\">New</span>\n  <p>Product name</p>\n</div>",
          "note": ""
        },
        {
          "title": "A stacking-context gotcha",
          "code": "<div style=\"position: relative; z-index: 1;\">\n  <div style=\"position: absolute; z-index: 999;\">Trapped — can't escape above siblings of its parent's stacking context.</div>\n</div>\n<div style=\"position: relative; z-index: 2;\">This sits above the whole block above, regardless of the 999.</div>",
          "note": "A high z-index only wins within its own stacking context — it can't out-rank an ancestor's stacking context from the outside."
        }
      ]
    },
    {
      "id": "css-flexbox",
      "number": 34,
      "tag": "css-layout",
      "unit": 3,
      "title": "Flexbox Layout",
      "icon": "fa-solid fa-arrows-left-right",
      "summary": "One-dimensional layout: flex containers and items, axis alignment, and growing/shrinking/wrapping.",
      "lessons": [
        {
          "heading": "Flex Container and Flex Items",
          "content": "Setting display: flex on an element turns it into a flex container, and every one of its direct children automatically becomes a flex item, arranged along a main axis (row by default, or column with flex-direction: column)."
        },
        {
          "heading": "Main Axis Alignment: justify-content",
          "content": "justify-content controls how flex items are spaced along the main axis: flex-start, flex-end, center, space-between (edges flush, gaps between), space-around (equal space around each item), and space-evenly (perfectly equal gaps everywhere)."
        },
        {
          "heading": "Cross Axis Alignment: align-items and align-self",
          "content": "align-items controls how items align along the cross axis (perpendicular to the main axis) — stretch (default), flex-start, flex-end, or center. align-self overrides that alignment for just one individual item."
        },
        {
          "heading": "Growing, Shrinking, and Wrapping",
          "content": "flex-grow lets an item expand to absorb extra space; flex-shrink lets it shrink when space is tight; flex-basis sets its starting size — combined in the flex shorthand. flex-wrap: wrap lets items flow onto multiple lines instead of squeezing onto one; gap adds space between items without needing margins."
        }
      ],
      "examples": [
        {
          "title": "display: flex turns children into flex items",
          "code": "<div style=\"display: flex; background:#eee;\">\n  <div style=\"padding:10px; background:#fff; margin:4px;\">One</div>\n  <div style=\"padding:10px; background:#fff; margin:4px;\">Two</div>\n  <div style=\"padding:10px; background:#fff; margin:4px;\">Three</div>\n</div>",
          "note": "The three divs now sit in a row automatically, instead of stacking as blocks."
        },
        {
          "title": "flex-direction: row vs. column",
          "code": "<div style=\"display:flex; flex-direction: column; gap:8px;\">\n  <div style=\"background:#eee; padding:8px;\">A</div>\n  <div style=\"background:#eee; padding:8px;\">B</div>\n</div>",
          "note": ""
        },
        {
          "title": "justify-content values, compared",
          "code": "<div style=\"display:flex; justify-content: space-between; background:#eee;\">\n  <div style=\"padding:10px; background:#fff;\">Left</div>\n  <div style=\"padding:10px; background:#fff;\">Right</div>\n</div>",
          "note": "space-between pushes the first item to the start and the last to the end, distributing any remaining space between them."
        },
        {
          "title": "align-items values, compared",
          "code": "<div style=\"display:flex; align-items: center; height:100px; background:#eee;\">\n  <div style=\"padding:10px; background:#fff;\">Vertically centered</div>\n</div>",
          "note": ""
        },
        {
          "title": "align-self overriding one item",
          "code": "<div style=\"display:flex; align-items: flex-start; height:100px; background:#eee;\">\n  <div style=\"padding:10px; background:#fff;\">Top</div>\n  <div style=\"padding:10px; background:#fff; align-self:flex-end;\">Bottom — overridden</div>\n</div>",
          "note": ""
        },
        {
          "title": "flex-wrap wrapping onto multiple lines",
          "code": "<div style=\"display:flex; flex-wrap: wrap; gap:8px; width:220px;\">\n  <div style=\"padding:10px; background:#eee;\">One</div>\n  <div style=\"padding:10px; background:#eee;\">Two</div>\n  <div style=\"padding:10px; background:#eee;\">Three</div>\n  <div style=\"padding:10px; background:#eee;\">Four</div>\n</div>",
          "note": "Without flex-wrap, all four items would squeeze onto one line instead of flowing onto a second."
        },
        {
          "title": "gap between flex items",
          "code": "<div style=\"display:flex; gap:16px;\">\n  <div style=\"padding:10px; background:#eee;\">A</div>\n  <div style=\"padding:10px; background:#eee;\">B</div>\n</div>",
          "note": "gap is a cleaner alternative to adding margins to every item individually."
        },
        {
          "title": "flex-grow distributing extra space",
          "code": "<div style=\"display:flex; width:300px; background:#eee;\">\n  <div style=\"flex-grow:1; background:#fff; padding:8px;\">Grows 1x</div>\n  <div style=\"flex-grow:2; background:#fff; padding:8px;\">Grows 2x</div>\n</div>",
          "note": "The second item absorbs twice as much of the leftover space as the first."
        },
        {
          "title": "The flex shorthand",
          "code": "<div style=\"display:flex;\">\n  <div style=\"flex: 1 1 200px; background:#eee; padding:8px;\">grow shrink basis</div>\n</div>",
          "note": "flex: 1 1 200px means: grow=1, shrink=1, basis=200px — a common 'flexible but starts at 200px' pattern."
        },
        {
          "title": "A flexbox navbar",
          "code": "<nav style=\"display:flex; justify-content:space-between; align-items:center; padding:12px; background:#211f2e; color:white;\">\n  <span>Logo</span>\n  <div style=\"display:flex; gap:16px;\">\n    <a href=\"#\" style=\"color:white;\">Home</a>\n    <a href=\"#\" style=\"color:white;\">About</a>\n  </div>\n</nav>",
          "note": ""
        }
      ]
    },
    {
      "id": "css-grid",
      "number": 35,
      "tag": "css-layout",
      "unit": 3,
      "title": "CSS Grid Layout",
      "icon": "fa-solid fa-table-cells",
      "summary": "Two-dimensional layout: grid tracks, placing and spanning items, named areas, and responsive grids.",
      "lessons": [
        {
          "heading": "Grid Container and Tracks",
          "content": "display: grid turns an element into a grid container. grid-template-columns and grid-template-rows define the size of each column and row 'track' — using any mix of px, %, or the flexible fr unit, which divides remaining space proportionally."
        },
        {
          "heading": "Placing Items: grid-column and grid-row",
          "content": "By default, items fill the grid in source order, one per cell. grid-column and grid-row can place an item explicitly, and span lets one item stretch across multiple tracks — e.g. grid-column: span 2."
        },
        {
          "heading": "Gaps and Alignment",
          "content": "gap (or row-gap/column-gap individually) adds space between tracks. justify-items/align-items align content within each cell; justify-content/align-content align the grid's tracks as a whole within the container, which matters when the tracks don't fill all the available space."
        },
        {
          "heading": "Named Areas and Responsive Grids",
          "content": "grid-template-areas lets you sketch a layout in the CSS itself using named regions, which items then claim with grid-area. Combining repeat() with minmax() and auto-fit builds a grid that reflows its own column count as the container resizes, with no media query needed."
        }
      ],
      "examples": [
        {
          "title": "display: grid with grid-template-columns",
          "code": "<div style=\"display:grid; grid-template-columns: 100px 100px 100px; gap:8px;\">\n  <div style=\"background:#eee; padding:8px;\">1</div>\n  <div style=\"background:#eee; padding:8px;\">2</div>\n  <div style=\"background:#eee; padding:8px;\">3</div>\n</div>",
          "note": ""
        },
        {
          "title": "fr units for flexible tracks",
          "code": "<div style=\"display:grid; grid-template-columns: 2fr 1fr; gap:8px;\">\n  <div style=\"background:#eee; padding:8px;\">Takes 2 parts</div>\n  <div style=\"background:#eee; padding:8px;\">Takes 1 part</div>\n</div>",
          "note": "fr divides the container's remaining space proportionally — 2fr is always twice as wide as 1fr here."
        },
        {
          "title": "Spanning an item across columns",
          "code": "<div style=\"display:grid; grid-template-columns: repeat(3, 1fr); gap:8px;\">\n  <div style=\"grid-column: span 2; background:#eee; padding:8px;\">Spans 2 columns</div>\n  <div style=\"background:#eee; padding:8px;\">Normal</div>\n</div>",
          "note": ""
        },
        {
          "title": "gap property",
          "code": "<div style=\"display:grid; grid-template-columns: repeat(2, 1fr); gap: 20px;\">\n  <div style=\"background:#eee; padding:8px;\">A</div>\n  <div style=\"background:#eee; padding:8px;\">B</div>\n</div>",
          "note": ""
        },
        {
          "title": "grid-template-areas named layout",
          "code": "<div style=\"display:grid; grid-template-columns: 1fr 3fr; grid-template-areas: 'sidebar main';\">\n  <div style=\"grid-area: sidebar; background:#eee; padding:8px;\">Sidebar</div>\n  <div style=\"grid-area: main; background:#fff; padding:8px;\">Main</div>\n</div>",
          "note": ""
        },
        {
          "title": "repeat() shorthand",
          "code": "<div style=\"display:grid; grid-template-columns: repeat(4, 1fr); gap:8px;\">\n  <div style=\"background:#eee;\">1</div><div style=\"background:#eee;\">2</div>\n  <div style=\"background:#eee;\">3</div><div style=\"background:#eee;\">4</div>\n</div>",
          "note": "repeat(4, 1fr) is shorthand for typing 1fr 1fr 1fr 1fr."
        },
        {
          "title": "minmax() with auto-fit — a responsive card grid",
          "code": "<div style=\"display:grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap:8px;\">\n  <div style=\"background:#eee; padding:8px;\">Card</div>\n  <div style=\"background:#eee; padding:8px;\">Card</div>\n  <div style=\"background:#eee; padding:8px;\">Card</div>\n</div>",
          "note": "The number of columns adjusts automatically as the container resizes — no media query needed."
        },
        {
          "title": "A full page layout with named areas",
          "code": "<div style=\"display:grid; grid-template-columns: 200px 1fr; grid-template-rows: auto 1fr auto;\n  grid-template-areas: 'header header' 'sidebar main' 'footer footer'; min-height:250px; gap:8px;\">\n  <header style=\"grid-area:header; background:#211f2e; color:white; padding:8px;\">Header</header>\n  <aside style=\"grid-area:sidebar; background:#eee; padding:8px;\">Sidebar</aside>\n  <main style=\"grid-area:main; background:#fff; padding:8px;\">Main</main>\n  <footer style=\"grid-area:footer; background:#211f2e; color:white; padding:8px;\">Footer</footer>\n</div>",
          "note": ""
        },
        {
          "title": "justify-content vs. justify-items",
          "code": "<!-- justify-items: aligns content WITHIN each cell -->\n<div style=\"display:grid; grid-template-columns: repeat(3,60px); justify-items:center;\">\n  <div style=\"background:#eee;\">A</div>\n</div>\n\n<!-- justify-content: aligns the whole set of tracks within the container -->\n<div style=\"display:grid; grid-template-columns: repeat(3,60px); justify-content:center; width:400px;\">\n  <div style=\"background:#eee;\">A</div>\n</div>",
          "note": ""
        },
        {
          "title": "Grid vs. Flexbox — when to reach for which",
          "code": "<!-- Flexbox: one dimension — a row of nav links -->\n<nav style=\"display:flex; gap:12px;\">...</nav>\n\n<!-- Grid: two dimensions — a whole page skeleton -->\n<div style=\"display:grid; grid-template-columns: 200px 1fr; grid-template-rows: auto 1fr;\">...</div>",
          "note": "Rule of thumb: reach for Flexbox for a single row or column of items, and Grid when you need to control rows AND columns together."
        }
      ]
    },
    {
      "id": "css-pseudo-classes",
      "number": 36,
      "tag": "css-selectors",
      "unit": 3,
      "title": "Pseudo Classes",
      "icon": "fa-solid fa-hand-pointer",
      "summary": "Interaction states, structural position selectors, form state, and negation.",
      "lessons": [
        {
          "heading": "Interaction States",
          "content": ":hover matches an element while the pointer is over it, :focus while it has keyboard focus, and :active while it's being clicked/pressed — these respond to what the user is doing right now, with no JavaScript required."
        },
        {
          "heading": "Structural Pseudo-classes",
          "content": ":first-child and :last-child match an element based on its position among its siblings. :nth-child(2), :nth-child(odd), or :nth-child(3n) match by position or a repeating pattern — commonly used for zebra-striping table rows. :only-child matches an element that has no sibling elements at all."
        },
        {
          "heading": "Form State Pseudo-classes",
          "content": ":checked matches a checked checkbox or radio, :disabled matches a disabled control, :required matches a field with the required attribute, and :valid/:invalid reflect the field's current constraint-validation state."
        },
        {
          "heading": "Negation and Combining",
          "content": ":not(selector) matches anything that does NOT match the given selector — useful for excluding one case from an otherwise broad rule. Pseudo-classes can be chained together on one selector, like a:hover:not(.disabled)."
        }
      ],
      "examples": [
        {
          "title": ":hover on a link or button",
          "code": "<style>\n  button:hover { background: #211f2e; color: white; }\n</style>\n<button>Hover over me</button>",
          "note": ""
        },
        {
          "title": ":focus-visible on an input",
          "code": "<style>\n  input:focus-visible { outline: 3px solid #2563eb; outline-offset: 2px; }\n</style>\n<input type=\"text\" placeholder=\"Tab to me\">",
          "note": ":focus-visible only shows the outline for keyboard focus, not every mouse click, in browsers that support it."
        },
        {
          "title": ":nth-child(odd) for zebra-striped rows",
          "code": "<style>\n  tr:nth-child(odd) { background: #f7f4ec; }\n</style>\n<table>\n  <tr><td>Row 1</td></tr>\n  <tr><td>Row 2</td></tr>\n  <tr><td>Row 3</td></tr>\n</table>",
          "note": ""
        },
        {
          "title": ":first-child and :last-child",
          "code": "<style>\n  li:first-child { font-weight: bold; }\n  li:last-child { color: crimson; }\n</style>\n<ul><li>First</li><li>Middle</li><li>Last</li></ul>",
          "note": ""
        },
        {
          "title": ":checked styling a label",
          "code": "<style>\n  input:checked + span { color: green; font-weight: bold; }\n</style>\n<label><input type=\"checkbox\"> <span>Check me</span></label>",
          "note": "This combines :checked with the adjacent-sibling combinator to style the text next to a checked box."
        },
        {
          "title": ":disabled dimming a button",
          "code": "<style>\n  button:disabled { opacity: 0.5; cursor: not-allowed; }\n</style>\n<button disabled>Can't click this</button>",
          "note": ""
        },
        {
          "title": ":required marking mandatory fields",
          "code": "<style>\n  input:required { border-left: 3px solid crimson; }\n</style>\n<input type=\"text\" required placeholder=\"Required field\">",
          "note": ""
        },
        {
          "title": ":not() excluding an element",
          "code": "<style>\n  li:not(.skip) { color: navy; }\n</style>\n<ul>\n  <li>Styled navy</li>\n  <li class=\"skip\">Excluded from the rule</li>\n</ul>",
          "note": ""
        },
        {
          "title": "Combining :hover with :not(:disabled)",
          "code": "<style>\n  button:not(:disabled):hover { background: #211f2e; color: white; }\n</style>\n<button>Hover works</button>\n<button disabled>Hover has no effect</button>",
          "note": "Chaining pseudo-classes prevents a hover effect from applying to a button that's disabled."
        }
      ]
    },
    {
      "id": "css-pseudo-elements",
      "number": 37,
      "tag": "css-selectors",
      "unit": 3,
      "title": "Pseudo Elements",
      "icon": "fa-solid fa-paintbrush",
      "summary": "Styling and inserting content into parts of an element that have no HTML node of their own.",
      "lessons": [
        {
          "heading": "What a Pseudo-element Is",
          "content": "A pseudo-element targets a sub-part of an element that doesn't exist as its own tag in the HTML — like the first letter of a paragraph, or content inserted purely by CSS. Pseudo-elements are written with a double colon (::) to distinguish them from pseudo-classes (:), though older code sometimes uses a single colon for compatibility."
        },
        {
          "heading": "::before and ::after",
          "content": "::before and ::after insert generated content immediately before or after an element's actual content, driven by the required content property — even content: \"\" (empty) is valid, often used just to create a styleable decorative box."
        },
        {
          "heading": "::first-line and ::first-letter",
          "content": "::first-line styles only the first rendered line of a text block (which can change with the viewport width). ::first-letter styles just the first character — the classic way to build a decorative drop-cap."
        },
        {
          "heading": "::placeholder and ::selection",
          "content": "::placeholder styles an input's placeholder text specifically, separate from the text the user actually types. ::selection styles text while the user has it highlighted/selected."
        }
      ],
      "examples": [
        {
          "title": "::before inserting an icon-like label",
          "code": "<style>\n  .warning::before { content: \"⚠ \"; }\n</style>\n<p class=\"warning\">This action can't be undone.</p>",
          "note": ""
        },
        {
          "title": "::after inserting decorative content",
          "code": "<style>\n  .external::after { content: \" ↗\"; }\n</style>\n<a href=\"#\" class=\"external\">Visit site</a>",
          "note": ""
        },
        {
          "title": "A visual-only divider with ::before",
          "code": "<style>\n  .divider::before {\n    content: \"\";\n    display: block;\n    height: 2px;\n    background: #ccc;\n    margin: 16px 0;\n  }\n</style>\n<div class=\"divider\"></div>",
          "note": "content: \"\" is required even when there's no text — the pseudo-element wouldn't render at all without it."
        },
        {
          "title": "::first-letter drop-cap",
          "code": "<style>\n  p::first-letter { font-size: 2.5em; font-weight: bold; float: left; margin-right: 4px; }\n</style>\n<p>Once upon a time, in a small café...</p>",
          "note": ""
        },
        {
          "title": "::first-line styling",
          "code": "<style>\n  p::first-line { font-weight: bold; color: #211f2e; }\n</style>\n<p>This first line renders bold, no matter how the text wraps as the container resizes.</p>",
          "note": ""
        },
        {
          "title": "::placeholder styling",
          "code": "<style>\n  input::placeholder { color: #aaa; font-style: italic; }\n</style>\n<input type=\"text\" placeholder=\"Search…\">",
          "note": ""
        },
        {
          "title": "::selection styling",
          "code": "<style>\n  ::selection { background: #c4406b; color: white; }\n</style>\n<p>Select this text to see the custom highlight color.</p>",
          "note": ""
        },
        {
          "title": "A tooltip built with ::after and attr()",
          "code": "<style>\n  .tooltip { position: relative; }\n  .tooltip::after {\n    content: attr(data-tip);\n    position: absolute; bottom: 100%; left: 0;\n    background: #211f2e; color: white; padding: 4px 8px; border-radius: 4px;\n    font-size: 12px; white-space: nowrap; display: none;\n  }\n  .tooltip:hover::after { display: block; }\n</style>\n<span class=\"tooltip\" data-tip=\"I'm a tooltip!\">Hover me</span>",
          "note": "attr(data-tip) reads the value straight from the HTML's data-tip attribute into the generated content."
        },
        {
          "title": "Numbered list items with ::before and counters",
          "code": "<style>\n  ol.custom { list-style: none; counter-reset: step; }\n  ol.custom li { counter-increment: step; }\n  ol.custom li::before { content: \"Step \" counter(step) \": \"; font-weight: bold; }\n</style>\n<ol class=\"custom\">\n  <li>Preheat the oven</li>\n  <li>Mix the batter</li>\n</ol>",
          "note": "A brief look at CSS counters — a more flexible alternative to the browser's built-in numbering."
        }
      ]
    },
    {
      "id": "css-attribute-selectors",
      "number": 38,
      "tag": "css-selectors",
      "unit": 3,
      "title": "Attribute Selectors",
      "icon": "fa-solid fa-at",
      "summary": "Selecting elements by the presence, exact value, or partial match of an HTML attribute.",
      "lessons": [
        {
          "heading": "Presence and Exact Value",
          "content": "[attr] matches any element that has that attribute at all, regardless of its value. [attr=\"value\"] matches only when the attribute's value is exactly that string."
        },
        {
          "heading": "Partial Matches",
          "content": "[attr~=\"value\"] matches a value appearing as a whole word in a space-separated list. [attr^=\"value\"] matches values starting with that string, [attr$=\"value\"] matches values ending with it, and [attr*=\"value\"] matches values containing it anywhere."
        },
        {
          "heading": "Case Sensitivity",
          "content": "Adding a space and the letter i just before the closing bracket, like [attr=\"value\" i], makes the value comparison case-insensitive."
        },
        {
          "heading": "Practical Uses",
          "content": "Attribute selectors let you style elements based on data already in the markup — like an input's type, or a link's href pattern — without adding extra classes just for styling hooks."
        }
      ],
      "examples": [
        {
          "title": "[attr] — presence selector",
          "code": "<style>\n  [title] { border-bottom: 1px dotted #999; cursor: help; }\n</style>\n<span title=\"More info here\">Hover for a tooltip</span>",
          "note": ""
        },
        {
          "title": "[attr=\"value\"] — exact match",
          "code": "<style>\n  [data-status=\"active\"] { color: green; }\n</style>\n<span data-status=\"active\">Active</span>",
          "note": ""
        },
        {
          "title": "[href^=\"https\"] — starts with",
          "code": "<style>\n  a[href^=\"https\"]::after { content: \" 🔒\"; }\n</style>\n<a href=\"https://example.com\">Secure link</a>",
          "note": "A common pattern for flagging secure or external links purely through CSS."
        },
        {
          "title": "[href$=\".pdf\"] — ends with",
          "code": "<style>\n  a[href$=\".pdf\"]::after { content: \" (PDF)\"; font-size: 0.85em; color: #666; }\n</style>\n<a href=\"report.pdf\">Annual report</a>",
          "note": ""
        },
        {
          "title": "[class*=\"btn\"] — contains",
          "code": "<style>\n  [class*=\"btn\"] { padding: 8px 16px; border-radius: 6px; }\n</style>\n<button class=\"btn-primary\">Matched</button>",
          "note": "Matches any class containing \"btn\" anywhere, like btn-primary or my-btn-large."
        },
        {
          "title": "[lang=\"fr\"] — language-based styling",
          "code": "<style>\n  [lang=\"fr\"] { font-style: italic; }\n</style>\n<span lang=\"fr\">Bonjour le monde</span>",
          "note": ""
        },
        {
          "title": "input[type=\"checkbox\"] — styling by type, no class needed",
          "code": "<style>\n  input[type=\"checkbox\"] { width: 18px; height: 18px; }\n</style>\n<input type=\"checkbox\">",
          "note": ""
        },
        {
          "title": "[target=\"_blank\"] — flagging new-tab links",
          "code": "<style>\n  a[target=\"_blank\"]::after { content: \" ↗\"; }\n</style>\n<a href=\"#\" target=\"_blank\">Opens in a new tab</a>",
          "note": ""
        },
        {
          "title": "Case-insensitive attribute match with the i flag",
          "code": "<style>\n  [data-type=\"warning\" i] { color: orange; }\n</style>\n<span data-type=\"Warning\">Matches despite the capital W</span>",
          "note": ""
        }
      ]
    },
    {
      "id": "css-form-styling",
      "number": 39,
      "tag": "forms",
      "unit": 3,
      "title": "Form Styling",
      "icon": "fa-solid fa-pen-ruler",
      "summary": "Styling inputs, buttons, and selects, and pairing validation state with clear visual feedback.",
      "lessons": [
        {
          "heading": "Styling Text Inputs and Textareas",
          "content": "border, padding, and border-radius reshape a field's basic appearance; changing border-color (or adding a box-shadow) on :focus gives clear feedback about which field is currently active."
        },
        {
          "heading": "Custom Buttons",
          "content": "appearance: none strips a control's native OS-drawn appearance as a clean base, after which background, border, padding, and border-radius can build a fully custom look."
        },
        {
          "heading": "Styling Selects and Checkboxes",
          "content": "A <code>&lt;select&gt;</code>'s border, padding, and background are straightforward to restyle. Its native dropdown arrow, and native checkbox/radio glyphs, are notoriously inconsistent to restyle across browsers — many teams either accept the native look for these specific pieces or replace them with a custom-built widget entirely."
        },
        {
          "heading": "Validation State Styling",
          "content": "Pairing the :valid, :invalid, and :focus pseudo-classes with color changes (and a short transition) gives the user immediate, low-friction feedback as they fill out a form, before they even reach the submit button."
        }
      ],
      "examples": [
        {
          "title": "Styling a text input's border and padding",
          "code": "<style>\n  input[type=\"text\"] {\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    padding: 8px 12px;\n    font-size: 14px;\n  }\n</style>\n<input type=\"text\" placeholder=\"Your name\">",
          "note": ""
        },
        {
          "title": ":focus state styling",
          "code": "<style>\n  input:focus {\n    border-color: #2563eb;\n    box-shadow: 0 0 0 3px rgba(37,99,235,0.2);\n    outline: none;\n  }\n</style>\n<input type=\"text\" placeholder=\"Click me\">",
          "note": "Removing the default outline is only acceptable because it's replaced here with an equally visible focus style."
        },
        {
          "title": "A custom-styled submit button",
          "code": "<style>\n  .btn {\n    background: #c4406b; color: white; border: none;\n    padding: 10px 20px; border-radius: 8px; font-weight: 600;\n  }\n  .btn:hover { background: #a8355a; }\n</style>\n<button class=\"btn\" type=\"submit\">Submit</button>",
          "note": ""
        },
        {
          "title": "appearance: none as a reset base",
          "code": "<style>\n  select {\n    appearance: none;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    padding: 8px 12px;\n    background: #fff;\n  }\n</style>\n<select><option>Choice A</option></select>",
          "note": "This removes the OS-native styling; a common follow-up is adding a custom-drawn dropdown arrow with a background-image."
        },
        {
          "title": "Styling a select's border and padding",
          "code": "<style>\n  select { border: 1px solid #ccc; border-radius: 6px; padding: 8px; }\n</style>\n<select><option>Small</option><option>Medium</option></select>",
          "note": ""
        },
        {
          "title": "A styled checkbox using :checked and a sibling selector",
          "code": "<style>\n  .toggle input { display: none; }\n  .toggle span { border: 2px solid #ccc; border-radius: 4px; padding: 4px 10px; display:inline-block; }\n  .toggle input:checked + span { background: #c4406b; color: white; border-color: #c4406b; }\n</style>\n<label class=\"toggle\"><input type=\"checkbox\"><span>Toggle me</span></label>",
          "note": "Hiding the native checkbox and styling a sibling element is a common way to build a fully custom toggle."
        },
        {
          "title": ":invalid and :valid border coloring",
          "code": "<style>\n  input:invalid { border-color: #d9534f; }\n  input:valid { border-color: #3c9a5f; }\n</style>\n<input type=\"email\" required placeholder=\"you@example.com\">",
          "note": ""
        },
        {
          "title": "Disabled input styling",
          "code": "<style>\n  input:disabled { background: #f0f0f0; color: #999; cursor: not-allowed; }\n</style>\n<input type=\"text\" value=\"Can't edit\" disabled>",
          "note": ""
        },
        {
          "title": "A complete styled form",
          "code": "<style>\n  form { display:flex; flex-direction:column; gap:12px; max-width:280px; }\n  form input { border:1px solid #ccc; border-radius:6px; padding:8px 12px; }\n  form input:focus { border-color:#2563eb; outline:none; }\n  form button { background:#211f2e; color:white; border:none; border-radius:6px; padding:10px; }\n</style>\n<form>\n  <input type=\"text\" placeholder=\"Name\">\n  <input type=\"email\" placeholder=\"Email\">\n  <button type=\"submit\">Send</button>\n</form>",
          "note": ""
        }
      ]
    },
    {
      "id": "css-variables",
      "number": 40,
      "tag": "css-basics",
      "unit": 3,
      "title": "CSS Variables",
      "icon": "fa-solid fa-code-branch",
      "summary": "Custom properties: declaring, scoping, providing fallbacks, and using them for live, runtime-editable theming.",
      "lessons": [
        {
          "heading": "Declaring and Using Custom Properties",
          "content": "A custom property is declared with two leading dashes, like --main-color: #c4406b;, usually on :root for page-wide scope. It's read anywhere with var(--main-color)."
        },
        {
          "heading": "Scope",
          "content": "A custom property is available to the element it's declared on and every one of its descendants. Redeclaring the same variable name on a nested element overrides it locally, without affecting the rest of the page."
        },
        {
          "heading": "Fallback Values",
          "content": "var(--name, fallback) supplies a fallback value to use if --name hasn't been defined (or was defined with an invalid value) — handy for components meant to be dropped into pages that might not define every variable."
        },
        {
          "heading": "Why Custom Properties Beat Preprocessor Variables Here",
          "content": "A Sass or Less variable is replaced with its value at build time and is fixed forever after that. A CSS custom property is live in the browser — it can be changed at runtime with JavaScript, or redefined inside a media query, letting one line of change (like flipping a theme) cascade through everywhere it's used."
        }
      ],
      "examples": [
        {
          "title": "Declaring variables on :root",
          "code": "<style>\n  :root {\n    --brand-color: #c4406b;\n    --spacing: 16px;\n  }\n</style>",
          "note": ":root has the highest specificity typically used for global variables, making them available everywhere on the page."
        },
        {
          "title": "Using var() in multiple declarations",
          "code": "<style>\n  :root { --brand-color: #c4406b; }\n  h1 { color: var(--brand-color); }\n  .btn { background: var(--brand-color); }\n</style>",
          "note": "Both rules pull from the same single source of truth."
        },
        {
          "title": "A fallback value with var()",
          "code": "<style>\n  .card { padding: var(--card-padding, 12px); }\n</style>\n<div class=\"card\">Uses 12px since --card-padding isn't defined anywhere.</div>",
          "note": ""
        },
        {
          "title": "Overriding a variable in a nested scope",
          "code": "<style>\n  :root { --text-color: black; }\n  .dark-panel { --text-color: white; background: #211f2e; }\n  p { color: var(--text-color); }\n</style>\n<div class=\"dark-panel\"><p>White text, only inside this panel</p></div>\n<p>Black text, everywhere else</p>",
          "note": ""
        },
        {
          "title": "A variable-driven color theme",
          "code": "<style>\n  :root { --brand: #c4406b; }\n  h2 { color: var(--brand); }\n  .btn { background: var(--brand); color: white; }\n  .badge { border: 1px solid var(--brand); }\n</style>\n<!-- Change just --brand once, and all three update together -->",
          "note": ""
        },
        {
          "title": "Variables combined with calc()",
          "code": "<style>\n  :root { --gap: 8px; }\n  .stack > * + * { margin-top: calc(var(--gap) * 2); }\n</style>",
          "note": ""
        },
        {
          "title": "Redefining a variable inside a media query",
          "code": "<style>\n  :root { --bg: white; --text: black; }\n  @media (prefers-color-scheme: dark) {\n    :root { --bg: #1a1a1a; --text: #f0f0f0; }\n  }\n  body { background: var(--bg); color: var(--text); }\n</style>",
          "note": "A dark-mode switch driven entirely by redefining two variables, rather than duplicating every rule."
        },
        {
          "title": "Component-scoped variables",
          "code": "<style>\n  .card { --card-gap: 12px; padding: var(--card-gap); }\n  .card.compact { --card-gap: 6px; }\n</style>\n<div class=\"card compact\">Tighter padding, same rule</div>",
          "note": ""
        },
        {
          "title": "Hardcoded values vs. variables, compared",
          "code": "<!-- Hardcoded: change the color in 3 different places -->\n<style>\n  h2 { color: #c4406b; }\n  .btn { background: #c4406b; }\n</style>\n\n<!-- Variable: change it in exactly 1 place -->\n<style>\n  :root { --brand: #c4406b; }\n  h2 { color: var(--brand); }\n  .btn { background: var(--brand); }\n</style>",
          "note": ""
        }
      ]
    },
    {
      "id": "css-responsive",
      "number": 41,
      "tag": "css-layout",
      "unit": 3,
      "title": "Responsive Web Design",
      "icon": "fa-solid fa-tablet-screen-button",
      "summary": "Breakpoint strategy, responsive media, dark mode and print media features, and container queries.",
      "lessons": [
        {
          "heading": "Media Query Breakpoints in Practice",
          "content": "A mobile-first approach uses min-width media queries to layer on complexity as the screen grows; a desktop-first approach uses max-width to strip complexity away for smaller screens. Mixing both styles inconsistently in the same project is a common source of confusing, hard-to-maintain CSS — pick one convention and stick to it."
        },
        {
          "heading": "Responsive Media",
          "content": "object-fit: cover scales an image or video to fill its box without distorting its aspect ratio, cropping whatever doesn't fit — much like a CSS background-size:cover, but for a real <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code> element. aspect-ratio reserves the right amount of space for media before it even finishes loading, preventing layout jumps."
        },
        {
          "heading": "Other Useful Media Features",
          "content": "prefers-color-scheme: dark matches when the user's OS is set to a dark theme. orientation: landscape/portrait matches the device's current rotation. A @media print block defines styles that only apply when a page is actually printed."
        },
        {
          "heading": "Container Queries",
          "content": "A newer alternative to viewport-based media queries: with container-type set on a wrapper, a @container query lets a component respond to the size of its own container, not the whole browser window — useful for a component that might be dropped into a wide main column or a narrow sidebar."
        }
      ],
      "examples": [
        {
          "title": "A mobile-first min-width breakpoint",
          "code": "<style>\n  .box { font-size: 14px; }\n  @media (min-width: 768px) {\n    .box { font-size: 18px; }\n  }\n</style>",
          "note": "Base styles target the smallest screens; the media query only adds complexity once there's room."
        },
        {
          "title": "A desktop-first max-width breakpoint",
          "code": "<style>\n  .box { font-size: 18px; }\n  @media (max-width: 767px) {\n    .box { font-size: 14px; }\n  }\n</style>",
          "note": "The opposite convention — base styles assume a large screen, then simplify downward. Pick one convention per project."
        },
        {
          "title": "object-fit: cover on an image",
          "code": "<img src=\"media/hero.jpg\" alt=\"Team photo\" style=\"width:100%; height:150px; object-fit:cover;\">",
          "note": "The image fills the box exactly, cropping as needed, instead of squishing out of proportion."
        },
        {
          "title": "aspect-ratio reserving space before content loads",
          "code": "<img src=\"media/hero.jpg\" alt=\"Team photo\" style=\"width:100%; aspect-ratio: 16/9; object-fit:cover;\">",
          "note": "The browser reserves this exact box before the image finishes downloading, preventing a layout jump."
        },
        {
          "title": "prefers-color-scheme: dark",
          "code": "<style>\n  body { background: white; color: black; }\n  @media (prefers-color-scheme: dark) {\n    body { background: #1a1a1a; color: #f0f0f0; }\n  }\n</style>",
          "note": ""
        },
        {
          "title": "orientation: landscape",
          "code": "<style>\n  .banner { height: 100px; }\n  @media (orientation: landscape) {\n    .banner { height: 60px; }\n  }\n</style>",
          "note": ""
        },
        {
          "title": "A print-only stylesheet rule",
          "code": "<style>\n  @media print {\n    nav, footer, .no-print { display: none; }\n    body { color: black; }\n  }\n</style>",
          "note": "Hides navigation and other on-screen-only elements when the page is actually printed."
        },
        {
          "title": "A @container query (a modern, newer feature)",
          "code": "<style>\n  .card-wrap { container-type: inline-size; }\n  .card { display: block; }\n  @container (min-width: 400px) {\n    .card { display: flex; gap: 12px; }\n  }\n</style>",
          "note": "Support varies by browser version — check current compatibility before relying on this for critical layout."
        },
        {
          "title": "Combining several media features together",
          "code": "<style>\n  @media (min-width: 768px) and (orientation: landscape) {\n    .grid { grid-template-columns: repeat(3, 1fr); }\n  }\n</style>",
          "note": "and chains multiple conditions that must all be true for the rule to apply."
        }
      ]
    },
    {
      "id": "css-animations",
      "number": 42,
      "tag": "css-motion",
      "unit": 3,
      "title": "CSS Animations",
      "icon": "fa-solid fa-film",
      "summary": "@keyframes, the animation shorthand, playback control, and performance-friendly properties to animate.",
      "lessons": [
        {
          "heading": "@keyframes",
          "content": "@keyframes defines a named sequence of style states at percentage checkpoints from 0% to 100% (or the from/to shorthand for just two steps). An element is then linked to that sequence with the animation-name property."
        },
        {
          "heading": "The animation Shorthand and Its Longhands",
          "content": "animation-duration sets how long one cycle takes, animation-timing-function shapes its pacing (ease, linear, cubic-bezier), animation-iteration-count sets how many times it repeats (a number, or infinite), animation-direction can alternate back and forth, and animation-fill-mode controls what the element looks like before/after the animation runs. The animation shorthand combines all of these in one declaration."
        },
        {
          "heading": "Controlling Playback",
          "content": "animation-play-state can pause and resume an animation (often toggled with :hover or JavaScript). prefers-reduced-motion is a media feature that matches when a user has requested less motion at the OS level — respecting it (usually by disabling or simplifying animations) is an accessibility best practice."
        },
        {
          "heading": "Animating Practically",
          "content": "transform and opacity animate smoothly because the browser can handle them without recalculating page layout. Animating properties like width, top, or margin forces the browser to repeatedly recompute layout, which can look janky — prefer a transform-based equivalent (like translateX instead of changing left) wherever possible."
        }
      ],
      "examples": [
        {
          "title": "A basic @keyframes fade-in",
          "code": "<style>\n  @keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n  .box { animation: fadeIn 1s ease; }\n</style>\n<div class=\"box\">Fades in on load</div>",
          "note": ""
        },
        {
          "title": "Multiple keyframe steps",
          "code": "<style>\n  @keyframes pulse {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.1); }\n    100% { transform: scale(1); }\n  }\n  .box { animation: pulse 1.5s ease infinite; }\n</style>\n<div class=\"box\">Pulses continuously</div>",
          "note": ""
        },
        {
          "title": "animation-iteration-count: infinite — a loading spinner",
          "code": "<style>\n  @keyframes spin { to { transform: rotate(360deg); } }\n  .spinner {\n    width:30px; height:30px; border:4px solid #eee; border-top-color:#c4406b;\n    border-radius:50%; animation: spin 0.8s linear infinite;\n  }\n</style>\n<div class=\"spinner\"></div>",
          "note": ""
        },
        {
          "title": "animation-direction: alternate",
          "code": "<style>\n  @keyframes slide { from { transform: translateX(0); } to { transform: translateX(40px); } }\n  .box { animation: slide 1s ease infinite alternate; }\n</style>\n<div class=\"box\" style=\"width:20px;height:20px;background:#c4406b;\"></div>",
          "note": "alternate makes the animation reverse on every other cycle, instead of always snapping back to the start."
        },
        {
          "title": "animation-fill-mode: forwards",
          "code": "<style>\n  @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }\n  .box { animation: fadeUp 0.6s ease forwards; }\n</style>\n<div class=\"box\">Stays visible after the animation ends</div>",
          "note": "Without forwards, the element would snap back to its 0% (from) styles the instant the animation finished."
        },
        {
          "title": "animation-timing-function compared",
          "code": "<style>\n  @keyframes move { to { transform: translateX(100px); } }\n  .linear { animation: move 2s linear infinite alternate; }\n  .ease { animation: move 2s ease infinite alternate; }\n</style>\n<div class=\"linear\" style=\"width:20px;height:20px;background:#333;margin-bottom:8px;\"></div>\n<div class=\"ease\" style=\"width:20px;height:20px;background:#c4406b;\"></div>",
          "note": "linear moves at a constant speed; ease starts and ends slower, which usually feels more natural."
        },
        {
          "title": "Respecting prefers-reduced-motion",
          "code": "<style>\n  .box { animation: pulse 1.5s ease infinite; }\n  @media (prefers-reduced-motion: reduce) {\n    .box { animation: none; }\n  }\n</style>",
          "note": "Turns off the animation entirely for users who've asked their OS for reduced motion."
        },
        {
          "title": "Pausing an animation on hover",
          "code": "<style>\n  .spinner { animation: spin 1s linear infinite; }\n  .spinner:hover { animation-play-state: paused; }\n  @keyframes spin { to { transform: rotate(360deg); } }\n</style>\n<div class=\"spinner\" style=\"width:24px;height:24px;border:3px solid #ccc;border-top-color:#333;border-radius:50%;\"></div>",
          "note": ""
        },
        {
          "title": "Animating transform instead of top/left",
          "code": "<!-- Prefer: animates smoothly, no layout recalculation -->\n<style>\n  @keyframes moveGood { to { transform: translateX(50px); } }\n</style>\n\n<!-- Avoid for animation: forces layout recalculation every frame -->\n<style>\n  @keyframes moveBad { to { left: 50px; } }\n</style>",
          "note": "Both can produce the same visual result, but the transform version is far cheaper for the browser to render smoothly."
        }
      ]
    },
    {
      "id": "css-transitions",
      "number": 43,
      "tag": "css-motion",
      "unit": 3,
      "title": "CSS Transitions",
      "icon": "fa-solid fa-wand-magic-sparkles",
      "summary": "Smoothly animating between two states in response to a trigger like :hover or a class change.",
      "lessons": [
        {
          "heading": "The transition Property",
          "content": "transition-property names which property to animate, transition-duration sets how long, transition-timing-function shapes the pacing, and transition-delay waits before starting. The transition shorthand combines all four: transition: background-color 0.3s ease 0s;"
        },
        {
          "heading": "Transitions vs. Animations",
          "content": "A transition needs a state change to trigger it — like :hover, :focus, or a class being toggled by JavaScript — and only moves from one state (A) to another (B). A @keyframes animation can run automatically on its own, looping through as many steps as you define, with no trigger required."
        },
        {
          "heading": "Transitioning Multiple Properties",
          "content": "Comma-separate several transition-property values (each can have its own duration/timing), or use the all keyword to transition every animatable property that changes — though all can be a performance and predictability trade-off, since it transitions properties you might not have intended."
        },
        {
          "heading": "Common Transition Patterns",
          "content": "A button that shifts color and lifts slightly on hover, a dropdown or accordion whose max-height transitions open and closed, and an image that scales up slightly on hover — a small set of patterns covers most real-world use of transitions."
        }
      ],
      "examples": [
        {
          "title": "A basic hover color transition",
          "code": "<style>\n  .btn { background: #211f2e; color:white; padding:10px 18px; border:none; border-radius:6px; transition: background 0.3s ease; }\n  .btn:hover { background: #c4406b; }\n</style>\n<button class=\"btn\">Hover me</button>",
          "note": ""
        },
        {
          "title": "The transition shorthand syntax",
          "code": "<style>\n  .box { transition: transform 0.4s ease-out; }\n  .box:hover { transform: scale(1.05); }\n</style>",
          "note": "property duration timing-function delay, in that order — delay can be omitted when it's zero."
        },
        {
          "title": "Transitioning multiple properties with different timings",
          "code": "<style>\n  .card {\n    transition: transform 0.3s ease, box-shadow 0.5s ease;\n  }\n  .card:hover {\n    transform: translateY(-4px);\n    box-shadow: 0 8px 16px rgba(0,0,0,0.15);\n  }\n</style>",
          "note": ""
        },
        {
          "title": "transition-timing-function compared",
          "code": "<style>\n  .linear { transition: transform 1s linear; }\n  .bounce { transition: transform 1s cubic-bezier(.68,-0.55,.27,1.55); }\n</style>",
          "note": "cubic-bezier() lets you define a fully custom pacing curve, like a slight overshoot/bounce."
        },
        {
          "title": "transition-delay",
          "code": "<style>\n  .box { transition: opacity 0.4s ease 0.2s; }\n  .box:hover { opacity: 0.5; }\n</style>",
          "note": "The change waits 0.2s after the hover starts before it begins animating."
        },
        {
          "title": "A button hover lift-and-shadow effect",
          "code": "<style>\n  .btn {\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    padding:10px 20px; border:none; border-radius:8px; background:#c4406b; color:white;\n  }\n  .btn:hover { transform: translateY(-2px); box-shadow: 0 6px 14px rgba(0,0,0,0.2); }\n</style>\n<button class=\"btn\">Hover me</button>",
          "note": ""
        },
        {
          "title": "Image zoom-on-hover with transition + transform",
          "code": "<style>\n  .thumb { overflow: hidden; width:120px; height:80px; }\n  .thumb img { width:100%; height:100%; object-fit:cover; transition: transform 0.4s ease; }\n  .thumb:hover img { transform: scale(1.15); }\n</style>\n<div class=\"thumb\"><img src=\"media/g1.jpg\" alt=\"Sunset over the bay\"></div>",
          "note": "overflow:hidden on the wrapper clips the zoomed image so it doesn't spill outside its box."
        },
        {
          "title": "A smooth accordion reveal using max-height",
          "code": "<style>\n  .panel { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }\n  .accordion:hover .panel { max-height: 100px; }\n</style>\n<div class=\"accordion\">\n  <div>Click/hover to reveal</div>\n  <div class=\"panel\"><p>Hidden content that smoothly expands into view.</p></div>\n</div>",
          "note": "Transitioning height directly doesn't work from 0 to auto — animating max-height to a large-enough fixed value is the common workaround."
        },
        {
          "title": "transition: all, and why to prefer being explicit",
          "code": "<!-- Works, but transitions everything that happens to change -->\n<style>\n  .box { transition: all 0.3s ease; }\n</style>\n\n<!-- Clearer and more predictable -->\n<style>\n  .box { transition: background-color 0.3s ease, transform 0.3s ease; }\n</style>",
          "note": "Being explicit about which properties transition avoids accidentally animating something unexpected, and can be cheaper to render."
        }
      ]
    }
  ]
};
