import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilter,
	DaffToggleCategoryFilterRequest,
} from '../../../models/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Applies filters from a DaffCategoryRequest to a set of DaffCategoryFilterRequest.
 * This is useful when the platform that returns a DaffGetCategoryResponse does not
 * inform what filters actually wound up being being applied by the request.
 * In theory, this function should not exist, yet for now, it does.
 */
export const daffToggleRequestsOnFilters = (
  filtersRequests: DaffToggleCategoryFilterRequest[],
  filters: Dict<DaffCategoryFilter>,
): Dict<DaffCategoryFilter> =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffToggleFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


