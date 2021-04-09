import { DaffCategoryFilterType } from '../category-filter-type';

export interface DaffCategoryFilterEqualToggleRequest {
	type: DaffCategoryFilterType.Equal;
	name: string;
	value: string;
}
