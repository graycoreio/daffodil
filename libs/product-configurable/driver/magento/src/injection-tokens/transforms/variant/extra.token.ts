import { Provider } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffConfigurableProductVariant } from '@daffodil/product-configurable';

import { MagentoConfigurableProductVariantExtraTransform } from '../../../interfaces/variant-extra-transform.type';
import { MagentoConfigurableProductVariant } from '../../../models/public_api';

const {
  /**
   * A multi-provider injection token for providing extra transform logic in `@daffodil/product-configurable/driver/magento`.
   * It is run after the standard transforms for each product preview and passed both the current transformed Daffodil configurable product variant and the Magento configurable product variant.
   *
   * See {@link MagentoConfigurableProductVariant} for more info.
   */
  token: DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS,
  provider,
} = createMultiInjectionToken<MagentoConfigurableProductVariantExtraTransform>('DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS');

/**
 * Provides extra configurable product variant transforms for `@daffodil/product-configurable/driver/magento`.
 *
 * See {@link DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS}.
 *
 * @example
 * ```ts
 * providers: [
 *   ...provideDaffProductConfigurableMagentoExtraVariantTransforms(
 *     myExtraProductTransform
 *   )
 * ]
 * ```
 */
export function provideDaffProductConfigurableMagentoExtraVariantTransforms<T extends MagentoConfigurableProductVariant = MagentoConfigurableProductVariant, V extends DaffConfigurableProductVariant = DaffConfigurableProductVariant>(...transforms: MagentoConfigurableProductVariantExtraTransform<T, V>[]): Provider[] {
  return provider<MagentoConfigurableProductVariantExtraTransform<T, V>>(...transforms);
}

export { DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS };
