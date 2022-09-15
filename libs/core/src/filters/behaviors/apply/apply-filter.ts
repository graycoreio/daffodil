import {
  DaffFilterRequest,
  DaffFilter,
  DaffFilterType,
  DaffFilterEqual,
  DaffFilterRangeNumeric,
} from '../../../filterable/public_api';
import { DaffFilterUnknownType } from '../../errors/unknown-filter-type.error';
import { daffApplyFilterEqual } from '../../type/equal/behaviors/apply/apply';
import { daffApplyFilterRange } from '../../type/range/behaviors/apply/apply';
import {
  daffFilterValidateRequestNameMatch,
  daffFilterValidateRequestTypeMatch,
} from '../../validators/public_api';

/**
 * Applies a filter request to the matching filter.
 *
 * @idempotent {filter}
 * @throws {@link DaffFilterUnknownType}
 */
export const daffApplyFilter = (request: DaffFilterRequest, filter: DaffFilter): DaffFilter => {
  daffFilterValidateRequestNameMatch(request, filter);
  daffFilterValidateRequestTypeMatch(request, filter);

  switch (request.type) {
    case DaffFilterType.Equal:
      return daffApplyFilterEqual(request, <DaffFilterEqual>filter);
    case(DaffFilterType.RangeNumeric):
      return daffApplyFilterRange(request, <DaffFilterRangeNumeric>filter);
    default:
      throw new DaffFilterUnknownType('Unknown filter type');
  }
};
