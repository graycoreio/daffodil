import { DaffCartShippingInformation, MagentoCartShippingMethod } from '@daffodil/cart';

import { MagentoCartShippingMethodFactory } from '../../../factories/magento/cart-shipping-method.factory';
import { DaffCartShippingRateFactory } from '../../../factories/cart-shipping-rate.factory';

/**
 * Creates mocked DaffCartShippingInformation and MagentoCartShippingMethod with matching fields.
 */
export function cartShippingMethodMocks(): {
  daff: DaffCartShippingInformation;
  magento: MagentoCartShippingMethod;
} {
  const daff: DaffCartShippingInformation = {
    ...(new DaffCartShippingRateFactory()).create(),
    address_id: 0
  };
  const magento: MagentoCartShippingMethod = (new MagentoCartShippingMethodFactory()).create();

  magento.carrier_code = daff.carrier;
  magento.carrier_title = daff.carrier_title;
  magento.method_title = daff.method_title;
  magento.amount.value = daff.price;

  return {daff, magento}
}
