import {
  InjectionToken,
  Provider,
} from '@angular/core';

import { DaffExternalRouterInsertionStrategy } from '../model/insertion-strategy.type';
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
export function daffProvideRouteResolvableByType(typeRoutePair: DaffTypeRoutePair): Provider {
  return {
    provide: DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE,
    multi: true,
    useValue: typeRoutePair,
  };
}

/**
 * A multi-provider used to connect an array of types to their respective routes.
 */
export function daffProvideRoutesResolvableByType(routes: DaffTypeRoutePair[]): Provider[] {
  return routes.map((route: DaffTypeRoutePair) => ({
    provide: DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE,
    multi: true,
    useValue: route,
  }));
}
