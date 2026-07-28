import { defineConfig } from 'eslint/config';
import * as jsoncParser from 'jsonc-eslint-parser';
import daffPackagesPlugin from 'eslint-plugin-daff-packages';

export const packageJsonEslintConfig = defineConfig([
	{
		files: ['libs/*/package.json'],
		languageOptions: {
			parser: jsoncParser,
		},
		plugins: {
			'daff-packages': daffPackagesPlugin,
		},
		rules: { 'daff-packages/magento-driver-versions': 'error' },
	},
]);
