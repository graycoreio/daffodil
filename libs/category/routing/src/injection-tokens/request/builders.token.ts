import { ActivatedRouteSnapshot } from '@angular/router';

import {
  DaffCollectionRequest,
  createMultiInjectionToken,
} from '@daffodil/core';

export type DaffCategoryRoutingRequestBuilder<T extends DaffCollectionRequest = DaffCollectionRequest> = (route: ActivatedRouteSnapshot) => T;

export const {
  /**
   * A multi-provider injection token for category request builders.
   * These builders are called with the requested route during the resolve step
   * and return options to pass to the category driver.
   */
  token: DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS,

  /**
   * Provides category request builders for the routing layer.
   *
   * See {@link DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffCategoryRoutingRequestBuilders(
   *     route => ({
   *       currentPage: route.queryParams.page
   *     })
   *   )
   * ]
   * ```
   */
  provider: provideDaffCategoryRoutingRequestBuilders,
} = createMultiInjectionToken<DaffCategoryRoutingRequestBuilder>('DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS');
