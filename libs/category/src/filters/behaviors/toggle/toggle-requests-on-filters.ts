import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterReplacement,
  DaffCategoryFilterToggleRequest,
} from '../../../models/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Toggles the state of the filters (and their options) in the {@link Dict<DaffCategoryFilterReplacement>}
 * that match any of the {@link DaffCategoryFilterToggleRequest[]} .
 */
export const daffToggleRequestsOnFilters = (
  filtersRequests: DaffCategoryFilterToggleRequest[],
  filters: Dict<DaffCategoryFilterReplacement>,
): Dict<DaffCategoryFilterReplacement> =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffToggleFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


