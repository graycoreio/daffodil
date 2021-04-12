import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
} from '../../../models/public_api';
import { daffRemoveFilter } from './remove-filter';

/**
 * Undoes any applied options of a particular filter of a {@link Dict} of {@link DaffCategoryFilter}
 * that match the {@link DaffCategoryFilterRequest}, returning the {@link Dict} of {@link DaffCategoryFilter}.
 *
 * @idempotent
 */
export const daffRemoveRequestFromFilters = (
  request: DaffCategoryFilterRequest,
  filters: Dict<DaffCategoryFilter>,
): Dict<DaffCategoryFilter> => ({
  ...filters,
  [request.name]: daffRemoveFilter(request, filters[request.name]),
});
