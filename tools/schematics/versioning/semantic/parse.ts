import {
  SemanticVersion,
  SemanticVersionString,
} from './type';

/**
 * Parses a {@link SemanticVersionString} into a {@link SemanticVersion}.
 */
export const parseSemanticVersion = (str: string): SemanticVersion | null => {
  try {
    const res = str.match(/(?<major>\d*)\.(?<minor>\d*)\.(?<patch>\d*)/)?.groups;
    return res && res.major && res.minor && res.patch
      ? { major: Number(res.major), minor: Number(res.minor), patch: Number(res.patch) }
      : null;
  } catch {
    return null;
  }
};
