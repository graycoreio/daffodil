// Derives path patterns from the schematic's package.json devDependencies
// and the filesystem layout of each dependency.

import {
  existsSync,
  readdirSync,
  readFileSync,
} from 'fs';
import { join } from 'path';

export const SCHEMATIC_DIR = 'tools/schematics';
export const DAFFODIL_SCOPE = '@daffodil/';
export const DEMO_DRIVER = 'demo';

/**
 * Path patterns derived from the schematic's dependencies and filesystem layout.
 */
export interface PackagePathConfig {
  /**
   * Paths that affect all matrix entries.
   */
  shared: string[];
  /**
   * Driver name -> paths that affect only that driver (+ demo).
   */
  drivers: Record<string, string[]>;
  /**
   * Paths that affect only the demo entry.
   */
  demoOnly: string[];
}

/**
 * Reads the driver enum from the schematic's schema.json.
 * These are the canonical driver names (e.g. "magento", "shopify", "in-memory", "demo").
 */
const readDriverNames = (repoRoot: string): string[] => {
  const schemaPath = join(repoRoot, SCHEMATIC_DIR, 'ng-add', 'schema.json');
  const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));
  return <string[]>(schema.properties?.driver?.enum ?? []);
};

/**
 * Finds which driver subdirectories exist for a given lib.
 * Checks two layouts:
 *   - libs/driver/{in-memory,magento,shopify}/   (drivers as direct children)
 *   - libs/product/driver/{in-memory,magento,shopify}/  (drivers under driver/)
 *
 * Only considers directories whose names match the schema.json driver enum.
 */
const findDriverSubpaths = (libRoot: string, repoRoot: string, knownDrivers: Set<string>): Map<string, string> => {
  const found = new Map<string, string>();

  // Check under <lib>/driver/<driver>/
  const driverDir = join(repoRoot, libRoot, 'driver');
  if (existsSync(driverDir)) {
    for (const entry of readdirSync(driverDir, { withFileTypes: true })) {
      if (entry.isDirectory() && knownDrivers.has(entry.name)) {
        found.set(entry.name, `${libRoot}/driver/${entry.name}/`);
      }
    }
  }

  // Check direct children <lib>/<driver>/ (e.g. libs/driver/in-memory/)
  const rootDir = join(repoRoot, libRoot);
  if (existsSync(rootDir)) {
    for (const entry of readdirSync(rootDir, { withFileTypes: true })) {
      if (entry.isDirectory() && knownDrivers.has(entry.name) && !found.has(entry.name)) {
        found.set(entry.name, `${libRoot}/${entry.name}/`);
      }
    }
  }

  return found;
};

/**
 * Derives path patterns from the schematic's package.json devDependencies
 * and the filesystem layout of each dependency.
 */
export const derivePathConfig = (repoRoot: string): PackagePathConfig => {
  const pkgJsonPath = join(repoRoot, SCHEMATIC_DIR, 'package.json');
  const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'));
  const devDeps = Object.keys(pkgJson.devDependencies || {})
    .filter((dep) => dep.startsWith(DAFFODIL_SCOPE));

  // Get canonical driver names from the schematic's schema.json, excluding "demo"
  // since demo is the superset that uses all drivers
  const knownDrivers = new Set(
    readDriverNames(repoRoot).filter((d) => d !== DEMO_DRIVER),
  );

  const shared: string[] = [`${SCHEMATIC_DIR}/`];
  const drivers: Record<string, string[]> = {};
  const demoOnly: string[] = [];

  for (const dep of devDeps) {
    const pkgName = dep.slice(DAFFODIL_SCOPE.length);
    const libRoot = `libs/${pkgName}`;
    const driverPaths = findDriverSubpaths(libRoot, repoRoot, knownDrivers);

    if (driverPaths.size === 0) {
      // No driver subpaths — package is either shared or demo-only
      // dev-tools is demo-only (only the demo driver uses dev-tools for runtime switching)
      if (dep === `${DAFFODIL_SCOPE}dev-tools`) {
        demoOnly.push(`${libRoot}/`);
      } else {
        shared.push(`${libRoot}/`);
      }
    } else {
      // Package has driver subpaths — root/src is shared
      shared.push(`${libRoot}/src/`);

      for (const [driverName, path] of driverPaths) {
        if (!drivers[driverName]) {
          drivers[driverName] = [];
        }
        drivers[driverName].push(path);
      }
    }
  }

  return { shared, drivers, demoOnly };
};
