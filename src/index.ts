import type { Linter } from 'eslint';

import { javascript } from './javascript.js';
import { react } from './react.js';
import { typescript } from './typescript.js';

interface Settings {
	react?: boolean;
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
