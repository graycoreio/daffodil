import { DaffMergeStrategy } from './strategy.type';

/**
 * Merges dictionaries with a specific strategy for handling collisions.
 * @see {@link DaffMergeStrategy}.
 *
 * @example Merging two dictionaries with predefined mergers
 *
 * ```ts
 * const a = {
 * 	 ary: [1, 2],
 *   obj: {foo: 5, bar: 10}
 * }
 * const a = {
 * 	 ary: [3, 4],
 *   obj: {foo: 6},
 *   fish: 'tacos'
 * }
 * const result = daffMerge(
 *   [a, b],
 *   {
 *     ary: daffArrayConcatMerger,
 *     obj: daffDictAssignMerger
 *   }
 * )
 * ```
 * the value of result would be:
 * ```ts
 * {
 *   ary: [1, 2, 3, 4],
 *   obj: {foo: 6, bar: 10},
 *   fish: 'tacos'
 * }
 * ```
 *
 * @example Merging two dictionaries with predefined mergers
 *
 * ```ts
 * const a = {
 * 	 ary: [1, 2],
 *   obj: {foo: 5, bar: 10}
 * }
 * const a = {
 * 	 ary: [3, 4],
 *   obj: {foo: 6},
 *   fish: 'tacos'
 * }
 * const result = daffMerge(
 *   [a, b],
 *   {
 *     ary: daffArrayConcatMerger,
 *     obj: daffDictAssignMerger
 *   }
 * )
 * ```
 * the value of result would be:
 * ```ts
 * {
 *   ary: [1, 2, 3, 4],
 *   obj: {foo: 6, bar: 10},
 *   fish: 'tacos'
 * }
 * ```
 */
export const daffMerge = <T extends Record<string, unknown> = Record<string, unknown>>(dicts: Array<T>, strategy: DaffMergeStrategy<T> = {}): T =>
  dicts.reduce((acc, dict) => {
    for (const k in dict) {
      if (Object.hasOwn(acc, k) && strategy[k]) {
        acc[k] = strategy[k](acc[k], dict[k]);
      } else {
        acc[k] = dict[k];
      }
    }

    return acc;
  }, <T>{});
