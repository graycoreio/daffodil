import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  provideDaffCustomerOrderMagentoExtraOrderFragments,
  provideDaffCustomerOrderMagentoExtraOrderTransforms,
} from '@daffodil/customer-order/driver/magento/2.4.6';
import { provideDaffCustomerStoreCreditDriver } from '@daffodil/customer-store-credit/driver';

import { DaffCustomerStoreCreditMagentoService } from './customer-store-credit.service';
import { magentoCustomerOrderStoreCreditTotalFragment } from './queries/public_api';
import { magentoCustomerOrderWithStoreCreditTransform } from './transforms/public_api';

/**
 * Provides the Magento implementation of the `@daffodil/customer-store-credit/driver` interface.
 */
export const provideDaffCustomerStoreCreditMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCustomerStoreCreditDriver(DaffCustomerStoreCreditMagentoService),
  provideDaffCustomerOrderMagentoExtraOrderFragments(
    magentoCustomerOrderStoreCreditTotalFragment,
  ),
  provideDaffCustomerOrderMagentoExtraOrderTransforms(
    magentoCustomerOrderWithStoreCreditTransform,
  ),
]);
