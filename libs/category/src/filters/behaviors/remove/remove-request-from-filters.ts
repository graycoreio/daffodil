import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRequestReplacement,
  DaffCategoryFilterReplacement,
} from '../../../models/public_api';
import { daffRemoveFilter } from './remove-filter';

/**
 * Undoes any applied options of a particular filter of a {@link Dict} of {@link DaffCategoryFilterReplacement}
 * that match the {@link DaffCategoryFilterRequestReplacement}, returning the {@link Dict} of {@link DaffCategoryFilterReplacement}.
 *
 * @idempotent {filters}
 */
export const daffRemoveRequestFromFilters = (
  request: DaffCategoryFilterRequestReplacement,
  filters: Dict<DaffCategoryFilterReplacement>,
): Dict<DaffCategoryFilterReplacement> => ({
  ...filters,
  [request.name]: daffRemoveFilter(request, filters[request.name]),
});
