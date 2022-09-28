import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffProduct } from '@daffodil/product';

import { DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM } from '../injection-tokens/transforms/product-preview/preview.token';
import { DaffMagentoProductTransform } from '../interfaces/product-preview-transform.type';
import { MagentoProduct } from '../models/magento-product';
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
    @Inject(DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM) private productPreviewTransform: DaffMagentoProductTransform,
  ) {}

  transformMagentoSimpleProduct(product: MagentoProduct, mediaUrl: string): DaffProduct {
    return {
      ...this.productPreviewTransform(product, mediaUrl),

      description: product.description.html,
      short_description: product.short_description.html,
      meta_title: product.meta_title,
      meta_description: product.meta_description,
      canonicalUrl: product.canonical_url,
    };
  }
}
