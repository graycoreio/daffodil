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
          'libs/cart-customer/tsconfig.lib.json',
          'libs/cart-customer/tsconfig.spec.json'
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
            type: 'lib',
            prefix: 'kebab-case'
          }
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'lib',
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
