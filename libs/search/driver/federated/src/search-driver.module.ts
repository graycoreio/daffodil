import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffSearchFederatedDriverConfig,
  DAFF_SEARCH_FEDERATED_CONFIG_DEFAULT,
} from './config/public_api';
import {
  provideDaffSearchFederatedDriver,
  provideDaffSearchFederatedFeatureDriver,
} from './provider';

/**
 * Provides the {@link DaffSearchFederatedDriver} as the {@link DaffSearchDriver}.
 *
 * @deprecated in favor of {@link provideDaffSearchFederatedDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchFederatedDriverModule {
  static forRoot(config: DaffSearchFederatedDriverConfig = DAFF_SEARCH_FEDERATED_CONFIG_DEFAULT): ModuleWithProviders<DaffSearchFederatedDriverModule> {
    return {
      ngModule: DaffSearchFederatedDriverModule,
      providers: [
        provideDaffSearchFederatedDriver(config),
      ],
    };
  }

  static forFeature(config: DaffSearchFederatedDriverConfig = DAFF_SEARCH_FEDERATED_CONFIG_DEFAULT): ModuleWithProviders<DaffSearchFederatedDriverModule> {
    return {
      ngModule: DaffSearchFederatedDriverModule,
      providers: [
        provideDaffSearchFederatedFeatureDriver(config),
      ],
    };
  }
}
