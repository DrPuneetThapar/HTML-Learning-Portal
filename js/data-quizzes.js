/* Quiz question bank — auto-generated from data/quizzes.json so the site works as pure static files (no fetch()/CORS needed) */
window.QUIZZES_DATA = {
  "quizzes": {
    "internet": [
      {
        "q": "Which part of a URL tells the browser which protocol to use?",
        "opts": [
          "https://",
          "www.example.com",
          "/products",
          "?id=12"
        ],
        "answer": 0,
        "explain": "The scheme (https://) tells the browser which protocol to use to talk to the server."
      },
      {
        "q": "A page generated fresh from a database on every request is called…",
        "opts": [
          "A static site",
          "A dynamic site",
          "A domain",
          "A DNS record"
        ],
        "answer": 1,
        "explain": "Dynamic sites build content at request time, often from a database."
      },
      {
        "q": "What does DNS do?",
        "opts": [
          "Encrypts traffic",
          "Maps domain names to IP addresses",
          "Compresses images",
          "Validates HTML"
        ],
        "answer": 1,
        "explain": "DNS translates human-readable domain names into numeric IP addresses."
      }
    ],
    "clientserver": [
      {
        "q": "Which HTTP status code means the resource wasn't found?",
        "opts": [
          "200",
          "301",
          "404",
          "500"
        ],
        "answer": 2,
        "explain": "404 Not Found means the server has no resource at the requested URL."
      },
      {
        "q": "What initiates the request-response cycle?",
        "opts": [
          "The server",
          "The client",
          "DNS",
          "The router"
        ],
        "answer": 1,
        "explain": "The client (browser) always sends the first request."
      },
      {
        "q": "Which HTTP method is typically used to submit form data that changes server state?",
        "opts": [
          "GET",
          "POST",
          "HEAD",
          "OPTIONS"
        ],
        "answer": 1,
        "explain": "POST is conventionally used for submitting data that creates or changes something server-side."
      }
    ],
    "html5": [
      {
        "q": "Which of these is an HTML5 semantic element?",
        "opts": [
          "<div>",
          "<span>",
          "<article>",
          "<font>"
        ],
        "answer": 2,
        "explain": "<article> describes self-contained content, a semantic addition in HTML5."
      },
      {
        "q": "What does the HTML5 DOCTYPE declaration do?",
        "opts": [
          "Loads a stylesheet",
          "Puts the browser in standards mode for HTML5",
          "Runs JavaScript",
          "Creates a table"
        ],
        "answer": 1,
        "explain": "<!DOCTYPE html> tells the browser to render using modern HTML5 rules."
      },
      {
        "q": "Which HTML5 feature removed the need for Flash in most video embeds?",
        "opts": [
          "<canvas>",
          "<video>",
          "<iframe>",
          "<embed>"
        ],
        "answer": 1,
        "explain": "The native <video> element plays media without third-party plugins."
      }
    ],
    "structure": [
      {
        "q": "Which element holds content the visitor actually sees?",
        "opts": [
          "<head>",
          "<body>",
          "<title>",
          "<meta>"
        ],
        "answer": 1,
        "explain": "<body> contains all visible page content."
      },
      {
        "q": "Where does <title> text appear?",
        "opts": [
          "Inside the page body",
          "In the browser tab and bookmarks",
          "In the footer",
          "Nowhere visible"
        ],
        "answer": 1,
        "explain": "<title> sets the text shown in the browser tab and used for bookmarks/search results."
      },
      {
        "q": "Which attribute on <html> declares the page's language?",
        "opts": [
          "lang",
          "language",
          "locale",
          "lang-code"
        ],
        "answer": 0,
        "explain": "lang='en' (etc.) declares the document language for accessibility and SEO."
      }
    ],
    "elements": [
      {
        "q": "Which attribute must be unique on the page?",
        "opts": [
          "class",
          "style",
          "id",
          "title"
        ],
        "answer": 2,
        "explain": "id identifies exactly one element; class can repeat across many elements."
      },
      {
        "q": "Which of these is an empty (void) tag?",
        "opts": [
          "<p>",
          "<div>",
          "<img>",
          "<span>"
        ],
        "answer": 2,
        "explain": "<img> has no separate closing tag — it's a void element."
      },
      {
        "q": "Which of these is a block-level element by default?",
        "opts": [
          "<span>",
          "<a>",
          "<div>",
          "<strong>"
        ],
        "answer": 2,
        "explain": "<div> starts on a new line by default, unlike inline elements like <span> or <a>."
      }
    ],
    "attributes": [
      {
        "q": "Which attribute adds a tooltip shown on hover?",
        "opts": [
          "class",
          "title",
          "id",
          "style"
        ],
        "answer": 1,
        "explain": "title text is displayed as a native tooltip on hover."
      },
      {
        "q": "What prefix identifies a custom attribute intended for scripting?",
        "opts": [
          "aria-",
          "data-",
          "custom-",
          "js-"
        ],
        "answer": 1,
        "explain": "data-* attributes are the standard way to attach custom data to an element."
      },
      {
        "q": "Which attribute disables a form control?",
        "opts": [
          "disabled",
          "readonly",
          "hidden",
          "required"
        ],
        "answer": 0,
        "explain": "disabled prevents interaction and excludes the field from form submission."
      }
    ],
    "text": [
      {
        "q": "Which tag is used for the single most important heading on a page?",
        "opts": [
          "<h6>",
          "<h1>",
          "<head>",
          "<strong>"
        ],
        "answer": 1,
        "explain": "<h1> is the top-level heading; there should usually be exactly one per page."
      },
      {
        "q": "Which tag preserves whitespace and line breaks exactly as written?",
        "opts": [
          "<blockquote>",
          "<small>",
          "<pre>",
          "<mark>"
        ],
        "answer": 2,
        "explain": "<pre> renders text in a fixed-width font and keeps spacing/line breaks intact."
      },
      {
        "q": "Which tag semantically highlights text, like a highlighter pen?",
        "opts": [
          "<em>",
          "<mark>",
          "<b>",
          "<u>"
        ],
        "answer": 1,
        "explain": "<mark> denotes text highlighted for reference or relevance."
      }
    ],
    "lists": [
      {
        "q": "Which element pairs a term with its definition?",
        "opts": [
          "<ul>",
          "<ol>",
          "<dl>",
          "<li>"
        ],
        "answer": 2,
        "explain": "<dl> uses <dt> for the term and <dd> for its definition."
      },
      {
        "q": "How do you create a sub-list inside a list item?",
        "opts": [
          "Add class='sub'",
          "Nest a <ul> or <ol> inside the <li>",
          "Use <sublist>",
          "You can't nest lists"
        ],
        "answer": 1,
        "explain": "Nesting a list element directly inside an <li> creates a sub-list."
      },
      {
        "q": "Which attribute changes what number an ordered list starts at?",
        "opts": [
          "start",
          "begin",
          "from",
          "value"
        ],
        "answer": 0,
        "explain": "start='5' makes the list begin counting at 5."
      }
    ],
    "links": [
      {
        "q": "Which href value creates an email link?",
        "opts": [
          "href='email:x@y.com'",
          "href='mailto:x@y.com'",
          "href='#email'",
          "href='mail://x@y.com'"
        ],
        "answer": 1,
        "explain": "The mailto: scheme opens the visitor's default email client."
      },
      {
        "q": "Which attribute combination safely opens an external link in a new tab?",
        "opts": [
          "target='_blank' only",
          "target='_blank' rel='noopener'",
          "download",
          "rel='nofollow' only"
        ],
        "answer": 1,
        "explain": "rel='noopener' prevents the new tab from accessing the opening page via window.opener."
      },
      {
        "q": "What does an href value starting with # link to?",
        "opts": [
          "Another domain",
          "A section on the same page",
          "An email address",
          "A downloadable file"
        ],
        "answer": 1,
        "explain": "A #fragment links to an element with a matching id on the current page."
      }
    ],
    "images": [
      {
        "q": "What does the alt attribute do?",
        "opts": [
          "Sets the image size",
          "Provides fallback/accessible text",
          "Adds a border",
          "Compresses the image"
        ],
        "answer": 1,
        "explain": "alt text is shown if the image fails to load and read aloud by screen readers."
      },
      {
        "q": "Which attribute lets the browser pick the best image for the screen size?",
        "opts": [
          "srcset",
          "sizes only",
          "alt",
          "loading"
        ],
        "answer": 0,
        "explain": "srcset lists multiple image candidates so the browser can choose the best fit."
      },
      {
        "q": "What is the purpose of loading='lazy' on an <img>?",
        "opts": [
          "Compress the file",
          "Defer loading offscreen images until needed",
          "Add a caption",
          "Change the alt text"
        ],
        "answer": 1,
        "explain": "Lazy loading defers fetching images until they're near the viewport, improving performance."
      }
    ],
    "svg": [
      {
        "q": "Why use SVG instead of a JPEG/PNG for simple shapes?",
        "opts": [
          "SVG loads slower",
          "SVG stays crisp at any size",
          "SVG can't be styled",
          "SVG is only for photos"
        ],
        "answer": 1,
        "explain": "SVG describes shapes mathematically, so it scales without pixelating."
      },
      {
        "q": "Which element draws a straight line in SVG?",
        "opts": [
          "<path>",
          "<line>",
          "<stroke>",
          "<edge>"
        ],
        "answer": 1,
        "explain": "<line x1 y1 x2 y2> draws a straight line between two points."
      },
      {
        "q": "What does the viewBox attribute control?",
        "opts": [
          "The fill color",
          "The coordinate system shapes are drawn in",
          "The file format",
          "The stroke width"
        ],
        "answer": 1,
        "explain": "viewBox defines the internal coordinate space, independent of the element's display size."
      }
    ],
    "audio": [
      {
        "q": "Which attribute shows native play/pause controls?",
        "opts": [
          "controls",
          "loop",
          "autoplay",
          "muted"
        ],
        "answer": 0,
        "explain": "controls displays the browser's built-in audio UI."
      },
      {
        "q": "Why is muted often required alongside autoplay?",
        "opts": [
          "It's not required",
          "Browsers block autoplaying sound without it",
          "It improves audio quality",
          "It's an SEO requirement"
        ],
        "answer": 1,
        "explain": "Most browsers block autoplay with sound unless the media is muted."
      },
      {
        "q": "What does the loop attribute do on <audio>?",
        "opts": [
          "Downloads the file twice",
          "Repeats playback continuously",
          "Mutes the track",
          "Shows a loading spinner"
        ],
        "answer": 1,
        "explain": "loop restarts playback automatically when the track ends."
      }
    ],
    "video": [
      {
        "q": "Which attribute shows a preview image before a video plays?",
        "opts": [
          "controls",
          "poster",
          "loop",
          "autoplay"
        ],
        "answer": 1,
        "explain": "poster sets the image shown before playback starts."
      },
      {
        "q": "Which element adds captions to a video?",
        "opts": [
          "<caption>",
          "<track>",
          "<subtitle>",
          "<text>"
        ],
        "answer": 1,
        "explain": "<track kind='captions'> links a caption file (e.g. WebVTT) to the video."
      },
      {
        "q": "Why include width and height on a <video>?",
        "opts": [
          "Required by HTML5",
          "To reserve layout space and prevent content shifting",
          "To compress the file",
          "To enable autoplay"
        ],
        "answer": 1,
        "explain": "Explicit dimensions reserve space before the video loads, avoiding layout shift."
      }
    ],
    "iframes": [
      {
        "q": "What does <iframe> do?",
        "opts": [
          "Plays audio only",
          "Embeds another page/document inside the current one",
          "Creates a form",
          "Adds a scrollbar"
        ],
        "answer": 1,
        "explain": "<iframe> nests another HTML document inside the current page."
      },
      {
        "q": "Why does an iframe need a title attribute?",
        "opts": [
          "It's purely decorative",
          "Accessibility — screen readers announce it",
          "It sets the file size",
          "It's required for autoplay"
        ],
        "answer": 1,
        "explain": "title gives assistive technology a readable label for the embedded content."
      },
      {
        "q": "What does the sandbox attribute do on an iframe?",
        "opts": [
          "Adds a border",
          "Restricts what the embedded page is allowed to do",
          "Increases loading speed",
          "Enables autoplay"
        ],
        "answer": 1,
        "explain": "sandbox applies a set of restrictions (like disabling scripts) to embedded, less-trusted content."
      }
    ],
    "seo": [
      {
        "q": "What does the meta description tag control?",
        "opts": [
          "Page color scheme",
          "The snippet shown under the title in search results",
          "The page's load speed",
          "The favicon"
        ],
        "answer": 1,
        "explain": "meta description supplies the summary text search engines often display."
      },
      {
        "q": "Why does alt text help SEO?",
        "opts": [
          "It makes images load faster",
          "It gives search engines readable text describing the image",
          "It changes the image size",
          "It's required by HTML syntax"
        ],
        "answer": 1,
        "explain": "Search engines can't 'see' images — alt text gives them (and screen readers) something to read."
      },
      {
        "q": "What does a canonical link tag prevent?",
        "opts": [
          "Slow loading",
          "Duplicate-content confusion between similar URLs",
          "Broken images",
          "Missing meta tags"
        ],
        "answer": 1,
        "explain": "rel='canonical' tells search engines which URL is the authoritative version."
      }
    ],
    "bestpractices": [
      {
        "q": "How many <h1> elements should a typical page have?",
        "opts": [
          "As many as you like",
          "Exactly one",
          "Zero",
          "One per section"
        ],
        "answer": 1,
        "explain": "A single <h1> gives the page one clear main heading for users and assistive tech."
      },
      {
        "q": "Which is a best practice for long-term maintainability?",
        "opts": [
          "Inline styles everywhere",
          "Semantic tags and consistent indentation",
          "One giant line of code",
          "Skipping alt text to save space"
        ],
        "answer": 1,
        "explain": "Semantic structure and readable indentation make markup easier to debug and extend."
      },
      {
        "q": "What does running markup through a validator help catch?",
        "opts": [
          "Slow servers",
          "Unclosed tags and invalid nesting",
          "Poor color choices",
          "Missing images only"
        ],
        "answer": 1,
        "explain": "Validators check markup against the HTML spec, flagging structural errors."
      }
    ],
    "semantics": [
      {
        "q": "Which element should appear only once, holding a page's unique content?",
        "opts": [
          "<section>",
          "<main>",
          "<div>",
          "<aside>"
        ],
        "answer": 1,
        "explain": "<main> wraps the unique content of a page and should normally appear exactly once."
      },
      {
        "q": "What best describes when to use <article>?",
        "opts": [
          "Any wrapper that needs styling",
          "Content that could stand alone and be redistributed on its own",
          "Only for news websites",
          "A synonym for <section>"
        ],
        "answer": 1,
        "explain": "<article> is for self-contained content — a blog post, comment, or news story — that would make sense on its own."
      },
      {
        "q": "Which element creates a disclosure widget with no JavaScript?",
        "opts": [
          "<aside>",
          "<time>",
          "<details>/<summary>",
          "<address>"
        ],
        "answer": 2,
        "explain": "<details> with a <summary> child gives a native expand/collapse widget for free."
      }
    ],
    "layout": [
      {
        "q": "What ARIA landmark role does <nav> map to automatically?",
        "opts": [
          "banner",
          "navigation",
          "complementary",
          "contentinfo"
        ],
        "answer": 1,
        "explain": "<nav> is exposed to assistive technology as the 'navigation' landmark automatically."
      },
      {
        "q": "What is the main purpose of a 'skip to main content' link?",
        "opts": [
          "To improve SEO rankings",
          "To let keyboard/screen-reader users bypass repeated navigation",
          "To make the page load faster",
          "To validate HTML"
        ],
        "answer": 1,
        "explain": "It lets users jump straight past a repeated nav menu directly to the unique page content."
      },
      {
        "q": "In CSS Grid, what does `repeat(auto-fit, minmax(200px, 1fr))` do?",
        "opts": [
          "Forces exactly 200 columns",
          "Lets the grid fit as many 200px+ columns as the space allows",
          "Only works with 1 column",
          "Disables responsiveness"
        ],
        "answer": 1,
        "explain": "auto-fit with minmax() lets the number of columns adjust automatically to the available width."
      }
    ],
    "a11y-fundamentals": [
      {
        "q": "What alt text should a purely decorative image have?",
        "opts": [
          "A long, detailed description",
          "alt=\"\" (empty)",
          "No alt attribute at all",
          "The filename"
        ],
        "answer": 1,
        "explain": "Empty alt (alt=\"\") tells screen readers to skip the image entirely, which is correct for purely decorative images."
      },
      {
        "q": "Why should positive tabindex values (like tabindex=\"3\") generally be avoided?",
        "opts": [
          "They're deprecated and don't work",
          "They override the natural tab order and can confuse keyboard users",
          "They only work in Chrome",
          "They make elements invisible"
        ],
        "answer": 1,
        "explain": "Positive tabindex values force a custom tab order that rarely matches visual/logical order, creating a confusing experience."
      },
      {
        "q": "What is the first rule of using ARIA?",
        "opts": [
          "Add ARIA to every element for safety",
          "Don't use ARIA if a native HTML element already provides the needed semantics",
          "Only use ARIA on images",
          "ARIA replaces the need for alt text"
        ],
        "answer": 1,
        "explain": "Native elements like <button> already have the right role and keyboard behavior built in — ARIA is for filling gaps, not replacing them."
      }
    ],
    "forms": [
      {
        "q": "Inside a <form>, what does a plain <button> default to?",
        "opts": [
          "type=\"button\"",
          "type=\"reset\"",
          "type=\"submit\"",
          "It does nothing until scripted"
        ],
        "answer": 2,
        "explain": "A <button> with no type attribute defaults to type=\"submit\" inside a form — a common source of accidental submissions."
      },
      {
        "q": "What is <legend> used for?",
        "opts": [
          "Styling a table caption",
          "Naming the group of controls inside a <fieldset>",
          "A tooltip on hover",
          "A required attribute on every input"
        ],
        "answer": 1,
        "explain": "<legend> is the required first child of <fieldset> and announces what the group of controls represents."
      },
      {
        "q": "When must a form's enctype be set to multipart/form-data?",
        "opts": [
          "Whenever method=\"get\" is used",
          "When the form includes a file upload",
          "Only for search forms",
          "It's never required"
        ],
        "answer": 1,
        "explain": "File uploads require multipart/form-data so the browser can send binary file content correctly."
      }
    ],
    "forminputs": [
      {
        "q": "Which input type gives a native slider control?",
        "opts": [
          "type=\"number\"",
          "type=\"range\"",
          "type=\"scale\"",
          "type=\"slider\""
        ],
        "answer": 1,
        "explain": "type=\"range\" renders as a slider between a min and max value."
      },
      {
        "q": "What does the pattern attribute do?",
        "opts": [
          "Sets a background pattern via CSS",
          "Enforces a custom format using a regular expression",
          "Changes the input's color",
          "Only works on <select> elements"
        ],
        "answer": 1,
        "explain": "pattern takes a regular expression the input's value must match before the form can submit."
      },
      {
        "q": "Which input type is best for a phone number field?",
        "opts": [
          "type=\"number\"",
          "type=\"tel\"",
          "type=\"text\" only",
          "type=\"phone\""
        ],
        "answer": 1,
        "explain": "type=\"tel\" triggers the right mobile keyboard; phone formats still need a pattern since they vary internationally."
      }
    ],
    "formvalidation": [
      {
        "q": "What does the novalidate attribute do when added to a <form>?",
        "opts": [
          "Makes every field required",
          "Disables the browser's built-in validation",
          "Removes all inputs from the form",
          "Only works with JavaScript forms"
        ],
        "answer": 1,
        "explain": "novalidate turns off the browser's automatic constraint validation, letting a page implement fully custom validation instead."
      },
      {
        "q": "Which CSS pseudo-class matches a field that currently satisfies all its constraints?",
        "opts": [
          ":required",
          ":valid",
          ":checked",
          ":focus"
        ],
        "answer": 1,
        "explain": ":valid matches any form control whose current value passes its constraint validation."
      },
      {
        "q": "What does setCustomValidity('') do?",
        "opts": [
          "Sets a permanent error message",
          "Clears a custom error, allowing the field to become valid again",
          "Disables validation for that field only",
          "Deletes the field's value"
        ],
        "answer": 1,
        "explain": "Passing an empty string to setCustomValidity() clears any custom error previously set on that field."
      }
    ],
    "tables": [
      {
        "q": "What does the scope=\"col\" attribute on a <th> do?",
        "opts": [
          "Changes the column's width",
          "Tells assistive technology the header describes the entire column below it",
          "Merges cells across columns",
          "Is purely decorative"
        ],
        "answer": 1,
        "explain": "scope=\"col\" (or \"row\") tells screen readers which cells a header cell applies to."
      },
      {
        "q": "Which attribute merges a table cell across multiple rows?",
        "opts": [
          "colspan",
          "rowspan",
          "span",
          "merge"
        ],
        "answer": 1,
        "explain": "rowspan=\"n\" makes a cell occupy n rows vertically; colspan does the equivalent across columns."
      },
      {
        "q": "Where must <caption> appear in a table?",
        "opts": [
          "As the last child of <table>",
          "Immediately after the opening <table> tag",
          "Inside <tfoot>",
          "Anywhere in the document"
        ],
        "answer": 1,
        "explain": "<caption> must be the first element inside <table>, right after the opening tag."
      }
    ],
    "a11y-standards": [
      {
        "q": "What does WCAG stand for?",
        "opts": [
          "Web Content Accessibility Guidelines",
          "World Compliance and Accessibility Group",
          "Web Content Analysis Guide",
          "Website Contrast and Alt Guidelines"
        ],
        "answer": 0,
        "explain": "WCAG is the Web Content Accessibility Guidelines, maintained by the W3C."
      },
      {
        "q": "Which WCAG conformance level is most commonly targeted in practice?",
        "opts": [
          "A",
          "AA",
          "AAA",
          "There's only one level"
        ],
        "answer": 1,
        "explain": "Level AA is the most common baseline referenced by organizational policies and legal requirements."
      },
      {
        "q": "Why is manual testing (keyboard, screen reader) still necessary alongside automated tools?",
        "opts": [
          "Automated tools are always wrong",
          "Automated tools only catch a fraction of real accessibility issues",
          "Manual testing is required by law everywhere",
          "Automated tools don't work on HTML"
        ],
        "answer": 1,
        "explain": "Automated scanners are estimated to catch only around 30-40% of real accessibility issues — things like illogical focus order need a human to find."
      }
    ],
    "responsive-structure": [
      {
        "q": "What happens on mobile browsers without a viewport meta tag?",
        "opts": [
          "The page fails to load",
          "The page renders at a fixed desktop width and zooms out",
          "All images disappear",
          "Forms stop working"
        ],
        "answer": 1,
        "explain": "Without it, mobile browsers assume a wide desktop layout and zoom the whole page out to fit, making text tiny."
      },
      {
        "q": "What does a mobile-first approach to media queries mean?",
        "opts": [
          "Only supporting mobile devices",
          "Writing base styles for small screens first, then adding min-width queries for larger ones",
          "Writing desktop styles first and overriding them for mobile",
          "Avoiding media queries entirely"
        ],
        "answer": 1,
        "explain": "Mobile-first starts with small-screen base styles and layers on complexity as the viewport grows, via min-width media queries."
      },
      {
        "q": "Why does the flex `order` property need care regarding accessibility?",
        "opts": [
          "It doesn't work in most browsers",
          "It changes visual order only — screen readers and tab order still follow the HTML source order",
          "It automatically fixes tab order too",
          "It only works on <table> elements"
        ],
        "answer": 1,
        "explain": "order changes how content looks, not the underlying source order that keyboard/tab navigation and screen readers rely on."
      }
    ]
  }
};
