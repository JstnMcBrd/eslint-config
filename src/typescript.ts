import type { Config } from 'eslint/config';
import typescriptESLint from 'typescript-eslint';

/** @returns ESLint configuration for TypeScript. */
export function typescript(): Config[] {
	return [
		// Ignore the TypeScript output directory
		{
			ignores: ['dist'],
		},

		// Type information
		{
			languageOptions: {
				parserOptions: {
					projectService: true,
				},
			},
		},

		// Recommended
		...typescriptESLint.configs.strictTypeChecked,
		...typescriptESLint.configs.stylisticTypeChecked,

		// Additions
		{
			rules: {
				'no-shadow': 0,
				'@typescript-eslint/no-shadow': 'error',
				'@typescript-eslint/prefer-enum-initializers': 'error',
			},
		},
	];
}
