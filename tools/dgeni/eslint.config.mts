import { defineConfig } from 'eslint/config';
import rootConfig from '../../eslint.config';
export default defineConfig([
	...rootConfig,
	{
		files: ['**/*.ts'],
		rules: {
			'no-case-declarations': 'warn',
			'no-useless-escape': 'warn',
			'no-unsafe-optional-chaining': 'warn'
		}
	}
]);
