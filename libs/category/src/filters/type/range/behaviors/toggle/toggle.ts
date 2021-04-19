import {
  DaffCategoryFilterRangeBase,
  DaffCategoryFilterRangeRequestBase,
} from '../../../../../models/public_api';
import { daffCategoryComputeFilterRangePairLabel } from '../../compute-pair-label';
import { daffApplyFilterRange } from '../apply/apply';
import { daffRemoveFilterRange } from '../remove/remove';

/**
 * Oscillates the applied state of the matching filter options of a {@link DaffCategoryFilterRangeBase}
 * that match the {@link DaffCategoryFilterRangeRequestBase}
 *
 * If there are no matching options, returns the original {@link DaffCategoryFilterRangeBase}
 *
 * @docs-private
 */
export const daffToggleFilterRange = <T, U extends DaffCategoryFilterRangeBase<T>>(
  request: DaffCategoryFilterRangeRequestBase<T>,
  filter: U,
): U =>
    filter.options[daffCategoryComputeFilterRangePairLabel(request.value.min, request.value.max)]
      ? daffRemoveFilterRange(request, filter)
      : daffApplyFilterRange(request, filter);
