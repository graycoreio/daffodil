import {
  DaffCategoryFilterRangeBase,
  DaffCategoryFilterRangeRequestBase,
} from '../../../../../models/public_api';
import { daffApplyFilterRange } from '../apply/apply';
import { daffCategoryComputeFilterRangePairLabel } from '../compute-pair-label';
import { daffRemoveFilterRange } from '../remove/remove';

export const daffToggleFilterRange = <T>(
  request: DaffCategoryFilterRangeRequestBase<T>,
  filter: DaffCategoryFilterRangeBase<T>,
): DaffCategoryFilterRangeBase<T> =>
    filter.options[daffCategoryComputeFilterRangePairLabel(request.value.min, request.value.max)].applied
      ? daffApplyFilterRange(request, filter)
      : daffRemoveFilterRange(request, filter);
