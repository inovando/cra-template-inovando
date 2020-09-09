---
inject: true
to: src/routes/config.js
before: "],\n};"
skip_if: <%= h.inflection.dasherize(name) %>
sh: yarn eslint --fix src/routes/config.js
---
    {
      path: '/<%= h.inflection.dasherize(name) %>',
      component: <%= h.changeCase.pascal(name) %>,
      title: '<%= title %>',
      exact: true,
      icon: <<%= h.changeCase.pascal(icon) %>Icon />,
    },
