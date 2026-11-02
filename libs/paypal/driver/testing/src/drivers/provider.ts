import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffPaypalExpressDriver } from '@daffodil/paypal/driver';

import { DaffTestingPaypalService } from './paypal.service';

/**
 * Provides the testing implementations of the `@daffodil/paypal/driver` interfaces.
 */
export const provideDaffPaypalTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffPaypalExpressDriver(DaffTestingPaypalService),
]);
