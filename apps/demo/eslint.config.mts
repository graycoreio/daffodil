import { defineConfig } from 'eslint/config';
import rootConfig from '../../eslint.config';

export default defineConfig([
	...rootConfig,
	{
		files: ['**/*.component.ts', '**/*.container.ts', '**/*.directive.ts'],
		rules: {
			'@angular-eslint/prefer-on-push-component-change-detection': [
				'off'
      ],
			'@angular-eslint/component-class-suffix': [
				'error',
				{
					suffixes: [
					  'Component',
						'Container'
					]
				}
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'demo',
					style: 'kebab-case'
				}
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'demo',
					style: 'camelCase'
				}
			],
			'no-restricted-imports': [
				'error',
				{
          'patterns': [
						{
            	'group': ['libs/*'],
            	'message': 'Usage of private modules is not allowed. Did you mean to import from @daffodil/*?'
          	}
					],
        }
			],
		}
	},
	{
		files: [
			'**/*.spec.ts'
		],
		rules: {
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'demo',
					style: 'kebab-case'
				}
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'demo',
					style: 'camelCase'
				}
			],
			'@angular-eslint/component-class-suffix': [
				'off',
			],
		}
	},
]);
