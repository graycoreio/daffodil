import { DaffProduct } from '@daffodil/product';

import { MagentoBundledProduct } from '../models/bundled-product';
import { MagentoConfigurableProduct } from '../models/configurable-product';
import {
  MagentoProduct,
  MagentoProductTypeEnum,
} from '../models/magento-product';
import { transformMagentoBundledProduct } from './bundled-product-transformers';
import { transformMagentoConfigurableProduct } from './configurable-product-transformers';
import { transformMagentoProductPreview } from './product-preview';
import { transformMagentoSimpleProduct } from './simple-product-transformers';

/**
 * Transforms a Magento product into a Daffodil product.
 * Handles all product types.
 */
export function transformProduct(product: MagentoProduct, mediaUrl: string): DaffProduct {
  return transformMagentoProduct(transformMagentoSimpleProduct(product, mediaUrl), product);
}

/**
 * Transforms a Magento product preview into a minimal Daffodil product.
 * Handles all product types.
 */
export function transformProductPreview(product: MagentoProduct, mediaUrl: string): DaffProduct {
  return transformMagentoProduct(transformMagentoProductPreview(product, mediaUrl), product);
}

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 *
 * @param product a magento product
 */
export function transformMagentoProduct(daffProduct: DaffProduct, product: MagentoProduct): DaffProduct {
  switch(product.__typename) {
    case MagentoProductTypeEnum.BundledProduct:
      return transformMagentoBundledProduct(daffProduct, <MagentoBundledProduct>product);
    case MagentoProductTypeEnum.ConfigurableProduct:
      return transformMagentoConfigurableProduct(daffProduct, <MagentoConfigurableProduct>product);
    case MagentoProductTypeEnum.SimpleProduct:
    default:
      return daffProduct;
  }
}

/**
 * Transforms many magento MagentoProducts from the magento product query into DaffProducts.
 */
export function transformManyMagentoProducts(products: MagentoProduct[], mediaUrl: string): DaffProduct[] {
  return products.map(product => transformMagentoProduct(
    transformMagentoSimpleProduct(product, mediaUrl),
    product,
  ));
}
