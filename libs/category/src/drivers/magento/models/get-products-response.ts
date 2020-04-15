import { MagentoProduct } from '@daffodil/product';
import { MagentoPageInfo } from './page-info';

export interface MagentoGetProductsResponse {
	products: {
		items: MagentoProduct[];
		page_info: MagentoPageInfo;
		total_count: number;
	}
}
