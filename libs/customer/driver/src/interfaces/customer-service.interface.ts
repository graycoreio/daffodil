import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCustomer } from '@daffodil/customer';

/**
 * An injection token for the customer driver.
 */
export const DaffCustomerDriver = new InjectionToken<DaffCustomerDriverInterface>('DaffCustomerDriver');

/**
 * The customer driver is responsible for loading customers.
 */
export interface DaffCustomerDriverInterface<
  T extends DaffCustomer = DaffCustomer,
> {
  /**
   * Get the currently logged-in customer.
   */
  get(): Observable<T>;

  /**
   * Update the currently logged-in customer.
   *
   * @param customer The customer info to update.
   */
  update(customer: Partial<T>): Observable<T>;

  /**
   * Change the currently logged-in customer's email.
   */
  changeEmail(email: string, password: string): Observable<T>;

  /**
   * Change the currently logged-in customer's password.
   */
  changePassword(oldPassword: string, newPassword: string): Observable<void>;
}
