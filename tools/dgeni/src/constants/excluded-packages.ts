import * as fs from 'fs';
import * as path from 'path';

import {
  API_SOURCE_PATH,
  TOOLS_SOURCE_PATH,
} from '../transforms/config';

/**
 * Base static list of packages to be left out of API/doc generation.
 * These are always excluded regardless of private flags.
 */
const STATIC_EXCLUDED = <const>[
  'design',
  'dgeni',
];

/**
 * Read package.json files under a folder (e.g., libs or tools) and collect
 * package names that are marked as private.
 */
const getPrivatePackageNames = (folder: string): Array<string> => {
  const entries = fs.readdirSync(folder, { withFileTypes: true });
  return entries.reduce((acc, entry) => {
    if (!entry.isDirectory()) {
      return acc;
    }
    const pkgJsonPath = path.join(folder, entry.name, 'package.json');
    try {
      if (fs.statSync(pkgJsonPath).isFile()) {
        const pkg = <{ name?: string; private?: boolean }>JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
        if (pkg?.private) {
          acc.push(entry.name);
        }
      }
      return acc;
    } catch {
      return acc;
    }
  }, []);
};

/**
 * Combined set of excluded package names: static list plus any workspace
 * packages with "private": true.
 */
export const DAFF_DGENI_EXCLUDED_PACKAGES = Array.from(new Set([
  ...STATIC_EXCLUDED,
  ...getPrivatePackageNames(API_SOURCE_PATH),
  ...getPrivatePackageNames(TOOLS_SOURCE_PATH),
]));

/**
 * Regex of list of package names to be left out of API generation.
 * This is used in glob patterns like ${basePath}/${REGEX}/** where the
 * !() extglob excludes matching directories.
 */
export const DAFF_DGENI_EXCLUDED_PACKAGES_REGEX = '!(' + DAFF_DGENI_EXCLUDED_PACKAGES.join('|') + ')';
