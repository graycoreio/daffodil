import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffPaypalExpressDriver } from '@daffodil/paypal/driver';

import { DaffInMemoryPaypalService } from './paypal.service';
import { DaffInMemoryBackendPaypalService } from '../backend/paypal.service';

/**
 * Provides the in-memory implementations of the `@daffodil/paypal/driver` interfaces.
 */
export const provideDaffPaypalInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffPaypalExpressDriver(DaffInMemoryPaypalService),
  provideDaffInMemoryBackends(DaffInMemoryBackendPaypalService),
]);
