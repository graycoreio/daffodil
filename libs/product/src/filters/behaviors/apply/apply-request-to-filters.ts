import { Dict } from '@daffodil/core';

import {
  DaffProductFilterRequest,
  DaffProductFilter,
} from '../../../models/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies a {@link DaffProductFilterRequest} to a {@link Dict} of {@link DaffProductFilter}
 * returning the updated {@link Dict}.
 *
 * @idempotent {filters}
 */
export const daffApplyRequestToFilters = (request: DaffProductFilterRequest, filters: Dict<DaffProductFilter>):  Dict<DaffProductFilter> => ({
  ...filters,
  [request.name]: daffApplyFilter(request, filters[request.name]),
});


