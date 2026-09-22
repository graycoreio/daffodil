import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffCustomerPaymentDriver } from '@daffodil/customer-payment/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffCustomerPaymentInMemoryBackendService } from './backend/payment.service';
import { DaffCustomerPaymentInMemoryDriver } from './driver/payment.service';

/**
 * Provides the {@link DaffCustomerPaymentInMemoryDriver} as the {@link DaffCustomerPaymentDriver}.
 */
export const provideDaffCustomerPaymentInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCustomerPaymentDriver(DaffCustomerPaymentInMemoryDriver),
  provideDaffInMemoryBackends(DaffCustomerPaymentInMemoryBackendService),
]);
