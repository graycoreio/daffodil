import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { DaffAuthRoutingConfig } from './config/public_api';
import { provideDaffAuthRouting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthRouting}
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
