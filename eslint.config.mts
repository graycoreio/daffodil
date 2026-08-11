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
]);
