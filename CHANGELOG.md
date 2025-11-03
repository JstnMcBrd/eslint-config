# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Add badges to README ([#4](https://github.com/JstnMcBrd/eslint-config/pull/4), ([#7](https://github.com/JstnMcBrd/eslint-config/pull/7)))
- Add note about ESLint v9 support to README ([#11](https://github.com/JstnMcBrd/eslint-config/pull/11))
- **Breaking:** add `@typescript-eslint/no-shadow` rule ([#18](https://github.com/JstnMcBrd/eslint-config/pull/18))
- **Breaking:** add `@typescript-eslint/prefer-enum-initializers` rule ([#18](https://github.com/JstnMcBrd/eslint-config/pull/18))
- Add JSDoc to type definitions ([#19](https://github.com/JstnMcBrd/eslint-config/pull/19))
- Add a `CHANGELOG.md` file ([#142](https://github.com/JstnMcBrd/eslint-config/pull/142))

### Changed

- Order "react" and "typescript" options alphabetically ([#4](https://github.com/JstnMcBrd/eslint-config/pull/4))
- **Breaking:** update `typescript-eslint` to v6 to v8 ([#6](https://github.com/JstnMcBrd/eslint-config/pull/6), [#18](https://github.com/JstnMcBrd/eslint-config/pull/18))
- Update `globals` to v13 to v16 ([#8](https://github.com/JstnMcBrd/eslint-config/pull/8), [#73](https://github.com/JstnMcBrd/eslint-config/pull/73))
- **Breaking:** update `@stylistic/eslint-plugin` from v1 to v5 ([#9](https://github.com/JstnMcBrd/eslint-config/pull/9), [#143](https://github.com/JstnMcBrd/eslint-config/pull/143))
- Improve wording in README ([#11](https://github.com/JstnMcBrd/eslint-config/pull/11))
- Use `customize()` method for stylistic rule overrides ([#11](https://github.com/JstnMcBrd/eslint-config/pull/11))
- Use global `files` glob selector ([#18](https://github.com/JstnMcBrd/eslint-config/pull/18))
- Refactor to use flat configs from dependencies ([#19](https://github.com/JstnMcBrd/eslint-config/pull/19), [#79](https://github.com/JstnMcBrd/eslint-config/pull/79))
- **Breaking:** update `eslint-plugin-react-hooks` from v4 to v7 ([#33](https://github.com/JstnMcBrd/eslint-config/pull/33), [#138](https://github.com/JstnMcBrd/eslint-config/pull/138))
- **Breaking:** update `@eslint/js` from v8 to v9 ([#143](https://github.com/JstnMcBrd/eslint-config/pull/143))
- Use `defineConfig()` wrapper method ([#143](https://github.com/JstnMcBrd/eslint-config/pull/143))
- **Breaking:** update `eslint` peer dependency to v9 ([#143](https://github.com/JstnMcBrd/eslint-config/pull/143))

### Removed

- Remove Node runtime restrictions and just rely on dependencies ([#18](https://github.com/JstnMcBrd/eslint-config/pull/18))
- Remove redundant `"main"` and `"types"` fields from `package.json` ([#41](https://github.com/JstnMcBrd/eslint-config/pull/41))
- Remove typecasts for `typescript-eslint` ([#121](https://github.com/JstnMcBrd/eslint-config/pull/121))

## [1.0.0] - 2024-02-09

- Add ISC license ([#1](https://github.com/JstnMcBrd/eslint-config/pull/1))
- Add README with introduction, usage instructions, design philosophy, etc ([#1](https://github.com/JstnMcBrd/eslint-config/pull/1))
- Add eslint configurations for JavaScript, TypeScript, and React ([#1](https://github.com/JstnMcBrd/eslint-config/pull/1))

[Unreleased]: https://github.com/JstnMcBrd/eslint-config/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/JstnMcBrd/eslint-config/releases/tag/v1.0.0
