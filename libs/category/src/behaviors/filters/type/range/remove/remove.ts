import {
  DaffCategoryFilterRangeRequestBase,
  DaffCategoryFilterRangeBase,
} from '../../../../../models/public_api';
import { daffCategoryComputeFilterRangePairLabel } from '../compute-pair-label';

/**
 * Removes all currently applied filter options. If there are no options
 * currently applied, it returns the original filter.
 */
export const daffRemoveFilterRange = <T>(
  request: DaffCategoryFilterRangeRequestBase<T>,
  filter: DaffCategoryFilterRangeBase<T>,
): DaffCategoryFilterRangeBase<T> =>
    filter.options[daffCategoryComputeFilterRangePairLabel(request.value.min, request.value.max)]
      ? ({
        ...filter,
        options: {},
      })
      : filter;
