import { CartItem } from './cart-item'
import { CartResponse } from './cart-response';
import { CartTotalsResponse } from './cart-totals-response';
import { CartPaymentMethod } from './cart-payment-method';

/**
 * An object for defining what the cart service requests and retrieves from a magento backend.
 */
export interface Cart extends CartResponse, CartTotalsResponse, CartPaymentMethod {
  items: CartItem[]
}
