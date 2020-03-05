import { MagentoCartPaymentMethod } from '../outputs/cart-payment-method';

export interface MagentoGetSelectedPaymentMethodResponse {
  cart: {
    selected_payment_method: MagentoCartPaymentMethod;
  };
}
