/**
 * The result of placing an order for a cart.
 * Stores a reference to a cart and order object.
 */
export interface DaffCartOrderResult {
  cartId: string | number;
  orderId: string | number;
  /**
   * @deprecated Use DaffCartOrderResult#orderId instead.
   */
  id: string | number;
}
