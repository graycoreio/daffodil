import { defineConfig, globalIgnores } from "eslint/config";
import { angularEslintConfig, baseEslintConfig, jestEslintConfig, packageJsonEslintConfig, typescriptEslintConfig } from './dist/eslint-config';

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
