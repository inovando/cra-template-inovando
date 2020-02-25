# `@inovando/cra-template`
> ⚡️ Inovando's template for create-react-app

## Usage

1. Initialize your project with this command:

```
npx create-react-app my-app --template @inovando
```

2. Duplicate `.env.example` to `.env.development.local` and `.env.production` fulfilling variables as needed

3. Done 🎉

## Features
- [x] [ESLint](https://github.com/santospatrick/eslint-config-react)/[Prettier](https://github.com/santospatrick/prettier-config)
- [x] [Axios](https://www.npmjs.com/package/axios)
- [x] [Styled Components](https://styled-components.com/docs/basics#react-native)
- [x] [React Final Form](https://final-form.org/react)
- [x] [Yup](https://runkit.com/jquense/yup)

### Why ESLint and plugins are dependencies?

Until the release date of this package, create react app [does not support devDependencies](https://github.com/facebook/create-react-app/issues/8082) field at `template.json`