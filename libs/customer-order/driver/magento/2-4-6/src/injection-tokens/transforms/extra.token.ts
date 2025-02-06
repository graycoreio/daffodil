import { Provider } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffOrder } from '@daffodil/order';

import { DaffMagentoCustomerOrderExtraTransform } from '../../interfaces/public_api';
import { MagentoCustomerOrder } from '../../models/public_api';

const {
  /**
   * A multi-provider injection token for providing extra transform logic in the Order Magento driver.
   * It is run after the standard transforms for each customer order preview and passed both the current transformed Daffodil customer order and the Magento customer order.
   *
   * See {@link MagentoCustomerOrder} for more info.
   */
  token: DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS,
  provider,
} = createMultiInjectionToken<DaffMagentoCustomerOrderExtraTransform>('DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS');

/**
 * Provides extra customer order preview transforms for the Magento customer order driver.
 *
 * See {@link DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS}.
 *
 * @example
 * ```ts
 * providers: [
 *   ...provideDaffCustomerOrderMagentoExtraOrderTransforms(
 *     myExtraOrderTransform
 *   )
 * ]
 * ```
 */
export function provideDaffCustomerOrderMagentoExtraOrderTransforms<T extends MagentoCustomerOrder = MagentoCustomerOrder, V extends DaffOrder = DaffOrder>(...transforms: DaffMagentoCustomerOrderExtraTransform<T, V>[]): Provider[] {
  return provider(...transforms);
}

export { DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS };
