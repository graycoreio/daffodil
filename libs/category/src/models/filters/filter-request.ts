import { DaffCategoryFilterEqualRequest } from './type/equal/request';
import { DaffCategoryFilterRangeNumericRequest } from './type/range-numeric/request';

export type DaffCategoryFilterRequest =
	DaffCategoryFilterEqualRequest |
	DaffCategoryFilterRangeNumericRequest;
