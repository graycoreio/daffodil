import { Provider } from '@angular/core';

import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento';
import {
  DaffNavigationTransformer,
  provideDaffNavigationDriver,
} from '@daffodil/navigation/driver';

import { DaffMagentoNavigationService } from './navigation.service';
import {
  DAFF_MAGENTO_GET_CATEGORY_TREE_QUERY_NAME,
  DaffMagentoNavigationTransformerService,
  MAGENTO_NAVIGATION_DRIVER_CONFIG_DEFAULT,
  MagentoNavigationDriverConfig,
  provideMagentoNavigationDriverConfig,
} from './public_api';

/**
 * Provides the Magento drivers for the navigation package.
 *
 * @example
 * ```ts
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideRouter(routes),
 *     provideMagentoDriver('https://some-magento-store.com/graphql'),
 *     provideDaffNavigationMagentoDriver(),
 *   ]
 * };
 * ```
 */
export const provideDaffNavigationMagentoDriver = (config: MagentoNavigationDriverConfig = MAGENTO_NAVIGATION_DRIVER_CONFIG_DEFAULT): Provider[] => [
  provideDaffNavigationDriver(DaffMagentoNavigationService),
  {
    provide: DaffNavigationTransformer,
    useExisting: DaffMagentoNavigationTransformerService,
  },
  provideMagentoNavigationDriverConfig(config),
  provideDaffMagentoCacheableOperation(DAFF_MAGENTO_GET_CATEGORY_TREE_QUERY_NAME),
];
