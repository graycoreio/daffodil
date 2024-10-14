import { Observable } from 'rxjs';

import { createSingleInjectionToken } from '@daffodil/core';
import { DaffCustomer } from '@daffodil/customer';

export const {
  /**
   * An injection token for the customer driver.
   */
  token: DaffCustomerDriver,
  provider: daffProvideCustomerDriver,
} = createSingleInjectionToken<DaffCustomerDriverInterface>('DaffCustomerDriver');

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
