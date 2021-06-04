import { Dict } from '../types/public_api';

/**
 * Converts an array into a dictionary.
 * Dictionary values are keyed by the return of the specified getKey, or `'key'` by default.
 */
export const daffArrayToDict = <T>(array: T[], getKey = (val: T) => (<any>val).key): Dict<T> =>
  array.reduce(
    (dict, val) => {
      dict[getKey(val)] = val;
      return dict;
    },
    {},
  );
