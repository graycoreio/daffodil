import { Provider } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

import { DaffMagentoProductExtraTransform } from '../../../interfaces/product-preview-extra-transform.type';
import { MagentoProduct } from '../../../models/public_api';

export const {
  /**
   * A multi-provider injection token for providing extra transform logic in the Product Magento driver.
   * It is run after the standard transforms for each product preview and passed both the current transformed Daffodil product and the Magento product.
   *
   * See {@link MagentoProduct} for more info.
   */
  token: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS,
  provider,
} = createMultiInjectionToken<DaffMagentoProductExtraTransform>('DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS');

/**
 * Provides extra product preview transforms for the Magento product driver.
 *
 * See {@link DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS}.
 *
 * @example
 * ```ts
 * providers: [
 *   ...provideDaffProductMagentoExtraProductTransforms(
 *     myExtraProductTransform
 *   )
 * ]
 * ```
 */
export function provideDaffProductMagentoExtraProductTransforms<T extends MagentoProduct = MagentoProduct, V extends DaffProduct = DaffProduct>(...transforms: DaffMagentoProductExtraTransform<T, V>[]): Provider[] {
  return provider<DaffMagentoProductExtraTransform<T, V>>(...transforms);
}
