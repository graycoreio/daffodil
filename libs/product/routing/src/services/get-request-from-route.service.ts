import {
  Inject,
  Injectable,
} from '@angular/core';
import { ParamMap } from '@angular/router';

import { DaffProductCollectionRequest } from '@daffodil/product';

import {
  DaffProductRoutingConfig,
  DAFF_PRODUCT_ROUTING_CONFIG,
} from '../config/public_api';
import { DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS } from '../constants/public_api';

/**
 * Builds a {@link DaffProductCollectionRequest} from the query params of the passed route.
 * Its behavior can be configured via the {@link DAFF_PRODUCT_COLLECTION_QUERY_PARAMS} and
 * {@link DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS} injection tokens.
 */
@Injectable()
export class DaffProductGetCollectionRequestFromRoute {
  constructor(
    @Inject(DAFF_PRODUCT_ROUTING_CONFIG) private config: DaffProductRoutingConfig,
  ) {}

  getRequest(queryParamMap: ParamMap): DaffProductCollectionRequest {
    return DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS.reduce<DaffProductCollectionRequest>((acc, field) => {
      const qp = this.config.params[field] || field;
      if (queryParamMap.has(qp)) {
        const qpVal = queryParamMap.get(qp);
        // no idea why field needs to be typecasted
        acc[(<string>field)] = this.config.transforms?.[field]?.request?.(qpVal) || qpVal;
      }
      return acc;
    }, {});
  }
}
