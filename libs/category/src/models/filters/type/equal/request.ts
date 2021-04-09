import { DaffCategoryFilterType } from '../category-filter-type';

export interface DaffCategoryFilterEqualRequest {
	type: DaffCategoryFilterType.Equal;
	name: string;
	value: string[];
}
