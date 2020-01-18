import { CartItemTotalsResponse } from './cart-item-totals-response'
import { CartItemResponse } from './cart-item-response'

/**
 * An object for defining what the cart service requests and retrieves from a magento backend.
 */
export interface CartItem extends CartItemTotalsResponse, CartItemResponse {}
