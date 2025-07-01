import { Provider } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffOrder } from '@daffodil/order';

import { MagentoOrderExtraTransform } from './extra.type';
import { MagentoOrder } from '../../models/responses/public_api';


export const {
  /**
   * A multi-provider injection token for providing extra transform logic in the Order Magento driver.
   * It is run after the standard transforms for each order and passed both the current transformed Daffodil order and the Magento order.
   *
   * See {@link MagentoOrder} for more info.
   */
  token: MAGENTO_ORDER_EXTRA_TRANSFORMS,
  provider,
} = createMultiInjectionToken<MagentoOrderExtraTransform>('MAGENTO_ORDER_EXTRA_TRANSFORMS');

/**
 * Provides extra order transforms for the Magento order driver.
 *
 * See {@link MAGENTO_ORDER_EXTRA_TRANSFORMS}.
 *
 * @example
 * ```ts
 * providers: [
 *   ...provideMagentoOrderExtraTransforms(
 *     myExtraOrderTransform
 *   )
 * ]
 * ```
 */
export function provideMagentoOrderExtraTransforms<T extends MagentoOrder = MagentoOrder, V extends DaffOrder = DaffOrder>(...transforms: MagentoOrderExtraTransform<T, V>[]): Provider[] {
  return provider<MagentoOrderExtraTransform<T, V>>(...transforms);
}
