import { DaffCart } from '@daffodil/cart';

export interface DaffCartWithStoreCredit extends DaffCart {
  /**
   * The store credit currently applied to the cart.
   * Note that if there is any balance applied, it will be a negative number.
   */
  appliedStoreCredit: number;
}
