import { Observable } from 'rxjs';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * An injection token for the cart store credit driver.
 */
export const {
  token: DaffCartStoreCreditDriver,
  /**
   * Provider function for {@link DaffCartStoreCreditDriver}.
   */
  provider: provideDaffCartStoreCreditDriver,
} = createSingletonInjectionToken<DaffCartStoreCreditDriverInterface>('DaffCartStoreCreditDriver');

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
