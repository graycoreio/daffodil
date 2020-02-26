import { DaffCartPaymentMethod, MagentoCartPaymentMethod } from '@daffodil/cart';

import { MagentoCartPaymentMethodFactory } from '../../../factories/magento/cart-payment-method.factory';
import { DaffCartPaymentFactory } from '../../../factories/cart-payment.factory';

/**
 * Creates mocked DaffCartPaymentMethod and MagentoCartPaymentMethod with matching fields.
 */
export function cartPaymentMethodMocks(): {
  daff: DaffCartPaymentMethod;
  magento: MagentoCartPaymentMethod;
} {
  const daff: DaffCartPaymentMethod = (new DaffCartPaymentFactory()).create();
  const magento: MagentoCartPaymentMethod = (new MagentoCartPaymentMethodFactory()).create();

  magento.code = daff.method;

  return {daff, magento}
}
