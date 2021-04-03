import { DaffCategoryFilterType } from '../category-filter-type';

export interface DaffToggleCategoryFilterEqualRequest {
	type: DaffCategoryFilterType.Equal;
	name: string;
	value: string;
}
