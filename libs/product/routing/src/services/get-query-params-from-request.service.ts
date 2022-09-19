import {
  Inject,
  Injectable,
} from '@angular/core';
import { Params } from '@angular/router';

import { DaffCollectionRequest } from '@daffodil/core';

import {
  DaffProductRoutingConfig,
  DAFF_PRODUCT_ROUTING_CONFIG,
} from '../config/public_api';
import { DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS } from '../constants/public_api';

/**
 * Builds a query param map from a {@link DaffCollectionRequest}.
 * Its behavior can be configured via the {@link DAFF_PRODUCT_ROUTING_CONFIG} injection token.
 */
@Injectable()
export class DaffProductGetQueryParamsFromRequest {
  constructor(
    @Inject(DAFF_PRODUCT_ROUTING_CONFIG) private config: DaffProductRoutingConfig,
  ) {}

  getQueryParams(request: DaffCollectionRequest): Params {
    return DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS.reduce<Params>((acc, field) => {
      const val = request[field];
      if (val) {
        acc[this.config.params[field] || field] = this.config.transforms?.[field]?.queryParam?.(val) || String(val);
      }
      return acc;
    }, {});
  }
}
