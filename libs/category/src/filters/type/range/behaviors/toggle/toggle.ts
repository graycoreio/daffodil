import {
  DaffCategoryFilterRangeBase,
  DaffCategoryFilterRangeRequestBase,
} from '../../../../../models/public_api';
import { daffCategoryComputeFilterRangePairLabel } from '../../compute-pair-label';
import { daffApplyFilterRange } from '../apply/apply';
import { daffRemoveFilterRange } from '../remove/remove';

export const daffToggleFilterRange = <T>(
  request: DaffCategoryFilterRangeRequestBase<T>,
  filter: DaffCategoryFilterRangeBase<T>,
): DaffCategoryFilterRangeBase<T> =>
    filter.options[daffCategoryComputeFilterRangePairLabel(request.value.min, request.value.max)]
      ? daffRemoveFilterRange(request, filter)
      : daffApplyFilterRange(request, filter);
