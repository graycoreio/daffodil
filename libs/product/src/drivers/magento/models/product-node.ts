import { ProductImageNode } from './product-image-node';
import { ProductPriceNode } from './product-price-node';

export enum MagentoProductTypeEnum {
	BundledProduct = 'BundleProduct',
	ConfigurableProduct = 'ConfigurableProduct',
	SimpleProduct = 'SimpleProduct'
}

/**
 * An object for defining what the product service requests and retrieves from a magento backend.
 */
export interface ProductNode {
	id: number;
	__typename?: MagentoProductTypeEnum;
  name: string;
  sku: string;
  url_key: string;
  image: ProductImageNode;
  price: ProductPriceNode;
  media_gallery_entries?: any;
  short_description?: any;
  description?: any;
}
