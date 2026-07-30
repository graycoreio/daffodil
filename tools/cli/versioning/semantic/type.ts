/**
 * A semantic version string.
 */
export type SemanticVersionString = `${number}.${number}.${number}`;

export interface SemanticVersion {
  /**
   * The leftmost number in the version string, e.g. `major.n.n`.
   */
  major: number;
  /**
   * The number immediately to the right of the major number in the version string, e.g. `n.minor.n`.
   */
  minor: number;
  /**
   * The number immediately to the right of the major number in the version string, e.g. `n.n.patch`.
   */
  patch: number;
}
