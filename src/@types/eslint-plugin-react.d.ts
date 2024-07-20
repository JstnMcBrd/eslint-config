// This is only a type-shim and is not meant to be a perfect representation

declare module 'eslint-plugin-react' {
	import type { ESLint } from 'eslint';
	const plugin: {
		deprecatedRules: ESLint.Plugin['rules'];
		rules: ESLint.Plugin['rules'];
		// Does not use FlatConfig yet
		configs: {
			'recommended': ESLint.ConfigData;
			'all': ESLint.ConfigData;
			'jsx-runtime': ESLint.ConfigData;
		};
	};
	export default plugin;
}
