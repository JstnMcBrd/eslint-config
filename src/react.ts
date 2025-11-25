import eslintReact from '@eslint-react/eslint-plugin';
import type { Config } from 'eslint/config';
import { defineConfig } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';

/** @returns ESLint configuration for React */
export function react(settings: { typescript?: boolean }): Config[] {
	return defineConfig(
		// Defaults
		eslintReact.configs[settings.typescript ? 'strict-type-checked' : 'strict'],
		reactHooks.configs.flat['recommended-latest'],
	);
}
