import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffOrderDriver } from '@daffodil/order/driver';

import { DaffCustomerOrderMagentoService } from './order.service';
import { MagentoCustomerOrderCollectionTransformer } from './transforms/public_api';

/**
 * Provides a Magento v2.4.5 implementation of {@link DaffOrderServiceInterface}.
 *
 * @deprecated This version of Magento is unsupported. Use `@daffodil/customer-order/driver/magento/2.4.6` instead.
 */
export const provideDaffCustomerOrderMagentoDriver = (
): EnvironmentProviders => makeEnvironmentProviders([
  MagentoCustomerOrderCollectionTransformer,
  provideDaffOrderDriver(DaffCustomerOrderMagentoService),
]);
