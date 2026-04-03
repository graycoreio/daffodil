/**
 * Groups values by the key returned by `getKey`.
 */
export const group = <
  T,
  R extends string | number | symbol = string | number | symbol
>(array: Array<T>, getKey: (val: T) => R): Record<R, Array<T>> =>
  array.reduce((acc, val) => {
    const key = getKey(val);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(val);
    return acc;
  }, <Record<R, Array<T>>>{});
