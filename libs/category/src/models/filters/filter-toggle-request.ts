import { DaffCategoryFilterEqualToggleRequest } from './type/equal/toggle-request';
import { DaffCategoryFilterRangeNumericToggleRequest } from './type/range-numeric/public_api';

export type DaffCategoryFilterToggleRequest =
	DaffCategoryFilterEqualToggleRequest |
	DaffCategoryFilterRangeNumericToggleRequest;
