import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import {
  DaffExternalRouterConfiguration,
  DAFF_EXTERNAL_ROUTER_CONFIG,
  daffExternalRouterConfigurationDefault,
} from './config';
import { DaffTypeRoutePair } from './model/type-route-pair';
import { daffProvideRoutesResolvableByType } from './token/type-resolvable-routes.token';

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
    config: Partial<DaffExternalRouterConfiguration>,
    routes: DaffTypeRoutePair[] = [],
  ): ModuleWithProviders<DaffExternalRouterModule> {
    return {
      ngModule: DaffExternalRouterModule,
      providers: [
        { provide: DAFF_EXTERNAL_ROUTER_CONFIG, useValue: { ...daffExternalRouterConfigurationDefault, ...config }},
        ...daffProvideRoutesResolvableByType(...routes),
      ],
    };
  }
}
