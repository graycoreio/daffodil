import {
  InjectionToken,
  Provider,
} from '@angular/core';

import { DaffExternalRouteType } from '../model/route-type';
import { DaffRouteWithoutPath } from '../model/route-without-path';
import { DaffTypeRoutePair } from '../model/type-route-pair';

/**
 * A multi-token that allows you to register route "types" that correspond to routes.
 */
export const DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE = new InjectionToken<
	DaffTypeRoutePair[]
>('DAFF_EXTERNAL_ROUTER_RESOLVABLE_TYPE_ROUTES', {
  providedIn: 'root',
  factory: () => [],
});

/**
 * A provider used to connect a type to a route to enable dynamic route resolution at runtime.
 */
export function daffProvideRouteResolvableByType(
  type: DaffExternalRouteType,
  route: DaffRouteWithoutPath,
): Provider {
  return {
    provide: DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE,
    multi: true,
    useValue: { type, route },
  };
}

export function provideRoutesResolvableByType(routes: DaffTypeRoutePair[]): Provider[] {
  return routes.map((route: DaffTypeRoutePair) => ({
    provide: DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE,
    multi: true,
    useValue: { type: route.type, route: route.route },
  }));
}
