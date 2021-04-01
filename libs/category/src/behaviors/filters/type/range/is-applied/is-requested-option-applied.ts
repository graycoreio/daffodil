import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilter,
  DaffCategoryFilterRangeRequestBase,
} from '../../../../../models/public_api';
import { daffCategoryComputeFilterRangePairLabel } from '../compute-pair-label';

/**
 * Determines whether or not the requested range filter option is applied.
 */
export const daffIsRequestedFilterRangeOptionApplied = <T>(
  request: DaffCategoryFilterRangeRequestBase<T>,
  filter: DaffCategoryFilter,
): boolean =>
    filter.options[daffCategoryComputeFilterRangePairLabel(request.value.min, request.value.max)].applied;
