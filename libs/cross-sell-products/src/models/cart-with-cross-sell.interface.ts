import { DaffCart } from '@daffodil/cart';
import { DaffProduct } from '@daffodil/product';

/**
 * An extension of a {@link DaffCart} that includes a list of cross-sell products.
 */
export interface DaffCartWithCrossSellProducts<T extends DaffProduct = DaffProduct> extends DaffCart {
  /**
   * A list of cross-sell products.
   */
  crossSells: Array<T>;
  crossSellIds: Array<T['id']>;
}
