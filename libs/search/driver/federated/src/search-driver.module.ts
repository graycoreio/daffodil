import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffSearchDriver } from '@daffodil/search/driver';

import {
  DaffSearchFederatedDriverConfig,
  SEARCH_FEDERATED_CONFIG_DEFAULT,
  SEARCH_FEDERATED_CONFIG_TOKEN,
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
  static forRoot(config: DaffSearchFederatedDriverConfig = SEARCH_FEDERATED_CONFIG_DEFAULT): ModuleWithProviders<DaffSearchFederatedDriverModule> {
    return {
      ngModule: DaffSearchFederatedDriverModule,
      providers: [
        {
          provide: DaffSearchDriver,
          useExisting: DaffSearchFederatedDriver,
        },
        {
          provide: SEARCH_FEDERATED_CONFIG_TOKEN,
          useValue: {
            ...SEARCH_FEDERATED_CONFIG_DEFAULT,
            ...config,
          },
        },
      ],
    };
  }

  static forFeature(config: DaffSearchFederatedDriverConfig = SEARCH_FEDERATED_CONFIG_DEFAULT): ModuleWithProviders<DaffSearchFederatedDriverModule> {
    return {
      ngModule: DaffSearchFederatedDriverModule,
      providers: [
        {
          provide: DaffSearchDriver,
          useClass: DaffSearchFederatedDriver,
        },
        {
          provide: SEARCH_FEDERATED_CONFIG_TOKEN,
          useValue: {
            ...SEARCH_FEDERATED_CONFIG_DEFAULT,
            ...config,
          },
        },
      ],
    };
  }
}
