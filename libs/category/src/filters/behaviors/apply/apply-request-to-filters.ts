import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
} from '../../../models/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies a {@link DaffCategoryFilterRequest} to a {@link Dict} of {@link DaffCategoryFilter}
 * returning the updated {@link Dict}.
 *
 * @idempotent {filters}
 */
export const daffApplyRequestToFilters = (request: DaffCategoryFilterRequest, filters: Dict<DaffCategoryFilter>):  Dict<DaffCategoryFilter> => ({
  ...filters,
  [request.name]: daffApplyFilter(request, filters[request.name]),
});


