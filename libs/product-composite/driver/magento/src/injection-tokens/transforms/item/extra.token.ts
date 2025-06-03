import { Provider } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffCompositeProductItem } from '@daffodil/product-composite';

import { MagentoBundleProductItemExtraTransform } from '../../../interfaces/item-extra-transform.type';
import { MagentoBundledProductItem } from '../../../models/public_api';

const {
  /**
   * A multi-provider injection token for providing extra transform logic in the Product Magento driver.
   * It is run after the standard transforms for each product preview and passed both the current transformed Daffodil product and the Magento product.
   *
   * See {@link MagentoBundledProductItem} for more info.
   */
  token: DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_ITEM_TRANSFORMS,
  provider,
} = createMultiInjectionToken<MagentoBundleProductItemExtraTransform>('DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_ITEM_TRANSFORMS');

/**
 * Provides extra product preview transforms for the Magento product driver.
 *
 * See {@link DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_ITEM_TRANSFORMS}.
 *
 * @example
 * ```ts
 * providers: [
 *   ...provideDaffProductCompositeMagentoExtraItemTransforms(
 *     myExtraProductTransform
 *   )
 * ]
 * ```
 */
export function provideDaffProductCompositeMagentoExtraItemTransforms<T extends MagentoBundledProductItem = MagentoBundledProductItem, V extends DaffCompositeProductItem = DaffCompositeProductItem>(...transforms: MagentoBundleProductItemExtraTransform<T, V>[]): Provider[] {
  return provider<MagentoBundleProductItemExtraTransform<T, V>>(...transforms);
}

export { DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_ITEM_TRANSFORMS };
