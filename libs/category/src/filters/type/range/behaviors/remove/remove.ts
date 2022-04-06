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
 * @idempotent {filter}
 * @docs-private
 */
export const daffRemoveFilterRange = <T, U extends DaffCategoryFilterRangeBase<T>>(
  request: DaffCategoryFilterRangeRequestBase<T>,
  filter: U,
): U =>
  filter.options[daffCategoryComputeFilterRangePairLabel(request.value.min, request.value.max)]
    ? ({
      ...filter,
      options: {},
    })
    : filter;
