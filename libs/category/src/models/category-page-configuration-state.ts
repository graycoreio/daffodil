import { DaffSortOptions } from '@daffodil/core/state';

import { DaffCategoryRequest } from './category-request';
import { DaffCategoryFilter } from './filters/public_api';

export type DaffCategoryPageConfigurationState = DaffCategoryRequest & {
	filters: DaffCategoryFilter[];
  sort_options: DaffSortOptions;
	total_pages: number;
	total_products: number;
	product_ids: string[];
};

