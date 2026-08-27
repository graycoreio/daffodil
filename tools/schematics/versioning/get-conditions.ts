import { DaffJsonProject } from './daff-json.type';
import { DaffPackagePlatformVersions } from './packages.type';
import { DAFF_VERSIONING_PLATFORMS } from './platforms.const';
import { magentoFindSupportedVersion } from './public_api';
import { isSupportedPlatform } from './validate-platform';

export const daffVersioningGetConditions = (daff: DaffJsonProject, packages: DaffPackagePlatformVersions) =>
  Object.entries(daff.drivers).reduce((conditions, [platform, version]) => {
    if (version === undefined) {
      return conditions;
    }
    if (!version) {
      throw new Error(
        `Platform ${platform} is missing a driver version; cannot sync.`,
      );
    }
    if (!isSupportedPlatform(platform)) {
      throw new Error(`${platform} is unsupported. Supported platforms are ${DAFF_VERSIONING_PLATFORMS.join(', ')}`);
    }

    return packages[platform]
      ? Object.entries(packages[platform]).reduce((acc, [packageName, versions]) => {
        if (platform === 'magento') {
          const supportedVersion = magentoFindSupportedVersion(versions, version);
          if (supportedVersion) {
            acc.push(`${packageName}-${platform}-${supportedVersion}`);
          } else {
            console.warn(`No supported ${platform} version found for @daffodil/${packageName}. Supported versions are ${versions}`);
          }
        }
        return acc;
      }, conditions)
      : conditions;
  }, <Array<string>>[]);
