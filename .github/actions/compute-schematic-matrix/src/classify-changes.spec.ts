import { join } from 'path';

import { classifyChanges } from './classify-changes';
import {
  PackagePathConfig,
  derivePathConfig,
} from './path-config';

const REPO_ROOT = join(__dirname, '..', '..', '..', '..');

describe('classifyChanges', () => {
  let config: PackagePathConfig;

  beforeAll(() => {
    config = derivePathConfig(REPO_ROOT);
  });

  it('returns all false for unrelated files', () => {
    const flags = classifyChanges(['README.md', 'docs/guide.md'], config);
    expect(flags.shared).toBe(false);
    expect(flags.demoOnly).toBe(false);
    expect(Object.values(flags.drivers).some(Boolean)).toBe(false);
  });

  it('detects shared changes from libs/core', () => {
    expect(classifyChanges(['libs/core/src/model.ts'], config).shared).toBe(true);
  });

  it('detects shared changes from tools/schematics', () => {
    expect(classifyChanges(['tools/schematics/ng-add/index.ts'], config).shared).toBe(true);
  });

  it('detects shared changes from libs/driver/src', () => {
    expect(classifyChanges(['libs/driver/src/driver.ts'], config).shared).toBe(true);
  });

  it('detects shared changes from libs/product/src', () => {
    expect(classifyChanges(['libs/product/src/models/product.ts'], config).shared).toBe(true);
  });

  it('detects shared changes from libs/navigation/src', () => {
    expect(classifyChanges(['libs/navigation/src/model.ts'], config).shared).toBe(true);
  });

  it('detects shared changes from libs/external-router/src', () => {
    expect(classifyChanges(['libs/external-router/src/config.ts'], config).shared).toBe(true);
  });

  it('does not classify libs/driver/magento as shared', () => {
    const flags = classifyChanges(['libs/driver/magento/src/query.ts'], config);
    expect(flags.shared).toBe(false);
    expect(flags.drivers['magento']).toBe(true);
  });

  it('detects in-memory changes across packages', () => {
    for (const path of [
      'libs/driver/in-memory/src/backend.ts',
      'libs/product/driver/in-memory/src/service.ts',
      'libs/navigation/driver/in-memory/src/backend.ts',
      'libs/external-router/driver/in-memory/src/resolver.ts',
    ]) {
      expect(classifyChanges([path], config).drivers['in-memory']).toBe(true);
    }
  });

  it('detects magento changes across packages', () => {
    for (const path of [
      'libs/driver/magento/src/query.ts',
      'libs/product/driver/magento/src/service.ts',
      'libs/navigation/driver/magento/src/driver.ts',
      'libs/external-router/driver/magento/src/resolver.ts',
    ]) {
      expect(classifyChanges([path], config).drivers['magento']).toBe(true);
    }
  });

  it('detects shopify changes across packages', () => {
    for (const path of [
      'libs/driver/shopify/src/service.ts',
      'libs/product/driver/shopify/src/service.ts',
      'libs/navigation/driver/shopify/src/service.ts',
      'libs/external-router/driver/shopify/src/resolver.ts',
    ]) {
      expect(classifyChanges([path], config).drivers['shopify']).toBe(true);
    }
  });

  it('detects dev-tools as demoOnly', () => {
    expect(classifyChanges(['libs/dev-tools/src/component.ts'], config).demoOnly).toBe(true);
  });

  it('classifies multiple changes correctly', () => {
    const flags = classifyChanges([
      'libs/driver/magento/src/query.ts',
      'libs/driver/shopify/src/service.ts',
    ], config);
    expect(flags.shared).toBe(false);
    expect(flags.drivers['magento']).toBe(true);
    expect(flags.drivers['shopify']).toBe(true);
    expect(flags.drivers['in-memory']).toBe(false);
  });

  it('ignores empty strings', () => {
    const flags = classifyChanges(['', ''], config);
    expect(flags.shared).toBe(false);
    expect(Object.values(flags.drivers).some(Boolean)).toBe(false);
  });
});
