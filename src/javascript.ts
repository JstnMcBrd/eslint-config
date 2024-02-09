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
				...stylistic.configs['recommended-flat'].rules,

				// Overrides
				'@stylistic/indent': ['error', 'tab'],
				'@stylistic/indent-binary-ops': ['error', 'tab'],
				'@stylistic/no-tabs': 0,
				'@stylistic/semi': ['error', 'always'],
				'@stylistic/member-delimiter-style': 'error',

				// Additions
				'curly': 'error',
				'no-shadow': 'error',
				'no-var': 'error',
				'prefer-const': 'error',
			},
		},
	];
}
