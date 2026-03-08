import { join } from 'path';

import {
  PackagePathConfig,
  derivePathConfig,
} from './path-config';

const REPO_ROOT = join(__dirname, '..', '..', '..', '..');

describe('derivePathConfig', () => {
  let config: PackagePathConfig;

  beforeAll(() => {
    config = derivePathConfig(REPO_ROOT);
  });

  it('includes tools/schematics/ in shared paths', () => {
    expect(config.shared).toContain('tools/schematics/');
  });

  it('includes libs/core/ in shared paths', () => {
    expect(config.shared).toContain('libs/core/');
  });

  it('includes libs/driver/src/ in shared paths (root of package with driver subpaths)', () => {
    expect(config.shared).toContain('libs/driver/src/');
  });

  it('includes libs/product/src/ in shared paths', () => {
    expect(config.shared).toContain('libs/product/src/');
  });

  it('includes libs/navigation/src/ in shared paths', () => {
    expect(config.shared).toContain('libs/navigation/src/');
  });

  it('includes libs/external-router/src/ in shared paths', () => {
    expect(config.shared).toContain('libs/external-router/src/');
  });

  it('includes libs/dev-tools/ in demoOnly paths', () => {
    expect(config.demoOnly).toContain('libs/dev-tools/');
  });

  it('discovers in-memory driver paths', () => {
    expect(config.drivers['in-memory']).toBeDefined();
    expect(config.drivers['in-memory']).toContain('libs/driver/in-memory/');
    expect(config.drivers['in-memory']).toContain('libs/product/driver/in-memory/');
    expect(config.drivers['in-memory']).toContain('libs/navigation/driver/in-memory/');
    expect(config.drivers['in-memory']).toContain('libs/external-router/driver/in-memory/');
  });

  it('discovers magento driver paths', () => {
    expect(config.drivers['magento']).toBeDefined();
    expect(config.drivers['magento']).toContain('libs/driver/magento/');
    expect(config.drivers['magento']).toContain('libs/product/driver/magento/');
    expect(config.drivers['magento']).toContain('libs/navigation/driver/magento/');
    expect(config.drivers['magento']).toContain('libs/external-router/driver/magento/');
  });

  it('discovers shopify driver paths', () => {
    expect(config.drivers['shopify']).toBeDefined();
    expect(config.drivers['shopify']).toContain('libs/driver/shopify/');
    expect(config.drivers['shopify']).toContain('libs/product/driver/shopify/');
    expect(config.drivers['shopify']).toContain('libs/navigation/driver/shopify/');
    expect(config.drivers['shopify']).toContain('libs/external-router/driver/shopify/');
  });
});
