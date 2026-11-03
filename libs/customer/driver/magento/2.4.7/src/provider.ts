import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  provideDaffCustomerAddressDriver,
  provideDaffCustomerDriver,
} from '@daffodil/customer/driver';

import { DaffCustomerMagentoAddressService } from './address.service';
import { DaffCustomerMagentoService } from './customer.service';

/**
 * Provides the Magento implementations of the `@daffodil/customer/driver` interfaces.
 */
export const provideDaffCustomerMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCustomerDriver(DaffCustomerMagentoService),
  provideDaffCustomerAddressDriver(DaffCustomerMagentoAddressService),
]);
