// Computes the matrix for build-commerce-schematic.yml based on changed files.
// See .github/docs/commerce-schematic-trigger-map.md for the mapping.

import { classifyChanges } from './classify-changes';
import {
  DEMO_DRIVER,
  PackagePathConfig,
} from './path-config';

/**
 * A single entry in the build-commerce-schematic CI matrix.
 */
export interface MatrixEntry {
  /**
   * Angular version constraint passed to `ng new` (e.g. `"^20"`).
   */
  angular_version: string;
  /**
   * Driver to install via `ng add @daffodil/commerce --driver <driver>`.
   */
  driver: string;
  /**
   * Base app template used by `ng new` (e.g. `"scss-standalone"`, `"css-standalone"`).
   */
  base: string;
  /**
   * Whether to pass `--skip-package-json` to `ng add`.
   */
  skip_package_json: boolean;
  /**
   * Whether the app was created with `--routing`.
   */
  routing: boolean;
  /**
   * Whether `ng add @daffodil/commerce` is expected to succeed.
   */
  'ng-add-succeed': boolean;
  /**
   * Whether `ng build` is expected to succeed after schematic installation.
   */
  'build-succeed': boolean;
  /**
   * Optional display name for edge-case entries (e.g. `"skip-package-json"`).
   */
  name?: string;
}

const driverEntry = (angularVersion: string, driver: string): MatrixEntry => ({
  angular_version: angularVersion,
  driver,
  base: 'scss-standalone',
  skip_package_json: false,
  routing: true,
  'ng-add-succeed': true,
  'build-succeed': true,
});

const computeMatrixForVersion = (flags: ReturnType<typeof classifyChanges>, config: PackagePathConfig, angularVersion: string): MatrixEntry[] => {
  const include: MatrixEntry[] = [];

  const entry = (driver: string) => driverEntry(angularVersion, driver);
  const namedEntry = (name: string, overrides: Partial<MatrixEntry>): MatrixEntry => ({
    ...entry('in-memory'),
    name,
    ...overrides,
  });

  const anyDriverChanged = Object.values(flags.drivers).some(Boolean);

  // demo includes all drivers + dev-tools
  if (flags.shared || flags.demoOnly || anyDriverChanged) {
    include.push(entry(DEMO_DRIVER));
  }

  // Each non-demo driver triggers on shared changes or its own changes
  for (const driverName of Object.keys(config.drivers)) {
    if (flags.shared || flags.drivers[driverName]) {
      include.push(entry(driverName));
    }
  }

  // Edge-case entries use in-memory driver and test schematic behavior
  if (flags.shared || flags.drivers['in-memory']) {
    include.push(namedEntry('skip-package-json', { skip_package_json: true, 'build-succeed': false }));
    include.push(namedEntry('css-style-failure', { base: 'css-standalone', 'build-succeed': false }));
    include.push(namedEntry('no-app-routing', { routing: false }));
  }

  // module-app-rejection fails before driver code runs, only needs schematic/shared changes
  if (flags.shared) {
    include.push(namedEntry('module-app-rejection', { base: 'scss-module', 'ng-add-succeed': false }));
  }

  return include;
};

export const computeMatrix = (changedFiles: string[], config: PackagePathConfig, angularVersions: string[]): MatrixEntry[] => {
  const flags = classifyChanges(changedFiles, config);
  return angularVersions.flatMap((version) => computeMatrixForVersion(flags, config, version));
};

