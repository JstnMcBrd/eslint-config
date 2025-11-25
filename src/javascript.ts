import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import type { Config } from 'eslint/config';
import { defineConfig } from 'eslint/config';

/** @returns Base ESLint configuration for JavaScript */
export function javascript(): Config[] {
	return defineConfig(
		{
			files: ['**/*.{m,c,}{js,ts}{x,}'],
		},

		// Report unnecessary eslint-disable comments
		{
			linterOptions: {
				reportUnusedDisableDirectives: 'error',
			},
		},

		// Defaults
		js.configs.recommended,
		stylistic.configs.customize({
			indent: 'tab',
			semi: true,
		}),

		// Additions
		{
			rules: {
				'curly': 'error',
				'eqeqeq': 'error',
				'no-shadow': 'error',
				'no-var': 'error',
				'prefer-const': 'error',

				'@stylistic/no-confusing-arrow': 'error',
			},
		},
	);
}
