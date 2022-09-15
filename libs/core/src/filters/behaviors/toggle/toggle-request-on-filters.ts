

import {
  DaffFilters,
  DaffFilterToggleRequest,
} from '../../../filterable/public_api';
import { daffToggleFilter } from './toggle';

/**
 * Toggles the state of a filter option in the {@link DaffFilters}
 * that matches the {@link DaffFilterToggleRequest}.
 */
export const daffToggleRequestOnFilters = (
  request: DaffFilterToggleRequest,
  filters: DaffFilters,
): DaffFilters => ({
  ...filters,
  [request.name]: daffToggleFilter(request, filters[request.name]),
});


