import { join } from 'path';

import {
  computeMatrix,
  MatrixEntry,
} from './compute-matrix';
import {
  PackagePathConfig,
  derivePathConfig,
} from './path-config';

const REPO_ROOT = join(__dirname, '..', '..', '..', '..');
const ANGULAR_VERSIONS = ['^20'];

const entryNames = (entries: MatrixEntry[]): string[] =>
  entries.map((e) => e.name || e.driver).sort();

const ALL_ENTRIES = [
  'css-style-failure',
  'demo',
  'in-memory',
  'magento',
  'module-app-rejection',
  'no-app-routing',
  'shopify',
  'skip-package-json',
];

describe('computeMatrix', () => {
  let config: PackagePathConfig;

  beforeAll(() => {
    config = derivePathConfig(REPO_ROOT);
  });

  it('returns empty array for unrelated changes', () => {
    expect(computeMatrix(['README.md'], config, ANGULAR_VERSIONS)).toEqual([]);
  });

  describe('shared changes', () => {
    it('triggers all entries for schematic changes', () => {
      expect(entryNames(computeMatrix(['tools/schematics/ng-add/index.ts'], config, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });

    it('triggers all entries for core changes', () => {
      expect(entryNames(computeMatrix(['libs/core/src/model.ts'], config, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });

    it('triggers all entries for driver/src changes', () => {
      expect(entryNames(computeMatrix(['libs/driver/src/driver.ts'], config, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });

    it('triggers all entries for product/src changes', () => {
      expect(entryNames(computeMatrix(['libs/product/src/models/product.ts'], config, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });

    it('triggers all entries for navigation/src changes', () => {
      expect(entryNames(computeMatrix(['libs/navigation/src/model.ts'], config, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });

    it('triggers all entries for external-router/src changes', () => {
      expect(entryNames(computeMatrix(['libs/external-router/src/config.ts'], config, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });
  });

  describe('driver-specific changes', () => {
    it('magento change triggers demo and magento', () => {
      expect(entryNames(computeMatrix(['libs/driver/magento/src/query.ts'], config, ANGULAR_VERSIONS))).toEqual(['demo', 'magento']);
    });

    it('shopify change triggers demo and shopify', () => {
      expect(entryNames(computeMatrix(['libs/product/driver/shopify/src/service.ts'], config, ANGULAR_VERSIONS))).toEqual(['demo', 'shopify']);
    });

    it('in-memory change triggers demo, in-memory, and edge cases except module-app-rejection', () => {
      expect(entryNames(computeMatrix(['libs/driver/in-memory/src/backend.ts'], config, ANGULAR_VERSIONS))).toEqual([
        'css-style-failure', 'demo', 'in-memory', 'no-app-routing', 'skip-package-json',
      ]);
    });

    it('dev-tools change triggers demo only', () => {
      expect(entryNames(computeMatrix(['libs/dev-tools/src/component.ts'], config, ANGULAR_VERSIONS))).toEqual(['demo']);
    });
  });

  describe('combined changes', () => {
    it('magento + shopify triggers demo, magento, shopify', () => {
      expect(entryNames(computeMatrix([
        'libs/driver/magento/src/query.ts',
        'libs/driver/shopify/src/service.ts',
      ], config, ANGULAR_VERSIONS))).toEqual(['demo', 'magento', 'shopify']);
    });

    it('in-memory + magento triggers their respective entries', () => {
      expect(entryNames(computeMatrix([
        'libs/driver/in-memory/src/backend.ts',
        'libs/driver/magento/src/query.ts',
      ], config, ANGULAR_VERSIONS))).toEqual([
        'css-style-failure', 'demo', 'in-memory', 'magento', 'no-app-routing', 'skip-package-json',
      ]);
    });
  });

  describe('entry structure', () => {
    it('driver entry has correct defaults', () => {
      const [demo] = computeMatrix(['libs/dev-tools/src/component.ts'], config, ANGULAR_VERSIONS);
      expect(demo).toEqual({
        angular_version: '^20',
        driver: 'demo',
        base: 'scss-standalone',
        skip_package_json: false,
        routing: true,
        'ng-add-succeed': true,
        'build-succeed': true,
      });
    });

    it('skip-package-json has correct overrides', () => {
      const entries = computeMatrix(['tools/schematics/ng-add/index.ts'], config, ANGULAR_VERSIONS);
      const entry = entries.find((e) => e.name === 'skip-package-json');
      expect(entry).toEqual({
        angular_version: '^20',
        driver: 'in-memory',
        base: 'scss-standalone',
        skip_package_json: true,
        routing: true,
        'ng-add-succeed': true,
        'build-succeed': false,
        name: 'skip-package-json',
      });
    });

    it('module-app-rejection has correct overrides', () => {
      const entries = computeMatrix(['tools/schematics/ng-add/index.ts'], config, ANGULAR_VERSIONS);
      const entry = entries.find((e) => e.name === 'module-app-rejection');
      expect(entry).toEqual({
        angular_version: '^20',
        driver: 'in-memory',
        base: 'scss-module',
        skip_package_json: false,
        routing: true,
        'ng-add-succeed': false,
        'build-succeed': true,
        name: 'module-app-rejection',
      });
    });

    it('css-style-failure has correct overrides', () => {
      const entries = computeMatrix(['tools/schematics/ng-add/index.ts'], config, ANGULAR_VERSIONS);
      const entry = entries.find((e) => e.name === 'css-style-failure');
      expect(entry).toEqual({
        angular_version: '^20',
        driver: 'in-memory',
        base: 'css-standalone',
        skip_package_json: false,
        routing: true,
        'ng-add-succeed': true,
        'build-succeed': false,
        name: 'css-style-failure',
      });
    });

    it('no-app-routing has correct overrides', () => {
      const entries = computeMatrix(['tools/schematics/ng-add/index.ts'], config, ANGULAR_VERSIONS);
      const entry = entries.find((e) => e.name === 'no-app-routing');
      expect(entry).toEqual({
        angular_version: '^20',
        driver: 'in-memory',
        base: 'scss-standalone',
        skip_package_json: false,
        routing: false,
        'ng-add-succeed': true,
        'build-succeed': true,
        name: 'no-app-routing',
      });
    });
  });
});
