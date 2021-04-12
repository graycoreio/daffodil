import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
} from '../../../models/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies filters from a {@link DaffCategoryFilterRequest} to a {@link Dict}
 * of {@link DaffCategoryFilter}.
 */
export const daffApplyRequestsToFilters = (
  filtersRequests: DaffCategoryFilterRequest[],
  filters: Dict<DaffCategoryFilter>,
): Dict<DaffCategoryFilter> =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffApplyFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


