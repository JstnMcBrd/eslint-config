import type { ConfigObject } from 'eslint/config';
import { defineConfig } from 'eslint/config';

import { javascript } from './javascript.ts';
import { typescript } from './typescript.ts';

/** @returns ESLint configuration for TypeScript projects */
export default function eslintConfig(): ConfigObject[] {
	return defineConfig(
		javascript(),
		typescript(),
	);
}
