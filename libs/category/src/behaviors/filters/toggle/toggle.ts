import { DaffCategoryUnknownFilterType } from '../../../errors/public_api';
import {
  DaffToggleCategoryFilterRequest,
  DaffCategoryFilter,
  DaffCategoryFilterType,
  DaffCategoryEqualFilter,
  DaffCategoryFilterRangeNumeric,
} from '../../../models/public_api';
import {
  daffCategoryValidateFilterRequestNameMatch,
  daffCategoryValidateFilterRequestTypeMatch,
} from '../../../validators/filters/public_api';
import { daffToggleFilterEqual } from '../type/equal/public_api';
import { daffToggleFilterRange } from '../type/range/public_api';

export function daffToggleFilter(
  request: DaffToggleCategoryFilterRequest,
  filter: DaffCategoryFilter,
): DaffCategoryFilter {
  daffCategoryValidateFilterRequestNameMatch(request, filter);
  daffCategoryValidateFilterRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffCategoryFilterType.Equal:
      return daffToggleFilterEqual(request, <DaffCategoryEqualFilter>filter);
    case(DaffCategoryFilterType.RangeNumeric):
      return daffToggleFilterRange(request, <DaffCategoryFilterRangeNumeric>filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
}
