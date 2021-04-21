import { DaffCategoryFilter } from './category-filter';

/**
 * A given option of a particular filter, e.g. "Blue" is a DaffCategoryFilterOption
 * of the {@link DaffCategoryFilter} "Color".
 */
export type DaffCategoryFilterOption = DaffCategoryFilter['options'][string];
