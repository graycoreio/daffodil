import { DaffCategoryFilterType } from '../category-filter-type';
import { DaffCategoryFilterRangeRequestOption } from '../range/public_api';

export interface DaffCategoryFilterRangeRequestBase<T> {
	type: DaffCategoryFilterType;
	name: string;
	value: DaffCategoryFilterRangeRequestOption<T>;
}
