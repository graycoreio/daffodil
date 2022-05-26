import { DaffProductFilterEqualToggleRequest } from './type/equal/toggle-request';
import { DaffProductFilterRangeNumericToggleRequest } from './type/range-numeric/public_api';

/**
 * A DaffProductFilterToggleRequest is used to toggle a filter option between an applied and unapplied state.
 */
export type DaffProductFilterToggleRequest =
	DaffProductFilterEqualToggleRequest |
	DaffProductFilterRangeNumericToggleRequest;
