import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterRequestReplacement,
  DaffCategoryFilterReplacement,
} from '../../../models/public_api';
import { daffRemoveFilter } from './remove-filter';

/**
 * Undoes all applied options of a {@link Dict} of {@link DaffCategoryFilterReplacement}
 * that match any of the {@link DaffCategoryFilterRequestReplacement},
 * returning the updated {@link Dict} of {@link DaffCategoryFilterReplacement}.
 *
 * @idempotent {filters}
 */
export const daffRemoveRequestsFromFilters = (
  requests: (DaffCategoryFilterRequestReplacement)[],
  filters: Dict<DaffCategoryFilterReplacement>,
): Dict<DaffCategoryFilterReplacement> =>
  requests.reduce((acc, request) => {
    acc[request.name] = daffRemoveFilter(request, filters[request.name]);
    return acc;
  }, { ...filters });
