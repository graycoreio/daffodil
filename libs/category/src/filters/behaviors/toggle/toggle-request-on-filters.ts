import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilter,
  DaffToggleCategoryFilterRequest,
} from '../../../models/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Applies a filter requests to a set of DaffCategoryFilter.
 */
export const daffToggleRequestOnFilters = (
  request: DaffToggleCategoryFilterRequest,
  filters: Dict<DaffCategoryFilter>): Dict<DaffCategoryFilter> => ({
  ...filters,
  [request.name]: daffToggleFilter(request, filters[request.name]),
});


