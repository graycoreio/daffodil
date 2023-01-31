/**
 * Shallow compares two objects using a list of provided property keys to enumerate the values.
 * `null` and `undefined` are considered equal for the purposes of the comparison.
 * A strict equality comparison is used for truthy property values.
 */
export function shallowCompare<T, K extends keyof T = keyof T>(obj1: T, obj2: T, props: K[]): boolean {
  return !!(obj1 && obj2 && props.reduce(
    (acc, prop) => {
      const p1 = obj1[prop];
      const p2 = obj2[prop];
      return acc && (
        // undefined and null are treated as equal
        (p1 === undefined || p1 === null) && (p2 === undefined || p2 === null)
          || p1 === p2
      );
    },
    true,
  ));
}
