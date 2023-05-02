import {
  Inject,
  Injectable,
} from '@angular/core';
import { ParamMap } from '@angular/router';

import {
  DaffCollectionRequest,
  DaffFilterRequest,
} from '@daffodil/core';
import {
  DaffRoutingQueryParamFilter,
  daffRoutingQueryParamFilterRequestEqualBuilder,
} from '@daffodil/core/routing';

import {
  DaffProductRoutingConfig,
  DAFF_PRODUCT_ROUTING_CONFIG,
} from '../config/public_api';
import { DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS } from '../constants/public_api';
import { DAFF_PRODUCT_ROUTING_DISCRETE_FILTER_PARAMS } from '../discrete-filter-params/public_api';

/**
 * Builds a {@link DaffCollectionRequest} from the query params of the passed route.
 * Its behavior can be configured via the {@link DAFF_PRODUCT_COLLECTION_QUERY_PARAMS} and
 * {@link DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS} injection tokens.
 */
@Injectable()
export class DaffProductGetCollectionRequestFromRoute {
  constructor(
    @Inject(DAFF_PRODUCT_ROUTING_CONFIG) private config: DaffProductRoutingConfig,
    @Inject(DAFF_PRODUCT_ROUTING_DISCRETE_FILTER_PARAMS) private discreteFilters: DaffRoutingQueryParamFilter[],
  ) {}

  getRequest(queryParamMap: ParamMap): DaffCollectionRequest {
    const request = DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS.reduce<DaffCollectionRequest>((acc, field) => {
      const qp = this.config.params[field] || field;
      if (queryParamMap.has(qp)) {
        const qpVal = queryParamMap.get(qp);
        // no idea why field needs to be typecasted
        acc[(<string>field)] = this.config.transforms?.[field]?.request?.(qpVal) || qpVal;
      }
      return acc;
    }, {});
    const filterRequests = this.discreteFilters.reduce<DaffFilterRequest[]>(
      (acc, { filterName, builder, queryParam }) =>
        queryParamMap.has(queryParam)
          ? [
            ...acc,
            builder(filterName, queryParamMap.getAll(queryParam)),
          ]
          : acc,
      request.filterRequests || [],
    );
    // add discrete filter params to the list of requests
    if (filterRequests.length > 0) {
      request.filterRequests = filterRequests;
    }

    return request;
  }
}
