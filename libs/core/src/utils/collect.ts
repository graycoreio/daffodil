/**
 * Recurses through a tree, collecting each element in that tree and returning it in an array.
 * The value of getKey should be a field that contains a list of the same type of object.
 * Accepts an optional depth argument which will limit the traversal. This should be used for trees with circular references.
 */
export const collect = <T>(obj: T, getChildren: (val: T) => T[], depth?: number): T[] =>
  !depth || depth > 0
    ? [obj].concat(...getChildren(obj).map((child) => collect(child, getChildren, depth - 1)))
    : [obj];
