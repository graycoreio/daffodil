import {
  DaffFilterType,
  DaffFilter,
} from '../../filterable/public_api';
import { DaffFilterUnknownType } from '../errors/unknown-filter-type.error';
import { daffIsFilterEqualApplied } from '../type/equal/is-applied/is-applied';
import { daffIsFilterRangeApplied } from '../type/range/is-applied/is-applied';

/**
 * Determines whether or not a filter has any currently applied options.
 */
export const daffIsFilterApplied = (filter: DaffFilter): boolean => {
  switch (filter.type) {
    case DaffFilterType.RangeNumeric:
      return daffIsFilterRangeApplied(filter);
    case DaffFilterType.Equal:
      return daffIsFilterEqualApplied(filter);
    default:
      throw new DaffFilterUnknownType('Unknown filter type');
  }
};
