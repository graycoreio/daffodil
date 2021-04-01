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
import { daffRemoveFilterEqual } from '../type/equal/remove/remove';
import { daffRemoveFilterRange } from '../type/range/remove/remove';

/**
 * Applies a filter request to the matching filter.
 *
 * Note that this assumes that you
 */
export const daffRemoveFilter = (request: DaffCategoryFilterRequest, filter: DaffCategoryFilter): DaffCategoryFilter => {
  daffCategoryValidateFilterRequestNameMatch(request, filter);
  daffCategoryValidateFilterRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffCategoryFilterType.Equal:
      return daffRemoveFilterEqual(request, <DaffCategoryEqualFilter>filter);
    case(DaffCategoryFilterType.RangeNumeric):
      return daffRemoveFilterRange(request, <DaffCategoryFilterRangeNumeric>filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
