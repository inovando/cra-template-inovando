---
inject: true
to: src/routes/config.js
skip_if: "const <%= h.changeCase.pascal(name) %> = lazy"
before: "\nconst config = {"
---
const <%= h.changeCase.pascal(name) %> = lazy(() => import('pages/<%= h.changeCase.pascal(name) %>'));
