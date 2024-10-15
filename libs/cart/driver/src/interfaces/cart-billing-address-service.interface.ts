import { Observable } from 'rxjs';

import {
  DaffCartAddress,
  DaffCart,
} from '@daffodil/cart';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * The interface responsible for managing the billing address of a cart.
 */
export interface DaffCartBillingAddressServiceInterface<T extends DaffCart = DaffCart> {
  /**
   * Retrieve the billing address of a cart
   */
  get(cartId: T['id']): Observable<T['billing_address']>;

  /**
   * Update the billing address of a cart
   */
  update(cartId: T['id'], address: Partial<T['billing_address']>): Observable<Partial<T>>;
}

export const {
  token: DaffCartBillingAddressDriver,
  provider: provideDaffCartBillingAddressDriver,
} = createSingletonInjectionToken<DaffCartBillingAddressServiceInterface>('DaffCartBillingAddressDriver');
