import {
  DaffProductFilterRequest,
  DaffProductFilter,
  DaffProductFilterType,
  DaffProductFilterEqual,
  DaffProductFilterRangeNumeric,
} from '../../../models/public_api';
import { DaffProductUnknownFilterType } from '../../errors/unknown-filter-type.error';
import { daffRemoveFilterEqual } from '../../type/equal/behaviors/remove/remove';
import { daffRemoveFilterRange } from '../../type/range/behaviors/remove/remove';
import {
  daffProductValidateFilterRequestNameMatch,
  daffProductValidateFilterRequestTypeMatch,
} from '../../validators/public_api';

/**
 * Undoes any applied options of a {@link DaffProductFilter} that match the
 * {@link DaffProductFilterRequest}, returning the {@link DaffProductFilter}.
 *
 * @idempotent {filter}
 * @pure
 */
export const daffRemoveFilter = (request: DaffProductFilterRequest, filter: DaffProductFilter): DaffProductFilter => {
  daffProductValidateFilterRequestNameMatch(request, filter);
  daffProductValidateFilterRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffProductFilterType.Equal:
      return daffRemoveFilterEqual(request, <DaffProductFilterEqual>filter);
    case (DaffProductFilterType.RangeNumeric):
      return daffRemoveFilterRange(request, <DaffProductFilterRangeNumeric>filter);
    default:
      throw new DaffProductUnknownFilterType('Unknown filter type');
  }
};
