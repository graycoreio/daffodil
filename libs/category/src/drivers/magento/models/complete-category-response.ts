import { MagentoProduct } from '@daffodil/product';

import { MagentoAggregation } from './aggregation';
import { MagentoCategory } from './category';
import { MagentoPageInfo } from './page-info';
import { MagentoSortFields } from './sort-fields';

export interface MagentoCompleteCategoryResponse {
  category: MagentoCategory;
	aggregates: MagentoAggregation[];
	products: MagentoProduct[];
	sort_fields: MagentoSortFields;
	page_info: MagentoPageInfo;
	total_count: number;
}
