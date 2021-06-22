import { DaffProductDriverResponse } from '@daffodil/product/driver';

import { MagentoProduct } from '../models/magento-product';
import { transformMagentoProduct } from './product-transformers';

/**
 * Transforms the MagentoProduct from the magento product query into a DaffProductDriverResponse.
 *
 * @param product a magento product
 */
export function transformMagentoProductResponse(product: MagentoProduct, mediaUrl: string): DaffProductDriverResponse {
  const daffProduct = transformMagentoProduct(product, mediaUrl);
  return {
    id: daffProduct.id,
    products: [daffProduct, ...daffProduct.upsell, ...daffProduct.related],
  };
}
