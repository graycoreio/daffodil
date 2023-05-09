import { DaffFilter } from '@daffodil/core';

import { DaffRoutingQueryParamFilterRequestBuilder } from './request-builder/type';

export interface DaffRoutingQueryParamFilter {
  /**
   * The name of the filter.
   */
  filterName: DaffFilter['name'];
  /**
   * The query param to use for this filter.
   */
  queryParam: string;
  /**
   * The filter request builder.
   */
  builder: DaffRoutingQueryParamFilterRequestBuilder;
}
