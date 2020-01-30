import { cartResponseFactory } from './cart-response';
import { cartTotalsResponseFactory } from './cart-totals-response';
import { cartPaymentMethodResponseFactory } from './cart-payment-method-response';
import { cartItemFactory } from './cart-item';

export function cartFactory () {
  return {
    ...cartPaymentMethodResponseFactory(),
    ...cartTotalsResponseFactory(),
    ...cartResponseFactory(),
    items: [
      cartItemFactory()
    ]
  }
}
