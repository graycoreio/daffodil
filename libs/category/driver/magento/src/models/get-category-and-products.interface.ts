import { MagentoProduct } from '@daffodil/product/driver/magento';

import { MagentoAggregation } from './aggregation';
import { MagentoCategory } from './category';
import { MagentoPageInfo } from './page-info';
import { MagentoSortFields } from './sort-fields';

export interface MagentoGetCategoryAndProductsResponse {
  categoryList: MagentoCategory[];
  products: {
		items: MagentoProduct[];
		page_info: MagentoPageInfo;
		total_count: number;
    aggregations: MagentoAggregation[];
    sort_fields: MagentoSortFields;
	};
}
