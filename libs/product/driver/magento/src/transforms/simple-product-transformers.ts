import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffProduct } from '@daffodil/product';

import { DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM } from '../injection-tokens/transforms/product-preview/preview.token';
import { DaffMagentoProductPreviewTransform } from '../interfaces/product-preview-transform.type';
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
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoSimpleProductTransformers {

  constructor(
    @Inject(DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM) private productPreviewTransform: DaffMagentoProductPreviewTransform,
  ) {}

  transformMagentoSimpleProduct(product: MagentoProduct, mediaUrl: string): DaffProduct {
    return {
      ...this.productPreviewTransform(product, mediaUrl),

      in_stock: product.stock_status === MagentoProductStockStatusEnum.InStock,
      description: product.description.html,
      short_description: product.short_description.html,
      meta_title: product.meta_title,
      meta_description: product.meta_description,
      related: product.related_products?.map(p => transformMagentoProductPreview(p, mediaUrl)) || [],
      upsell: product.upsell_products?.map(p => transformMagentoProductPreview(p, mediaUrl)) || [],
    };
  }
}
