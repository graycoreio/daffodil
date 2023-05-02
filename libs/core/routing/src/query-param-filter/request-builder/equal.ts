import {
  DaffFilterEqualRequest,
  DaffFilterType,
} from '@daffodil/core';

import { DaffRoutingQueryParamFilterRequestBuilder } from './type';

/**
 * A standard filter request builder that creates an equal filter request with the query params values.
 */
export const daffRoutingQueryParamFilterRequestEqualBuilder: DaffRoutingQueryParamFilterRequestBuilder<DaffFilterEqualRequest>
 = (qpValue, filterName) => ({
   type: DaffFilterType.Equal,
   name: filterName,
   value: qpValue,
 });
