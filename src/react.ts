import reactPlugin from '@eslint-react/eslint-plugin';
import type { Config } from 'eslint/config';
import { defineConfig } from 'eslint/config';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

/** @returns ESLint configuration for React. */
export function react(settings: { typescript?: boolean }): Config[] {
	return defineConfig(
		{
			languageOptions: {
				globals: globals.browser,
			},
		},

		// Recommended
		reactPlugin.configs[settings.typescript ? 'strict-type-checked' : 'strict'],
		reactHooksPlugin.configs.flat['recommended-latest'],
	);
}
