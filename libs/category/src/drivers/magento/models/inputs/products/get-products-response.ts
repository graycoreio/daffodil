import { ProductNode } from '@daffodil/product';
import { MagentoAggregation } from './aggregation';
import { MagentoSortFields } from './sort-fields';
import { MagentoPageInfo } from './page-info';

export interface MagentoGetProductsResponse {
	aggregates: MagentoAggregation[];
	products: ProductNode[];
	sort_fields: MagentoSortFields;
	page_info: MagentoPageInfo;
	total_count: number;
}
