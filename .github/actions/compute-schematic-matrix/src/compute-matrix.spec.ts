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
const NODE_VERSIONS = ['22.21.x'];
const ANGULAR_VERSIONS = ['^20'];

const entryNames = (entries: MatrixEntry[]): string[] =>
  entries.map((e) => e.name || e.driver).sort();

const ALL_ENTRIES = [
  'css-style-failure',
  'demo',
  'in-memory',
  'magento',
  'magento-v2.4.1',
  'magento-v2.4.2',
  'magento-v2.4.3',
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
    expect(computeMatrix(['README.md'], config, NODE_VERSIONS, ANGULAR_VERSIONS)).toEqual([]);
  });

  it('returns full matrix when changed files is empty', () => {
    expect(entryNames(computeMatrix([], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
  });

  it('returns full matrix when changed files contains only empty strings', () => {
    expect(entryNames(computeMatrix(['', ''], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
  });

  describe('shared changes', () => {
    it('triggers all entries for schematic changes', () => {
      expect(entryNames(computeMatrix(['tools/schematics/ng-add/index.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });

    it('triggers all entries for core changes', () => {
      expect(entryNames(computeMatrix(['libs/core/src/model.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });

    it('triggers all entries for driver/src changes', () => {
      expect(entryNames(computeMatrix(['libs/driver/src/driver.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });

    it('triggers all entries for product/src changes', () => {
      expect(entryNames(computeMatrix(['libs/product/src/models/product.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });

    it('triggers all entries for navigation/src changes', () => {
      expect(entryNames(computeMatrix(['libs/navigation/src/model.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });

    it('triggers all entries for external-router/src changes', () => {
      expect(entryNames(computeMatrix(['libs/external-router/src/config.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(ALL_ENTRIES);
    });
  });

  describe('driver-specific changes', () => {
    it('magento change triggers demo and magento', () => {
      expect(entryNames(computeMatrix(['libs/driver/magento/src/query.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(['demo', 'magento', 'magento-v2.4.1', 'magento-v2.4.2', 'magento-v2.4.3']);
    });

    it('shopify change triggers demo and shopify', () => {
      expect(entryNames(computeMatrix(['libs/product/driver/shopify/src/service.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(['demo', 'shopify']);
    });

    it('in-memory change triggers demo, in-memory, and edge cases except module-app-rejection', () => {
      expect(entryNames(computeMatrix(['libs/driver/in-memory/src/backend.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual([
        'css-style-failure', 'demo', 'in-memory', 'no-app-routing', 'skip-package-json',
      ]);
    });

    it('dev-tools change triggers demo only', () => {
      expect(entryNames(computeMatrix(['libs/dev-tools/src/component.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(['demo']);
    });
  });

  describe('combined changes', () => {
    it('magento + shopify triggers demo, magento, shopify', () => {
      expect(entryNames(computeMatrix([
        'libs/driver/magento/src/query.ts',
        'libs/driver/shopify/src/service.ts',
      ], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual(['demo', 'magento', 'magento-v2.4.1', 'magento-v2.4.2', 'magento-v2.4.3', 'shopify']);
    });

    it('in-memory + magento triggers their respective entries', () => {
      expect(entryNames(computeMatrix([
        'libs/driver/in-memory/src/backend.ts',
        'libs/driver/magento/src/query.ts',
      ], config, NODE_VERSIONS, ANGULAR_VERSIONS))).toEqual([
        'css-style-failure', 'demo', 'in-memory', 'magento', 'magento-v2.4.1', 'magento-v2.4.2', 'magento-v2.4.3', 'no-app-routing', 'skip-package-json',
      ]);
    });
  });

  describe('entry structure', () => {
    it('driver entry has correct defaults', () => {
      const [demo] = computeMatrix(['libs/dev-tools/src/component.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS);
      expect(demo).toEqual({
        node_version: '22.21.x',
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
      const entries = computeMatrix(['tools/schematics/ng-add/index.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS);
      const entry = entries.find((e) => e.name === 'skip-package-json');
      expect(entry).toEqual({
        node_version: '22.21.x',
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
      const entries = computeMatrix(['tools/schematics/ng-add/index.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS);
      const entry = entries.find((e) => e.name === 'module-app-rejection');
      expect(entry).toEqual({
        node_version: '22.21.x',
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
      const entries = computeMatrix(['tools/schematics/ng-add/index.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS);
      const entry = entries.find((e) => e.name === 'css-style-failure');
      expect(entry).toEqual({
        node_version: '22.21.x',
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

    it('magento-v2.4.1 entry has correct structure', () => {
      const entries = computeMatrix(['libs/driver/magento/src/query.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS);
      const entry = entries.find((e) => e.name === 'magento-v2.4.1');
      expect(entry).toEqual({
        node_version: '22.21.x',
        angular_version: '^20',
        driver: 'magento',
        base: 'scss-standalone',
        skip_package_json: false,
        routing: true,
        'ng-add-succeed': true,
        'build-succeed': true,
        name: 'magento-v2.4.1',
        version: 241,
      });
    });

    it('produces one versioned magento entry per discovered version', () => {
      const entries = computeMatrix(['libs/driver/magento/src/query.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS);
      const magentoVersionEntries = entries.filter((e) => e.driver === 'magento' && e.version !== undefined);
      expect(magentoVersionEntries.map((e) => e.version)).toEqual([241, 242, 243]);
    });

    it('no-app-routing has correct overrides', () => {
      const entries = computeMatrix(['tools/schematics/ng-add/index.ts'], config, NODE_VERSIONS, ANGULAR_VERSIONS);
      const entry = entries.find((e) => e.name === 'no-app-routing');
      expect(entry).toEqual({
        node_version: '22.21.x',
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
