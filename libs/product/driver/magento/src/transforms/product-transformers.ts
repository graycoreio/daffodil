import { DaffProduct } from '@daffodil/product';

import { MagentoBundledProduct } from '../models/bundled-product';
import { MagentoConfigurableProduct } from '../models/configurable-product';
import {
  MagentoProduct,
  MagentoProductTypeEnum,
} from '../models/magento-product';
import { transformMagentoBundledProduct } from './bundled-product-transformers';
import { transformMagentoConfigurableProduct } from './configurable-product-transformers';
import { transformMagentoSimpleProduct } from './simple-product-transformers';

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 *
 * @param product a magento product
 */
export function transformMagentoProduct(product: MagentoProduct, mediaUrl: string): DaffProduct {
  const simple = transformMagentoSimpleProduct(product, mediaUrl);
  switch(product.__typename) {
    case MagentoProductTypeEnum.BundledProduct:
      return transformMagentoBundledProduct(simple, <MagentoBundledProduct>product);
    case MagentoProductTypeEnum.ConfigurableProduct:
      return transformMagentoConfigurableProduct(simple, <MagentoConfigurableProduct>product);
    case MagentoProductTypeEnum.SimpleProduct:
    default:
      return simple;
  }
}

/**
 * Transforms many magento MagentoProducts from the magento product query into DaffProducts.
 */
export function transformManyMagentoProducts(products: MagentoProduct[], mediaUrl: string): DaffProduct[] {
  return products.map(product => transformMagentoProduct(product, mediaUrl));
}
