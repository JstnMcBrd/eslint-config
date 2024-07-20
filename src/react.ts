import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import type { Linter } from 'eslint';
import globals from 'globals';

import { javascript } from './javascript.js';

/** @returns ESLint configuration for React. */
export function react(): Linter.FlatConfig[] {
	return [
		// Make sure to give browser globals to all other project files, not just JSX files
		{
			files: javascript()[0]?.files,
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
				...reactHooksPlugin.configs['recommended']?.rules,
				...reactPlugin.configs.recommended.rules,
				...reactPlugin.configs['jsx-runtime'].rules,
			},
		},
	];
}
