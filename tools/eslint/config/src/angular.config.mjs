import { defineConfig } from "eslint/config";
import angularEslint from 'angular-eslint';
import importPlugin from 'eslint-plugin-import';

/**
 * The Angular ESLint config that we use in Daffodil.
 */
export const angularEslintConfig = defineConfig([
	{
		files: ['**/*.html'],
		extends: [
			...angularEslint.default.configs.templateRecommended,
		],
		rules: {}
	},
	{
		files: ['**/*.ts'],
		extends: [
			...angularEslint.default.configs.tsRecommended,
		],
		rules: {
			"@angular-eslint/component-selector": [
				"error",
				{
					"style": "kebab-case",
					"type": "element",
					"prefix": ""
				}
			],
			"@angular-eslint/contextual-lifecycle": "error",
			"@angular-eslint/directive-class-suffix": "error",
			"@angular-eslint/directive-selector": [
				"error",
				{
					"style": "camelCase",
					"type": "attribute",
					"prefix": ""
				}
			],
			"@angular-eslint/no-conflicting-lifecycle": "error",
			"@angular-eslint/no-input-rename": "error",
			"@angular-eslint/no-inputs-metadata-property": "error",
			"@angular-eslint/no-output-native": "error",
			"@angular-eslint/no-output-on-prefix": "error",
			"@angular-eslint/no-output-rename": "error",
			"@angular-eslint/no-outputs-metadata-property": "error",
			"@angular-eslint/prefer-standalone": "off",
			"@angular-eslint/prefer-inject": "off",
			'@angular-eslint/prefer-on-push-component-change-detection': [
				'error'
			],
			"@angular-eslint/use-lifecycle-interface": "error",
			"@angular-eslint/use-pipe-transform-interface": "error",
			"no-restricted-globals": [
				"error",
				{
					"message": "Inject `DOCUMENT` from `@angular/common` and access `window` via `document.defaultView`.",
					"name": "window"
				}
			],
			"no-restricted-imports": [
				"error",
				{
					"message": "Please import directly from \"rxjs\" instead",
					"name": "rxjs/Rx"
				}
			],
		},
	},
	{
		files: ['**/*.spec.ts'],
		extends: [
			importPlugin.flatConfigs.typescript,
		],
		rules: {
			'@angular-eslint/prefer-on-push-component-change-detection': [
				0
			],
			"import/no-deprecated": "off",
		}
	},
]);
