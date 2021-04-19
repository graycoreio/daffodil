import { MagentoCategoryFilters } from './filters';
import { MagentoSortFieldAction } from './sort';

export interface MagentoGetProductsByCategoriesRequest {
	filter: MagentoCategoryFilters;
	search?: string;
	pageSize?: number;
	currentPage?: number;
	sort?: MagentoSortFieldAction;
}
