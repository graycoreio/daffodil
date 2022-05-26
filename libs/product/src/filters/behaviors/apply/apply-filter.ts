import {
  DaffProductFilterRequest,
  DaffProductFilter,
  DaffProductFilterType,
  DaffProductFilterEqual,
  DaffProductFilterRangeNumeric,
} from '../../../models/public_api';
import { DaffProductUnknownFilterType } from '../../errors/unknown-filter-type.error';
import { daffApplyFilterEqual } from '../../type/equal/behaviors/apply/apply';
import { daffApplyFilterRange } from '../../type/range/behaviors/apply/apply';
import {
  daffProductValidateFilterRequestNameMatch,
  daffProductValidateFilterRequestTypeMatch,
} from '../../validators/public_api';

/**
 * Applies a filter request to the matching filter.
 *
 * @idempotent {filter}
 * @throws {@link DaffProductUnknownFilterType}
 */
export const daffApplyFilter = (request: DaffProductFilterRequest, filter: DaffProductFilter): DaffProductFilter => {
  daffProductValidateFilterRequestNameMatch(request, filter);
  daffProductValidateFilterRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffProductFilterType.Equal:
      return daffApplyFilterEqual(request, <DaffProductFilterEqual>filter);
    case(DaffProductFilterType.RangeNumeric):
      return daffApplyFilterRange(request, <DaffProductFilterRangeNumeric>filter);
    default:
      throw new DaffProductUnknownFilterType('Unknown filter type');
  }
};
