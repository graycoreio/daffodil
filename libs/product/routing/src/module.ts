import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import {
  DaffProductRoutingConfig,
  provideDaffProductRoutingConfig,
} from './config/public_api';
import { provideDaffProductRouting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffProductRouting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffProductRouting(),
  ],
})
export class DaffProductRoutingModule {
  static withConfig(config?: DaffProductRoutingConfig): ModuleWithProviders<DaffProductRoutingModule> {
    return {
      ngModule: DaffProductRoutingModule,
      providers: [
        // always provide the config, even when undefined, to preserve the previous behavior
        provideDaffProductRoutingConfig(config),
      ],
    };
  }
}
