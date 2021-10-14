export const unique = <T>(array: T[], comparator: (a: T, b: T) => boolean = (a, b) => a === b): T[] =>
  array.filter((a, index) => array.slice(index + 1).filter(b => comparator(a, b)).length === 0);
