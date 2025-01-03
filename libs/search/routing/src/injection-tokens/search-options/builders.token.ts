import { ActivatedRouteSnapshot } from '@angular/router';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffSearchDriverOptions } from '@daffodil/search/driver';

export type DaffSearchRoutingOptionBuilder<T extends DaffSearchDriverOptions = DaffSearchDriverOptions> = (route: ActivatedRouteSnapshot) => T;

export const {
  /**
   * A multi-provider injection token for search option builders.
   * These builders are called with the requested route during the resolve step
   * and return options to pass to the search driver.
   */
  token: DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS,

  /**
   * Provides search option builders for the routing layer.
   *
   * See {@link DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffSearchRoutingOptionBuilders(
   *     route => ({
   *       limit: route.queryParams.limit
   *     })
   *   )
   * ]
   * ```
   */
  provider: provideDaffSearchRoutingOptionBuilders,
} = createMultiInjectionToken<DaffSearchRoutingOptionBuilder>('DAFF_SEARCH_ROUTING_OPTIONS_BUILDERS');
