import { Dict } from '@daffodil/core';

import { DaffCategoryFilterReplacement } from '../../models/public_api';

/**
 * Converts a list of category filters into a {@link Dict} of filters keyed by filter name.
 */
export const daffCategoryFilterArrayToDict = (filters: DaffCategoryFilterReplacement[]): Dict<DaffCategoryFilterReplacement> =>
  filters.reduce((acc, filter) => {
    acc[filter.name] = filter;
    return acc;
  }, {});
