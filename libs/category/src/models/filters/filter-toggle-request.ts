import { DaffToggleCategoryFilterEqualRequest } from './type/equal/toggle-request';
import { DaffToggleCategoryFilterRangeNumericRequest } from './type/range-numeric/public_api';

export type DaffToggleCategoryFilterRequest =
	DaffToggleCategoryFilterEqualRequest |
	DaffToggleCategoryFilterRangeNumericRequest;
