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
// The fixture package at test/fixtures/driver mirrors `@daffodil/driver`, which has
// no `driver/` segment: its Magento driver lives under magento/2.4.7/.
const DRIVER_FILENAME = path.join(import.meta.dirname, 'test', 'fixtures', 'driver', 'package.json');

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
                "types": "./types/daffodil-package-driver-magento-2.4.5.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1.mjs"
              },
              "default": {
                "types": "./src/index.d.ts",
                "default": "./fesm2022/daffodil-package.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./types/daffodil-package-driver-magento-2.4.5-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1-testing.mjs"
              },
              "default": {
                "types": "./src/testing/index.d.ts",
                "default": "./fesm2022/daffodil-package-testing.mjs"
              }
            }
          }
        }`,
      },
      // testing subpackage can be missing
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {
              "package-magento-2.4.5": {
                "types": "./types/daffodil-package-driver-magento-2.4.5.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1.mjs"
              },
              "default": {
                "types": "./src/index.d.ts",
                "default": "./fesm2022/daffodil-package.mjs"
              }
            }
          }
        }`,
      },
      // `@daffodil/driver` exposes its Magento driver via `./magento/auto`
      {
        filename: DRIVER_FILENAME,
        code: `{
          "name": "@daffodil/driver",
          "exports": {
            "./magento/auto": {
              "driver-magento-2.4.7": {
                "types": "./types/daffodil-driver-magento-2.4.7.d.ts",
                "default": "./fesm2022/daffodil-driver-magento-2.4.7.mjs"
              },
              "default": {
                "types": "./types/daffodil-driver-magento-2.4.7.d.ts",
                "default": "./fesm2022/daffodil-driver-magento-2.4.7.mjs"
              }
            },
            "./magento/auto/testing": {
              "driver-magento-2.4.7": {
                "types": "./types/daffodil-driver-magento-2.4.7-testing.d.ts",
                "default": "./fesm2022/daffodil-driver-magento-2.4.7-testing.mjs"
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
                "types": "./types/daffodil-package-driver-magento-2.4.5.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./types/daffodil-package-driver-magento-2.4.5-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5-testing.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'missingVersion',
            data: { key: 'package-magento-2.4.6-p1', version: '2.4.6-p1', base: 'driver/magento' },
          },
          {
            messageId: 'missingVersion',
            data: { key: 'package-magento-2.4.6-p1', version: '2.4.6-p1', base: 'driver/magento' },
          },
        ],
      },
      // driver/magento/2.4.6-p1/ exists but has no condition in just auto, no testing
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {
              "package-magento-2.4.5": {
                "types": "./types/daffodil-package-driver-magento-2.4.5.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'missingVersion',
            data: { key: 'package-magento-2.4.6-p1', version: '2.4.6-p1', base: 'driver/magento' },
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
                "types": "./types/daffodil-package-driver-magento-2.4.5.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5.mjs"
              },
              "package-magento-2.4.5": {
                "types": "./types/daffodil-package-driver-magento-2.4.5.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./types/daffodil-package-driver-magento-2.4.5-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1-testing.mjs"
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
              "package-magento-2.4.5": "./fesm2022/daffodil-package-driver-magento-2.4.5.mjs",
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./types/daffodil-package-driver-magento-2.4.5-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1-testing.mjs"
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
                "types": "./types/daffodil-package-driver-magento-2.4.5.d.ts"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./types/daffodil-package-driver-magento-2.4.5-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1-testing.mjs"
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
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./types/daffodil-package-driver-magento-2.4.5-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1-testing.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'typesPathMismatch',
            data: {
              key: 'package-magento-2.4.5',
              actual: './types/daffodil-package-driver-magento-2.4.6-p1.d.ts',
              expected: './types/daffodil-package-driver-magento-2.4.5.d.ts',
            },
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
                "types": "./types/daffodil-package-driver-magento-2.4.5.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./types/daffodil-package-driver-magento-2.4.5-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5-testing.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1-testing.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'defaultPathMismatch',
            data: {
              key: 'package-magento-2.4.5',
              actual: './fesm2022/daffodil-package-driver-magento-2.4.6-p1.mjs',
              expected: './fesm2022/daffodil-package-driver-magento-2.4.5.mjs',
            },
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
                "types": "./types/daffodil-package-driver-magento-2.4.5.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1.mjs"
              }
            },
            "./driver/magento/auto/testing": {
              "package-magento-2.4.5": {
                "types": "./types/daffodil-package-driver-magento-2.4.5-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1-testing.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1-testing.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'defaultPathMismatch',
            data: {
              key: 'package-magento-2.4.5',
              actual: './fesm2022/daffodil-package-driver-magento-2.4.5.mjs',
              expected: './fesm2022/daffodil-package-driver-magento-2.4.5-testing.mjs',
            },
          },
        ],
      },
      // `types` uses the pre-ng-packagr-22 per-entrypoint declaration layout
      {
        filename: FILENAME,
        code: `{
          "name": "@daffodil/package",
          "exports": {
            "./driver/magento/auto": {
              "package-magento-2.4.5": {
                "types": "./driver/magento/2.4.5/index.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.5.mjs"
              },
              "package-magento-2.4.6-p1": {
                "types": "./types/daffodil-package-driver-magento-2.4.6-p1.d.ts",
                "default": "./fesm2022/daffodil-package-driver-magento-2.4.6-p1.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'typesPathMismatch',
            data: {
              key: 'package-magento-2.4.5',
              actual: './driver/magento/2.4.5/index.d.ts',
              expected: './types/daffodil-package-driver-magento-2.4.5.d.ts',
            },
          },
        ],
      },
      // `@daffodil/driver` paths must not include a `driver-` segment after the package name
      {
        filename: DRIVER_FILENAME,
        code: `{
          "name": "@daffodil/driver",
          "exports": {
            "./magento/auto": {
              "driver-magento-2.4.7": {
                "types": "./types/daffodil-driver-driver-magento-2.4.7.d.ts",
                "default": "./fesm2022/daffodil-driver-magento-2.4.7.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'typesPathMismatch',
            data: {
              key: 'driver-magento-2.4.7',
              actual: './types/daffodil-driver-driver-magento-2.4.7.d.ts',
              expected: './types/daffodil-driver-magento-2.4.7.d.ts',
            },
          },
        ],
      },
      // `@daffodil/driver` magento/2.4.7/ exists but has no condition
      {
        filename: DRIVER_FILENAME,
        code: `{
          "name": "@daffodil/driver",
          "exports": {
            "./magento/auto": {
              "default": {
                "types": "./types/daffodil-driver-magento-2.4.7.d.ts",
                "default": "./fesm2022/daffodil-driver-magento-2.4.7.mjs"
              }
            }
          }
        }`,
        errors: [
          {
            messageId: 'missingVersion',
            data: { key: 'driver-magento-2.4.7', version: '2.4.7', base: 'magento' },
          },
        ],
      },
    ],
  });
});
