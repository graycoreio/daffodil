import { DaffCategoryFilterEqualRequestReplacement } from './type/equal/request';
import { DaffCategoryFilterRangeNumericRequest } from './type/range-numeric/request';

/**
 * A DaffCategoryFilterRequest is used to modify the applied or unapplied state of
 * the options of a {@link DaffCategoryFilter}. This will replace DaffCategoryFilterRequest in a future PR.
 */
export type DaffCategoryFilterRequestReplacement =
	DaffCategoryFilterEqualRequestReplacement |
	DaffCategoryFilterRangeNumericRequest;
