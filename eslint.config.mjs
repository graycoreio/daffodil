import { defineConfig, globalIgnores } from "eslint/config";
import { angularEslintConfig, baseEslintConfig, jestEslintConfig, packageJsonEslintConfig, typescriptEslintConfig } from './tools/eslint/config/index.mjs';

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
