import tsESLint from 'typescript-eslint';
import type { ESLint, Linter } from 'eslint';

/** @returns ESLint configuration for TypeScript. */
export function typescript(): Linter.FlatConfig[] {
	return [
		// Make sure to ignore the TypeScript output directory
		{
			ignores: ['dist'],
		},
		{
			plugins: {
				// https://github.com/typescript-eslint/typescript-eslint/issues/9110
				'@typescript-eslint': tsESLint.plugin as ESLint.Plugin,
			},
			languageOptions: {
				// https://github.com/typescript-eslint/typescript-eslint/issues/9110
				parser: tsESLint.parser as Linter.ParserModule,
				parserOptions: {
					project: './tsconfig.eslint.json',
					// TODO use this once it stops being experimental in v8
					// https://github.com/typescript-eslint/typescript-eslint/issues/8475#issuecomment-1945510422
					// https://github.com/typescript-eslint/typescript-eslint/pull/9084
					// projectService: true,
				},
			},
			rules: {
				// Recommended
				...tsESLint.configs.eslintRecommended.rules,
				...tsESLint.configs.strictTypeChecked[2]?.rules,
				...tsESLint.configs.stylisticTypeChecked[2]?.rules,

				// Additions
				'no-shadow': 0,
				'@typescript-eslint/no-shadow': 'error',
				'@typescript-eslint/prefer-enum-initializers': 'error',
			},
		},
	];
}
