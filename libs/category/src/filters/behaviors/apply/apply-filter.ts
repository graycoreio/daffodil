import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffCategoryFilterType,
  DaffCategoryEqualFilter,
  DaffCategoryFilterRangeNumeric,
} from '../../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../../errors/unknown-filter-type.error';
import { daffApplyFilterEqual } from '../../type/equal/behaviors/apply/apply';
import { daffApplyFilterRange } from '../../type/range/behaviors/apply/apply';
import {
  daffCategoryValidateFilterRequestNameMatch,
  daffCategoryValidateFilterRequestTypeMatch,
} from '../../validators/public_api';

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
