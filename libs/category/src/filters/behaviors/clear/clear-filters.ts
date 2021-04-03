import { Dict } from '@daffodil/core';

import { DaffCategoryFilter } from '../../../models/public_api';
import { daffClearFilter } from './clear-filter';

export const daffClearFilters = (filters: Dict<DaffCategoryFilter>): Dict<DaffCategoryFilter> =>
  Object.keys(filters).map((key) => filters[key]).reduce((acc, filter) => {
    acc[filter.name] = daffClearFilter(filter);
    return acc;
  }, {});
