---
inject: true
to: src/routes/config.js
skip_if: "import <%= h.changeCase.pascal(icon) %>Icon"
before: "\n// Pages"
---
import <%= h.changeCase.pascal(icon) %>Icon from '@material-ui/icons/<%= h.changeCase.pascal(icon) %>';
