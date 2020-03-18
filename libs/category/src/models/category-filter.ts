import { DaffCategoryFilterBase } from './category-filter-base';
import { DaffCategoryAppliedFilterOption } from './category-applied-filter';

export interface DaffCategoryFilter extends DaffCategoryFilterBase {
	options: DaffCategoryFilterOption[];
}

export interface DaffCategoryFilterOption extends DaffCategoryAppliedFilterOption {
	count: number;
}
