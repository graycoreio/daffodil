import {
  InjectionToken,
  Provider,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffCart } from '@daffodil/cart';

import { DaffCartMagentoCartTransform } from '../../../interfaces/public_api';

/**
 * A multi-provider injection token for providing cart transform logic in the Magento driver.
 * It is run after the standard transforms and passed both the current transformed Daffodil cart and the Magento cart.
 */
export const DAFF_CART_MAGENTO_CART_TRANSFORMS = new InjectionToken<DaffCartMagentoCartTransform[]>(
  'DAFF_CART_MAGENTO_CART_TRANSFORMS',
  { factory: () => []},
);

/**
 * Provides cart transforms for the Magento cart driver.
 *
 * See {@link DAFF_CART_MAGENTO_CART_TRANSFORMS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideCartMagentoCartTransforms(
 *     myCartTransform
 *   )
 * ]
 * ```
 */
export function daffProvideCartMagentoCartTransforms(...transforms: DaffCartMagentoCartTransform[]): Provider[] {
  return transforms.map(transform => ({
    provide: DAFF_CART_MAGENTO_CART_TRANSFORMS,
    useValue: transform,
    multi: true,
  }));
}
