import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';

/**
 * The interface responsible for managing the address of a cart.
 */
export interface DaffCartAddressServiceInterface<T extends DaffCart = DaffCart> {
  /**
   * Update the billing and shipping address of a cart
   */
  update(cartId: T['id'], address: Partial<T['shipping_address'] | T['billing_address']>): Observable<Partial<T>>;
}

export const DaffCartAddressDriver = new InjectionToken<
  DaffCartAddressServiceInterface
>('DaffCartAddressDriver');
