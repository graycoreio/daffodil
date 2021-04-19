import {
  DaffCategoryFilterToggleRequest,
  DaffCategoryFilterReplacement,
  DaffCategoryFilterTypeReplacement,
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

/**
 * Toggles the state of the filters (and their options) in the {@link DaffCategoryFilterReplacement}
 * that match the {@link DaffCategoryFilterToggleRequest} .
 */
export function daffToggleFilter(
  request: DaffCategoryFilterToggleRequest,
  filter: DaffCategoryFilterReplacement,
): DaffCategoryFilterReplacement {
  daffCategoryValidateFilterRequestNameMatch(request, filter);
  daffCategoryValidateFilterRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffCategoryFilterTypeReplacement.Equal:
      return daffToggleFilterEqual(request, <DaffCategoryFilterEqual>filter);
    case(DaffCategoryFilterTypeReplacement.RangeNumeric):
      return daffToggleFilterRange(request, <DaffCategoryFilterRangeNumeric>filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
}
