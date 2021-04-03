import { DaffCategoryFilterEqualRequest } from './type/equal/request';
import { DaffCategoryFilterRangeNumericRequest } from './type/range-numeric/request';
import { DaffCategoryFilterRangeRequestBase } from './type/range/public_api';

export type DaffCategoryFilterRequest =
	DaffCategoryFilterEqualRequest |
	DaffCategoryFilterRangeNumericRequest;
