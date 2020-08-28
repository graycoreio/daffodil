import { MagentoCartPaymentMethod } from '../outputs/cart-payment-method';

export interface MagentoListPaymentMethodsResponse {
  cart: {
		__typename: string;
    available_payment_methods: MagentoCartPaymentMethod[];
  };
}
