import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  provideDaffCustomerAddressDriver,
  provideDaffCustomerDriver,
} from '@daffodil/customer/driver';
import {
  DaffInMemoryBackendInterface,
  provideDaffInMemoryBackends,
} from '@daffodil/driver/in-memory';

import { DaffCustomerAddressInMemoryBackendService } from './backend/address.service';
import { DaffCustomerInMemoryBackendService } from './backend/customer.service';
import { DaffCustomerAddressInMemoryDriver } from './driver/address.service';
import { DaffCustomerInMemoryDriver } from './driver/customer.service';

/**
 * Provides the {@link DaffCustomerInMemoryDriver} as the {@link DaffCustomerDriver}.
 */
export const provideDaffCustomerInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCustomerDriver(DaffCustomerInMemoryDriver),
  provideDaffCustomerAddressDriver(DaffCustomerAddressInMemoryDriver),
  provideDaffInMemoryBackends<DaffInMemoryBackendInterface>(
    DaffCustomerInMemoryBackendService,
    DaffCustomerAddressInMemoryBackendService,
  ),
]);
