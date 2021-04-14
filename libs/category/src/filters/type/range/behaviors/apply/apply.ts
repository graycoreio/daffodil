import {
  DaffCategoryFilterRangeRequestBase,
  DaffCategoryFilterRangeBase,
} from '../../../../../models/public_api';
import { daffCategoryComputeFilterRangePairLabel } from '../../compute-pair-label';

/**
 * Applies a {@link DaffCategoryFilterRangeRequestBase} to a {@link DaffCategoryFilterRangeBase}
 *
 * @docs-private
 */
export const daffApplyFilterRange = <T, U extends DaffCategoryFilterRangeRequestBase<T>, V extends DaffCategoryFilterRangeBase<T>>(
  request: U,
  filter: V,
): V => ({
    ...filter,
    options: {
      [daffCategoryComputeFilterRangePairLabel(request.value.min, request.value.max)]: {
        min: {
          value: request.value.min,
          label: String(request.value.min),
        },
        max: {
          value: request.value.max,
          label: String(request.value.max),
        },
        applied: true,
      },
    },
  });
