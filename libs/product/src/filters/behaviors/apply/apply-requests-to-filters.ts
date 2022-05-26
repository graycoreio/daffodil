import { Dict } from '@daffodil/core';

import {
  DaffProductFilterRequest,
  DaffProductFilter,
} from '../../../models/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies filters from a {@link DaffProductFilterRequest} to a {@link Dict}
 * of {@link DaffProductFilter}.
 *
 * @idempotent {filters}
 */
export const daffApplyRequestsToFilters = (
  filtersRequests: DaffProductFilterRequest[],
  filters: Dict<DaffProductFilter>,
): Dict<DaffProductFilter> =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffApplyFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


