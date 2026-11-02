import { defineConfig, globalIgnores } from "eslint/config";
import { angularEslintConfig, baseEslintConfig, jestEslintConfig, typescriptEslintConfig } from './dist/eslint-config';
import {config as packageJsonEslintConfig} from './dist/eslint/daff-packages'

export default defineConfig([
  globalIgnores([
    "node_modules"
  ]),
  baseEslintConfig,
  typescriptEslintConfig,
  angularEslintConfig,
  jestEslintConfig,
  packageJsonEslintConfig,
  {
    files: ['**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'rxjs/Rx',
              message: 'Please import directly from "rxjs" instead',
            },
          ],
          patterns: [
            {
              group: ['libs/**', 'apps/**'],
              message: 'Use relative imports or public @daffodil package imports instead of repository-root paths.',
            },
          ],
        },
      ],
    },
  },
]);
