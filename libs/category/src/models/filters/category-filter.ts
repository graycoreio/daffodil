import { DaffCategoryFilterEqual } from './type/equal/filter';
import { DaffCategoryFilterRangeNumeric } from './type/range-numeric/filter';

/**
 * A single category filter along with its options. For example, a filter may be
 * something like "Color" with options of "Red", "Blue", and "Green".
 * Additionally, filters have "types", see {@link DaffCategoryFilterType} for a
 * complete list.
 */
export type DaffCategoryFilter = DaffCategoryFilterRangeNumeric | DaffCategoryFilterEqual;
