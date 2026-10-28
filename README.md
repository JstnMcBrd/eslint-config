# @jstnmcbrd/eslint-config

[![npm version](https://img.shields.io/npm/v/@jstnmcbrd/eslint-config)](https://www.npmjs.com/package/@jstnmcbrd/eslint-config)
![node version](https://img.shields.io/node/v/@jstnmcbrd/eslint-config)
[![eslint version](https://img.shields.io/npm/dependency-version/@jstnmcbrd/eslint-config/peer/eslint)](https://www.npmjs.com/package/eslint)
[![npm license](https://img.shields.io/npm/l/@jstnmcbrd/eslint-config)](./LICENSE)
![npm downloads](https://img.shields.io/npm/dt/@jstnmcbrd/eslint-config)

## About

A simple [ESLint](https://eslint.org/) configuration for [TypeScript](https://www.typescriptlang.org/) projects.

Included:
* [@eslint/js](https://github.com/eslint/eslint/tree/main/packages/js)
* [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)
* [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

## Introduction

I noticed I was duplicating most of the ESLint configuration between my projects, and synchronizing changes was annoying. So I have extracted the configuration into a new package to use anywhere.

You are welcome to use this configuration, but it is primarily designed for me. I cannot promise to support your use case. However, I will follow semantic versioning to handle breaking changes.

## Usage

Install the packages.

```sh
npm install --save-dev @jstnmcbrd/eslint-config eslint typescript
```

Add a lint script in your `package.json`.

```json
{
	"scripts": {
		"lint": "eslint --flag unstable_native_nodejs_ts_config"
	}
}
```

Add a `eslint.config.ts` file and import the configuration.

```ts
import eslintConfig from '@jstnmcbrd/eslint-config';
export default eslintConfig();
```

Support for [`eslint.config.ts`](https://eslint.org/docs/latest/use/configure/configuration-files#native-typescript-support) is experimental and requires Node.js `^22.18.0 || >=24.0.0`.
If you want to use `eslint.config.js` instead, you must enable `allowJs: true` in `tsconfig.json` (see below).

You will also need a `tsconfig.json`. **It must include all linted files.** This is required by the [`projectService`](https://typescript-eslint.io/blog/project-service) feature from `typescript-eslint`.

```jsonc
{
	"compilerOptions": {
		"outDir": "dist", // The config excludes `dist` from lint
		"allowJs": true   // Required if there are any JavaScript files
	}
}
```

If you need to exclude some files from your TypeScript build (like configs or test files), make a `tsconfig.build.json` file that extends from `tsconfig.json` and only includes files you want to build.

For example, see this project's [tsconfig.json](./tsconfig.json) and [tsconfig.build.json](./tsconfig.build.json) files.

### JavaScript projects

Even if your project has no TypeScript, you will still need a `tsconfig.json` that includes all linted files. You can use this minimal config.

```json
{
	"compilerOptions": {
		"allowJs": true,
		"noEmit": true
	}
}
```

## Extend

If you need to extend the config, you can use the `defineConfig` helper from `eslint`.

For example, you could ignore a directory.

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

- TypeScript-first
- Only compatible with ESLint v10
- Uses the new [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), no support for legacy config
- Transpiles to ESM, no support for CommonJS

#### Simple

- Uses as few plugins as possible
- Uses plugins that are as official as possible, avoids more esoteric/niche plugins
- Stays as close to recommended defaults as possible, with a few notable exceptions
	- [Tabs instead of spaces](https://x.com/JstnMcBrd/status/1616269720260575232)
	- Semicolons

#### No Prettier

- Does not use [Prettier](https://prettier.io/)
	- It's good to be standardized, but I find Prettier to be inflexible and dogmatic. I created this package to enforce my own dogmatic opinions instead.
	- Strict formatters often erase context encoded in code style, so flexibility can be useful for retaining the intent of the programmer.
	- For another perspective, see the blog post ["Why I don't use Prettier"](https://antfu.me/posts/why-not-prettier) from Anthony Fu.

## Semantic versioning

This project adheres to [semantic versioning](https://semver.org/). However, given the nature of updating code quality rules, it is not always clear what constitutes a "breaking" change. ESLint has a section on the subject in their [README](https://github.com/eslint/eslint#semantic-versioning-policy).

When I update a rule in a way that could cause a few harmless lint errors, I will bump a minor version. If I update many rules, fundamentally change a rule, or change the configuration API, I will bump a major version.

## Keep-a-changelog

This project abides by [keep-a-changelog](https://keepachangelog.com/). All relevant changes will be documented in the [CHANGELOG](./CHANGELOG.md).
