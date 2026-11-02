import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffCustomerStoreCreditDriver } from '@daffodil/customer-store-credit/driver';

import { DaffCustomerStoreCreditTestingDriver } from './drivers/store-credit.service';

/**
 * Provides the {@link DaffCustomerStoreCreditTestingDriver} as the {@link DaffCustomerStoreCreditDriver}.
 */
export const provideDaffCustomerStoreCreditTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCustomerStoreCreditDriver(DaffCustomerStoreCreditTestingDriver),
]);
