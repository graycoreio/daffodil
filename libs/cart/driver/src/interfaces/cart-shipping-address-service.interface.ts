import { Observable } from 'rxjs';

import {
  DaffCartAddress,
  DaffCart,
} from '@daffodil/cart';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * The interface responsible for managing the shipping address of a cart.
 */
export interface DaffCartShippingAddressServiceInterface<T extends DaffCart = DaffCart> {
  /**
   * Retrieve the shipping address of a cart.
   */
  get(cartId: T['id']): Observable<T['shipping_address']>;

  /**
   * Update the shipping address of a cart.
   */
  update(cartId: T['id'], address: Partial<T['shipping_address']>): Observable<Partial<T>>;
}

export const {
  token: DaffCartShippingAddressDriver,
  /**
   * Provider function for {@link DaffCartShippingAddressDriver}.
   */
  provider: provideDaffCartShippingAddressDriver,
} = createSingletonInjectionToken<DaffCartShippingAddressServiceInterface>('DaffCartShippingAddressDriver');
