import {
  Inject,
  Injectable,
} from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { DaffProductCollectionRequest } from '@daffodil/product';

import {
  DAFF_PRODUCT_COLLECTION_QUERY_PARAMS,
  DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS,
} from '../injection-tokens/public_api';
import {
  DaffProductCollectionRequestQueryParams,
  DaffProductCollectionRequestQueryParamTransforms,
} from '../models/public_api';

/**
 * A list of request fields that can be seeded from query params.
 */
export const DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS = [
  'filter_requests',
  'applied_sort_option',
  'applied_sort_direction',
  'current_page',
  'page_size',
];

/**
 * Builds a {@link DaffProductCollectionRequest} from the query params of the passed route.
 * Its behavior can be configured via the {@link DAFF_PRODUCT_COLLECTION_QUERY_PARAMS} and
 * {@link DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS} injection tokens.
 */
@Injectable({ providedIn: 'root' })
export class DaffProductGetCollectionRequestFromRoute {
  constructor(
    @Inject(DAFF_PRODUCT_COLLECTION_QUERY_PARAMS) private queryParams: DaffProductCollectionRequestQueryParams,
    @Inject(DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS) private transforms: DaffProductCollectionRequestQueryParamTransforms,
  ) {}

  getRequest(route: ActivatedRouteSnapshot): DaffProductCollectionRequest {
    return DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS.reduce<DaffProductCollectionRequest>((acc, field) => {
      const qp = this.queryParams[field] || field;
      if (route.queryParamMap.has(qp)) {
        const qpVal = route.queryParamMap.get(qp);
        acc[field] = this.transforms[field]?.(qpVal) || qpVal;
      }
      return acc;
    }, {});
  }
}
