import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffOrderDriver } from '@daffodil/order/driver';

import { DaffOrderMagentoService } from './order.service';

/**
 * Provides a 2.4.0 Magento implementation of {@link DaffOrderServiceInterface}.
 */
export const provideDaffOrderMagentoDriver = (
): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffOrderDriver(DaffOrderMagentoService),
]);
