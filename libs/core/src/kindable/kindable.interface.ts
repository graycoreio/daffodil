/**
 * An object with a discrete kind.
 */
export interface DaffKindable<T extends string = string> {
  kind: T;
}
