import { defineConfig } from 'eslint/config';
import daffPackagesPlugin from 'eslint-plugin-daff-packages';
import * as jsoncParser from 'jsonc-eslint-parser';

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
