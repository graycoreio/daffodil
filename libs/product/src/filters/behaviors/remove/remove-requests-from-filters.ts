

import {
  DaffProductFilterRequest,
  DaffProductFilter,
} from '../../../models/public_api';
import { daffRemoveFilter } from './remove-filter';

/**
 * Undoes all applied options of a dictionary of {@link DaffProductFilter}
 * that match any of the {@link DaffProductFilterRequest},
 * returning the updated dictionary of {@link DaffProductFilter}.
 *
 * @idempotent {filters}
 */
export const daffRemoveRequestsFromFilters = (
  requests: (DaffProductFilterRequest)[],
  filters: Record<DaffProductFilter['name'], DaffProductFilter>,
): Record<DaffProductFilter['name'], DaffProductFilter> =>
  requests.reduce((acc, request) => {
    acc[request.name] = daffRemoveFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });
