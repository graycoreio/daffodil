import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffCustomerStoreCreditDriver } from '@daffodil/customer-store-credit/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffCustomerStoreCreditInMemoryBackendService } from './backend/store-credit.service';
import { DaffCustomerStoreCreditInMemoryDriver } from './driver/store-credit.service';

/**
 * Provides the {@link DaffCustomerStoreCreditInMemoryDriver} as the {@link DaffCustomerStoreCreditDriver}.
 */
export const provideDaffCustomerStoreCreditInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCustomerStoreCreditDriver(DaffCustomerStoreCreditInMemoryDriver),
  provideDaffInMemoryBackends(DaffCustomerStoreCreditInMemoryBackendService),
]);
