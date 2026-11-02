import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffOrderDriver } from '@daffodil/order/driver';

import { DaffInMemoryOrderService } from './order.service';
import { DaffInMemoryBackendOrderService } from '../backend/order.service';

/**
 * Provides the in-memory implementation of {@link DaffOrderServiceInterface}.
 */
export const provideDaffOrderInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffOrderDriver(DaffInMemoryOrderService),
  provideDaffInMemoryBackends(DaffInMemoryBackendOrderService),
]);
