import { defineConfig } from 'eslint/config';
import * as jsoncParser from 'jsonc-eslint-parser';

import magentoDriverVersions from './magento-driver-versions';

export const rules = {
  'magento-driver-versions': magentoDriverVersions,
};

export const config = defineConfig([
  {
    files: ['libs/*/package.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      'daff-packages': { rules },
    },
    rules: { 'daff-packages/magento-driver-versions': 'error' },
  },
]);
