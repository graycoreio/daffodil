import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
} from '../../../models/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies a filter requests to a set of DaffCategoryFilter.
 */
export const daffApplyRequestToFilters = (request: DaffCategoryFilterRequest, filters: Dict<DaffCategoryFilter>):  Dict<DaffCategoryFilter> => ({
  ...filters,
  [request.name]: daffApplyFilter(request, filters[request.name]),
});


