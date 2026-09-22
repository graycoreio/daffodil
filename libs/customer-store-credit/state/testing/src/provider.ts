import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffCustomerStoreCreditPageFacade } from '@daffodil/customer-store-credit/state';

import { MockDaffCustomerStoreCreditPageFacade } from './mock-facade';

/**
 * Provides the {@link MockDaffCustomerStoreCreditPageFacade} for {@link DaffCustomerStoreCreditPageFacade}.
 */
export const provideDaffCustomerStoreCreditStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffCustomerStoreCreditPageFacade, useExisting: MockDaffCustomerStoreCreditPageFacade },
]);
