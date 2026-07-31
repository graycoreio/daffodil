/**
 * A Magento version string.
 * It can have an optional patch number suffix like `2.4.7-p4`.
 */
export type MagentoVersionString = `${number}.${number}.${number}${`-p${number}` | ''}`;

export interface MagentoVersion {
  /**
   * The leftmost number in the version string, e.g. `major.n.n-pn`.
   */
  major: number;
  /**
   * The number immediately to the right of the major number in the version string, e.g. `n.minor.n-pn`.
   */
  minor: number;
  /**
   * The number immediately to the right of the minor number in the version string.
   * This occupies the space normally occupied by the semantic patch version but
   * since Magento does not follow anything even closely resembling semantic versioning,
   * this is a fake patch version number.
   *
   * e.g. `n.n.fakePatch-pn`
   */
  fakePatch: number;
  /**
   * The optional patch number which follows the `-p` in the version string, e.g. `n.n.n-ppatch`.
   */
  patch?: number;
}
