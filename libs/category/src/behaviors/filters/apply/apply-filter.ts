import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffCategoryFilterType,
  DaffToggleCategoryFilterRequest,
  DaffCategoryEqualFilter,
  DaffCategoryFilterRangeNumeric,
} from '../../../models/public_api';
import { daffApplyFilterEqual } from '../type/equal/apply/apply';
import { daffApplyFilterRange } from '../type/range/apply/apply';

/**
 * Applies a filter request to the matching filter.
 *
 * Note that this assumes that you
 */
export const daffApplyFilter = (request: DaffCategoryFilterRequest, filter: DaffCategoryFilter): DaffCategoryFilter => {
  if(request.type !== filter.type) {
    throw new Error('filter types aren\'t equal');
  }

  if(request.name !== filter.name) {
    throw new Error('filter names aren\'t equal');
  }

  switch(request.type) {
    case(DaffCategoryFilterType.Equal):
      return daffApplyFilterEqual(request, <DaffCategoryEqualFilter>filter);
    case(DaffCategoryFilterType.RangeNumeric):
      return daffApplyFilterRange(request, <DaffCategoryFilterRangeNumeric>filter);
  }
};
