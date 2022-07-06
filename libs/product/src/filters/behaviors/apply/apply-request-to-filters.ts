

import {
  DaffProductFilterRequest,
  DaffProductFilter,
} from '../../../models/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies a {@link DaffProductFilterRequest} to a dictionary of {@link DaffProductFilter}
 * returning the updated dictionary.
 *
 * @idempotent {filters}
 */
export const daffApplyRequestToFilters = (request: DaffProductFilterRequest, filters: Record<DaffProductFilter['name'], DaffProductFilter>):  Record<DaffProductFilter['name'], DaffProductFilter> => ({
  ...filters,
  [request.name]: daffApplyFilter(request, filters[request.name]),
});


