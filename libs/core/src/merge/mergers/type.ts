/**
 * A way to merge two fields into one.
 */
export type DaffMerger<T> = (a: T, b: T) => T;
