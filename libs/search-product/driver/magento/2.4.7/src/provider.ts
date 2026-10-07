import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideManyDaffMagentoCacheableOperations } from '@daffodil/driver/magento';
import { provideDaffSearchDriver } from '@daffodil/search/driver';
import {
  DAFF_SEARCH_FEDERATED_DRIVERS,
  provideDaffSearchFederatedDrivers,
} from '@daffodil/search/driver/federated';

import { DaffSearchProductMagentoDriver } from './product-search.service';
import {
  DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME,
  DAFF_SEARCH_PRODUCT_MAGENTO_INCREMENTAL_QUERY_NAME,
} from './queries/public_api';

/**
 * Provides the product search queries as cacheable network operations.
 */
export const provideDaffSearchProductMagentoCore = (): EnvironmentProviders => makeEnvironmentProviders([
  provideManyDaffMagentoCacheableOperations(
    DAFF_MAGENTO_SEARCH_FOR_PRODUCTS_QUERY_NAME,
    DAFF_SEARCH_PRODUCT_MAGENTO_INCREMENTAL_QUERY_NAME,
  ),
]);

/**
 * Provides the singleton of the product search Magento driver as the search driver
 * and the product search queries as cacheable network operations.
 */
export const provideDaffSearchProductMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchProductMagentoCore(),
  provideDaffSearchDriver(DaffSearchProductMagentoDriver),
]);

/**
 * Provides the singleton of the product search Magento driver as a federated driver
 * and the product search queries as cacheable network operations.
 */
export const provideDaffSearchProductMagentoFederatedDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchProductMagentoCore(),
  provideDaffSearchFederatedDrivers(DaffSearchProductMagentoDriver),
]);

/**
 * Provides a new instance of the product search Magento driver as a federated driver
 * and the product search queries as cacheable network operations.
 */
export const provideDaffSearchProductMagentoFederatedFeatureDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchProductMagentoCore(),
  {
    provide: DAFF_SEARCH_FEDERATED_DRIVERS,
    multi: true,
    useClass: DaffSearchProductMagentoDriver,
  },
]);
