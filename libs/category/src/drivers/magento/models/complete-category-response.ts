import { MagentoCategory } from './category';
import { MagentoSortFields } from './sort-fields';
import { MagentoAggregation } from './aggregation';
import { ProductNode } from '@daffodil/product';
import { MagentoPageInfo } from './page-info';

export interface MagentoCompleteCategoryResponse {
  category: MagentoCategory;
	aggregates: MagentoAggregation[];
	products: ProductNode[];
	sort_fields: MagentoSortFields;
	page_info: MagentoPageInfo;
	total_count: number;
}