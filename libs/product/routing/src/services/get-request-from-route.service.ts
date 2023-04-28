import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ParamMap,
  RouterStateSnapshot,
} from '@angular/router';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCollectionRequest } from '@daffodil/core';

import {
  DaffProductRoutingConfig,
  DAFF_PRODUCT_ROUTING_CONFIG,
} from '../config/public_api';
import { DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS } from '../constants/public_api';

/**
 * Builds a {@link DaffCollectionRequest} from the query params of the passed route.
 * Its behavior can be configured via the {@link DAFF_PRODUCT_COLLECTION_QUERY_PARAMS} and
 * {@link DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS} injection tokens.
 */
@Injectable()
export class DaffProductGetCollectionRequestFromRoute {
  constructor(
    @Inject(DAFF_PRODUCT_ROUTING_CONFIG) private config: DaffProductRoutingConfig,
  ) {}

  getRequest(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DaffCollectionRequest> {
    return of(DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS.reduce<DaffCollectionRequest>((acc, field) => {
      const qp = this.config.params[field] || field;
      if (route.queryParamMap.has(qp)) {
        const qpVal = route.queryParamMap.get(qp);
        // no idea why field needs to be typecasted
        acc[(<string>field)] = this.config.transforms?.[field]?.request?.(qpVal) || qpVal;
      }
      return acc;
    }, {}));
  }
}
