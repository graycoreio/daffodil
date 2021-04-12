import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
} from '../../../models/public_api';
import { daffRemoveFilter } from './remove-filter';

/**
 * Undoes all applied options of a {@link Dict} of {@link DaffCategoryFilter}
 * that match any of the {@link DaffCategoryFilterRequest},
 * returning the updated {@link Dict} of {@link DaffCategoryFilter}.
 *
 * @idempotent
 */
export const daffRemoveRequestsFromFilters = (
  requests: (DaffCategoryFilterRequest)[],
  filters: Dict<DaffCategoryFilter>,
): Dict<DaffCategoryFilter> =>
  requests.reduce((acc, request) => {
    acc[request.name] = daffRemoveFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });
