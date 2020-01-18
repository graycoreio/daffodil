import { DaffCartItem } from '../../models/cart-item';

/**
 * An interface that must be implemented by cartItem transformer services; e.g. a service that transforms a magento cartItem into a DaffCartItem.
 */
export interface DaffCartItemTransformerInterface<T extends DaffCartItem> {
  /**
   * Transform a single cartItem into a kind of DaffCartItem.
   */
  transform(cartItem: any): T;
}
