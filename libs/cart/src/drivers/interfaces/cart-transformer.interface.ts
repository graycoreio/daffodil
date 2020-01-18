import { DaffCart } from '../../models/cart';

/**
 * An interface that must be implemented by product transformer services; e.g. a service that transforms a magento product into a DaffCart.
 */
export interface DaffCartTransformerInterface<T extends DaffCart> {
  /**
   * Transform a single product into a kind of DaffCart.
   */
  transform(product: any): T;
}
