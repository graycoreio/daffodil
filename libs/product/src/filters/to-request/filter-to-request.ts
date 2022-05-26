import {
  DaffProductFilter,
  DaffProductFilterRequest,
  DaffProductFilterType,
} from '../../models/public_api';
import { DaffProductUnknownFilterType } from '../errors/unknown-filter-type.error';
import { daffProductFilterEqualToRequest } from '../type/equal/to-request/filter-to-request';
import { daffProductFilterRangeNumericToRequest } from '../type/range-numeric/to-request/filter-to-request';

/**
 * Builds a product filter request from a product filter.
 * Returns null if the product filter does not have at least one applied option.
 */
export function daffProductFilterToRequest(filter: DaffProductFilter): DaffProductFilterRequest | null {
  switch (filter.type) {
    case DaffProductFilterType.RangeNumeric:
      return daffProductFilterRangeNumericToRequest(filter);
    case DaffProductFilterType.Equal:
      return daffProductFilterEqualToRequest(filter);
    default:
      throw new DaffProductUnknownFilterType('Unknown filter type');
  }
};
