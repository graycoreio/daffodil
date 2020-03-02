import { MagentoCategoryFilters } from './filters';
import { MagentoSortFieldAction } from './sort';

export interface MagentoGetProductsByCategoriesRequest {
	filters: MagentoCategoryFilters;
	search?: string;
	page_size?: number;
	current_page?: number;
	sort?: MagentoSortFieldAction;
}
