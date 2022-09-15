import {
  DaffFilterRangeBase,
  DaffFilterRangeRequestBase,
} from '../../../../../filterable/public_api';
import { daffFilterComputeRangePairLabel } from '../../compute-pair-label';
import { daffApplyFilterRange } from '../apply/apply';
import { daffRemoveFilterRange } from '../remove/remove';

/**
 * Oscillates the applied state of the matching filter options of a {@link DaffFilterRangeBase}
 * that match the {@link DaffFilterRangeRequestBase}
 *
 * If there are no matching options, returns the original {@link DaffFilterRangeBase}
 *
 * @docs-private
 */
export const daffToggleFilterRange = <T, U extends DaffFilterRangeBase<T>>(
  request: DaffFilterRangeRequestBase<T>,
  filter: U,
): U =>
  filter.options[daffFilterComputeRangePairLabel(request.value.min, request.value.max)]
    ? daffRemoveFilterRange(request, filter)
    : daffApplyFilterRange(request, filter);
