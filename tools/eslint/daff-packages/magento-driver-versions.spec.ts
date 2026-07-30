import { RuleTester } from 'eslint';
import * as jsoncParser from 'jsonc-eslint-parser';
import * as path from 'node:path';
import { describe } from 'vitest';

import { rule } from './magento-driver-versions';

// The fixture package at test/fixtures/package has driver/magento/2.4.5/
// and driver/magento/2.4.6-p1/ directories, so package.json files linted
// with this filename must declare `package-magento-2.4.5` and
// `package-magento-2.4.6-p1` conditions.
const FIXTURE_PKG_DIR = path.join(import.meta.dirname, 'test', 'fixtures', 'package');
const FILENAME = path.join(FIXTURE_PKG_DIR, 'package.json');

const ruleTester = new RuleTester({
  languageOptions: {
    parser: jsoncParser,
  },
});

describe('magento-driver-versions', () => {
  ruleTester.run('magento-driver-versions', rule, {
    valid: [
      // every version directory has a matching condition in both subpackages
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1.mjs"
              },
              "default": {
                "types": "./src/index.d.ts",
                "default": "./fesm2022/daffodil-package.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1-testing.mjs"
              },
              "default": {
                "types": "./src/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-testing.mjs"
              }
            }
          }
        }`,
      },
      // no magento auto export at all
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            ".": "./index.mjs"
          }
        }`,
      },
      // not a package.json
      {
        filename: path.join(FIXTURE_PKG_DIR, 'other.json'),
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {},
            "./driver/magento/auto/testing": {}
          }
        }`,
      },
    ],
    invalid: [
      // driver/magento/2.4.6-p1/ exists but has no condition in either subpackage
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5-testing.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'missingVersion',
            data: { key: 'package-magento-2.4.6-p1', version: '2.4.6-p1' },
          },
          {
            messageId: 'missingVersion',
            data: { key: 'package-magento-2.4.6-p1', version: '2.4.6-p1' },
          },
        ],
      },
      // key is not a valid <pkg>-magento-X.Y.Z condition
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {
              "package-magento-latest": {
                "types": "./driver/magento/2.4.5/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5.mjs"
              },
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1-testing.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'invalidKey',
            data: { key: 'package-magento-latest', packageName: 'package' },
          },
        ],
      },
      // condition value must be an object, not a path string
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {
              "package-magento-2.4.5": "./fesm2022/daffodil-package-magento-2.4.5.mjs",
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1-testing.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'entryNotObject',
            data: { key: 'package-magento-2.4.5' },
          },
        ],
      },
      // condition is missing its `default` field
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/index.d.ts"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1-testing.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'missingField',
            data: { key: 'package-magento-2.4.5', field: 'default' },
          },
        ],
      },
      // `types` path references a different version's directory
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.6-p1/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1-testing.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'typesPathMismatch',
            data: { key: 'package-magento-2.4.5', version: '2.4.5' },
          },
        ],
      },
      // `default` path references a different version's fesm bundle
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1-testing.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'defaultPathMismatch',
            data: { key: 'package-magento-2.4.5', version: '2.4.5', suffix: '' },
          },
        ],
      },
      // testing conditions must use the `-testing` fesm suffix
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./driver/magento/2.4.6-p1/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-magento-2.4.6-p1-testing.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'defaultPathMismatch',
            data: { key: 'package-magento-2.4.5', version: '2.4.5', suffix: '-testing' },
          },
        ],
      },
    ],
  });
});
