import { fixupConfigRules } from '@eslint/compat';
import importPlugin from 'eslint-plugin-import';

// eslint-plugin-import still calls source code APIs removed in ESLint 10
export const importRecommendedConfig = fixupConfigRules(importPlugin.flatConfigs.recommended);
export const importTypescriptConfig = fixupConfigRules(importPlugin.flatConfigs.typescript);
