import {
  DaffFilter,
  DaffFilterRequest,
  DaffFilterType,
} from '../../filterable/public_api';
import { DaffFilterUnknownType } from '../errors/unknown-filter-type.error';
import { daffFilterEqualToRequest } from '../type/equal/to-request/filter-to-request';
import { daffFilterRangeNumericToRequest } from '../type/range-numeric/to-request/filter-to-request';

/**
 * Builds a filter request from a filter.
 * Returns null if the filter does not have at least one applied option.
 */
export function daffFilterToRequest(filter: DaffFilter): DaffFilterRequest | null {
  switch (filter.type) {
    case DaffFilterType.RangeNumeric:
      return daffFilterRangeNumericToRequest(filter);
    case DaffFilterType.Equal:
      return daffFilterEqualToRequest(filter);
    default:
      throw new DaffFilterUnknownType('Unknown filter type');
  }
};
