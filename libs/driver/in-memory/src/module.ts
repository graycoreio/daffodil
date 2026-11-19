import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DAFF_IN_MEMORY_DRIVER_CONFIG_DEFAULT,
  DaffInMemoryDriverConfig,
} from './config/public_api';
import { provideDaffInMemoryDriver } from './provider';

/**
 * Sets up the angular in memory web API with the {@link DaffInMemoryRootBackend}.
 *
 * @deprecated in favor of {@link provideDaffInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule()
export class DaffInMemoryDriverModule {
  static forRoot(config: DaffInMemoryDriverConfig = DAFF_IN_MEMORY_DRIVER_CONFIG_DEFAULT): ModuleWithProviders<DaffInMemoryDriverModule> {
    return {
      ngModule: DaffInMemoryDriverModule,
      providers: [
        provideDaffInMemoryDriver(config),
      ],
    };
  }
}
