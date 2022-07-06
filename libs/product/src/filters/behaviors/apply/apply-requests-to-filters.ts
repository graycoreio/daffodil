

import {
  DaffProductFilterRequest,
  DaffProductFilter,
} from '../../../models/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies filters from a {@link DaffProductFilterRequest} to a dictionary
 * of {@link DaffProductFilter}.
 *
 * @idempotent {filters}
 */
export const daffApplyRequestsToFilters = (
  filtersRequests: DaffProductFilterRequest[],
  filters: Record<DaffProductFilter['name'], DaffProductFilter>,
): Record<DaffProductFilter['name'], DaffProductFilter> =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffApplyFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


