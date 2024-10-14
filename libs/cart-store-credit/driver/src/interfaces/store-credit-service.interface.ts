import { Observable } from 'rxjs';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { createSingleInjectionToken } from '@daffodil/core';

/**
 * An injection token for the cart store credit driver.
 */
export const {
  token: DaffCartStoreCreditDriver,
  provider: daffProvideCartStoreCreditDriver,
} = createSingleInjectionToken<DaffCartStoreCreditDriverInterface>('DaffCartStoreCreditDriver');

/**
 * The cart store credit driver is responsible for loading carts.
 */
export interface DaffCartStoreCreditDriverInterface<
  TCart extends DaffCartWithStoreCredit = DaffCartWithStoreCredit,
> {
  /**
   * Apply store credit to the cart.
   */
  apply(cartId: DaffCartWithStoreCredit['id']): Observable<TCart>;

  /**
   * Remove store credit from the cart.
   */
  remove(cartId: DaffCartWithStoreCredit['id']): Observable<TCart>;
}
