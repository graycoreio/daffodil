import {
  DaffProductFilter,
  DaffProductFilterToggleRequest,
  DaffProductFilterType,
  DaffProductFilterRangeNumericToggleRequest,
  DaffProductFilterEqualToggleRequest,
} from '../../models/public_api';
import { DaffProductUnknownFilterType } from '../errors/unknown-filter-type.error';
import { daffIsEqualToggleRequestAppliedToFilter } from '../type/equal/is-applied/is-toggle-request-applied-to-filter';
import { daffIsRangeToggleRequestAppliedToFilter } from '../type/range/is-applied/is-toggle-request-applied-to-filter';

/**
 * Determines whether or not a {@link DaffProductFilterToggleRequest} is already applied to a {@link DaffProductFilter}.
 */
export const daffIsToggleRequestAppliedToFilter = (request: DaffProductFilterToggleRequest, filter: DaffProductFilter): boolean => {
  switch (filter.type) {
    case DaffProductFilterType.RangeNumeric:
      return daffIsRangeToggleRequestAppliedToFilter(<DaffProductFilterRangeNumericToggleRequest>request, filter);
    case DaffProductFilterType.Equal:
      return daffIsEqualToggleRequestAppliedToFilter(<DaffProductFilterEqualToggleRequest>request, filter);
    default:
      throw new DaffProductUnknownFilterType('Unknown filter type');
  }
};
