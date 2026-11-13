import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffOrderDriver } from '@daffodil/order/driver';

import { DaffOrderMagentoService } from './order.service';

/**
 * Provides a 2.4.0 Magento implementation of {@link DaffOrderServiceInterface}.
 *
 * @deprecated This version of Magento is unsupported. Use `@daffodil/order/driver/magento/2.4.1` instead. Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
export const provideDaffOrderMagentoDriver = (
): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffOrderDriver(DaffOrderMagentoService),
]);
