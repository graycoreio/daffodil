import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffOrderDriver } from '@daffodil/order/driver';

import { DaffTestingOrderService } from './order.service';

/**
 * Provides the testing implementation of {@link DaffOrderServiceInterface}.
 */
export const provideDaffOrderTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffOrderDriver(DaffTestingOrderService),
]);
