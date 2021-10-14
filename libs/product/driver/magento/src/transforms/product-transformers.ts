import { Injectable } from '@angular/core';

import { DaffProduct } from '@daffodil/product';

import { MagentoBundledProduct } from '../models/bundled-product';
import {
  MagentoProduct,
  MagentoProductTypeEnum,
} from '../models/magento-product';
import { transformMagentoBundledProduct } from './bundled-product-transformers';
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
    switch(product.__typename) {
      case MagentoProductTypeEnum.BundledProduct:
        return transformMagentoBundledProduct(this.magentoSimpleProductTransformers.transformMagentoSimpleProduct(product, mediaUrl), <MagentoBundledProduct>product);
      case MagentoProductTypeEnum.SimpleProduct:
      default:
        return this.magentoSimpleProductTransformers.transformMagentoSimpleProduct(product, mediaUrl);
    }
  }

  /**
   * Transforms many magento MagentoProducts from the magento product query into DaffProducts.
   */
  transformManyMagentoProducts(products: MagentoProduct[], mediaUrl: string): DaffProduct[] {
    return products.map(product => this.transformMagentoProduct(product, mediaUrl));
  }
}

