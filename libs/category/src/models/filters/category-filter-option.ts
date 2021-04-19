import { DaffCategoryFilterReplacement } from './category-filter';

/**
 * A given option of a particular filter, e.g. "Blue" is a DaffCategoryFilterOption
 * of the {@link DaffCategoryFilterReplacement} "Color".
 */
export type DaffCategoryFilterOptionReplacement = DaffCategoryFilterReplacement['options'][string];
