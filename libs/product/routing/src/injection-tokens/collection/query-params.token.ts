import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProduct } from '@daffodil/product';

import { DaffProductCollectionRequestQueryParams } from '../../models/collection-request-query-params.interface';

/**
 * A multi-provider injection token for providing the query params that can be mapped to product collection request fields.
 * It defaults to the name of the request field.
 */
export const DAFF_PRODUCT_COLLECTION_QUERY_PARAMS = new InjectionToken<DaffProductCollectionRequestQueryParams>(
  'DAFF_PRODUCT_COLLECTION_QUERY_PARAMS',
  { factory: () => ({}) },
);

/**
 * Provides the query params that can be mapped to product collection request fields.
 *
 * See {@link DAFF_PRODUCT_COLLECTION_QUERY_PARAMS}.
 *
 * ```ts
 * providers: [
 *   daffProvideProductCollectionQueryParams({
 *     current_page: 'page',
 *     page_size: 'size'
 *   })
 * ]
 * ```
 */
export function daffProvideProductCollectionQueryParams(value: DaffProductCollectionRequestQueryParams): ValueProvider {
  return {
    provide: DAFF_PRODUCT_COLLECTION_QUERY_PARAMS,
    useValue: value,
  };
}
