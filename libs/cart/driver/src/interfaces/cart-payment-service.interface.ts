import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffCartPaymentMethod,
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';

/**
 * The interface responsible for managing the selected payment method of a cart.
 */
export interface DaffCartPaymentServiceInterface<T extends DaffCart = DaffCart> {
  /**
   * Get the currently applied payment method of a cart.
   */
  get(cartId: T['id']): Observable<T['payment']>;

  /**
   * Update the payment method applied to a cart.
   *
   * If a billing address is provided, the driver will update that simultaneously.
   */
  update(cartId: T['id'], payment: Partial<T['payment']>, billingAddress?: Partial<T['billing_address']>): Observable<Partial<T>>;

  /**
   * Update the billing address and payment method applied to a cart.
   *
   * @deprecated use `update` with the `billingAddress` parameter instead.
   */
  updateWithBilling(cartId: T['id'], payment: Partial<T['payment']>, address: Partial<T['billing_address']>): Observable<Partial<T>>;

  /**
   * Remove the payment method applied to a cart.
   */
  remove(cartId: T['id']): Observable<void>;
}

export const DaffCartPaymentDriver = new InjectionToken<
  DaffCartPaymentServiceInterface
>('DaffCartPaymentDriver');
