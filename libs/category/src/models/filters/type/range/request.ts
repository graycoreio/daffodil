import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterRangeRequestOption } from './request-option';

export interface DaffCategoryFilterRangeRequest {
	type: DaffCategoryFilterType.Range;
	name: string;
	value: DaffCategoryFilterRangeRequestOption;
}
