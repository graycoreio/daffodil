import {
  DaffCategoryFilter,
  DaffCategoryFilterToggleRequest,
  DaffCategoryFilterType,
  DaffCategoryFilterRangeNumericToggleRequest,
  DaffCategoryFilterEqualToggleRequest,
} from '../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../errors/unknown-filter-type.error';
import { daffIsEqualToggleRequestAppliedToFilter } from '../type/equal/is-applied/is-toggle-request-applied-to-filter';
import { daffIsRangeToggleRequestAppliedToFilter } from '../type/range/is-applied/is-toggle-request-applied-to-filter';

/**
 * Determines whether or not a {@link DaffCategoryFilterToggleRequest} is already applied to a {@link DaffCategoryFilter}.
 */
export const daffIsToggleRequestAppliedToFilter = (request: DaffCategoryFilterToggleRequest, filter: DaffCategoryFilter): boolean => {
  switch (filter.type) {
    case DaffCategoryFilterType.RangeNumeric:
      return daffIsRangeToggleRequestAppliedToFilter(<DaffCategoryFilterRangeNumericToggleRequest>request, filter);
    case DaffCategoryFilterType.Equal:
      return daffIsEqualToggleRequestAppliedToFilter(<DaffCategoryFilterEqualToggleRequest>request, filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
