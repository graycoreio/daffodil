import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffCategoryFilterType,
  DaffCategoryFilterEqual,
  DaffCategoryFilterRangeNumeric,
} from '../../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../../errors/unknown-filter-type.error';
import { daffRemoveFilterEqual } from '../../type/equal/behaviors/remove/remove';
import { daffRemoveFilterRange } from '../../type/range/behaviors/remove/remove';
import {
  daffCategoryValidateFilterRequestNameMatch,
  daffCategoryValidateFilterRequestTypeMatch,
} from '../../validators/public_api';

/**
 * Undoes any applied options of a {@link DaffCategoryFilter} that match the
 * {@link DaffCategoryFilterRequest}, returning the {@link DaffCategoryFilter}.
 *
 * @idempotent {filter}
 * @pure
 */
export const daffRemoveFilter = (request: DaffCategoryFilterRequest, filter: DaffCategoryFilter): DaffCategoryFilter => {
  daffCategoryValidateFilterRequestNameMatch(request, filter);
  daffCategoryValidateFilterRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffCategoryFilterType.Equal:
      return daffRemoveFilterEqual(request, <DaffCategoryFilterEqual>filter);
    case (DaffCategoryFilterType.RangeNumeric):
      return daffRemoveFilterRange(request, <DaffCategoryFilterRangeNumeric>filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
