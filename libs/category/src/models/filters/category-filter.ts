import { DaffCategoryEqualFilter } from './type/equal/filter';
import { DaffCategoryRangeFilter } from './type/range/filter';

/**
 * A single category filter, along with it's options. For example, a filter may be
 * something like "Color", and have the filter options of "Blue", "Green,", etc.
 * Additionally, filters have "types", see {@link DaffCategoryFilterType} for a
 * complete list.
 */
export type DaffCategoryFilter = DaffCategoryRangeFilter | DaffCategoryEqualFilter;
