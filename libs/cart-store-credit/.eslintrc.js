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
          'libs/cart/tsconfig.lib.json',
          'libs/cart/tsconfig.spec.json'
        ],
        createDefaultProgram: true
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
            prefix: 'lib',
            style: 'kebab-case'
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
