# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.1] - 2025-11-26

### Changed

- Clarify `eslint` version requirement (`^9.22.0`) ([#173](https://github.com/JstnMcBrd/eslint-config/pull/173))
- Clarify node engine requirement from dependencies (`^20.19.0 || >=21.1.0`) ([#173](https://github.com/JstnMcBrd/eslint-config/pull/173))

### Fixed

- Add missing exports field in `package.json` ([#171](https://github.com/JstnMcBrd/eslint-config/pull/171))

## [2.0.0] - 2025-11-25

### Changed

- **Breaking:** upgrade to `eslint` v9 ([#143](https://github.com/JstnMcBrd/eslint-config/pull/143))
- **Breaking:** update `@eslint/js` from v8 to v9 ([#143](https://github.com/JstnMcBrd/eslint-config/pull/143))
- **Breaking:** update `typescript-eslint` to v6 to v8 ([#6](https://github.com/JstnMcBrd/eslint-config/pull/6), [#18](https://github.com/JstnMcBrd/eslint-config/pull/18))
- **Breaking:** update `@stylistic/eslint-plugin` from v1 to v5 ([#9](https://github.com/JstnMcBrd/eslint-config/pull/9), [#143](https://github.com/JstnMcBrd/eslint-config/pull/143))
- **Breaking:** update `eslint-plugin-react-hooks` from v4 to v7 ([#33](https://github.com/JstnMcBrd/eslint-config/pull/33), [#138](https://github.com/JstnMcBrd/eslint-config/pull/138))
- **Breaking:** use `projectService` for `typescript-eslint` typed linting ([#150](https://github.com/JstnMcBrd/eslint-config/pull/150))
- Order "react" and "typescript" options alphabetically ([#4](https://github.com/JstnMcBrd/eslint-config/pull/4))
- Improve wording in README ([#11](https://github.com/JstnMcBrd/eslint-config/pull/11), [#167](https://github.com/JstnMcBrd/eslint-config/pull/167))
- Use `customize()` method for stylistic rule overrides ([#11](https://github.com/JstnMcBrd/eslint-config/pull/11))
- Use global `files` glob selector ([#18](https://github.com/JstnMcBrd/eslint-config/pull/18))
- Use flat configs from dependencies ([#19](https://github.com/JstnMcBrd/eslint-config/pull/19), [#79](https://github.com/JstnMcBrd/eslint-config/pull/79))
- Use `Config` type instead of `Linter.Config` ([#149](https://github.com/JstnMcBrd/eslint-config/pull/149))
- Use `eslint/config` helper functions ([#157](https://github.com/JstnMcBrd/eslint-config/pull/157))

### Added

- **Breaking:** add `eqeqeq` rule ([#166](https://github.com/JstnMcBrd/eslint-config/pull/166))
- **Breaking:** add `@stylistic//no-confusing-arrow` rule ([#166](https://github.com/JstnMcBrd/eslint-config/pull/166))
- **Breaking:** add `@typescript-eslint/no-shadow` rule ([#18](https://github.com/JstnMcBrd/eslint-config/pull/18))
- **Breaking:** add `@typescript-eslint/prefer-enum-initializers` rule ([#18](https://github.com/JstnMcBrd/eslint-config/pull/18))
- **Breaking:** add `@typescript-eslint/switch-exhaustiveness-check` rule ([#166](https://github.com/JstnMcBrd/eslint-config/pull/166))
- **Breaking:** enable `eslint-plugin-react-hooks` compiler rules ([#145](https://github.com/JstnMcBrd/eslint-config/pull/145))
- **Breaking:** add `@eslint-react/eslint-plugin` strict config ([#154](https://github.com/JstnMcBrd/eslint-config/pull/154))
- Add badges to README ([#4](https://github.com/JstnMcBrd/eslint-config/pull/4), ([#7](https://github.com/JstnMcBrd/eslint-config/pull/7)))
- Add JSDoc to type definitions ([#19](https://github.com/JstnMcBrd/eslint-config/pull/19))
- Add a `CHANGELOG.md` file ([#142](https://github.com/JstnMcBrd/eslint-config/pull/142))
- Add section on extending config to README ([#159](https://github.com/JstnMcBrd/eslint-config/pull/159))

### Removed

- **Breaking:** remove `eslint-plugin-react` configs ([#154](https://github.com/JstnMcBrd/eslint-config/pull/154))
- **Breaking:** remove default globals for NodeJS and browser ([#158](https://github.com/JstnMcBrd/eslint-config/pull/158))
- Remove Node runtime restrictions and just rely on dependencies ([#18](https://github.com/JstnMcBrd/eslint-config/pull/18))
- Remove redundant `"main"` and `"types"` fields from `package.json` ([#41](https://github.com/JstnMcBrd/eslint-config/pull/41))

## [1.0.0] - 2024-02-09

- Add eslint configurations for JavaScript, TypeScript, and React ([#1](https://github.com/JstnMcBrd/eslint-config/pull/1))
- Add README with introduction, usage instructions, design philosophy, etc ([#1](https://github.com/JstnMcBrd/eslint-config/pull/1))
- Add ISC license ([#1](https://github.com/JstnMcBrd/eslint-config/pull/1))

[Unreleased]: https://github.com/JstnMcBrd/eslint-config/compare/v2.0.1...HEAD
[2.0.1]: https://github.com/JstnMcBrd/eslint-config/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/JstnMcBrd/eslint-config/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/JstnMcBrd/eslint-config/releases/tag/v1.0.0
