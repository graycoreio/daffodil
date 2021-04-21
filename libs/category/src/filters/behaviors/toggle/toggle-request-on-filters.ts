import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilter,
  DaffCategoryFilterToggleRequest,
} from '../../../models/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Toggles the state of a filter option in the {@link Dict<DaffCategoryFilter>}
 * that matches the {@link DaffCategoryFilterToggleRequest}.
 */
export const daffToggleRequestOnFilters = (
  request: DaffCategoryFilterToggleRequest,
  filters: Dict<DaffCategoryFilter>): Dict<DaffCategoryFilter> => ({
  ...filters,
  [request.name]: daffToggleFilter(request, filters[request.name]),
});


