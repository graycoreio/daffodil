import { Injectable } from '@angular/core';

import { DaffProduct } from '@daffodil/product';

import { MagentoProduct } from '../models/magento-product';
import { DaffMagentoSimpleProductTransformers } from './simple-product-transformers';

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 *
 * @param product a magento product
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoProductsTransformer {

  constructor(private magentoSimpleProductTransformers: DaffMagentoSimpleProductTransformers) {}

  transformMagentoProduct(product: MagentoProduct, mediaUrl: string): DaffProduct {
    return this.magentoSimpleProductTransformers.transformMagentoSimpleProduct(product, mediaUrl);
  }

  /**
   * Transforms many magento MagentoProducts from the magento product query into DaffProducts.
   */
  transformManyMagentoProducts(products: MagentoProduct[], mediaUrl: string): DaffProduct[] {
    return products.map(product => this.transformMagentoProduct(product, mediaUrl));
  }
}

