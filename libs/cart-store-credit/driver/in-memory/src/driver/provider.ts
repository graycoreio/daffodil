import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffCartStoreCreditDriver } from '@daffodil/cart-store-credit/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffCartStoreCreditInMemoryDriver } from './store-credit.service';
import { DaffCartStoreCreditInMemoryBackendService } from '../backend/store-credit.service';

/**
 * Provides the {@link DaffCartStoreCreditInMemoryDriver} as the {@link DaffCartStoreCreditDriver}.
 */
export const provideDaffCartStoreCreditInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCartStoreCreditDriver(DaffCartStoreCreditInMemoryDriver),
  provideDaffInMemoryBackends(DaffCartStoreCreditInMemoryBackendService),
]);
