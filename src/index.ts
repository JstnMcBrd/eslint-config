import type { ConfigObject } from 'eslint/config';
import { defineConfig } from 'eslint/config';

import { javascript } from './javascript.ts';
import { typescript } from './typescript.ts';

interface Settings {
	/** Whether to include lint rules for TypeScript projects */
	typescript?: boolean;
}

/** @returns Customizable ESLint configuration */
export default function eslintConfig(settings?: Settings): ConfigObject[] {
	return defineConfig(
		javascript(),
		(settings?.typescript ? typescript() : []),
	);
}
