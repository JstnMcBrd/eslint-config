import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import type { Linter } from 'eslint';
import globals from 'globals';

/** @returns Basic ESLint configuration for JavaScript. */
export function javascript(): Linter.FlatConfig[] {
	return [
		{
			files: ['**/*.{m,c,}{js,ts}{x,}'],
			plugins: {
				'@stylistic': stylistic,
			},
			languageOptions: {
				globals: globals.nodeBuiltin,
			},
			linterOptions: {
				reportUnusedDisableDirectives: 'error',
			},
			rules: {
				// Recommended
				...js.configs.recommended.rules,
				...stylistic.configs.customize({
					indent: 'tab',
					semi: true,
				}).rules,

				// Additions
				'curly': 'error',
				'no-shadow': 'error',
				'no-var': 'error',
				'prefer-const': 'error',
			},
		},
	];
}
