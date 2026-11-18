import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffCartRoutingConfiguration,
  provideDaffCartRoutingConfig,
} from './config/config';
import { provideDaffCartRouting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartRouting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffCartRouting(),
  ],
})
export class DaffCartRoutingModule {
  static forRoot(config: DaffCartRoutingConfiguration = <any>{}): ModuleWithProviders<DaffCartRoutingModule> {
    return {
      ngModule: DaffCartRoutingModule,
      providers: [
        provideDaffCartRoutingConfig(config),
      ],
    };
  }
}
