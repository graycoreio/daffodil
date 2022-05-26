import { Dict } from '@daffodil/core';

import {
  DaffProductFilterRequest,
  DaffProductFilter,
} from '../../../models/public_api';
import { daffRemoveFilter } from './remove-filter';

/**
 * Undoes all applied options of a {@link Dict} of {@link DaffProductFilter}
 * that match any of the {@link DaffProductFilterRequest},
 * returning the updated {@link Dict} of {@link DaffProductFilter}.
 *
 * @idempotent {filters}
 */
export const daffRemoveRequestsFromFilters = (
  requests: (DaffProductFilterRequest)[],
  filters: Dict<DaffProductFilter>,
): Dict<DaffProductFilter> =>
  requests.reduce((acc, request) => {
    acc[request.name] = daffRemoveFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });
