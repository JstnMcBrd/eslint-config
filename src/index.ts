import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import type { ConfigObject } from 'eslint/config';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

/** @returns ESLint configuration for TypeScript projects */
export default function eslintConfig(): ConfigObject[] {
	return defineConfig(
		{
			files: ['**/*.{m,c,}{js,ts}'],
		},

		// Ignore the TypeScript output directory
		globalIgnores(['dist']),

		// Report unnecessary eslint-disable comments
		{
			linterOptions: {
				reportUnusedDisableDirectives: 'error',
			},
		},

		// Type information
		{
			languageOptions: {
				parserOptions: {
					projectService: true,
				},
			},
		},

		// Defaults
		js.configs.recommended,
		stylistic.configs.customize({
			indent: 'tab',
			semi: true,
		}),
		tseslint.configs.strictTypeChecked,
		tseslint.configs.stylisticTypeChecked,

		// Additions
		{
			rules: {
				'curly': 'error',
				'no-var': 'error',
				'prefer-const': 'error',

				// 'no-shadow': 'error', // https://github.com/eslint/eslint/issues/20776
				'@typescript-eslint/no-shadow': 'error',

				'@typescript-eslint/prefer-enum-initializers': 'error',
				'@typescript-eslint/switch-exhaustiveness-check': 'error',

				'@stylistic/no-confusing-arrow': 'error',
			},
		},
	);
}
