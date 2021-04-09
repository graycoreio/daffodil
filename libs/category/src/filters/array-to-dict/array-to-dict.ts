import { Dict } from '@daffodil/core';

import { DaffCategoryFilter } from '../../models/public_api';

/**
 * Converts a list of category filters to a dict of filters keyed by filter name.
 */
export const daffCategoryFilterArrayToDict = (filters: DaffCategoryFilter[]): Dict<DaffCategoryFilter> =>
  filters.reduce((acc, filter) => {
    acc[filter.name] = filter;
    return acc;
  }, {});
