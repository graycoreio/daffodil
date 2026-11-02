import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento';
import {
  DAFF_SEARCH_FEDERATED_DRIVERS,
  provideDaffSearchFederatedDrivers,
} from '@daffodil/search/driver/federated';

import { DaffSearchCategoryMagentoDriver } from './category-search.service';
import { DAFF_MAGENTO_SEARCH_FOR_CATEGORIES_QUERY_NAME } from './queries/category-search';

/**
 * Provides the {@link DaffSearchCategoryMagentoDriver} as a federated search driver
 * and the category search query as a cacheable network operation.
 */
export const provideDaffSearchCategoryMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffMagentoCacheableOperation(DAFF_MAGENTO_SEARCH_FOR_CATEGORIES_QUERY_NAME),
  provideDaffSearchFederatedDrivers(DaffSearchCategoryMagentoDriver),
]);

/**
 * Provides the {@link DaffSearchCategoryMagentoDriver} as a federated search driver with `useClass`,
 * creating a new instance of the driver in the current injector,
 * and the category search query as a cacheable network operation.
 */
export const provideDaffSearchCategoryMagentoFeatureDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffMagentoCacheableOperation(DAFF_MAGENTO_SEARCH_FOR_CATEGORIES_QUERY_NAME),
  {
    provide: DAFF_SEARCH_FEDERATED_DRIVERS,
    multi: true,
    useClass: DaffSearchCategoryMagentoDriver,
  },
]);
