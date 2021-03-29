import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
} from '../../../models/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies filters from a DaffCategoryRequest to a set of DaffCategoryFilterRequest.
 * This is useful when the platform that returns a DaffGetCategoryResponse does not
 * inform what filters actually wound up being being applied by the request.
 * In theory, this function should not exist, yet for now, it does.
 *
 * Note that the performance of this function is currently O(n^2) but requires a
 * type change to a dictionary in order to move to O(n).
 *
 * TODO(damienwebdev): review performance of this function.
 */
export const daffApplyRequestsToFilters = (filtersRequests: DaffCategoryFilterRequest[], filters: DaffCategoryFilter[]):  DaffCategoryFilter[] => {
  filtersRequests.map((request) => {
    filters = filters.filter(filter => filter.name === request.name).map(filter => daffApplyFilter(request, filter));
  });

  return filters;
};


