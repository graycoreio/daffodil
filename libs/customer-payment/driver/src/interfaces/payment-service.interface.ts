import { Observable } from 'rxjs';

import {
  DaffIdentifiable,
  createSingletonInjectionToken,
} from '@daffodil/core';
import { DaffCustomerAddress } from '@daffodil/customer';
import {
  DaffCustomerPayment,
  DaffCustomerPaymentRequest,
} from '@daffodil/customer-payment';
import { DaffPersonalAddress } from '@daffodil/geography';

export const {
  /**
   * An injection token for the customer payment driver.
   */
  token: DaffCustomerPaymentDriver,
  provider: provideDaffCustomerPaymentDriver,
} = createSingletonInjectionToken<DaffCustomerPaymentDriverInterface>('DaffCustomerPaymentDriver');

/**
 * The customer payment driver is responsible for loading customers.
 */
export interface DaffCustomerPaymentDriverInterface<
  TPayment extends DaffCustomerPayment = DaffCustomerPayment,
  TRequest extends DaffCustomerPaymentRequest = DaffCustomerPaymentRequest,
> {
  /**
   * Lists the customer's payments.
   */
  list(): Observable<TPayment[]>;

  /**
   * Get the specified payment.
   */
  get(paymentId: DaffCustomerPayment['id']): Observable<TPayment>;

  /**
   * Update the passed payment.
   */
  update(payment: Partial<TPayment> & DaffIdentifiable): Observable<TPayment[]>;

  /**
   * Adds the passed payment.
   */
  add(payment: TRequest): Observable<TPayment[]>;

  /**
   * Deletes the specified payment.
   */
  delete(paymentId: DaffCustomerPayment['id']): Observable<TPayment[]>;
}
