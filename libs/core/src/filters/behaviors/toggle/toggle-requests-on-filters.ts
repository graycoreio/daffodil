

import {
  DaffFilters,
  DaffFilterToggleRequest,
} from '../../../filterable/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Toggles the state of the filters (and their options) in the {@link DaffFilters}
 * that match any of the {@link DaffFilterToggleRequest[]} .
 */
export const daffToggleRequestsOnFilters = (
  filtersRequests: DaffFilterToggleRequest[],
  filters: DaffFilters,
): DaffFilters =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffToggleFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


