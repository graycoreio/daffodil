import { ID } from '@daffodil/core';

/**
 * The result of placing an order for a cart.
 * Stores a reference to a cart and order object.
 */
export interface DaffCartOrderResult {
  /**
   * The ID of the cart for which this order was placed.
   */
  cartId: ID;
  /**
   * The ID of the order placed.
   */
  orderId: ID;
}
