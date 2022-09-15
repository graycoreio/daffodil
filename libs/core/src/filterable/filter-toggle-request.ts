import { DaffFilterEqualToggleRequest } from './type/equal/toggle-request';
import { DaffFilterRangeNumericToggleRequest } from './type/range-numeric/public_api';

/**
 * A DaffFilterToggleRequest is used to toggle a filter option between an applied and unapplied state.
 */
export type DaffFilterToggleRequest =
	DaffFilterEqualToggleRequest |
	DaffFilterRangeNumericToggleRequest;
