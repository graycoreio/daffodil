import { DaffFilterEqual } from './type/equal/filter';
import { DaffFilterRangeNumeric } from './type/range-numeric/filter';

/**
 * A single filter along with its options. For example, a filter may be
 * something like "Color" with options of "Red", "Blue", and "Green".
 *
 * Importantly, filters have "types" which determine their behavior. See {@link DaffFilterType} for a complete list.
 */
export type DaffFilter = DaffFilterRangeNumeric | DaffFilterEqual;
