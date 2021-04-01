import { DaffCategoryUnknownFilterType } from '../../../errors/public_api';
import {
  DaffCategoryFilterType,
  DaffCategoryFilter,
} from '../../../models/public_api';
import { daffIsFilterEqualApplied } from '../type/equal/public_api';
import { daffIsFilterRangeApplied } from '../type/range/public_api';

/**
 * Determines whether or not a filter has any currently applied options.
 */
export const daffIsFilterApplied = (filter: DaffCategoryFilter): boolean => {
  switch (filter.type) {
    case DaffCategoryFilterType.RangeNumeric:
      return daffIsFilterRangeApplied(filter);
    case DaffCategoryFilterType.Equal:
      return daffIsFilterEqualApplied(filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
