

import { DaffFilters } from '../../../filterable/public_api';
import { daffClearFilter } from './clear-filter';

/**
 * Undoes the applied state of all applied filter options of a dictionary of {@link DaffFilter}
 * returning updated dictionary.
 *
 * @idempotent {filters}
 */
export const daffClearFilters = (filters: DaffFilters): DaffFilters =>
  Object.keys(filters).map((key) => filters[key]).reduce((acc, filter) => {
    acc[filter.name] = daffClearFilter(filter);
    return acc;
  }, {});
