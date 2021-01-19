import { ID } from '@daffodil/core';

/**
 * The result of placing an order for a cart.
 * Stores a reference to a cart and order object.
 */
export interface DaffCartOrderResult {
  cartId: ID;
  orderId: ID;
  /**
   * @deprecated Use DaffCartOrderResult#orderId instead.
   */
  id?: ID;
}
