// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffCartItem } from '@daffodil/cart';
import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCartMagentoCartItemTransform } from '../../../interfaces/public_api';

export const {
  /**
   * A multi-provider injection token for providing cart item transform logic in the Magento driver.
   * It is run after the standard transforms and passed both the current transformed Daffodil cart item and the Magento cart item.
   */
  token: DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS,

  /**
   * Provides cart item transforms for the Magento cart driver.
   *
   * See {@link DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffCartMagentoCartItemTransforms(
   *     myCartItemTransform
   *   )
   * ]
   * ```
   */
  provider: provideDaffCartMagentoCartItemTransforms,
} = createMultiInjectionToken<DaffCartMagentoCartItemTransform>('DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS');
