type Dictionary = Record<string | number | symbol, any>;

/**
 * Converts an array into a dictionary.
 * Dictionary values are keyed by the return of the specified `getKey`.
 */
export const daffArrayToDict = <T extends Dictionary>(array: T[], getKey: (val: T) => keyof Dictionary): Record<keyof Dictionary, T> =>
  array.reduce(
    (dict, val) => {
      dict[getKey(val)] = val;
      return dict;
    },
    {},
  );
