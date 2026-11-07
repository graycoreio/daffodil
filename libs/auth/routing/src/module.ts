import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { DaffAuthRoutingConfig } from './config/public_api';
import { provideDaffAuthRouting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthRouting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule()
export class DaffAuthRoutingModule {
  static withConfig(config?: Partial<DaffAuthRoutingConfig>): ModuleWithProviders<DaffAuthRoutingModule> {
    return {
      ngModule: DaffAuthRoutingModule,
      providers: [
        provideDaffAuthRouting(config),
      ],
    };
  }
}
