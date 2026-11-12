import { defineConfig } from 'eslint/config';
import jasminePlugin from 'eslint-plugin-jasmine';
import jestPlugin from 'eslint-plugin-jest';

import { importTypescriptConfig } from './import-plugin.js';

export const jestEslintConfig = defineConfig([
  {
    files: ['**/*.spec.ts'],
    extends: [
      importTypescriptConfig,
      jasminePlugin.configs.recommended,
    ],
    plugins: {
      jasmine: jasminePlugin,
      jest: jestPlugin,
    },
    rules: {
      'jasmine/new-line-before-expect': 'off',
      'jasmine/no-spec-dupes': ['warn', 'branch'],
      'jasmine/no-suite-dupes': ['warn', 'branch'],
      'jest/max-nested-describe': ['warn', { max: 4 }],
    },
  },
]);
