import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

export const {
  /**
   * An injection token for the customer store credit driver.
   */
  token: DaffCustomerStoreCreditDriver,
  provider: daffProvideCustomerStoreCreditDriver,
} = createSingletonInjectionToken<DaffCustomerStoreCreditDriverInterface>('DaffCustomerStoreCreditDriver');

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
