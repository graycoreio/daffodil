import { DaffCategoryFilter } from './category-filter';
import { DaffCategorySortOptions } from './category-sort-options';
import { DaffCategoryRequest } from './requests/category-request';

export type DaffCategoryPageConfigurationState = DaffCategoryRequest & {
	filters: DaffCategoryFilter[];
  sort_options: DaffCategorySortOptions;
	total_pages: number;
	total_products: number;
	product_ids: string[];
};
