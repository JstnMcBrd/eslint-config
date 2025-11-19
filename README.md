# @jstnmcbrd/eslint-config

[![CI](https://img.shields.io/github/actions/workflow/status/JstnMcBrd/eslint-config/ci.yml?logo=github&label=CI)](https://github.com/JstnMcBrd/eslint-config/actions/workflows/ci.yml)
<br />
[![NPM Version](https://img.shields.io/npm/v/@jstnmcbrd/eslint-config)](https://www.npmjs.com/package/@jstnmcbrd/eslint-config)
[![NPM License](https://img.shields.io/npm/l/@jstnmcbrd/eslint-config)](./LICENSE)
![NPM Type Definitions](https://img.shields.io/npm/types/@jstnmcbrd/eslint-config)
![NPM Downloads](https://img.shields.io/npm/dt/@jstnmcbrd/eslint-config)
<br />
[![ESLint version](https://img.shields.io/npm/dependency-version/@jstnmcbrd/eslint-config/peer/eslint)](https://www.npmjs.com/package/eslint)

## About

A simple [ESLint](https://eslint.org/) configuration for JavaScript, [TypeScript](https://www.typescriptlang.org/), and [React](https://react.dev/) projects.

Uses [@eslint/js](https://www.npmjs.com/package/@eslint/js), [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin), [typescript-eslint](https://www.npmjs.com/package/typescript-eslint), [@eslint-react/eslint-plugin](https://www.npmjs.com/package/@eslint-react/eslint-plugin), and [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) configurations.

Written in TypeScript and transpiles to JavaScript (ESM).

## Introduction

I noticed I was duplicating much of the ESLint configuration between my projects, and synchronizing changes was annoying. So I have extracted the configuration into a new package to use anywhere.

You are welcome to use this configuration, but it is primarily designed for my personal use. I cannot promise to support your use case. However, I do plan to follow semantic versioning for handling breaking changes.

## Usage

You must also install `eslint` to use this package.

```sh
npm install --save-dev eslint @jstnmcbrd/eslint-config
```

Add a script in your `package.json` for linting.

```json
{
	"scripts": {
		"lint": "eslint"
	}
}
```

Add a `eslint.config.js` file and import the configuration as follows.

```js
import eslintConfig from '@jstnmcbrd/eslint-config';
export default eslintConfig();
```

#### React

```js
import eslintConfig from '@jstnmcbrd/eslint-config';
export default eslintConfig({ react: true });
```

#### TypeScript

```js
import eslintConfig from '@jstnmcbrd/eslint-config';
export default eslintConfig({ typescript: true });
```

This configuration uses the [`projectService`](https://typescript-eslint.io/blog/project-service) feature from `typescript-eslint` for typed linting. Therefore, all linted files must be included in your project's root `tsconfig.json`.

It is generally good practice to include all JavaScript-related files that need type information in the root `tsconfig.json`, for consistency and improved IDE integration.

If you need to exclude some files from your typescript build (like configs or test files), make a `tsconfig.build.json` file that extends from `tsconfig.json` and only includes files you want to build.

For an example, see this project's [tsconfig.json](./tsconfig.json) and [tsconfig.build.json](./tsconfig.build.json) files.

#### React + TypeScript

```js
import eslintConfig from '@jstnmcbrd/eslint-config';
export default eslintConfig({ react: true, typescript: true });
```

## Extend

If you need to extend the config, you can use the `defineConfig` helper from `eslint`.

For example, you could add NodeJS globals (for a non-TypeScript project).

```js
import eslintConfig from '@jstnmcbrd/eslint-config';
import { defineConfig } from 'eslint/config';
import { nodeBuiltin } from 'globals';
export default defineConfig(
	eslintConfig(),
	{
		languageOptions: {
			globals: nodeBuiltin,
		},
	},
);
```

Or you could ignore a directory.

```js
import eslintConfig from '@jstnmcbrd/eslint-config';
import { defineConfig, globalIgnores } from 'eslint/config';
export default defineConfig(
	eslintConfig(),
	globalIgnores(['tmp']),
);
```

## Design

#### Modern

- Only compatible with ESLint v9
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

When I update a rule in a way that could cause a few harmless lint errors, I will try to always bump a minor version. If I update many rules, fundamentally change a rule, or change the configuration API, I will bump a major version.

## Keep-a-changelog

This project abides by [keep-a-changelog](https://keepachangelog.com/). All relevant changes will be documented in the [CHANGELOG](./CHANGELOG.md).
