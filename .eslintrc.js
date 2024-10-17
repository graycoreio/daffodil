module.exports = {
  root: true,
  overrides: [
    {
      files: [
        '*.ts'
      ],
      parserOptions: {
        project: [
          'tsconfig.json',
        ],
        createDefaultProgram: true
      },
      extends: [
        './tools/eslint/config/index.js',
      ],
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              ['builtin', 'external'],
              ['internal']
            ],
            pathGroups: [
              {
                pattern: '@daffodil/**',
                group: 'internal'
              }
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: false
            }
          }
        ]
      }
    },
    {
      files: [
        '*.html'
      ],
      extends: [
        'plugin:@angular-eslint/template/recommended'
      ],
      rules: {}
    }
  ]
}
