import { defineConfig } from 'eslint/config';
import daffDocsPlugin from 'eslint-plugin-daff-docs';
import daffTsconfigPlugin from 'eslint-plugin-daff-tsconfig';
import rootConfig from '../../eslint.config';

export default defineConfig([
	...rootConfig,
	{
		files: ['**/*.ts'],
		plugins: {
			'daff-tsconfig': daffTsconfigPlugin,
		},
		rules: {
			'daff-tsconfig/require-entry-point-paths': 'error',
		},
	},
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
					prefix: 'daffSf',
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
					prefix: 'daffSf',
					style: 'camelCase'
				}
			],
		}
	},
]);
