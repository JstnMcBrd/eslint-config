import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import type { Linter } from 'eslint';
import globals from 'globals';

/** @returns ESLint configuration for React. */
export function react(): Linter.FlatConfig[] {
	return [
		{
			languageOptions: {
				globals: globals.browser,
			},
			settings: {
				react: {
					// TODO Warns if not set, but will default to 'detect' in the future
					// https://github.com/jsx-eslint/eslint-plugin-react/issues/3758
					version: 'detect',
				},
			},
		},

		// Recommended
		reactPlugin.configs.flat.recommended,
		reactPlugin.configs.flat['jsx-runtime'],
		{
			plugins: {
				'react-hooks': reactHooksPlugin,
			},
			rules: {
				...reactHooksPlugin.configs.recommended.rules,
			},
		},
	];
}
