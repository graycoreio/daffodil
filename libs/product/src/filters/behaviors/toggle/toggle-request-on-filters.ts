import { Dict } from '@daffodil/core';

import {
  DaffProductFilter,
  DaffProductFilterToggleRequest,
} from '../../../models/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Toggles the state of a filter option in the {@link Dict<DaffProductFilter>}
 * that matches the {@link DaffProductFilterToggleRequest}.
 */
export const daffToggleRequestOnFilters = (
  request: DaffProductFilterToggleRequest,
  filters: Dict<DaffProductFilter>,
): Dict<DaffProductFilter> => ({
  ...filters,
  [request.name]: daffToggleFilter(request, filters[request.name]),
});


