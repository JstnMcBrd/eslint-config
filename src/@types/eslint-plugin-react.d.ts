// This is only a type-shim and is not meant to be a perfect representation
// https://github.com/jsx-eslint/eslint-plugin-react/issues/3776

declare module 'eslint-plugin-react' {
	import type { ESLint, Linter } from 'eslint';
	const plugin: {
		deprecatedRules: ESLint.Plugin['rules'];
		rules: ESLint.Plugin['rules'];
		configs: {
			'recommended': ESLint.ConfigData;
			'all': ESLint.ConfigData;
			'jsx-runtime': ESLint.ConfigData;
			'flat': {
				'recommended': Linter.FlatConfig;
				'all': Linter.FlatConfig;
				'jsx-runtime': Linter.FlatConfig;
			};
		};
	};
	export default plugin;
}
