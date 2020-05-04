import { DaffProduct } from '../../../models/product';
import { MagentoProduct, MagentoProductTypeEnum } from '../models/magento-product';
import { MagentoBundledProduct } from '../models/bundled-product';
import { transformMagentoBundledProduct } from './bundled-product-transformers';
import { transformMagentoSimpleProduct } from './simple-product-transformers';

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct. 
 * @param product a magento product
 */
export function transformMagentoProduct(product: MagentoProduct, mediaUrl?: string): DaffProduct {
	switch(product.__typename) {
		case MagentoProductTypeEnum.BundledProduct:
			return transformMagentoBundledProduct(<MagentoBundledProduct>product, mediaUrl);
		default:
			return transformMagentoSimpleProduct(product, mediaUrl);
	}
}

/**
 * Transforms many magento MagentoProducts from the magento product query into DaffProducts.
 */
export function transformManyMagentoProducts(products: MagentoProduct[], mediaUrl?: string): DaffProduct[] {
	return products.map(product => transformMagentoProduct(product, mediaUrl));
}
