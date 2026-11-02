import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffPaymentDriver } from '@daffodil/payment/driver';

import { DaffPaymentTestingDriver } from './payment.service';

/**
 * Provides the {@link DaffPaymentTestingDriver} as the {@link DaffPaymentDriver}.
 */
export const provideDaffPaymentTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffPaymentDriver(DaffPaymentTestingDriver),
]);
