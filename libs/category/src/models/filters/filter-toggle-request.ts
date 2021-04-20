import { DaffCategoryFilterEqualToggleRequest } from './type/equal/toggle-request';
import { DaffCategoryFilterRangeNumericToggleRequest } from './type/range-numeric/public_api';

/**
 * A DaffCategoryFilterToggleRequest is used to toggle a filter option between an applied and unapplied state.
 */
export type DaffCategoryFilterToggleRequest =
	DaffCategoryFilterEqualToggleRequest |
	DaffCategoryFilterRangeNumericToggleRequest;
