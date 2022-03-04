import { MagentoCategoryFilters } from './filters';
import { MagentoSortFieldAction } from './sort';

export interface MagentoGetCategoryAndProductsRequest {
	productFilter: MagentoCategoryFilters;
	categoryFilters: MagentoCategoryFilters;
	search?: string;
	pageSize?: number;
	currentPage?: number;
	sort?: MagentoSortFieldAction;
}
