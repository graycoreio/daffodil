import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
} from '../../../models/public_api';
import { daffRemoveFilter } from './remove-filter';

export const daffRemoveRequestFromFilters = (
  request: DaffCategoryFilterRequest,
  filters: Dict<DaffCategoryFilter>,
): Dict<DaffCategoryFilter> => ({
  ...filters,
  [request.name]: daffRemoveFilter(request, filters[request.name]),
});
