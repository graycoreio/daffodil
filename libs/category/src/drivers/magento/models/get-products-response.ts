import { ProductNode } from '@daffodil/product';
import { MagentoPageInfo } from './page-info';

export interface MagentoGetProductsResponse {
	products: {
		items: ProductNode[];
		page_info: MagentoPageInfo;
		total_count: number;
	}
}
