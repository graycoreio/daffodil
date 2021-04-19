import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRequestReplacement,
  DaffCategoryFilterReplacement,
} from '../../../models/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies filters from a {@link DaffCategoryFilterRequestReplacement} to a {@link Dict}
 * of {@link DaffCategoryFilterReplacement}.
 *
 * @idempotent {filters}
 */
export const daffApplyRequestsToFilters = (
  filtersRequests: DaffCategoryFilterRequestReplacement[],
  filters: Dict<DaffCategoryFilterReplacement>,
): Dict<DaffCategoryFilterReplacement> =>
  filtersRequests.reduce((acc, request) => {
    acc[request.name] = daffApplyFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });


