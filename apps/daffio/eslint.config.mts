import { defineConfig } from 'eslint/config';
import rootConfig from '../../eslint.config';
export default defineConfig([
	...rootConfig,
	{
		files: ['**/*.component.ts', '**/*.container.ts', '**/*.directive.ts'],
		rules: {
			'@angular-eslint/component-class-suffix': [
				'error',
				{
					suffixes: [
						'Component',
						'Container',
					]
				}
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'daffio',
					style: 'kebab-case'
				}
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'daffio',
					style: 'camelCase'
				}
			],
		}
	},
	{
		files: [
			'**/*.spec.ts'
		],
		rules: {
			'@angular-eslint/prefer-on-push-component-change-detection': [
				0
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'daffio',
					style: 'kebab-case'
				}
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'daffio',
					style: 'camelCase'
				}
			],
		}
	},
]);
