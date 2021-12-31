/**
 * An object with a discrete kind.
 */
export interface DaffKindable<T extends string = string> {
  /**
   * The entity kind.
   */
  kind: T;
}
