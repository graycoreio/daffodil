import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilter,
  DaffCategoryFilterRequest,
} from '../../models/public_api';
import { daffCategoryFilterToRequest } from './filter-to-request';

/**
 * Builds a list of filter requests from a list of filters.
 * Requests are only built for the filters that have at least one applied option.
 *
 * @param filters The list of filters.
 */
export function daffCategoryFiltersToRequests(filters: Dict<DaffCategoryFilter>): DaffCategoryFilterRequest[] {
  return Object.keys(filters).map((key) => filters[key]).reduce((acc: DaffCategoryFilterRequest[], filter) => {
    const request = daffCategoryFilterToRequest(filter);

    if (request) {
      acc.push(request);
    }

    return acc;
  }, []);
}
