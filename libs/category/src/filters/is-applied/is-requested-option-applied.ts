import {
  DaffCategoryFilter,
  DaffCategoryFilterToggleRequest,
  DaffCategoryFilterType,
  DaffCategoryFilterRangeNumericToggleRequest,
  DaffCategoryFilterEqualToggleRequest,
} from '../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../errors/unknown-filter-type.error';
import { daffIsRequestedFilterEqualOptionApplied } from '../type/equal/is-applied/is-requested-option-applied';
import { daffIsRequestedFilterRangeOptionApplied } from '../type/range/is-applied/is-requested-option-applied';

/**
 * Determines whether or not the requested filter option is applied.
 */
export const daffIsRequestedFilterOptionApplied = (request: DaffCategoryFilterToggleRequest, filter: DaffCategoryFilter): boolean => {
  switch (filter.type) {
    case DaffCategoryFilterType.RangeNumeric:
      return daffIsRequestedFilterRangeOptionApplied(<DaffCategoryFilterRangeNumericToggleRequest>request, filter);
    case DaffCategoryFilterType.Equal:
      return daffIsRequestedFilterEqualOptionApplied(<DaffCategoryFilterEqualToggleRequest>request, filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
