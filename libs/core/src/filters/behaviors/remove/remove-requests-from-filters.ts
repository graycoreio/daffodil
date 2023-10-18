

import { daffRemoveFilter } from './remove-filter';
import {
  DaffFilterRequest,
  DaffFilters,
} from '../../../filterable/public_api';

/**
 * Undoes all applied options of a dictionary of {@link DaffFilter}
 * that match any of the {@link DaffFilterRequest},
 * returning the updated dictionary of {@link DaffFilter}.
 *
 * @idempotent {filters}
 */
export const daffRemoveRequestsFromFilters = (
  requests: (DaffFilterRequest)[],
  filters: DaffFilters,
): DaffFilters =>
  requests.reduce((acc, request) => {
    acc[request.name] = daffRemoveFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });
