import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterReplacement,
  DaffCategoryFilterRequestReplacement,
} from '../../models/public_api';
import { daffCategoryFilterToRequest } from './filter-to-request';

/**
 * Builds a list of filter requests from a list of filters.
 * Requests are only built for the filters that have at least one applied option.
 */
export function daffCategoryFiltersToRequests(filters: Dict<DaffCategoryFilterReplacement>): DaffCategoryFilterRequestReplacement[] {
  return Object.keys(filters).map((key) => filters[key]).reduce((acc: DaffCategoryFilterRequestReplacement[], filter) => {
    const request = daffCategoryFilterToRequest(filter);

    if (request) {
      acc.push(request);
    }

    return acc;
  }, []);
}
