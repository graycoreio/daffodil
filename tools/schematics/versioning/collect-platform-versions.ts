import {
  glob,
  readFile,
} from 'node:fs/promises';

import { DaffPackagePlatformVersions } from './packages.type';
import { daffVersioningIsSupportedPlatform } from './validate-platform';
import { DaffVersionString } from './version.type';

// from https://github.com/sindresorhus/type-fest/blob/main/source/package-json.d.ts
/**
 * A mapping of conditions and the paths to which they resolve.
 */
interface ExportConditions {
  [condition: string]: Exports;
}

/**
 * Entry points of a module, optionally with conditions and subpath exports.
 */
type Exports =
  | null
  | string
  | Array<string | ExportConditions>
  | ExportConditions;

interface PackageJson {
  name: string;
  exports: Exports;
}
//

const unique = <T,>(array: T[], comparator: (a: T, b: T) => boolean = (a, b) => a === b): T[] =>
  array.filter((a, index) => array.slice(index + 1).filter(b => comparator(a, b)).length === 0);

/**
 * Searches for packages containing `exports` that declare drivers using auto versioning.
 *
 * @param searchGlobs Globs under which to search for `package.json`s.
 */
export async function collectPlatformVersions(searchGlobs: Array<string>): Promise<DaffPackagePlatformVersions> {
  const packages = await searchGlobs.reduce(async (acc, searchGlob) => {
    const ret: Array<PackageJson> = [];
    for await (const entry of glob(`${searchGlob}/package.json`)) {
      const packageJson: PackageJson = JSON.parse(await readFile(entry, 'utf-8'));
      ret.push(packageJson);
    }

    return acc.then((v) => v.concat(ret));
  }, <Promise<Array<PackageJson>>>Promise.resolve([]));

  return packages.reduce((acc, packageJson) => {
    const packageName = packageJson.name?.match(/@daffodil\/(?<package>.*)/)?.groups?.package;
    if (packageName && packageJson.exports) {
      Object.entries(packageJson.exports).forEach(([platformExport, overrides]) => {
        const platform = platformExport.match(/\.\/driver\/(?<platform>\w*)\/auto/)?.groups?.platform;
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
