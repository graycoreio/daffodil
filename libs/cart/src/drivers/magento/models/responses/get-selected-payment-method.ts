import { MagentoCartPaymentMethod } from '../outputs/cart-payment-method';

export interface MagentoGetSelectedPaymentMethodResponse {
  cart: {
		__typename: string;
    selected_payment_method: MagentoCartPaymentMethod;
  };
}
