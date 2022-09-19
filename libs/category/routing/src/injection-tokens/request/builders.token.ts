import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { DaffCollectionRequest } from '@daffodil/core';


export type DaffCategoryRoutingRequestBuilder<T extends DaffCollectionRequest = DaffCollectionRequest> = (route: ActivatedRouteSnapshot) => T;

/**
 * A multi-provider injection token for category request builders.
 * These builders are called with the requested route during the resolve step
 * and return options to pass to the category driver.
 */
export const DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS = new InjectionToken<DaffCategoryRoutingRequestBuilder[]>(
  'DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS',
  { factory: () => []},
);

/**
 * Provides category request builders for the routing layer.
 *
 * See {@link DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideCategoryRoutingRequestBuilders(
 *     route => ({
 *       currentPage: route.queryParams.page
 *     })
 *   )
 * ]
 * ```
 */
export function daffProvideCategoryRoutingRequestBuilders(...builders: DaffCategoryRoutingRequestBuilder[]): ValueProvider[] {
  return builders.map(builder => ({
    provide: DAFF_CATEGORY_ROUTING_OPTIONS_BUILDERS,
    useValue: builder,
    multi: true,
  }));
}
