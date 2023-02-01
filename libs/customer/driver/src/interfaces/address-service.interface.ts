import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffCustomerAddress } from '@daffodil/customer';

/**
 * An injection token for the customer driver.
 */
export const DaffCustomerAddressDriver = new InjectionToken<DaffCustomerAddressDriverInterface>('DaffCustomerAddressDriver');

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
