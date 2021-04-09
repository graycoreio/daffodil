import {
  DaffCategoryFilterType,
  DaffCategoryFilter,
} from '../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../errors/unknown-filter-type.error';
import { daffIsFilterEqualApplied } from '../type/equal/is-applied/is-applied';
import { daffIsFilterRangeApplied } from '../type/range/is-applied/is-applied';

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
