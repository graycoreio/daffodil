import { magentoCompareVersions } from './compare';
import { parseMagentoVersion } from './parse';
import { stringifyMagentoVersion } from './stringify';
import { MagentoVersionString } from './type';

/**
 * Finds the version of magento that supports the specified target version.
 * @param supportedVersions A list of supported versions.
 * @param target The version target.
 * @returns The supported version.
 */
export const magentoFindSupportedVersion = (supportedVersions: Array<MagentoVersionString>, target: MagentoVersionString): MagentoVersionString | null => {
  if (supportedVersions.indexOf(target) > -1) {
    return target;
  }
  const targetVersion = parseMagentoVersion(target);
  if (!targetVersion) {
    return null;
  }
  const versions = supportedVersions
    .map((v) => parseMagentoVersion(v))
    .filter((e) => !!e);

  // if the target version has an exact match in the supported versions
  // we can just return the target
  if (versions.indexOf(targetVersion) > -1) {
    return target;
  }

  const allVersions = versions
    .concat([targetVersion])
    .sort(magentoCompareVersions);

  // we want the find the nearest supported version that is older than the target
  const index = allVersions.indexOf(targetVersion);
  return index > 0
    ? stringifyMagentoVersion(allVersions[index - 1])
  // if there is none older, the target is unsupported
    : null;
};
