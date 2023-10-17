

import { daffApplyFilter } from './apply-filter';
import {
  DaffFilterRequest,
  DaffFilters,
} from '../../../filterable/public_api';

/**
 * Applies a {@link DaffFilterRequest} to a dictionary of {@link DaffFilter}
 * returning the updated dictionary.
 *
 * @idempotent {filters}
 */
export const daffApplyRequestToFilters = (request: DaffFilterRequest, filters: DaffFilters):  DaffFilters => ({
  ...filters,
  [request.name]: daffApplyFilter(request, filters[request.name]),
});


