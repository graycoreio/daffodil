export function daffDictAssignMerger<T extends Record<string, unknown> = Record<string, unknown>>(a: T, b: T): T {
  return {
    ...a,
    ...b,
  };
}
