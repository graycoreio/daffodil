import { DaffProductFilterEqual } from './type/equal/filter';
import { DaffProductFilterRangeNumeric } from './type/range-numeric/filter';

/**
 * A single product filter along with its options. For example, a filter may be
 * something like "Color" with options of "Red", "Blue", and "Green".
 *
 * Importantly, filters have "types" which determine their behavior. See {@link DaffProductFilterType} for a complete list.
 */
export type DaffProductFilter = DaffProductFilterRangeNumeric | DaffProductFilterEqual;
