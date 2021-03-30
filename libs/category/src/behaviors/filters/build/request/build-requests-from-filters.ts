import {
  DaffCategoryFilter,
  DaffCategoryFilterRequest,
} from '../../../../models/public_api';
import { daffCategoryBuildRequestFromFilter } from './build-request-from-filter';

/**
 * Builds a list of filter requests from a list of filters.
 * Requests are only built for the filters that have at least one applied option.
 *
 * @param filters The list of filters.
 */
export function daffCategoryBuildRequestsFromFilters(filters: DaffCategoryFilter[]): DaffCategoryFilterRequest[] {
  return filters.reduce((acc: DaffCategoryFilterRequest[], filter) => {
    const request = daffCategoryBuildRequestFromFilter(filter);

    if (request) {
      acc.push(request);
    }

    return acc;
  }, []);
}
