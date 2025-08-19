import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import stylisticPlugin from '@stylistic/eslint-plugin'
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import modulesNewLinePlugin from 'eslint-plugin-modules-newlines';

export const baseEslintConfig = defineConfig([
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
    ],
    plugins: {
      jsdoc: jsdocPlugin,
      '@stylistic': stylisticPlugin,
      'unused-imports': unusedImportsPlugin,
      'modules-newlines': modulesNewLinePlugin,
    },
    rules: {
      "@stylistic/indent": [
        "error",
        2,
        {
          "SwitchCase": 1
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
        {
          "allowTemplateLiterals": true
        }
      ],
      "@stylistic/semi": [
        "error",
        "always",
      ],
      "@stylistic/type-annotation-spacing": "error",
      "arrow-body-style": "error",
      "arrow-parens": "off",
      "brace-style": [
        "error",
        "1tbs",
      ],
      "comma-dangle": [
        "error",
        "always-multiline",
      ],
      "complexity": "off",
      "constructor-super": "error",
      "curly": "error",
      "dot-notation": "off",
      "eol-last": "error",
      "eqeqeq": [
        "error",
        "smart"
      ],
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
      "id-match": "off",
      "import/no-unassigned-import": [
        "error"
      ],
      "import/order": [
        "error",
        {
          "alphabetize": {
            "caseInsensitive": false,
            "order": "asc"
          },
          "groups": [
            [
              "builtin",
              "external"
            ],
            [
              "internal"
            ]
          ],
          "newlines-between": "always",
          "pathGroups": [
            {
              "group": "internal",
              "pattern": "@daffodil/**"
            }
          ],
          "pathGroupsExcludedImportTypes": [
            "builtin"
          ]
        }
      ],
      "jsdoc/check-alignment": "error",
      "jsdoc/no-types": "error",
      "max-classes-per-file": "off",
      "max-len": "off",
      'modules-newlines/import-declaration-newline': 'warn',
      'modules-newlines/export-declaration-newline': 'warn',
      "new-parens": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-cond-assign": "error",
      "no-console": [
        "error",
        {
          "allow": [
            "Console",
            "assert",
            "clear",
            "context",
            "count",
            "countReset",
            "dir",
            "dirxml",
            "error",
            "group",
            "groupCollapsed",
            "groupEnd",
            "log",
            "profile",
            "profileEnd",
            "table",
            "timeLog",
            "timeStamp",
            "warn"
          ]
        }
      ],
      "no-debugger": "error",
      "no-empty": "off",
      "no-eval": "error",
      "no-fallthrough": "error",
      "no-invalid-this": "off",
      "no-multiple-empty-lines": "off",
      "no-new-wrappers": "error",
      "no-shadow": "off",
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-underscore-dangle": "off",
      "no-unsafe-finally": "error",
      "no-unused-labels": "error",
      "no-use-before-define": "off",
      "no-var": "error",
      "object-curly-newline": [
        "error",
        {
          "ExportDeclaration": {
            "minProperties": 2,
            "multiline": true
          },
          "ImportDeclaration": {
            "minProperties": 2,
            "multiline": true
          }
        }
      ],
      "object-curly-spacing": [
        "error",
        "always",
        {
          "arraysInObjects": false,
          "objectsInObjects": false
        }
      ],
      "object-shorthand": "error",
      "one-var": [
        "error",
        "never"
      ],
      "prefer-arrow-callback": [
        "error"
      ],
      "prefer-const": "error",
      "quote-props": [
        "error",
        "as-needed",
      ],
      "radix": "error",
      "sort-keys": "off",
      "space-before-function-paren": [
        "error",
        {
          "anonymous": "never",
          "asyncArrow": "always",
          "named": "never"
        }
      ],
      "unused-imports/no-unused-imports": "error",
      "use-isnan": "error",
      "valid-typeof": "off"
    },
  },
]);
