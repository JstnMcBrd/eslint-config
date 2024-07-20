// This is only a type-shim and is not meant to be a perfect representation

declare module 'eslint-plugin-react-hooks' {
	import type { ESLint } from 'eslint';
	const plugin: {
		rules: ESLint.Plugin['rules'];
		// Does not use FlatConfig yet
		configs: {
			recommended: ESLint.ConfigData;
		};
	};
	export default plugin;
}
