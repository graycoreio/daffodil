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
          'apps/daffio/tsconfig.app.json',
          'apps/daffio/tsconfig.spec.json',
        ],
        createDefaultProgram: true
      },
      rules: {
        // TODO: Remove once the rule is added to the global eslint config
        '@angular-eslint/prefer-on-push-component-change-detection': [
          'error'
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
        '*.spec.ts'
      ],
      rules: {
        '@angular-eslint/prefer-on-push-component-change-detection': [
          0
        ],
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
