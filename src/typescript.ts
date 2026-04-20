import type { Config } from 'eslint/config';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

/** @returns ESLint configuration for TypeScript */
export function typescript(settings: { react?: boolean }): Config[] {
	return defineConfig(
		{
			files: [`**/*.{m,c,}{js,ts}${settings.react ? '{x,}' : ''}`],
		},

		// Ignore the TypeScript output directory
		globalIgnores(['dist']),

		// Type information
		{
			languageOptions: {
				parserOptions: {
					projectService: true,
				},
			},
		},

		// Defaults
		tseslint.configs.strictTypeChecked,
		tseslint.configs.stylisticTypeChecked,

		// Additions
		{
			rules: {
				'eqeqeq': 'off', // Handled by TypeScript

				// https://github.com/eslint/eslint/issues/20776
				'no-shadow': 'off',
				'@typescript-eslint/no-shadow': 'error',

				'@typescript-eslint/prefer-enum-initializers': 'error',
				'@typescript-eslint/switch-exhaustiveness-check': 'error',
			},
		},
	);
}
