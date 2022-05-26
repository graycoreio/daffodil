import { Dict } from '@daffodil/core';

import {
  DaffProductFilter,
  DaffProductFilterToggleRequest,
} from '../../../models/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Toggles the state of the filters (and their options) in the {@link Dict<DaffProductFilter>}
 * that match any of the {@link DaffProductFilterToggleRequest[]} .
 */
export const daffToggleRequestsOnFilters = (
  filtersRequests: DaffProductFilterToggleRequest[],
  filters: Dict<DaffProductFilter>,
): Dict<DaffProductFilter> =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffToggleFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


