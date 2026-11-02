import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DaffCustomerAddressPageFacade,
  DaffCustomerPageFacade,
} from '@daffodil/customer/state';

import { MockDaffCustomerAddressPageFacade } from './mock-address-facade';
import { MockDaffCustomerPageFacade } from './mock-customer-facade';

/**
 * Provides the {@link MockDaffCustomerPageFacade} for {@link DaffCustomerPageFacade}.
 */
export const provideDaffCustomerStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffCustomerPageFacade, useExisting: MockDaffCustomerPageFacade },
  { provide: DaffCustomerAddressPageFacade, useExisting: MockDaffCustomerAddressPageFacade },
]);
