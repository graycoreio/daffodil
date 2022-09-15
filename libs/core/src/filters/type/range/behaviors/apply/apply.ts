import {
  DaffFilterRangeRequestBase,
  DaffFilterRangeBase,
} from '../../../../../filterable/public_api';
import { daffFilterComputeRangePairLabel } from '../../compute-pair-label';

/**
 * Applies a {@link DaffFilterRangeRequestBase} to a {@link DaffFilterRangeBase}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffApplyFilterRange = <T, U extends DaffFilterRangeRequestBase<T>, V extends DaffFilterRangeBase<T>>(
  request: U,
  filter: V,
): V => ({
  ...filter,
  options: {
    [daffFilterComputeRangePairLabel(request.value.min, request.value.max)]: {
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
