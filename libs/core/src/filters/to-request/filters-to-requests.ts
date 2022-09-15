

import {
  DaffFilterRequest,
  DaffFilters,
} from '../../filterable/public_api';
import { daffFilterToRequest } from './filter-to-request';

/**
 * Builds a list of filter requests from a list of filters.
 * Requests are only built for the filters that have at least one applied option.
 */
export function daffFiltersToRequests(filters: DaffFilters): DaffFilterRequest[] {
  return Object.keys(filters).map((key) => filters[key]).reduce((acc: DaffFilterRequest[], filter) => {
    const request = daffFilterToRequest(filter);

    if (request) {
      acc.push(request);
    }

    return acc;
  }, []);
}
