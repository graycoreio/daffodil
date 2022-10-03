module.exports = {
  extends: '../../.eslintrc.js',
  ignorePatterns: [
    '!**/*'
  ],
  overrides: [
    {
      files: [
        '*.ts'
      ],
      parserOptions: {
        project: [
          'apps/demo/tsconfig.app.json',
          'apps/demo/tsconfig.spec.json',
        ],
        createDefaultProgram: true
      },
      rules: {
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
        'no-restricted-imports': ['error', {
          'patterns': [{
            'group': ['libs/*'],
            'message': 'Usage of private modules not allowed. Did you mean to import from @daffodil/*?'
          }],
        }],
      }
    },
    {
      files: [
        '*.html'
      ],
      rules: {}
    }
  ]
}
