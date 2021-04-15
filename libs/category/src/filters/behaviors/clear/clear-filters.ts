import { Dict } from '@daffodil/core';

import { DaffCategoryFilter } from '../../../models/public_api';
import { daffClearFilter } from './clear-filter';

/**
 * Undoes the applied state of all applied filter options of a {@link Dict} of {@link DaffCategoryFilter}
 * returning updated {@link Dict}.
 *
 * @idempotent {filters}
 */
export const daffClearFilters = (filters: Dict<DaffCategoryFilter>): Dict<DaffCategoryFilter> =>
  Object.keys(filters).map((key) => filters[key]).reduce((acc, filter) => {
    acc[filter.name] = daffClearFilter(filter);
    return acc;
  }, {});
