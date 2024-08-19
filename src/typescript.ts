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
			plugins: {
				// https://github.com/typescript-eslint/typescript-eslint/issues/9110
				'@typescript-eslint': tsESLint.plugin as ESLint.Plugin,
			},
			languageOptions: {
				// https://github.com/typescript-eslint/typescript-eslint/issues/9110
				parser: tsESLint.parser as Linter.ParserModule,
				parserOptions: {
					project: 'tsconfig.eslint.json',

					/**
					 * In order to use the new projectService feature, we would need to enable default project
					 * for all files not included in the project's tsconfig. But `typescript-eslint` wants you
					 * to only include specific files and blocks wide patterns. But we need to include
					 * arbitrarily wide pattners because this eslint-config could be used in many projects with
					 * diverse structures, so we cannot know what files to include in advance.
					 *
					 * `typescript-eslint` also enforces an 8-file limit, which would not be enough for projects
					 * with many excluded files - for example, unit test `*.test.ts` files.
					 *
					 * Because of these limitations, we cannot use the new projectService feature.
					 */

					// projectService: {
					// 	allowDefaultProject: ['**/*.{m,c,}{js,ts}{x,}'],
					// 	defaultProject: 'tsconfig.json',
					// },
				},
			},
			rules: {
				// Recommended
				...tsESLint.configs.eslintRecommended.rules,
				...tsESLint.configs.strictTypeChecked[2]?.rules,
				...tsESLint.configs.stylisticTypeChecked[2]?.rules,

				// Additions
				'no-shadow': 0,
				'@typescript-eslint/no-shadow': 'error',
				'@typescript-eslint/prefer-enum-initializers': 'error',
			},
		},
	];
}
