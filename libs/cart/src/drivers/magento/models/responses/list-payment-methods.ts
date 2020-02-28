import { MagentoCartPaymentMethod } from '../outputs/cart-payment-method';

export interface ListPaymentMethodsResponse {
  cart: {
    available_payment_methods: MagentoCartPaymentMethod[];
  };
}
