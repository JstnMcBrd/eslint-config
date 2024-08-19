import typescriptESLint from 'typescript-eslint';
import type { Linter } from 'eslint';

/**
 * // FIXME The types of typescript-eslint are not compatible with @types/eslint.
 * For now, we must solve this by using "as Linter.FlatConfig" typecasting.
 * @see https://github.com/typescript-eslint/typescript-eslint/issues/9110
 */

/** @returns ESLint configuration for TypeScript. */
export function typescript(): Linter.FlatConfig[] {
	return [
		// Ignore the TypeScript output directory
		{
			ignores: ['dist'],
		},

		typescriptESLint.configs.base as Linter.FlatConfig,
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
		typescriptESLint.configs.eslintRecommended as Linter.FlatConfig,
		typescriptESLint.configs.strictTypeChecked[2] as Linter.FlatConfig,
		typescriptESLint.configs.stylisticTypeChecked[2] as Linter.FlatConfig,

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
