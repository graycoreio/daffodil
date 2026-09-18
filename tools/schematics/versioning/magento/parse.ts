import {
  MagentoVersion,
  MagentoVersionString,
} from './type';

/**
 * Parses a {@link MagentoVersionString} into a {@link MagentoVersion}.
 */
export const parseMagentoVersion = (str: string): MagentoVersion | null => {
  try {
    const res = str.match(/^(?<major>\d*)\.(?<minor>\d*)\.(?<fakePatch>\d*)(?<patch>-p\d*)?$/)?.groups;
    return res && res.major && res.minor && res.fakePatch && (!res.patch || res.patch.length > 2)
      ? { major: Number(res.major), minor: Number(res.minor), fakePatch: Number(res.fakePatch), patch: res.patch ? Number(res.patch.replace('-p', '')) : undefined }
      : null;
  } catch {
    return null;
  }
};
