import { Dict } from '@daffodil/core';

import { DaffCategoryFilter } from '../../../models/public_api';

export const daffCategoryBuildFilterDict = (filters: DaffCategoryFilter[]): Dict<DaffCategoryFilter> =>
  filters.reduce((acc, filter) => {
    acc[filter.name] = filter;
    return acc;
  }, {});
