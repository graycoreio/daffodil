import {
  DaffProductFilterType,
  DaffProductFilter,
} from '../../models/public_api';
import { DaffProductUnknownFilterType } from '../errors/unknown-filter-type.error';
import { daffIsFilterEqualApplied } from '../type/equal/is-applied/is-applied';
import { daffIsFilterRangeApplied } from '../type/range/is-applied/is-applied';

/**
 * Determines whether or not a filter has any currently applied options.
 */
export const daffIsFilterApplied = (filter: DaffProductFilter): boolean => {
  switch (filter.type) {
    case DaffProductFilterType.RangeNumeric:
      return daffIsFilterRangeApplied(filter);
    case DaffProductFilterType.Equal:
      return daffIsFilterEqualApplied(filter);
    default:
      throw new DaffProductUnknownFilterType('Unknown filter type');
  }
};
