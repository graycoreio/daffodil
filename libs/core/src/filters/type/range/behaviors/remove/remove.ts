import {
  DaffFilterRangeRequestBase,
  DaffFilterRangeBase,
} from '../../../../../filterable/public_api';
import { daffFilterComputeRangePairLabel } from '../../compute-pair-label';

/**
 * Removes the matching filter options of a {@link DaffFilterRangeBase}
 * that match the {@link DaffFilterRangeRequestBase}
 *
 * If there are no matching options, returns the original {@link DaffFilterRangeBase}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffRemoveFilterRange = <T, U extends DaffFilterRangeBase<T>>(
  request: DaffFilterRangeRequestBase<T>,
  filter: U,
): U =>
  filter.options[daffFilterComputeRangePairLabel(request.value.min, request.value.max)]
    ? ({
      ...filter,
      options: {},
    })
    : filter;
