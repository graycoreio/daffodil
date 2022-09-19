import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffProductDriverResponse } from '@daffodil/product/driver';

import { DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM } from '../injection-tokens/transforms/product/token';
import { DaffMagentoProductTransform } from '../interfaces/public_api';
import { MagentoProduct } from '../models/magento-product';

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
  constructor(
    @Inject(DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM) private transformMagentoProduct: DaffMagentoProductTransform,
  ) {}

  transformMagentoProductResponse(product: MagentoProduct, mediaUrl: string): DaffProductDriverResponse {
    const daffProduct = this.transformMagentoProduct(product, mediaUrl);
    return {
      id: daffProduct.id,
      products: [daffProduct],
    };
  }
}
