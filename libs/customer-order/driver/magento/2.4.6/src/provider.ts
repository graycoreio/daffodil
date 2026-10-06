import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffOrderDriver } from '@daffodil/order/driver';

import { DaffCustomerOrderMagentoService } from './order.service';
import { MagentoCustomerOrderCollectionTransformer } from './transforms/public_api';

/**
 * Provides a Magento v2.4.6 implementation of {@link DaffOrderServiceInterface}.
 */
export const provideDaffCustomerOrderMagentoDriver = (
): EnvironmentProviders => makeEnvironmentProviders([
  MagentoCustomerOrderCollectionTransformer,
  provideDaffOrderDriver(DaffCustomerOrderMagentoService),
]);
