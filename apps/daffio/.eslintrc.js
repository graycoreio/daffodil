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
        '*.html'
      ],
      rules: {}
    }
  ]
}
