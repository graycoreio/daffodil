import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterReplacement,
  DaffCategoryFilterToggleRequest,
} from '../../../models/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Toggles the state of a filter option in the {@link Dict<DaffCategoryFilterReplacement>}
 * that matches the {@link DaffCategoryFilterToggleRequest}.
 */
export const daffToggleRequestOnFilters = (
  request: DaffCategoryFilterToggleRequest,
  filters: Dict<DaffCategoryFilterReplacement>): Dict<DaffCategoryFilterReplacement> => ({
  ...filters,
  [request.name]: daffToggleFilter(request, filters[request.name]),
});


