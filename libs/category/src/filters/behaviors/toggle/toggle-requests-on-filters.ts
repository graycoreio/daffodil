import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilter,
  DaffCategoryFilterToggleRequest,
} from '../../../models/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Toggles the state of the filters (and their options) in the {@link Dict<DaffCategoryFilter>}
 * that match any of the {@link DaffCategoryFilterToggleRequest[]} .
 */
export const daffToggleRequestsOnFilters = (
  filtersRequests: DaffCategoryFilterToggleRequest[],
  filters: Dict<DaffCategoryFilter>,
): Dict<DaffCategoryFilter> =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffToggleFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


