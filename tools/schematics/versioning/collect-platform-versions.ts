import {
  existsSync,
  globSync,
  readFileSync,
} from 'node:fs';
import { join } from 'node:path';

import { PackageJson } from './package-json.type';
import { DaffPackagePlatformVersions } from './packages.type';
import { daffVersioningIsSupportedPlatform } from './validate-platform';
import { DaffVersionString } from './version.type';

const unique = <T,>(array: T[], comparator: (a: T, b: T) => boolean = (a, b) => a === b): T[] =>
  array.filter((a, index) => array.slice(index + 1).filter(b => comparator(a, b)).length === 0);

/**
 * Finds the `package.json`s under the search glob.
 *
 * `fs.glob` does not traverse symlinked directories, so packages that are linked into `node_modules`
 * (e.g. `npm link`, `file:` dependencies, or pnpm) are not found by `<glob>/package.json`.
 * Symlinks matched by the search glob itself are therefore checked for a `package.json` as well.
 */
function findPackageJsons(searchGlob: string): Array<string> {
  const found = new Set<string>(globSync(`${searchGlob}/package.json`));
  for (const entry of globSync(searchGlob, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) {
      const packageJson = join(entry.parentPath, entry.name, 'package.json');
      if (existsSync(packageJson)) {
        found.add(packageJson);
      }
    }
  }
  return [...found];
}

/**
 * Searches for packages containing `exports` that declare drivers using auto versioning.
 *
 * This is synchronous so that it can also be used where async work is not possible, e.g. TypeScript language service plugins.
 *
 * @param searchGlobs Globs under which to search for `package.json`s.
 */
export function collectPlatformVersionsSync(searchGlobs: Array<string>): DaffPackagePlatformVersions {
  const packages: Array<PackageJson> = searchGlobs
    .flatMap(findPackageJsons)
    .map((entry) => JSON.parse(readFileSync(entry, 'utf-8')));

  return packages.reduce((acc, packageJson) => {
    const packageName = packageJson.name?.match(/@daffodil\/(?<package>.*)/)?.groups?.package;
    if (packageName && packageJson.exports) {
      Object.entries(packageJson.exports).forEach(([platformExport, overrides]) => {
        // `./driver/<platform>/auto` for domain packages, `./<platform>/auto` for `@daffodil/driver` itself
        const platform = platformExport.match(/^\.\/(?:driver\/)?(?<platform>\w+)\/auto(?:\/|$)/)?.groups?.platform;
        if (daffVersioningIsSupportedPlatform(platform) && overrides) {
          Object.keys(overrides).forEach((condition) => {
            const version = condition.match(new RegExp(`${packageName}-${platform}-(?<version>[\\w-.]*)`))?.groups?.version;
            if (version) {
              acc[platform] ??= {};
              acc[platform][packageName] = unique([...acc[platform][packageName] ?? [], <DaffVersionString>version]);
            }
          });
        }
      });
    }

    return acc;
  }, <DaffPackagePlatformVersions>{});
}

/**
 * Searches for packages containing `exports` that declare drivers using auto versioning.
 *
 * @param searchGlobs Globs under which to search for `package.json`s.
 */
export async function collectPlatformVersions(searchGlobs: Array<string>): Promise<DaffPackagePlatformVersions> {
  return collectPlatformVersionsSync(searchGlobs);
}
