import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRequestReplacement,
  DaffCategoryFilterReplacement,
} from '../../../models/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies a {@link DaffCategoryFilterRequestReplacement} to a {@link Dict} of {@link DaffCategoryFilterReplacement}
 * returning the updated {@link Dict}.
 *
 * @idempotent {filters}
 */
export const daffApplyRequestToFilters = (request: DaffCategoryFilterRequestReplacement, filters: Dict<DaffCategoryFilterReplacement>):  Dict<DaffCategoryFilterReplacement> => ({
  ...filters,
  [request.name]: daffApplyFilter(request, filters[request.name]),
});


