

import { DaffProductFilter } from '../../../models/public_api';
import { daffClearFilter } from './clear-filter';

/**
 * Undoes the applied state of all applied filter options of a dictionary of {@link DaffProductFilter}
 * returning updated dictionary.
 *
 * @idempotent {filters}
 */
export const daffClearFilters = (filters: Record<DaffProductFilter['name'], DaffProductFilter>): Record<DaffProductFilter['name'], DaffProductFilter> =>
  Object.keys(filters).map((key) => filters[key]).reduce((acc, filter) => {
    acc[filter.name] = daffClearFilter(filter);
    return acc;
  }, {});
