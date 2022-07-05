

import {
  DaffProductFilter,
  DaffProductFilterToggleRequest,
} from '../../../models/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Toggles the state of the filters (and their options) in the {@link Record<DaffProductFilter['name'], DaffProductFilter>}
 * that match any of the {@link DaffProductFilterToggleRequest[]} .
 */
export const daffToggleRequestsOnFilters = (
  filtersRequests: DaffProductFilterToggleRequest[],
  filters: Record<DaffProductFilter['name'], DaffProductFilter>,
): Record<DaffProductFilter['name'], DaffProductFilter> =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffToggleFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


