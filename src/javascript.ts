import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import type { ESLint, Linter } from 'eslint';
import globals from 'globals';

/** @returns Basic ESLint configuration for JavaScript. */
export function javascript(): Linter.FlatConfig[] {
	return [
		{
			files: ['**/*.{m,c,}{js,ts}{x,}'],
			plugins: {
				// https://github.com/eslint-stylistic/eslint-stylistic/issues/398
				'@stylistic': stylistic as ESLint.Plugin,
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
