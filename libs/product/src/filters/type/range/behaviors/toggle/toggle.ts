import {
  DaffProductFilterRangeBase,
  DaffProductFilterRangeRequestBase,
} from '../../../../../models/public_api';
import { daffProductComputeFilterRangePairLabel } from '../../compute-pair-label';
import { daffApplyFilterRange } from '../apply/apply';
import { daffRemoveFilterRange } from '../remove/remove';

/**
 * Oscillates the applied state of the matching filter options of a {@link DaffProductFilterRangeBase}
 * that match the {@link DaffProductFilterRangeRequestBase}
 *
 * If there are no matching options, returns the original {@link DaffProductFilterRangeBase}
 *
 * @docs-private
 */
export const daffToggleFilterRange = <T, U extends DaffProductFilterRangeBase<T>>(
  request: DaffProductFilterRangeRequestBase<T>,
  filter: U,
): U =>
  filter.options[daffProductComputeFilterRangePairLabel(request.value.min, request.value.max)]
    ? daffRemoveFilterRange(request, filter)
    : daffApplyFilterRange(request, filter);
