import { defineConfig } from 'eslint/config';
import daffDocsPlugin from 'eslint-plugin-daff-docs';
import rootConfig from '../../eslint.config.mjs';

export default defineConfig([
	...rootConfig,
	{
		files: ['**/*.component.ts', '**/*.container.ts', '**/*.directive.ts'],
		plugins: {
					'daff-docs': daffDocsPlugin,
		},
		rules: {
			'@angular-eslint/component-class-suffix': [
				'error',
				{
					suffixes: [
						'Component'
					]
				}
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'daff-sf',
					style: 'kebab-case'
				}
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'daff-sf',
					style: 'camelCase'
				}
			],
			'daff-docs/docs-private-hostbinding-lifecycle': 'error',
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
					prefix: 'daff-sf',
					style: 'kebab-case'
				}
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'daff-sf',
					style: 'camelCase'
				}
			],
		}
	},
]);
