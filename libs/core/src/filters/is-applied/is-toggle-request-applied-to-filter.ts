import {
  DaffFilter,
  DaffFilterToggleRequest,
  DaffFilterType,
  DaffFilterRangeNumericToggleRequest,
  DaffFilterEqualToggleRequest,
} from '../../filterable/public_api';
import { DaffFilterUnknownType } from '../errors/unknown-filter-type.error';
import { daffIsEqualToggleRequestAppliedToFilter } from '../type/equal/is-applied/is-toggle-request-applied-to-filter';
import { daffIsRangeToggleRequestAppliedToFilter } from '../type/range/is-applied/is-toggle-request-applied-to-filter';

/**
 * Determines whether or not a {@link DaffFilterToggleRequest} is already applied to a {@link DaffFilter}.
 */
export const daffIsToggleRequestAppliedToFilter = (request: DaffFilterToggleRequest, filter: DaffFilter): boolean => {
  switch (filter.type) {
    case DaffFilterType.RangeNumeric:
      return daffIsRangeToggleRequestAppliedToFilter(<DaffFilterRangeNumericToggleRequest>request, filter);
    case DaffFilterType.Equal:
      return daffIsEqualToggleRequestAppliedToFilter(<DaffFilterEqualToggleRequest>request, filter);
    default:
      throw new DaffFilterUnknownType('Unknown filter type');
  }
};
