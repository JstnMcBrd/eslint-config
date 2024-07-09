import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import type { Linter } from 'eslint';
import globals from 'globals';

/** @returns ESLint configuration for React. */
export function react(): Linter.FlatConfig[] {
	return [
		// Make sure to give browser globals to all other project files, not just JSX files
		{
			// FIXME Reused code from src/javascript.ts - abstract out
			files: ['**/*.{m,c,}{js,ts}{x,}'],
			languageOptions: {
				globals: globals.browser,
			},
		},
		{
			files: ['**/*.{m,c,}{js,ts}x'],
			plugins: {
				'react': reactPlugin,
				'react-hooks': reactHooksPlugin,
			},
			languageOptions: {
				parserOptions: reactPlugin.configs.recommended.parserOptions,
			},
			settings: {
				react: {
					// TODO warns if not set, but will default to 'detect' in the future
					// https://github.com/jsx-eslint/eslint-plugin-react/issues/3758
					version: 'detect',
				},
			},
			rules: {
				// Recommended
				...reactPlugin.configs.recommended.rules,
				...reactPlugin.configs['jsx-runtime'].rules,
				...reactHooksPlugin.configs.recommended.rules,
			},
		},
	];
}
