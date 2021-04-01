import { DaffCategoryUnknownFilterType } from '../../../errors/public_api';
import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffCategoryFilterType,
  DaffCategoryEqualFilter,
  DaffCategoryFilterRangeNumeric,
} from '../../../models/public_api';
import {
  daffCategoryValidateFilterRequestNameMatch,
  daffCategoryValidateFilterRequestTypeMatch,
} from '../../../validators/filters/public_api';
import { daffApplyFilterEqual } from '../type/equal/apply/apply';
import { daffApplyFilterRange } from '../type/range/apply/apply';

/**
 * Applies a filter request to the matching filter.
 *
 * Note that this assumes that you
 */
export const daffApplyFilter = (request: DaffCategoryFilterRequest, filter: DaffCategoryFilter): DaffCategoryFilter => {
  daffCategoryValidateFilterRequestNameMatch(request, filter);
  daffCategoryValidateFilterRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffCategoryFilterType.Equal:
      return daffApplyFilterEqual(request, <DaffCategoryEqualFilter>filter);
    case(DaffCategoryFilterType.RangeNumeric):
      return daffApplyFilterRange(request, <DaffCategoryFilterRangeNumeric>filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
