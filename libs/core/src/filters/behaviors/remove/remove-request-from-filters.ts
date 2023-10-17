

import { daffRemoveFilter } from './remove-filter';
import {
  DaffFilterRequest,
  DaffFilters,
} from '../../../filterable/public_api';

/**
 * Undoes any applied options of a particular filter of a dictionary of {@link DaffFilter}
 * that match the {@link DaffFilterRequest}, returning the dictionary of {@link DaffFilter}.
 *
 * @idempotent {filters}
 */
export const daffRemoveRequestFromFilters = (
  request: DaffFilterRequest,
  filters: DaffFilters,
): DaffFilters => ({
  ...filters,
  [request.name]: daffRemoveFilter(request, filters[request.name]),
});
