import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffProductDriverResponse } from '@daffodil/product/driver';
import {
  DaffMagentoProductPreviewTransform,
  DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM,
} from '@daffodil/product/driver/magento';

import { MagentoProductWithUpsell } from '../models/product-with-upsell.interface';

/**
 * Adds upsell product info to the product driver response.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoUpsellProductsTransformers {
  constructor(
    @Inject(DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM) private productPreviewTransform: DaffMagentoProductPreviewTransform,
  ) {}

  /**
   * Transforms magento upsell products with the product preview transform and
   * stores those upsell products in the products array and nested in the main product.
   */
  transformMagentoUpsellProducts(
    daffProductResponse: DaffProductDriverResponse,
    magentoProduct: MagentoProductWithUpsell,
    mediaUrl: string,
  ): DaffProductDriverResponse {
    const upsell = magentoProduct.upsell_products.map(p => this.productPreviewTransform(p, mediaUrl));

    return {
      ...daffProductResponse,

      products: [
        ...daffProductResponse.products.map(product =>
          product.id === daffProductResponse.id
            ? ({
              ...product,
              upsell,
            })
            : product,
        ),
        ...upsell,
      ],
    };
  }
}
