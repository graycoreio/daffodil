import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  provideDaffCustomerAddressDriver,
  provideDaffCustomerDriver,
} from '@daffodil/customer/driver';

import { DaffCustomerAddressTestingDriver } from './drivers/address.service';
import { DaffCustomerTestingDriver } from './drivers/customer.service';

/**
 * Provides the {@link DaffCustomerTestingDriver} as the {@link DaffCustomerDriver}.
 */
export const provideDaffCustomerTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCustomerDriver(DaffCustomerTestingDriver),
  provideDaffCustomerAddressDriver(DaffCustomerAddressTestingDriver),
]);
