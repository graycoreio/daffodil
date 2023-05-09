import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

/**
 * An injection token for the customer store credit driver.
 */
export const DaffCustomerStoreCreditDriver = new InjectionToken<DaffCustomerStoreCreditDriverInterface>('DaffCustomerStoreCreditDriver');

/**
 * The customer store credit driver is responsible for loading customers.
 */
export interface DaffCustomerStoreCreditDriverInterface<
  TStoreCredit extends DaffCustomerStoreCredit = DaffCustomerStoreCredit,
> {
  /**
   * Get the customer's store credit.
   */
  get(): Observable<TStoreCredit>;
}
