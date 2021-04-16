import {
  DaffCategoryFilter,
  DaffCategoryFilterRangeRequestBase,
  DaffCategoryFilterRangeBase,
} from '../../../../models/public_api';
import { daffCategoryComputeFilterRangePairLabel } from '../compute-pair-label';

/**
 * Determines whether or not any {@link DaffCategoryFilterRangeBase} options matching {@link DaffCategoryFilterRangeRequestBase} are applied.
 */
export const daffIsRangeToggleRequestAppliedToFilter = <T>(
  request: DaffCategoryFilterRangeRequestBase<T>,
  filter: DaffCategoryFilterRangeBase<T>,
): boolean =>
    daffCategoryComputeFilterRangePairLabel(request.value.min, request.value.max) in filter.options;
