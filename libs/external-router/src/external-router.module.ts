import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import {
  DaffExternalRouterConfiguration,
  DAFF_EXTERNAL_ROUTER_CONFIG,
} from './config';

/**
 * The external `DaffExternalRouterModule` allows you to configure the
 * `@daffodil/external-router` package's behavior.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DaffExternalRouterModule {
  static forRoot(
    config: DaffExternalRouterConfiguration,
  ): ModuleWithProviders<DaffExternalRouterModule> {
    return {
      ngModule: DaffExternalRouterModule,
      providers: [{ provide: DAFF_EXTERNAL_ROUTER_CONFIG, useValue: config }],
    };
  }
}
