---
inject: true
to: src/routes/config.js
skip_if: "import <%= h.changeCase.pascal(name) %>"
before: "\nconst config = {"
---
import <%= h.changeCase.pascal(name) %> from 'pages/<%= h.changeCase.pascal(name) %>';
