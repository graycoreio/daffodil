import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffProductDriverResponse } from '@daffodil/product/driver';
import {
  DaffMagentoProductTransform,
  DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM,
} from '@daffodil/product/driver/magento';

import { MagentoProductWithRelated } from '../models/product-with-related.interface';

/**
 * Adds related product info to the product driver response.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoRelatedProductsTransformers {
  constructor(
    @Inject(DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM) private productPreviewTransform: DaffMagentoProductTransform,
  ) {}

  /**
   * Transforms magento related products with the product preview transform and
   * stores those related products in the products array and nested in the main product.
   */
  transformMagentoRelatedProducts(
    daffProductResponse: DaffProductDriverResponse,
    magentoProduct: MagentoProductWithRelated,
    mediaUrl: string,
  ): DaffProductDriverResponse {
    const related = magentoProduct.related_products.map(p => this.productPreviewTransform(p, mediaUrl));

    return {
      ...daffProductResponse,

      products: [
        ...daffProductResponse.products.map(product =>
          product.id === daffProductResponse.id
            ? ({
              ...product,
              related,
            })
            : product,
        ),
        ...related,
      ],
    };
  }
}
