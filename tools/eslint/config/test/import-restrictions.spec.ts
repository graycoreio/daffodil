import { ESLint } from 'eslint';
import { resolve } from 'node:path';
import {
  describe,
  expect,
  it,
} from 'vitest';

const repositoryRoot = resolve(import.meta.dirname, '../../../..');

describe.each([
  ['root', 'eslint.config.mts', 'libs/core/src/import-check.ts'],
  ['daffio', 'apps/daffio/eslint.config.mts', 'apps/daffio/src/app/import-check.component.ts'],
  ['demo', 'apps/demo/eslint.config.mts', 'apps/demo/src/app/import-check.component.ts'],
])('import restrictions for %s', (_name, configPath, fileName) => {
  it.each([
    ['libs/example', 1],
    ['apps/example', 1],
    ['./example', 0],
    ['../example', 0],
    ['@daffodil/core', 0],
    ['rxjs', 0],
    ['rxjs/Rx', 1],
  ])('checks import from %s', async (importPath, expectedErrors) => {
    const eslint = new ESLint({
      cwd: repositoryRoot,
      overrideConfigFile: configPath,
    });

    const [result] = await eslint.lintText(
      `import { Something } from '${importPath}';\nexport { Something };\n`,
      {
        filePath: fileName,
      },
    );

    const restrictions = result.messages.filter(
      (message) => message.ruleId === 'no-restricted-imports',
    );

    expect(restrictions).toHaveLength(expectedErrors);
  });
});
