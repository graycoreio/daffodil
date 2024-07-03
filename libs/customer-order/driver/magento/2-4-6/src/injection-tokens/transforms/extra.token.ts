import {
  InjectionToken,
  Provider,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffOrder } from '@daffodil/order';

import { DaffMagentoCustomerOrderExtraTransform } from '../../interfaces/public_api';
import { MagentoCustomerOrder } from '../../models/public_api';

/**
 * A multi-provider injection token for providing extra transform logic in the Order Magento driver.
 * It is run after the standard transforms for each customer order preview and passed both the current transformed Daffodil customer order and the Magento customer order.
 *
 * See {@link MagentoCustomerOrder} for more info.
 */
export const DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS = new InjectionToken<DaffMagentoCustomerOrderExtraTransform[]>(
  'DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS',
  { factory: () => []},
);

/**
 * Provides extra customer order preview transforms for the Magento customer order driver.
 *
 * See {@link DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideCustomerOrderMagentoExtraOrderTransforms(
 *     myExtraOrderTransform
 *   )
 * ]
 * ```
 */
export function daffProvideCustomerOrderMagentoExtraOrderTransforms<T extends MagentoCustomerOrder = MagentoCustomerOrder, V extends DaffOrder = DaffOrder>(...transforms: DaffMagentoCustomerOrderExtraTransform<T, V>[]): Provider[] {
  return transforms.map(transform => ({
    provide: DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS,
    useValue: transform,
    multi: true,
  }));
}
