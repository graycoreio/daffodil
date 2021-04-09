import {
  DaffCategoryFilterToggleRequest,
  DaffCategoryFilter,
  DaffCategoryFilterType,
  DaffCategoryFilterEqual,
  DaffCategoryFilterRangeNumeric,
} from '../../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../../errors/unknown-filter-type.error';
import { daffToggleFilterEqual } from '../../type/equal/behaviors/toggle/toggle';
import { daffToggleFilterRange } from '../../type/range/behaviors/toggle/toggle';
import {
  daffCategoryValidateFilterRequestNameMatch,
  daffCategoryValidateFilterRequestTypeMatch,
} from '../../validators/public_api';

export function daffToggleFilter(
  request: DaffCategoryFilterToggleRequest,
  filter: DaffCategoryFilter,
): DaffCategoryFilter {
  daffCategoryValidateFilterRequestNameMatch(request, filter);
  daffCategoryValidateFilterRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffCategoryFilterType.Equal:
      return daffToggleFilterEqual(request, <DaffCategoryFilterEqual>filter);
    case(DaffCategoryFilterType.RangeNumeric):
      return daffToggleFilterRange(request, <DaffCategoryFilterRangeNumeric>filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
}
