import { DaffCategoryFilterEqualRequest } from './type/equal/request';
import { DaffCategoryFilterRangeNumericRequest } from './type/range-numeric/request';

/**
 * A DaffCategoryFilterRequest is used to modify the applied or unapplied state of
 * the options of a {@link DaffCategoryFilter}
 */
export type DaffCategoryFilterRequest =
	DaffCategoryFilterEqualRequest |
	DaffCategoryFilterRangeNumericRequest;
