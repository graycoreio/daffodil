import {
  DaffCategoryFilter,
  DaffCategoryFilterRequest,
  DaffCategoryFilterType,
} from '../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../errors/unknown-filter-type.error';
import { daffCategoryFilterEqualToRequest } from '../type/equal/to-request/filter-to-request';
import { daffCategoryFilterRangeNumericToRequest } from '../type/range-numeric/to-request/filter-to-request';

/**
 * Builds a category filter request from a category filter.
 * Returns null if the category filter does not have at least one applied option.
 */
export function daffCategoryFilterToRequest(filter: DaffCategoryFilter): DaffCategoryFilterRequest | null {
  switch (filter.type) {
    case DaffCategoryFilterType.RangeNumeric:
      return daffCategoryFilterRangeNumericToRequest(filter);
    case DaffCategoryFilterType.Equal:
      return daffCategoryFilterEqualToRequest(filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
