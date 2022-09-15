import {
  DaffFilterRequest,
  DaffFilter,
  DaffFilterType,
  DaffFilterEqual,
  DaffFilterRangeNumeric,
} from '../../../filterable/public_api';
import { DaffFilterUnknownType } from '../../errors/unknown-filter-type.error';
import { daffRemoveFilterEqual } from '../../type/equal/behaviors/remove/remove';
import { daffRemoveFilterRange } from '../../type/range/behaviors/remove/remove';
import {
  daffFilterValidateRequestNameMatch,
  daffFilterValidateRequestTypeMatch,
} from '../../validators/public_api';

/**
 * Undoes any applied options of a {@link DaffFilter} that match the
 * {@link DaffFilterRequest}, returning the {@link DaffFilter}.
 *
 * @idempotent {filter}
 * @pure
 */
export const daffRemoveFilter = (request: DaffFilterRequest, filter: DaffFilter): DaffFilter => {
  daffFilterValidateRequestNameMatch(request, filter);
  daffFilterValidateRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffFilterType.Equal:
      return daffRemoveFilterEqual(request, <DaffFilterEqual>filter);
    case (DaffFilterType.RangeNumeric):
      return daffRemoveFilterRange(request, <DaffFilterRangeNumeric>filter);
    default:
      throw new DaffFilterUnknownType('Unknown filter type');
  }
};
