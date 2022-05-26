import { Dict } from '@daffodil/core';

import { DaffProductFilter } from '../../../models/public_api';
import { daffClearFilter } from './clear-filter';

/**
 * Undoes the applied state of all applied filter options of a {@link Dict} of {@link DaffProductFilter}
 * returning updated {@link Dict}.
 *
 * @idempotent {filters}
 */
export const daffClearFilters = (filters: Dict<DaffProductFilter>): Dict<DaffProductFilter> =>
  Object.keys(filters).map((key) => filters[key]).reduce((acc, filter) => {
    acc[filter.name] = daffClearFilter(filter);
    return acc;
  }, {});
