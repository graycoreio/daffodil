import {
  DaffFilterToggleRequest,
  DaffFilter,
  DaffFilterType,
  DaffFilterEqual,
  DaffFilterRangeNumeric,
} from '../../../filterable/public_api';
import { DaffFilterUnknownType } from '../../errors/unknown-filter-type.error';
import { daffToggleFilterEqual } from '../../type/equal/behaviors/toggle/toggle';
import { daffToggleFilterRange } from '../../type/range/behaviors/toggle/toggle';
import {
  daffFilterValidateRequestNameMatch,
  daffFilterValidateRequestTypeMatch,
} from '../../validators/public_api';

/**
 * Toggles the state of the filters (and their options) in the {@link DaffFilter}
 * that match the {@link DaffFilterToggleRequest} .
 */
export function daffToggleFilter(
  request: DaffFilterToggleRequest,
  filter: DaffFilter,
): DaffFilter {
  daffFilterValidateRequestNameMatch(request, filter);
  daffFilterValidateRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffFilterType.Equal:
      return daffToggleFilterEqual(request, <DaffFilterEqual>filter);
    case(DaffFilterType.RangeNumeric):
      return daffToggleFilterRange(request, <DaffFilterRangeNumeric>filter);
    default:
      throw new DaffFilterUnknownType('Unknown filter type');
  }
}
