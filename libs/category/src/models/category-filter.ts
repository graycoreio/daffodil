import { DaffCategoryAppliedFilterOption } from './category-applied-filter';
import { DaffCategoryFilterBase } from './category-filter-base';

export interface DaffCategoryFilter extends DaffCategoryFilterBase {
	options: DaffCategoryFilterOption[];
}

export interface DaffCategoryFilterOption extends DaffCategoryAppliedFilterOption {
	count: number;
}
