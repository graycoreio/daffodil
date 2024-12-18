module.exports = {
  extends: '../../.eslintrc.js',
  ignorePatterns: [
    'src/test.ts',
    'src/polyfills.ts',
    'node_modules/**/*'
  ],
  overrides: [
    {
      files: [
        '*.ts'
      ],
      parserOptions: {
        project: [
          'apps/daffio/tsconfig.app.json',
          'apps/daffio/tsconfig.spec.json'
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
