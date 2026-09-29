import { semanticCompareVersions } from './compare';
import { parseSemanticVersion } from './parse';
import { stringifySemanticVersion } from './stringify';
import { SemanticVersionString } from './type';

/**
 * Finds the version of semantic that supports the specified target version.
 * @param supportedVersions A list of supported versions.
 * @param target The version target.
 * @returns The supported version.
 */
export const semanticFindSupportedVersion = (supportedVersions: Array<SemanticVersionString>, target: SemanticVersionString): SemanticVersionString | null => {
  if (supportedVersions.indexOf(target) > -1) {
    return target;
  }
  const targetVersion = parseSemanticVersion(target);
  if (!targetVersion) {
    return null;
  }
  const versions = supportedVersions
    .map((v) => parseSemanticVersion(v))
    .filter((e) => !!e);

  // if the target version has an exact match in the supported versions
  // we can just return the target
  if (versions.indexOf(targetVersion) > -1) {
    return target;
  }

  const allVersions = versions
    .concat([targetVersion])
    .sort(semanticCompareVersions);

  // we want the find the nearest supported version that is older than the target
  const index = allVersions.indexOf(targetVersion);
  return index > 0
    ? stringifySemanticVersion(allVersions[index - 1])
  // if there is none older, the target is unsupported
    : null;
};
