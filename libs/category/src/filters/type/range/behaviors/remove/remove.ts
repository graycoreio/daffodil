import {
  DaffCategoryFilterRangeRequestBase,
  DaffCategoryFilterRangeBase,
} from '../../../../../models/public_api';
import { daffCategoryComputeFilterRangePairLabel } from '../../compute-pair-label';

/**
 * Removes the matching filter options of a {@link DaffCategoryFilterRangeBase}
 * that match the {@link DaffCategoryFilterRangeRequestBase}
 *
 * If there are no matching options, returns the original {@link DaffCategoryFilterRangeBase}
 *
 * @docs-private
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
