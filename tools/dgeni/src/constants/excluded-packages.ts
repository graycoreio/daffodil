import { readdirSync, readFileSync, statSync } from 'fs';
import * as path from 'path';

/**
 * Base static list of packages to be left out of API/doc generation.
 * These are always excluded regardless of `private` flags.
 */
const STATIC_EXCLUDED = <const>[
  'branding',
  'design',
  'documentation',
  'docs-components',
  'docs-utils',
  'theme-switch',
  'dgeni',
];

/**
 * Resolve workspace root from this file location.
 */
const PROJECT_ROOT = path.resolve(__dirname, '../../../..');

/**
 * Read package.json files under a folder (e.g., libs or tools) and collect
 * package names that are marked as private.
 */
function getPrivatePackageNames(folder: 'libs' | 'tools'): string[] {
  const base = path.resolve(PROJECT_ROOT, folder);
  let names: string[] = [];
  try {
    const entries = readdirSync(base, { withFileTypes: true });
    entries.forEach((entry) => {
      if (!entry.isDirectory()) return;
      const pkgDir = path.join(base, entry.name);
      const pkgJsonPath = path.join(pkgDir, 'package.json');
      try {
        // Only consider direct child packages with a package.json
        if (statSync(pkgJsonPath).isFile()) {
          const pkg = JSON.parse(readFileSync(pkgJsonPath, 'utf8')) as { name?: string; private?: boolean };
          if (pkg?.private) {
            // Use the folder name as the exclusion key to match glob segments
            names.push(entry.name);
          }
        }
      } catch {
        // ignore missing files or JSON errors in non-package folders
      }
    });
  } catch {
    // folder missing, ignore
  }
  return names;
}

/**
 * Combined set of excluded package names: static list plus any workspace
 * packages with `"private": true`.
 */
export const DAFF_DGENI_EXCLUDED_PACKAGES = Array.from(new Set([
  ...STATIC_EXCLUDED,
  ...getPrivatePackageNames('libs'),
  ...getPrivatePackageNames('tools'),
]));

/**
 * Regex of list of package names to be left out of API generation.
 * This is used in glob patterns like `${basePath}/${REGEX}/**` where the
 * `!()` extglob excludes matching directories.
 */
export const DAFF_DGENI_EXCLUDED_PACKAGES_REGEX = '!(' + DAFF_DGENI_EXCLUDED_PACKAGES.join('|') + ')';
