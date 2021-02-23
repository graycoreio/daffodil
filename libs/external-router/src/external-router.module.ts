import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import {
  DaffExternalRouterConfiguration,
  DAFF_EXTERNAL_ROUTER_CONFIG,
} from './config';
import { TypeRoutePair } from './model/type-route-pair';
import {
  provideRouteResolvableByType,
  provideRoutesResolvableByType,
} from './token/type-resolvable-routes.token';

export function mapRoutesToProvider(route: TypeRoutePair) {
  return provideRouteResolvableByType(route.type, route.route);
}

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
    routes: TypeRoutePair[] = [],
    config: DaffExternalRouterConfiguration,
  ): ModuleWithProviders<DaffExternalRouterModule> {
    return {
      ngModule: DaffExternalRouterModule,
      providers: [
        { provide: DAFF_EXTERNAL_ROUTER_CONFIG, useValue: config },
        ...provideRoutesResolvableByType(routes),
      ],
    };
  }
}
