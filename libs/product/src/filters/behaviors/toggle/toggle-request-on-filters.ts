

import {
  DaffProductFilter,
  DaffProductFilterToggleRequest,
} from '../../../models/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Toggles the state of a filter option in the {@link Record<DaffProductFilter['name'], DaffProductFilter>}
 * that matches the {@link DaffProductFilterToggleRequest}.
 */
export const daffToggleRequestOnFilters = (
  request: DaffProductFilterToggleRequest,
  filters: Record<DaffProductFilter['name'], DaffProductFilter>,
): Record<DaffProductFilter['name'], DaffProductFilter> => ({
  ...filters,
  [request.name]: daffToggleFilter(request, filters[request.name]),
});


