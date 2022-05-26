import {
  DaffProductFilterToggleRequest,
  DaffProductFilter,
  DaffProductFilterType,
  DaffProductFilterEqual,
  DaffProductFilterRangeNumeric,
} from '../../../models/public_api';
import { DaffProductUnknownFilterType } from '../../errors/unknown-filter-type.error';
import { daffToggleFilterEqual } from '../../type/equal/behaviors/toggle/toggle';
import { daffToggleFilterRange } from '../../type/range/behaviors/toggle/toggle';
import {
  daffProductValidateFilterRequestNameMatch,
  daffProductValidateFilterRequestTypeMatch,
} from '../../validators/public_api';

/**
 * Toggles the state of the filters (and their options) in the {@link DaffProductFilter}
 * that match the {@link DaffProductFilterToggleRequest} .
 */
export function daffToggleFilter(
  request: DaffProductFilterToggleRequest,
  filter: DaffProductFilter,
): DaffProductFilter {
  daffProductValidateFilterRequestNameMatch(request, filter);
  daffProductValidateFilterRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffProductFilterType.Equal:
      return daffToggleFilterEqual(request, <DaffProductFilterEqual>filter);
    case(DaffProductFilterType.RangeNumeric):
      return daffToggleFilterRange(request, <DaffProductFilterRangeNumeric>filter);
    default:
      throw new DaffProductUnknownFilterType('Unknown filter type');
  }
}
