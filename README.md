# `@inovando/cra-template`
> ⚡️ Inovando's template for create-react-app

## Usage

Initialize your project with this command:

```
npx create-react-app my-app --template @inovando
```

## Features
- [x] [ESLint](https://github.com/santospatrick/eslint-config-react)/[Prettier](https://github.com/santospatrick/prettier-config)
- [x] [Axios](https://www.npmjs.com/package/axios)

### Why ESLint and plugins are dependencies?

Until the release date of this package, create react app [does not support devDependencies](https://github.com/facebook/create-react-app/issues/8082) field at `template.json`