import typescriptESLint from 'typescript-eslint';
import type { Linter } from 'eslint';

/** @returns ESLint configuration for TypeScript. */
export function typescript(): Linter.Config[] {
	return [
		// Ignore the TypeScript output directory
		{
			ignores: ['dist'],
		},

		typescriptESLint.configs.base,
		{
			languageOptions: {
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
		},

		// Recommended
		typescriptESLint.configs.eslintRecommended,
		typescriptESLint.configs.strictTypeChecked[2] ?? {},
		typescriptESLint.configs.stylisticTypeChecked[2] ?? {},

		// Additions
		{
			rules: {
				'no-shadow': 0,
				'@typescript-eslint/no-shadow': 'error',
				'@typescript-eslint/prefer-enum-initializers': 'error',
			},
		},
	];
}
