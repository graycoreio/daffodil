import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffCustomerPaymentDriver } from '@daffodil/customer-payment/driver';

import { DaffCustomerPaymentTestingDriver } from './payment.service';

/**
 * Provides the {@link DaffCustomerPaymentTestingDriver} as the {@link DaffCustomerPaymentDriver}.
 */
export const provideDaffCustomerPaymentTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCustomerPaymentDriver(DaffCustomerPaymentTestingDriver),
]);
