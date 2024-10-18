module.exports = {
  plugins: [
    'modules-newlines',
    'jasmine',
    'jest',
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "eslint-plugin-prefer-arrow",
    "@stylistic"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@angular-eslint/recommended",
    'plugin:@angular-eslint/template/process-inline-templates',
    'plugin:import/typescript',
    'plugin:jasmine/recommended',
  ],
  rules: {
    // ng-cli-compat
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "sort-keys": "off",
    "@angular-eslint/component-class-suffix": "error",
    "@angular-eslint/component-selector": [
      "error",
      {
        "type": "element",
        "prefix": "app",
        "style": "kebab-case"
      }
    ],
    "@angular-eslint/contextual-lifecycle": "error",
    "@angular-eslint/directive-class-suffix": "error",
    "@angular-eslint/directive-selector": [
      "error",
      {
        "type": "attribute",
        "prefix": "app",
        "style": "camelCase"
      }
    ],
    "@angular-eslint/no-conflicting-lifecycle": "error",
    "@angular-eslint/no-host-metadata-property": "error",
    "@angular-eslint/no-input-rename": "error",
    "@angular-eslint/no-inputs-metadata-property": "error",
    "@angular-eslint/no-output-native": "error",
    "@angular-eslint/no-output-on-prefix": "error",
    "@angular-eslint/no-output-rename": "error",
    "@angular-eslint/no-outputs-metadata-property": "error",
    "@angular-eslint/use-lifecycle-interface": "error",
    "@angular-eslint/use-pipe-transform-interface": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/no-restricted-types": [
      "error",
      {
        "types": {
          "Object": {
            "message": "Avoid using the `Object` type. Did you mean `object`?"
          },
          "Function": {
            "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
          },
          "Boolean": {
            "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
          },
          "Number": {
            "message": "Avoid using the `Number` type. Did you mean `number`?"
          },
          "String": {
            "message": "Avoid using the `String` type. Did you mean `string`?"
          },
          "Symbol": {
            "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
          }
        }
      }
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-object-type": [
      "error",
      {
        allowInterfaces: 'always'
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        "ignoreParameters": true
      }
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        "path": "always",
        "types": "prefer-import",
        "lib": "always"
      }
    ],
    "@typescript-eslint/unified-signatures": "error",
    "complexity": "off",
    "constructor-super": "error",
    "eqeqeq": ["error", "smart"],
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "import/no-deprecated": "warn",
    "jsdoc/no-types": "error",
    "max-classes-per-file": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "log",
          "warn",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-debugger": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-new-wrappers": "error",
    "no-restricted-imports": [
      "error",
      {
        "name": "rxjs/Rx",
        "message": "Please import directly from 'rxjs' instead"
      }
    ],
    "@typescript-eslint/no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-arrow/prefer-arrow-functions": "error",
    "prefer-const": "error",
    "radix": "error",
    "use-isnan": "error",
    "valid-typeof": "off",

    // ng-cli-compat--formatting-add-on
    "arrow-body-style": "error",
    "arrow-parens": "off",
    "comma-dangle": "off",
    "curly": "error",
    "eol-last": "error",
    "jsdoc/check-alignment": "error",
    "max-len": [
      "error",
      {
        "code": 140
      }
    ],
    "new-parens": "error",
    "no-multiple-empty-lines": "off",
    "no-trailing-spaces": "error",
    "quote-props": ["error", "as-needed"],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "asyncArrow": "always",
        "named": "never"
      }
    ],
    "@stylistic/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@stylistic/quotes": [
      "error",
      "single",
      { "allowTemplateLiterals": true }
    ],
    "@stylistic/semi": ["error", "always"],
    "@stylistic/type-annotation-spacing": "error",

    // custom
    "jest/max-nested-describe": [
      "warn",
      {
        "max": 4
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
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
    'modules-newlines/import-declaration-newline': 'warn',
    'modules-newlines/export-declaration-newline': 'warn',
    '@stylistic/indent': [
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
    "no-restricted-globals": [
      "error",
      {
        "name": "window",
        "message": "Inject `DOCUMENT` from `@angular/common` and access `window` via `document.defaultView`."
      },
    ]
  }
}
