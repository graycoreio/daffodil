import {
  DaffProductFilterRangeRequestBase,
  DaffProductFilterRangeBase,
} from '../../../../../models/public_api';
import { daffProductComputeFilterRangePairLabel } from '../../compute-pair-label';

/**
 * Applies a {@link DaffProductFilterRangeRequestBase} to a {@link DaffProductFilterRangeBase}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffApplyFilterRange = <T, U extends DaffProductFilterRangeRequestBase<T>, V extends DaffProductFilterRangeBase<T>>(
  request: U,
  filter: V,
): V => ({
  ...filter,
  options: {
    [daffProductComputeFilterRangePairLabel(request.value.min, request.value.max)]: {
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
