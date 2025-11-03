/**
 * TODO Once strip-types is stable in Node.js, remove jiti dependency
 * @see https://eslint.org/docs/latest/use/configure/configuration-files#native-typescript-support
 */

// Requires you to run `npm run build` before linting
import eslintConfig from './dist/index.js';

export default eslintConfig({ typescript: true });
