import { Provider } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffTypeRoutePair } from '../model/type-route-pair';

export const {
  /**
   * A multi-token that allows you to register route "types" that correspond to routes.
   */
  token: DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE,

  /**
   * A multi-provider used to connect an array of types to their respective routes.
   */
  provider: provideDaffRoutesResolvableByType,
} = createMultiInjectionToken<DaffTypeRoutePair>(
  'DAFF_EXTERNAL_ROUTER_RESOLVABLE_TYPE_ROUTES',
  {
    providedIn: 'root',
  },
);

/**
 * A provider used to connect a type to a route to enable dynamic route resolution at runtime.
 */
export function provideDaffRouteResolvableByType(typeRoutePair: DaffTypeRoutePair): Provider {
  return {
    provide: DAFF_EXTERNAL_ROUTER_ROUTES_RESOLVABLE_BY_TYPE,
    multi: true,
    useValue: typeRoutePair,
  };
}
