// This is only a type-shim and is not meant to be a perfect representation of eslint-plugin-react.
// https://github.com/jsx-eslint/eslint-plugin-react/issues/3776

declare module 'eslint-plugin-react' {
	import type { ESLint } from 'eslint';
	const plugin: Omit<ESLint.Plugin, 'configs'> & {
		// eslint-plugin-react does not use FlatConfig yet
		configs: Record<string, ESLint.ConfigData>;
	};
	export default plugin;
}
