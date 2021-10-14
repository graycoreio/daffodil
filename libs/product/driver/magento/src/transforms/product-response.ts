import { Injectable } from '@angular/core';

import { DaffProductDriverResponse } from '@daffodil/product/driver';

import { MagentoProduct } from '../models/magento-product';
import { DaffMagentoProductsTransformer } from './product-transformers';

/**
 * Transforms the MagentoProduct from the magento product query into a DaffProductDriverResponse.
 *
 * @param product a magento product
 *
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoProductResponseTransformers {

  constructor(private magentoProductsTransformers: DaffMagentoProductsTransformer) {}

  transformMagentoProductResponse(product: MagentoProduct, mediaUrl: string): DaffProductDriverResponse {
    const daffProduct = this.magentoProductsTransformers.transformMagentoProduct(product, mediaUrl);
    return {
      id: daffProduct.id,
      products: [daffProduct],
    };
  }
}
