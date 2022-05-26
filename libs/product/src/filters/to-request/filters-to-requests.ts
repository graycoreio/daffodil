import { Dict } from '@daffodil/core';

import {
  DaffProductFilter,
  DaffProductFilterRequest,
} from '../../models/public_api';
import { daffProductFilterToRequest } from './filter-to-request';

/**
 * Builds a list of filter requests from a list of filters.
 * Requests are only built for the filters that have at least one applied option.
 */
export function daffProductFiltersToRequests(filters: Dict<DaffProductFilter>): DaffProductFilterRequest[] {
  return Object.keys(filters).map((key) => filters[key]).reduce((acc: DaffProductFilterRequest[], filter) => {
    const request = daffProductFilterToRequest(filter);

    if (request) {
      acc.push(request);
    }

    return acc;
  }, []);
}
