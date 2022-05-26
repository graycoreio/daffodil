import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProductCollectionRequest } from '@daffodil/product';

import { DaffProductCollectionRequestQueryParamTransforms } from '../../models/collection-request-query-param-transforms.interface';

/**
 * A multi-provider injection token for providing custom transform logic for
 * mapping query params to product collection request fields.
 * By default the request field is simply set to the query param value.
 */
export const DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS = new InjectionToken<DaffProductCollectionRequestQueryParamTransforms>(
  'DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS',
  { factory: () => ({}) },
);

/**
 * Provides transform logic for mapping query params to product collection request fields.
 *
 * See {@link DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS}.
 *
 * ```ts
 * providers: [
 *   daffProvideProductCollectionQueryParamTransforms({
 *     filter_requests: (base64Val: string) => JSON.parse(atob(base64Val))
 *   })
 * ]
 * ```
 */
export function daffProvideProductCollectionQueryParamTransforms(value: DaffProductCollectionRequestQueryParamTransforms): ValueProvider {
  return {
    provide: DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS,
    useValue: value,
  };
}
