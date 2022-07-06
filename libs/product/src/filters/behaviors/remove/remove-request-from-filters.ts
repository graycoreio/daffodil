

import {
  DaffProductFilterRequest,
  DaffProductFilter,
} from '../../../models/public_api';
import { daffRemoveFilter } from './remove-filter';

/**
 * Undoes any applied options of a particular filter of a dictionary of {@link DaffProductFilter}
 * that match the {@link DaffProductFilterRequest}, returning the dictionary of {@link DaffProductFilter}.
 *
 * @idempotent {filters}
 */
export const daffRemoveRequestFromFilters = (
  request: DaffProductFilterRequest,
  filters: Record<DaffProductFilter['name'], DaffProductFilter>,
): Record<DaffProductFilter['name'], DaffProductFilter> => ({
  ...filters,
  [request.name]: daffRemoveFilter(request, filters[request.name]),
});
