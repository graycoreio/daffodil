import { DaffCategoryFilterBase } from './category-filter-base';

export interface DaffCategoryAppliedFilter extends DaffCategoryFilterBase {
	options: DaffCategoryAppliedFilterOption[];
}

export interface DaffCategoryAppliedFilterOption {
	label: string;
	value: string;
}
