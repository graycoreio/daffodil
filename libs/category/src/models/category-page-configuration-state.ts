import { DaffSortOptions } from '@daffodil/core/state';

import { DaffCategoryFilter } from './category-filter';
import { DaffCategoryRequest } from './requests/category-request';

export type DaffCategoryPageConfigurationState = DaffCategoryRequest & {
	filters: DaffCategoryFilter[];
  sort_options: DaffSortOptions;
	total_pages: number;
	total_products: number;
	product_ids: string[];
};

