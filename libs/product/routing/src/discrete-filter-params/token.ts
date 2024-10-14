import { ValueProvider } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import {
  DaffRoutingQueryParamFilter,
  daffRoutingQueryParamFilterRequestEqualBuilder,
} from '@daffodil/core/routing';

export const {
  /**
   * A list of product filter requests that are contained directly in query params,
   * with a one-to-one mapping between filters and query params.
   * This is constrasted to {@link DaffCollectionRequestQueryParams#filterRequests}
   * which remains the actual canonical source of truth of the filter requests.
   * The discrete filter params persist in the URL as long as the corresponding filter remains applied.
   */
  token: DAFF_PRODUCT_ROUTING_DISCRETE_FILTER_PARAMS,
} = createMultiInjectionToken<DaffRoutingQueryParamFilter>(
  'DAFF_PRODUCT_ROUTING_DISCRETE_FILTER_PARAMS',
  { providedIn: 'any' },
);

/**
 * A multi-provider for {@link DAFF_PRODUCT_ROUTING_DISCRETE_FILTER_PARAMS}.
 *
 * @param queryParam Defaults to `filterName`.
 * @param builder Defaults to {@link daffRoutingQueryParamFilterRequestEqualBuilder}.
 */
export function daffProductRoutingProvideDiscreteFilterParam(filterName: DaffRoutingQueryParamFilter['filterName'], queryParam?: DaffRoutingQueryParamFilter['queryParam'], builder?: DaffRoutingQueryParamFilter['builder']): ValueProvider {
  return {
    provide: DAFF_PRODUCT_ROUTING_DISCRETE_FILTER_PARAMS,
    useValue: {
      filterName,
      queryParam: queryParam || filterName,
      builder: builder || daffRoutingQueryParamFilterRequestEqualBuilder,
    },
    multi: true,
  };
}
