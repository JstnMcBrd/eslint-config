import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
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
				'@typescript-eslint': typescriptPlugin as unknown as ESLint.Plugin,
			},
			languageOptions: {
				parser: typescriptParser as Linter.ParserModule,
				parserOptions: {
					project: './tsconfig.eslint.json',
					// TODO use this once @typescript-eslint hits v7 and it stops being experimental
					// EXPERIMENTAL_useProjectService: true,
				},
			},
			rules: {
				// Recommended
				...typescriptPlugin.configs['strict-type-checked']?.rules,
				...typescriptPlugin.configs['stylistic-type-checked']?.rules,

				// Overrides
				'no-shadow': 0, // handled by TypeScript
				'no-undef': 0, // handled by TypeScript
			},
		},
	];
}
