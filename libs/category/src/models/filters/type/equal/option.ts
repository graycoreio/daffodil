import { DaffCategoryFilterOptionBase } from '../../category-filter-option-base';

export interface DaffCategoryFilterEqualOption extends DaffCategoryFilterOptionBase {
	applied: boolean;
	value: string;
	label: string;
	count: number;
}
