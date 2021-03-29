import { DaffToggleCategoryFilterEqualRequest } from './type/equal/toggle-request';
import { DaffToggleCategoryFilterRangeRequest } from './type/range/toggle-request';

export type DaffToggleCategoryFilterRequest =
	DaffToggleCategoryFilterEqualRequest |
	DaffToggleCategoryFilterRangeRequest;
