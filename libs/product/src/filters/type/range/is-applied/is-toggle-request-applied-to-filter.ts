import {
  DaffProductFilterRangeRequestBase,
  DaffProductFilterRangeBase,
} from '../../../../models/public_api';
import { daffProductComputeFilterRangePairLabel } from '../compute-pair-label';

/**
 * Determines whether or not any {@link DaffProductFilterRangeBase} options matching {@link DaffProductFilterRangeRequestBase} are applied.
 */
export const daffIsRangeToggleRequestAppliedToFilter = <T>(
  request: DaffProductFilterRangeRequestBase<T>,
  filter: DaffProductFilterRangeBase<T>,
): boolean =>
  daffProductComputeFilterRangePairLabel(request.value.min, request.value.max) in filter.options;
