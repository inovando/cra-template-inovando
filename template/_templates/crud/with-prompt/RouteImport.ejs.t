---
inject: true
to: src/routes/config.js
skip_if: "const <%= h.changeCase.pascal(name) %> = lazy"
before: "\nconst config = {"
---
const <%= h.changeCase.pascal(name) %> = lazy(() => import('pages/<%= h.changeCase.pascal(name) %>'));
const <%= h.changeCase.pascal(name) %>Novo = lazy(() => import('modules/<%= h.changeCase.pascal(name) %>Novo'));
