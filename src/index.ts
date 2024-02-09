import type { Linter } from 'eslint';

import { javascript } from './javascript.js';
import { typescript } from './typescript.js';
import { react } from './react.js';

interface Settings {
	typescript?: boolean;
	react?: boolean;
}

/** @returns Customizable ESLint configuration. */
export default function eslintConfig(settings?: Settings): Linter.FlatConfig[] {
	return [
		...javascript(),
		...(settings?.typescript ? typescript() : []),
		...(settings?.react ? react() : []),
	];
}
