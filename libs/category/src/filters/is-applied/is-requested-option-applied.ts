import {
  DaffCategoryFilter,
  DaffToggleCategoryFilterRequest,
  DaffCategoryFilterType,
  DaffToggleCategoryFilterRangeNumericRequest,
  DaffToggleCategoryFilterEqualRequest,
} from '../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../errors/unknown-filter-type.error';
import { daffIsRequestedFilterEqualOptionApplied } from '../type/equal/public_api';
import { daffIsRequestedFilterRangeOptionApplied } from '../type/range/public_api';

/**
 * Determines whether or not the requested filter option is applied.
 */
export const daffIsRequestedFilterOptionApplied = (request: DaffToggleCategoryFilterRequest, filter: DaffCategoryFilter): boolean => {
  switch (filter.type) {
    case DaffCategoryFilterType.RangeNumeric:
      return daffIsRequestedFilterRangeOptionApplied(<DaffToggleCategoryFilterRangeNumericRequest>request, filter);
    case DaffCategoryFilterType.Equal:
      return daffIsRequestedFilterEqualOptionApplied(<DaffToggleCategoryFilterEqualRequest>request, filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
