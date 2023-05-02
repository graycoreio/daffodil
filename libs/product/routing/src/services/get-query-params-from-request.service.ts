import {
  Inject,
  Injectable,
} from '@angular/core';
import { Params } from '@angular/router';

import {
  DaffCollectionRequest,
  daffArrayToDict,
} from '@daffodil/core';
import { DaffRoutingQueryParamFilter } from '@daffodil/core/routing';

import {
  DaffProductRoutingConfig,
  DAFF_PRODUCT_ROUTING_CONFIG,
} from '../config/public_api';
import { DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS } from '../constants/public_api';
import { DAFF_PRODUCT_ROUTING_DISCRETE_FILTER_PARAMS } from '../discrete-filter-params/public_api';

/**
 * Builds a query param map from a {@link DaffCollectionRequest}.
 * Its behavior can be configured via the {@link DAFF_PRODUCT_ROUTING_CONFIG} injection token.
 */
@Injectable()
export class DaffProductGetQueryParamsFromRequest {
  constructor(
    @Inject(DAFF_PRODUCT_ROUTING_CONFIG) private config: DaffProductRoutingConfig,
    @Inject(DAFF_PRODUCT_ROUTING_DISCRETE_FILTER_PARAMS) private discreteFilters: DaffRoutingQueryParamFilter[],
  ) {}

  getQueryParams(request: DaffCollectionRequest): Params {
    const filterRequests = daffArrayToDict(request.filterRequests, (fr) => fr.name);
    // Specifically sets filter names missing from the filter requests to undefined
    // in order to remove them from the URL
    const trimmedQueryParams = this.discreteFilters.reduce(
      (acc, { filterName, queryParam }) => {
        if (!filterRequests[filterName]) {
          acc[queryParam] = undefined;
        }
        return acc;
      },
      {},
    );

    return DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS.reduce<Params>((acc, field) => {
      const val = request[field];
      if (val) {
        acc[this.config.params[field] || field] = this.config.transforms?.[field]?.queryParam?.(val) || String(val);
      }
      return acc;
    }, trimmedQueryParams);
  }
}
