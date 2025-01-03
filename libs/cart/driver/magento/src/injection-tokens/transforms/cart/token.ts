import {
  InjectionToken,
  Provider,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffCart } from '@daffodil/cart';
import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCartMagentoCartTransform } from '../../../interfaces/public_api';

export const {
  /**
   * A multi-provider injection token for providing cart transform logic in the Magento driver.
   * It is run after the standard transforms and passed both the current transformed Daffodil cart and the Magento cart.
   */
  token: DAFF_CART_MAGENTO_CART_TRANSFORMS,
  /**
   * Provides cart transforms for the Magento cart driver.
   *
   * See {@link DAFF_CART_MAGENTO_CART_TRANSFORMS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffCartMagentoCartTransforms(
   *     myCartTransform
   *   )
   * ]
   * ```
   */
  provider: provideDaffCartMagentoCartTransforms,
} = createMultiInjectionToken<DaffCartMagentoCartTransform>('DAFF_CART_MAGENTO_CART_TRANSFORMS');
