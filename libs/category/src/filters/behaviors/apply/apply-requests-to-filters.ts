import { Dict } from '@daffodil/core';

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
 */
export const daffApplyRequestsToFilters = (
  filtersRequests: DaffCategoryFilterRequest[],
  filters: Dict<DaffCategoryFilter>,
): Dict<DaffCategoryFilter> =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffApplyFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


