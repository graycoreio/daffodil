import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterRangeRequestOption } from './request-option';

export interface DaffToggleCategoryFilterRangeRequest {
	type: DaffCategoryFilterType.Range;
	name: string;
	value: DaffCategoryFilterRangeRequestOption;
}
