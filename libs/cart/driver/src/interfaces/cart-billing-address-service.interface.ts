import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';

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

export const DaffCartBillingAddressDriver = new InjectionToken<
  DaffCartBillingAddressServiceInterface
>('DaffCartBillingAddressDriver');
