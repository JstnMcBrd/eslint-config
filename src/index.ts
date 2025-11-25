import type { Config } from 'eslint/config';
import { defineConfig } from 'eslint/config';

import { javascript } from './javascript.js';
import { react } from './react.js';
import { typescript } from './typescript.js';

interface Settings {
	/** Whether to include lint rules for React projects */
	react?: boolean;
	/** Whether to include lint rules for TypeScript projects */
	typescript?: boolean;
}

/** @returns Customizable ESLint configuration */
export default function eslintConfig(settings?: Settings): Config[] {
	return defineConfig(
		javascript(),
		(settings?.react ? react(settings) : []),
		(settings?.typescript ? typescript() : []),
	);
}
