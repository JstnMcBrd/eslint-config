# @jstnmcbrd/eslint-config

A simple [ESLint](https://eslint.org/) configuration for JavaScript, [TypeScript](https://www.typescriptlang.org/), and [React](https://react.dev/) projects.

Uses [@eslint/js](https://www.npmjs.com/package/@eslint/js), [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin), [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin), [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react), and [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) configurations.

Written in TypeScript and transpiles to JavaScript (ESM).

## Introduction

I noticed I was duplicating a lot of the same ESLint configuration between my projects, and synchronizing changes between them was annoying. So I decided to extract the configuration into a new package for me to use anywhere.

You are welcome to use this configuration, but it's mostly designed for my own personal use. While I do plan to follow semantic versioning for handling breaking changes, I cannot promise to support your use case.

## Usage

You must also install `eslint` to use this package.

```sh
npm install --save-dev eslint @jstnmcbrd/eslint-config
```

Add a script in your `package.json` for linting.

```json
{
	"scripts": {
		"lint": "eslint ."
	}
}
```

Add a `eslint.config.js` file and import the configuration as follows.

```js
import eslintConfig from '@jstnmcbrd/eslint-config';
export default eslintConfig();
```

#### TypeScript

```js
import eslintConfig from '@jstnmcbrd/eslint-config';
export default eslintConfig({ typescript: true });
```

This configuration assumes you are using a `@typescript-eslint` setup with a `tsconfig.eslint.json` file, as recommended by the [documentation](https://typescript-eslint.io/linting/typed-linting/monorepos/#one-root-tsconfigjson) (see there for more details).

A good example can be found in this repository ([tsconfig.eslint.json](./tsconfig.eslint.json)).

#### React

```js
import eslintConfig from '@jstnmcbrd/eslint-config';
export default eslintConfig({ react: true });
```

#### React + TypeScript

```js
import eslintConfig from '@jstnmcbrd/eslint-config';
export default eslintConfig({ typescript: true, react: true });
```

## Design

#### Flat Config

- Uses the new ESLint [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- No support for the legacy config, so consider upgrading!

#### ECMAScript

- Transpiled by TypeScript to ECMAScript with ES modules 
- No support for CommonJS, so consider upgrading!
- This means you cannot import the package from a node project that is not using `"type":"module"`

#### Simplicity

- Uses as few plugins as possible
- Uses plugins that are as official as possible, and avoids more esoteric/niche plugins
- Stays as close to recommended defaults as possible, with a few noteable exceptions
	- [Tabs instead of spaces](https://x.com/JstnMcBrd/status/1616269720260575232)
	- Semicolons

#### No Prettier

- Does not use [Prettier](https://prettier.io/)
	- It's good to be standardized and opinionated, but I find Prettier to be inflexible to the point of dogmatism. I created this package to enforce my own dogmatic opinions instead.
	- There's an interesting debate between the purposes of formatters and linters. Strict formatters often erase context encoded in code style, so flexibility can be useful for retaining the intent of the programmer.
	- For another perspective, see Anthony Fu's [blog post](https://antfu.me/posts/why-not-prettier) on the subject.

## Semantic versioning

This project aspires to abide by [semantic versioning](https://semver.org/). However, given the interesting nature of updating code quality rules, it is not always clear what constitutes a "breaking" change. ESLint has a section on the subject in their [README](https://github.com/eslint/eslint#semantic-versioning-policy).

When I update a rule in a way that could cause a few harmless lint errors, I will try to always bump a minor version. If I update many rules, update a rule in a way that fundamentally changes it, or make a change to the configuration API, I will bump a major version.

## Keep-a-changelog

This project abides by [keep-a-changelog](https://keepachangelog.com/).

However, instead of a separate CHANGELOG.md file, see the description of [releases on GitHub](https://github.com/JstnMcBrd/eslint-config/releases).
