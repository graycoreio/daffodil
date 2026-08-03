import {
  glob,
  readFile,
  writeFile,
} from 'fs/promises';
import { join } from 'path';
import type { PackageJson } from 'type-fest';

import { DaffPackagePlatformVersions, DaffVersionString, isSupportedPlatform } from '../versioning/public_api.ts';

const libPath = join(import.meta.dirname, '../../../libs');
const outputPath = join(import.meta.dirname, '../versioning/packages.json');
const versions: DaffPackagePlatformVersions = {};

const unique = <T,>(array: T[], comparator: (a: T, b: T) => boolean = (a, b) => a === b): T[] =>
  array.filter((a, index) => array.slice(index + 1).filter(b => comparator(a, b)).length === 0);

for await (const entry of glob(`${libPath}/*/package.json`)) {
  const packageJson: PackageJson = JSON.parse(await readFile(entry, 'utf-8'));
  const packageName = packageJson.name?.match(/@daffodil\/(?<package>.*)/)?.groups?.package;
  if (packageName && packageJson.exports) {
    Object.entries(packageJson.exports).forEach(([platformExport, overrides]) => {
      const platform = platformExport.match(/\.\/driver\/(?<platform>\w*)\/auto/)?.groups?.platform;
      if (isSupportedPlatform(platform) && overrides) {
        Object.keys(overrides).forEach((condition) => {
          const version = condition.match(new RegExp(`${packageName}-${platform}-(?<version>[\\w-.]*)`))?.groups?.version;
          if (version) {
            versions[platform] ??= {};
            versions[platform][packageName] = unique([...versions[platform][packageName] ?? [], version as DaffVersionString]);
          }
        });
      }
    });
  }
}

await writeFile(outputPath, JSON.stringify(versions), 'utf-8');
