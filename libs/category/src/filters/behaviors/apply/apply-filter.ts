import {
  DaffCategoryFilterRequestReplacement,
  DaffCategoryFilterReplacement,
  DaffCategoryFilterTypeReplacement,
  DaffCategoryFilterEqual,
  DaffCategoryFilterRangeNumeric,
} from '../../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../../errors/unknown-filter-type.error';
import { daffApplyFilterEqual } from '../../type/equal/behaviors/apply/apply';
import { daffApplyFilterRange } from '../../type/range/behaviors/apply/apply';
import {
  daffCategoryValidateFilterRequestNameMatch,
  daffCategoryValidateFilterRequestTypeMatch,
} from '../../validators/public_api';

/**
 * Applies a filter request to the matching filter.
 *
 * @idempotent {filter}
 * @throws {@link DaffCategoryUnknownFilterType}
 */
export const daffApplyFilter = (request: DaffCategoryFilterRequestReplacement, filter: DaffCategoryFilterReplacement): DaffCategoryFilterReplacement => {
  daffCategoryValidateFilterRequestNameMatch(request, filter);
  daffCategoryValidateFilterRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffCategoryFilterTypeReplacement.Equal:
      return daffApplyFilterEqual(request, <DaffCategoryFilterEqual>filter);
    case(DaffCategoryFilterTypeReplacement.RangeNumeric):
      return daffApplyFilterRange(request, <DaffCategoryFilterRangeNumeric>filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
