import { MagentoVersion } from './type';

const KEYS: Array<keyof MagentoVersion> = [
  'major',
  'minor',
  'fakePatch',
  'patch',
];

/**
 * Follows the same signature as array sorting.
 * If a is a later version, it will return 1.
 * If a is an earlier version, it will return -1.
 * If the versions are equivalent, it will return 0.
 */
export const magentoCompareVersions = (a: MagentoVersion, b: MagentoVersion): -1 | 0 | 1 => {
  for (const k of KEYS) {
    const aVal = a[k] || 0;
    const bVal = b[k] || 0;
    if (aVal > bVal) {
      return 1;
    }
    if (aVal < bVal) {
      return -1;
    }
  }

  return 0;
};
