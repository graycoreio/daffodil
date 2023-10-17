

import { daffToggleFilter } from './toggle';
import {
  DaffFilters,
  DaffFilterToggleRequest,
} from '../../../filterable/public_api';

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


