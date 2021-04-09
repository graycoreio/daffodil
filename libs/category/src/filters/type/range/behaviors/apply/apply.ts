import {
  DaffCategoryFilterRangeRequestBase,
  DaffCategoryFilterRangeBase,
} from '../../../../../models/public_api';
import { daffCategoryComputeFilterRangePairLabel } from '../../compute-pair-label';

/**
 * Applies a filter request to a group of range type filter options.
 *
 * @idempotent
 */
export const daffApplyFilterRange = <T>(
  request: DaffCategoryFilterRangeRequestBase<T>,
  filter: DaffCategoryFilterRangeBase<T>,
): DaffCategoryFilterRangeBase<T> => ({
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
