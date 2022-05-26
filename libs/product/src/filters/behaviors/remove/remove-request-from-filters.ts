import { Dict } from '@daffodil/core';

import {
  DaffProductFilterRequest,
  DaffProductFilter,
} from '../../../models/public_api';
import { daffRemoveFilter } from './remove-filter';

/**
 * Undoes any applied options of a particular filter of a {@link Dict} of {@link DaffProductFilter}
 * that match the {@link DaffProductFilterRequest}, returning the {@link Dict} of {@link DaffProductFilter}.
 *
 * @idempotent {filters}
 */
export const daffRemoveRequestFromFilters = (
  request: DaffProductFilterRequest,
  filters: Dict<DaffProductFilter>,
): Dict<DaffProductFilter> => ({
  ...filters,
  [request.name]: daffRemoveFilter(request, filters[request.name]),
});
