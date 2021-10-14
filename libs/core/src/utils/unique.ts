/**
 * Filters an array of elements, removing duplicates.
 * Does not guarantee order of filtered elements.
 *
 * An optional comparator function may be passed for arbitrary comparison behavior.
 * The default is a strict equality comparison: `a === b`.
 */
export const unique = <T>(array: T[], comparator: (a: T, b: T) => boolean = (a, b) => a === b): T[] =>
  array.filter((a, index) => array.slice(index + 1).filter(b => comparator(a, b)).length === 0);
