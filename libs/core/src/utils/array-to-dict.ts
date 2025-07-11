type Dictionary = Record<string | number | symbol, any>;

/**
 * Converts an array into a dictionary.
 * Dictionary values are keyed by the return of the specified `getKey`.
 */
export const daffArrayToDict = <T, R extends keyof Dictionary = keyof Dictionary>(array: Array<T>, getKey: (val: T) => R): Record<R, T> =>
  array.reduce(
    (dict, val) => {
      dict[getKey(val)] = val;
      return dict;
    },
    <Record<R, T>>{},
  );
