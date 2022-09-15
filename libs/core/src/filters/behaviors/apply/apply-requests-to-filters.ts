

import {
  DaffFilterRequest,
  DaffFilters,
} from '../../../filterable/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies filters from a {@link DaffFilterRequest} to a dictionary
 * of {@link DaffFilter}.
 *
 * @idempotent {filters}
 */
export const daffApplyRequestsToFilters = (
  filtersRequests: DaffFilterRequest[],
  filters: DaffFilters,
): DaffFilters =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffApplyFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


