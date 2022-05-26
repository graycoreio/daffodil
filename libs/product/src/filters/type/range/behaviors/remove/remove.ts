import {
  DaffProductFilterRangeRequestBase,
  DaffProductFilterRangeBase,
} from '../../../../../models/public_api';
import { daffProductComputeFilterRangePairLabel } from '../../compute-pair-label';

/**
 * Removes the matching filter options of a {@link DaffProductFilterRangeBase}
 * that match the {@link DaffProductFilterRangeRequestBase}
 *
 * If there are no matching options, returns the original {@link DaffProductFilterRangeBase}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffRemoveFilterRange = <T, U extends DaffProductFilterRangeBase<T>>(
  request: DaffProductFilterRangeRequestBase<T>,
  filter: U,
): U =>
  filter.options[daffProductComputeFilterRangePairLabel(request.value.min, request.value.max)]
    ? ({
      ...filter,
      options: {},
    })
    : filter;
