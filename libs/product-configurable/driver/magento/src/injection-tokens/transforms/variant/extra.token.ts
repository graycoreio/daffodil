import { Provider } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffConfigurableProductVariant } from '@daffodil/product-configurable';

import { MagentoConfigurableProductVariantExtraTransform } from '../../../interfaces/variant-extra-transform.type';
import { MagentoConfigurableProductVariant } from '../../../models/public_api';

const {
  /**
   * A multi-provider injection token for providing extra transform logic in the Product Magento driver.
   * It is run after the standard transforms for each product preview and passed both the current transformed Daffodil product and the Magento product.
   *
   * See {@link MagentoConfigurableProductVariant} for more info.
   */
  token: DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS,
  provider,
} = createMultiInjectionToken<MagentoConfigurableProductVariantExtraTransform>('DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS');

/**
 * Provides extra product preview transforms for the Magento product driver.
 *
 * See {@link DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS}.
 *
 * @example
 * ```ts
 * providers: [
 *   ...provideDaffProductConfigurableMagentoExtraItemTransforms(
 *     myExtraProductTransform
 *   )
 * ]
 * ```
 */
export function provideDaffProductConfigurableMagentoExtraItemTransforms<T extends MagentoConfigurableProductVariant = MagentoConfigurableProductVariant, V extends DaffConfigurableProductVariant = DaffConfigurableProductVariant>(...transforms: MagentoConfigurableProductVariantExtraTransform<T, V>[]): Provider[] {
  return provider<MagentoConfigurableProductVariantExtraTransform<T, V>>(...transforms);
}

export { DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS };
