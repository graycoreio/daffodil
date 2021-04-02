import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
} from '../../../models/public_api';
import { daffRemoveFilter } from './remove-filter';

export const daffRemoveRequestsFromFilters = (
  requests: (DaffCategoryFilterRequest)[],
  filters: Dict<DaffCategoryFilter>,
): Dict<DaffCategoryFilter> =>
  requests.reduce((acc, request) => {
    acc[request.name] = daffRemoveFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });
