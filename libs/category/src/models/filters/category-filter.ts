import { DaffCategoryFilterEqual } from './type/equal/filter';
import { DaffCategoryFilterRangeNumeric } from './type/range-numeric/filter';

/**
 * A single category filter, along with its options. For example, a filter may be
 * something like "Color", and have the filter options of "Blue", "Green,", etc.
 * Additionally, filters have "types", see {@link DaffCategoryFilterType} for a
 * complete list.
 */
export type DaffCategoryFilter = DaffCategoryFilterRangeNumeric | DaffCategoryFilterEqual;
