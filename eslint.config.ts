// FIXME Need the `unstable_native_nodejs_ts_config` flag to use `eslint.config.ts`
// https://github.com/eslint/eslint/issues/19985

// Must run `npm run build` before linting
import eslintConfig from './dist/index.js';

export default eslintConfig({ typescript: true });
