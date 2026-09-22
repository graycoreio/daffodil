import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DaffSearchDriver,
  provideDaffSearchDriver,
} from '@daffodil/search/driver';

import {
  DaffSearchFederatedDriverConfig,
  DAFF_SEARCH_FEDERATED_CONFIG_DEFAULT,
  provideDaffSearchFederatedConfig,
} from './config/public_api';
import { DaffSearchFederatedDriver } from './search.service';

/**
 * Provides the {@link DaffSearchFederatedDriver} as the {@link DaffSearchDriver}.
 */
export const provideDaffSearchFederatedDriver = (config: DaffSearchFederatedDriverConfig = DAFF_SEARCH_FEDERATED_CONFIG_DEFAULT): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchDriver(DaffSearchFederatedDriver),
  provideDaffSearchFederatedConfig(config),
]);

/**
 * Provides the {@link DaffSearchFederatedDriver} as the {@link DaffSearchDriver} with `useClass`,
 * creating a new instance of the driver in the current injector.
 */
export const provideDaffSearchFederatedFeatureDriver = (config: DaffSearchFederatedDriverConfig = DAFF_SEARCH_FEDERATED_CONFIG_DEFAULT): EnvironmentProviders => makeEnvironmentProviders([
  {
    provide: DaffSearchDriver,
    useClass: DaffSearchFederatedDriver,
  },
  provideDaffSearchFederatedConfig(config),
]);
