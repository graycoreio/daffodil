import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
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
        provideDaffSearchDriver(DaffSearchFederatedDriver),
        provideDaffSearchFederatedConfig(config),
      ],
    };
  }

  static forFeature(config: DaffSearchFederatedDriverConfig = DAFF_SEARCH_FEDERATED_CONFIG_DEFAULT): ModuleWithProviders<DaffSearchFederatedDriverModule> {
    return {
      ngModule: DaffSearchFederatedDriverModule,
      providers: [
        {
          provide: DaffSearchDriver,
          useClass: DaffSearchFederatedDriver,
        },
        provideDaffSearchFederatedConfig(config),
      ],
    };
  }
}
