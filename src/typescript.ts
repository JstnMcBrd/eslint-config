import tsESLint from 'typescript-eslint';
import type { ESLint, Linter } from 'eslint';

/** @returns ESLint configuration for TypeScript. */
export function typescript(): Linter.FlatConfig[] {
	return [
		// Make sure to ignore the TypeScript output directory
		{
			ignores: ['dist'],
		},
		{
			files: ['**/*.{m,c,}ts{x,}'],
			plugins: {
				'@typescript-eslint': tsESLint.plugin as ESLint.Plugin,
			},
			languageOptions: {
				parser: tsESLint.parser as Linter.ParserModule,
				parserOptions: {
					project: './tsconfig.eslint.json',
					// TODO use this once it stops being experimental
					// EXPERIMENTAL_useProjectService: true,
				},
			},
			rules: {
				// Recommended
				...tsESLint.configs.eslintRecommended.rules,
				...tsESLint.configs.strictTypeChecked[2]?.rules,
				...tsESLint.configs.stylisticTypeChecked[2]?.rules,

				// Overrides
				'no-shadow': 0, // handled by TypeScript
			},
		},
	];
}
