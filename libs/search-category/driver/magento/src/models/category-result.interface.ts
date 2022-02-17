import { MagentoProduct } from '@daffodil/product/driver/magento';

export interface MagentoSearchCategoryResult {
  __typename?: string;
  uid: string;
  url_path: string;
  url_suffix: string;
  name?: string;
	description?: string;
	products?: {
		items?: {
      sku: string;
    }[];
	};
}
