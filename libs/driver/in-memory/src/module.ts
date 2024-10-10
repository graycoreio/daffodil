import {
  NgModule,
  ModuleWithProviders,
  importProvidersFrom,
} from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DaffInMemoryRootBackend } from './backend/public_api';
import {
  DAFF_IN_MEMORY_DRIVER_CONFIG_DEFAULT,
  DaffInMemoryDriverConfig,
  provideDaffInMemoryDriverConfig,
} from './config/public_api';

/**
 * Sets up the angular in memory web API with the {@link DaffInMemoryRootBackend}.
 */
@NgModule()
export class DaffInMemoryDriverModule {
  static forRoot(config: DaffInMemoryDriverConfig = DAFF_IN_MEMORY_DRIVER_CONFIG_DEFAULT): ModuleWithProviders<DaffInMemoryDriverModule> {
    return {
      ngModule: DaffInMemoryDriverModule,
      providers: [
        importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryRootBackend, config)),
        provideDaffInMemoryDriverConfig(config),
      ],
    };
  }
}
