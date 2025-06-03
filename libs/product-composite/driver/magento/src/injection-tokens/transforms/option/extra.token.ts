import { Provider } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffCompositeProductItemOption } from '@daffodil/product-composite';

import { MagentoBundleProductOptionExtraTransform } from '../../../interfaces/option-extra-transform.type';
import { MagentoBundledProductItemOption } from '../../../models/public_api';

const {
  /**
   * A multi-provider injection token for providing extra transform logic in the Product Magento driver.
   * It is run after the standard transforms for each product preview and passed both the current transformed Daffodil product and the Magento product.
   *
   * See {@link MagentoBundledProductItemOption} for more info.
   */
  token: DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_TRANSFORMS,
  provider,
} = createMultiInjectionToken<MagentoBundleProductOptionExtraTransform>('DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_TRANSFORMS');

/**
 * Provides extra product preview transforms for the Magento product driver.
 *
 * See {@link DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_TRANSFORMS}.
 *
 * @example
 * ```ts
 * providers: [
 *   ...provideDaffProductCompositeMagentoExtraOptionTransforms(
 *     myExtraProductTransform
 *   )
 * ]
 * ```
 */
export function provideDaffProductCompositeMagentoExtraOptionTransforms<T extends MagentoBundledProductItemOption = MagentoBundledProductItemOption, V extends DaffCompositeProductItemOption = DaffCompositeProductItemOption>(...transforms: MagentoBundleProductOptionExtraTransform<T, V>[]): Provider[] {
  return provider<MagentoBundleProductOptionExtraTransform<T, V>>(...transforms);
}

export { DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_TRANSFORMS };
