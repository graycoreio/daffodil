import { MagentoBundledProduct } from '../models/bundled-product';
import { DaffCompositeProduct } from '../../../models/composite-product';
/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 * @param response the response from a magento product query.
 */
export declare function transformMagentoBundledProduct(product: MagentoBundledProduct, mediaUrl: string): DaffCompositeProduct;
