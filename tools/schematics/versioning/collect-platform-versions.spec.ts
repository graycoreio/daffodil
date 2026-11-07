import {
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

import { collectPlatformVersions } from './collect-platform-versions';

describe('@daffodil/commerce/versioning | collectPlatformVersions', () => {
  let root: string;

  const writePackage = (dir: string, packageJson: object) => {
    mkdirSync(join(root, dir), { recursive: true });
    writeFileSync(join(root, dir, 'package.json'), JSON.stringify(packageJson));
  };

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'daff-collect-platform-versions-'));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  it('collects versions from `./driver/<platform>/auto` exports', async () => {
    writePackage('product', {
      name: '@daffodil/product',
      exports: {
        './driver/magento/auto': {
          'product-magento-2.4.6': './a.js',
          'product-magento-2.4.7': './b.js',
          default: './b.js',
        },
        './driver/magento/auto/testing': {
          'product-magento-2.4.7': './c.js',
          default: './c.js',
        },
      },
    });

    expect(await collectPlatformVersions([`${root}/*`])).toEqual({
      magento: {
        product: ['2.4.6', '2.4.7'],
      },
    });
  });

  it('collects versions from `./<platform>/auto` exports', async () => {
    writePackage('driver', {
      name: '@daffodil/driver',
      exports: {
        './magento/auto': {
          'driver-magento-2.4.7': './a.js',
          default: './a.js',
        },
        './magento/auto/testing': {
          'driver-magento-2.4.7': './b.js',
          default: './b.js',
        },
      },
    });

    expect(await collectPlatformVersions([`${root}/*`])).toEqual({
      magento: {
        driver: ['2.4.7'],
      },
    });
  });

  it('ignores exports that are not auto entrypoints of a supported platform', async () => {
    writePackage('driver', {
      name: '@daffodil/driver',
      exports: {
        './magento/automatic': {
          'driver-magento-2.4.7': './a.js',
        },
        './unknown/auto': {
          'driver-unknown-1.0.0': './b.js',
        },
        './nested/magento/auto': {
          'driver-magento-2.4.6': './c.js',
        },
      },
    });

    expect(await collectPlatformVersions([`${root}/*`])).toEqual({});
  });
});
