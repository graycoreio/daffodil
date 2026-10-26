import { ESLint } from 'eslint';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import {
  describe,
  expect,
  it,
} from 'vitest';

const repositoryRoot = resolve(import.meta.dirname, '../../../..');
// Load the built package through Node, as consumers do, rather than Vitest's source transforms.
const require = createRequire(import.meta.url);
const { angularEslintConfig } = require(
  resolve(repositoryRoot, 'dist/eslint-config/index.js'),
);

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

    expect(result.messages).toEqual(expectedErrors === 0 ? [] : [
      expect.objectContaining({
        ruleId: 'no-restricted-imports',
        severity: 2,
      }),
    ]);
  });
});

describe('published Angular config', () => {
  it.each([
    ['libs/example', 0],
    ['apps/example', 0],
    ['rxjs/Rx', 1],
  ])('checks import from %s', async (importPath, expectedErrors) => {
    const eslint = new ESLint({
      cwd: repositoryRoot,
      overrideConfigFile: true,
      overrideConfig: angularEslintConfig,
    });

    const [result] = await eslint.lintText(
      `import { Something } from '${importPath}';\nexport { Something };\n`,
      { filePath: 'consumer/example.ts' },
    );

    expect(result.messages).toEqual(expectedErrors === 0 ? [] : [
      expect.objectContaining({
        ruleId: 'no-restricted-imports',
        severity: 2,
      }),
    ]);
  });
});
