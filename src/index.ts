import type { Linter } from 'eslint';

import { javascript } from './javascript.js';
import { react } from './react.js';
import { typescript } from './typescript.js';

interface Settings {
	/** Whether to include lint rules for React projects */
	react?: boolean;
	/** Whether to include lint rules for TypeScript projects */
	typescript?: boolean;
}

/** @returns Customizable ESLint configuration. */
export default function eslintConfig(settings?: Settings): Linter.FlatConfig[] {
	return [
		...javascript(),
		...(settings?.react ? react() : []),
		...(settings?.typescript ? typescript() : []),
	];
}
