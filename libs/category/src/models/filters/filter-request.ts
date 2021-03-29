import { DaffCategoryFilterEqualRequest } from './type/equal/request';
import { DaffCategoryFilterRangeRequest } from './type/range/request';

export type DaffCategoryFilterRequest =
	DaffCategoryFilterEqualRequest |
	DaffCategoryFilterRangeRequest;
