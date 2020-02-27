import { MagentoCategory } from './category/category';
import { MagentoSortFields } from './products/sort-fields';
import { MagentoAggregation } from './products/aggregation';
import { ProductNode } from '@daffodil/product';
import { MagentoPageInfo } from './products/page-info';

export interface CompleteCategoryResponse {
  category: MagentoCategory;
	aggregates: MagentoAggregation[];
	products: ProductNode[];
	sort_fields: MagentoSortFields;
	page_info: MagentoPageInfo;
	total_count: number;
}