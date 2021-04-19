import {
  DaffCategoryFilterRequestReplacement,
  DaffCategoryFilterReplacement,
  DaffCategoryFilterTypeReplacement,
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
 * Undoes any applied options of a {@link DaffCategoryFilterReplacement} that match the
 * {@link DaffCategoryFilterRequestReplacement}, returning the {@link DaffCategoryFilterReplacement}.
 *
 * @idempotent {filter}
 * @pure
 */
export const daffRemoveFilter = (request: DaffCategoryFilterRequestReplacement, filter: DaffCategoryFilterReplacement): DaffCategoryFilterReplacement => {
  daffCategoryValidateFilterRequestNameMatch(request, filter);
  daffCategoryValidateFilterRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffCategoryFilterTypeReplacement.Equal:
      return daffRemoveFilterEqual(request, <DaffCategoryFilterEqual>filter);
    case (DaffCategoryFilterTypeReplacement.RangeNumeric):
      return daffRemoveFilterRange(request, <DaffCategoryFilterRangeNumeric>filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
