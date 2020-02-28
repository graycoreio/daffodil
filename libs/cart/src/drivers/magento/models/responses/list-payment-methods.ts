import { MagentoCartPaymentMethod } from '../outputs/cart-payment-method';

export interface MagentoListPaymentMethodsResponse {
  cart: {
    available_payment_methods: MagentoCartPaymentMethod[];
  };
}
