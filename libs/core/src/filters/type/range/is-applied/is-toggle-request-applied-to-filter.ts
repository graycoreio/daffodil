import {
  DaffFilterRangeRequestBase,
  DaffFilterRangeBase,
} from '../../../../filterable/public_api';
import { daffFilterComputeRangePairLabel } from '../compute-pair-label';

/**
 * Determines whether or not any {@link DaffFilterRangeBase} options matching {@link DaffFilterRangeRequestBase} are applied.
 */
export const daffIsRangeToggleRequestAppliedToFilter = <T>(
  request: DaffFilterRangeRequestBase<T>,
  filter: DaffFilterRangeBase<T>,
): boolean =>
  daffFilterComputeRangePairLabel(request.value.min, request.value.max) in filter.options;
