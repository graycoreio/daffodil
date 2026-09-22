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
 * @deprecated in favor of {@link provideDaffCartRouting}
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
