import {
  InjectionToken,
  Provider,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffCartItem } from '@daffodil/cart';

import { DaffCartMagentoCartItemExtraTransform } from '../../../interfaces/public_api';

/**
 * A multi-provider injection token for providing extra cart item transform logic in the Magento driver.
 * It is run after the standard transforms and passed both the current transformed Daffodil cart item and the Magento cart item.
 */
export const DAFF_CART_MAGENTO_EXTRA_CART_ITEM_TRANSFORMS = new InjectionToken<DaffCartMagentoCartItemExtraTransform[]>(
  'DAFF_CART_MAGENTO_EXTRA_CART_ITEM_TRANSFORMS',
  { factory: () => []},
);

/**
 * Provides extra cart item transforms for the Magento cart driver.
 *
 * See {@link DAFF_CART_MAGENTO_EXTRA_CART_ITEM_TRANSFORMS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideCartMagentoExtraCartItemTransforms(
 *     myExtraCartItemTransform
 *   )
 * ]
 * ```
 */
export function daffProvideCartMagentoExtraCartItemTransforms(...transforms: DaffCartMagentoCartItemExtraTransform[]): Provider[] {
  return transforms.map(transform => ({
    provide: DAFF_CART_MAGENTO_EXTRA_CART_ITEM_TRANSFORMS,
    useValue: transform,
    multi: true,
  }));
}
