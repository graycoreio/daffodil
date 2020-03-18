import { DaffCategoryFilter } from './category-filter';
import { DaffCategorySortOption } from './category-sort-option';
import { DaffCategoryRequest } from './requests/category-request';
import { DaffCategoryAppliedFilter } from './category-applied-filter';

export interface DaffCategoryPageConfigurationState extends DaffCategoryRequest {
	filters: DaffCategoryFilter[];
  sort_options: DaffCategorySortOption[];
	total_pages: number;
	total_products: number;
	product_ids: string[];
}
