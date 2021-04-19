import {
  DaffCategoryFilterReplacement,
  DaffCategoryFilterRequestReplacement,
  DaffCategoryFilterTypeReplacement,
} from '../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../errors/unknown-filter-type.error';
import { daffCategoryFilterEqualToRequest } from '../type/equal/to-request/filter-to-request';
import { daffCategoryFilterRangeNumericToRequest } from '../type/range-numeric/to-request/filter-to-request';

/**
 * Builds a category filter request from a category filter.
 * Returns null if the category filter does not have at least one applied option.
 */
export function daffCategoryFilterToRequest(filter: DaffCategoryFilterReplacement): DaffCategoryFilterRequestReplacement | null {
  switch (filter.type) {
    case DaffCategoryFilterTypeReplacement.RangeNumeric:
      return daffCategoryFilterRangeNumericToRequest(filter);
    case DaffCategoryFilterTypeReplacement.Equal:
      return daffCategoryFilterEqualToRequest(filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
