import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import type { Config } from 'eslint/config';
import globals from 'globals';

/** @returns Basic ESLint configuration for JavaScript. */
export function javascript(): Config[] {
	return [
		{
			files: ['**/*.{m,c,}{js,ts}{x,}'],
		},
		{
			languageOptions: {
				// FIXME What if this is not a node project (like bundling for a browser)?
				globals: globals.nodeBuiltin,
			},
			linterOptions: {
				reportUnusedDisableDirectives: 'error',
			},
		},

		// Recommended
		js.configs.recommended,
		stylistic.configs.customize({
			indent: 'tab',
			semi: true,
		}),

		// Additions
		{
			rules: {
				'curly': 'error',
				'no-shadow': 'error',
				'no-var': 'error',
				'prefer-const': 'error',
			},
		},
	];
}
