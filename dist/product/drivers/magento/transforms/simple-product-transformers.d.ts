import { DaffProduct } from '../../../models/product';
import { MagentoProduct } from '../models/magento-product';
/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 * @param product a magento product
 */
export declare function transformMagentoSimpleProduct(product: MagentoProduct, mediaUrl: string): DaffProduct;
