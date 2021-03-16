module.exports = {
  plugins: [
    'modules-newline',
    'jasmine'
  ],
  extends: [
    'plugin:@angular-eslint/ng-cli-compat',
    'plugin:@angular-eslint/ng-cli-compat--formatting-add-on',
    'plugin:@angular-eslint/template/process-inline-templates',
    'plugin:import/typescript',
    'plugin:jasmine/recommended',
  ],
  rules: {
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        allowStandaloneDeclarations: true
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE', 'camelCase']
      }
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/member-ordering': 'off',
    'import/no-unassigned-import': ['error'],
    'modules-newline/import-declaration-newline': 'warn',
    'modules-newline/export-declaration-newline': 'warn',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: {multiline: true, minProperties: 2},
        ExportDeclaration: {multiline: true, minProperties: 2}
      }
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: false
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],
    '@angular-eslint/component-class-suffix': [
      'error',
      {
        suffixes: [
          'Component'
        ]
      }
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'angle-bracket'
      }
    ],
    '@typescript-eslint/consistent-type-definitions': [ 'error', 'interface'],
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit'
      }
    ],
    'brace-style': [
      'error',
      '1tbs'
    ],
    'no-trailing-spaces': 'error',
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'id-blacklist': 'off',
    'id-match': 'off',
    'no-underscore-dangle': 'off',
    'max-len': 'off',
    'jasmine/no-suite-dupes': ['warn', 'branch'],
    'jasmine/no-spec-dupes': ['warn', 'branch'],
    'jasmine/new-line-before-expect': 'off',
  }
}
