import { defineConfig } from "eslint/config";
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import jasminePlugin from 'eslint-plugin-jasmine';

export const jestEslintConfig = defineConfig([
	{
		files: ['**/*.spec.ts'],
		extends: [
			importPlugin.flatConfigs.typescript,
			jasminePlugin.configs.recommended,
		],
		plugins: {
			jasmine: jasminePlugin,
			jest: jestPlugin,
		},
		rules: {
			"jasmine/new-line-before-expect": "off",
			"jasmine/no-spec-dupes": [
				"warn",
				"branch",
			],
			"jasmine/no-suite-dupes": [
				"warn",
				"branch",
			],
			"jest/max-nested-describe": [
				"warn",
				{
					"max": 4
				}
			],
		}
	},
]);
