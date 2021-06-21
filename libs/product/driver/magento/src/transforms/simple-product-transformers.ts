import {
  DaffProduct,
  DaffProductDiscount,
  DaffProductImage,
} from '@daffodil/product';

import {
  MagentoProduct,
  MagentoProductStockStatusEnum,
} from '../models/magento-product';
import { transformMagentoProductPreview } from './product-preview';

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 *
 * @param product a magento product
 */
export function transformMagentoSimpleProduct(product: MagentoProduct, mediaUrl: string): DaffProduct {
  return {
    ...transformMagentoProductPreview(product, mediaUrl),

    in_stock: product.stock_status === MagentoProductStockStatusEnum.InStock,
    description: product.description.html,
    meta_title: product.meta_title,
    meta_description: product.meta_description,
    related: product.related_products?.map(p => transformMagentoProductPreview(p, mediaUrl)) || [],
    upsell: product.upsell_products?.map(p => transformMagentoProductPreview(p, mediaUrl)) || [],
  };
}


