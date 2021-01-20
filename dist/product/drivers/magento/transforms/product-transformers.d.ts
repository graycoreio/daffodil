import { DaffProduct } from '../../../models/product';
import { MagentoProduct } from '../models/magento-product';
/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 * @param product a magento product
 */
export declare function transformMagentoProduct(product: MagentoProduct, mediaUrl?: string): DaffProduct;
/**
 * Transforms many magento MagentoProducts from the magento product query into DaffProducts.
 */
export declare function transformManyMagentoProducts(products: MagentoProduct[], mediaUrl?: string): DaffProduct[];
