import { Observable } from 'rxjs';

import {
  DaffIdentifiable,
  createSingletonInjectionToken,
} from '@daffodil/core';
import { DaffCustomerAddress } from '@daffodil/customer';

export const {
  /**
   * An injection token for the customer driver.
   */
  token: DaffCustomerAddressDriver,
  provider: provideDaffCustomerAddressDriver,
} = createSingletonInjectionToken<DaffCustomerAddressDriverInterface>('DaffCustomerAddressDriver');

/**
 * The customer driver is responsible for loading customers.
 */
export interface DaffCustomerAddressDriverInterface<
  T extends DaffCustomerAddress = DaffCustomerAddress,
> {
  /**
   * Lists the customer's addresses.
   */
  list(): Observable<T[]>;

  /**
   * Get the specified address.
   */
  get(addressId: DaffCustomerAddress['id']): Observable<T>;

  /**
   * Update the passed address.
   */
  update(address: Partial<T> & DaffIdentifiable): Observable<T[]>;

  /**
   * Adds the passed address.
   */
  add(address: T): Observable<T[]>;

  /**
   * Deletes the specified address.
   */
  delete(addressId: DaffCustomerAddress['id']): Observable<T[]>;
}
