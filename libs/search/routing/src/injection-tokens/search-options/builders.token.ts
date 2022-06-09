import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { DaffSearchDriverOptions } from '@daffodil/search/driver';

export type DaffSearchRoutingOptionBuilder<T extends DaffSearchDriverOptions = DaffSearchDriverOptions> = (route: ActivatedRouteSnapshot) => T;

/**
 * A multi-provider injection token for search option builders.
 * These builders are called with the requested route during the resolve step
 * and return options to pass to the search driver.
 */
export const DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS = new InjectionToken<DaffSearchRoutingOptionBuilder[]>(
  'DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS',
  { factory: () => []},
);

/**
 * Provides search option builders for the routing layer.
 *
 * See {@link DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideSearchRoutingOptionBuilders(
 *     route => ({
 *       limit: route.queryParams.limit
 *     })
 *   )
 * ]
 * ```
 */
export function daffProvideSearchRoutingOptionBuilders(...builders: DaffSearchRoutingOptionBuilder[]): ValueProvider[] {
  return builders.map(builder => ({
    provide: DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS,
    useValue: builder,
    multi: true,
  }));
}
