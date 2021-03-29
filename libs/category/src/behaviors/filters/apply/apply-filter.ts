import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffCategoryFilterType,
  DaffToggleCategoryFilterRequest,
  DaffCategoryEqualFilter,
  DaffCategoryRangeFilter,
} from '../../../models/public_api';
import { applyFilterEqual } from '../type/equal/apply/apply';
import { daffApplyFilterRange } from '../type/range/apply/apply';

/**
 * Applies a filter request to the matching filter.
 *
 * Note that this assumes that you
 */
export const daffApplyFilter = (request: DaffCategoryFilterRequest | DaffToggleCategoryFilterRequest, filter: DaffCategoryFilter): DaffCategoryFilter => {
  if(request.type !== filter.type) {
    throw new Error('filter types aren\'t equal');
  }

  if(request.name !== filter.name) {
    throw new Error('filter names aren\'t equal');
  }

  switch(request.type) {
    case(DaffCategoryFilterType.Equal):
      return applyFilterEqual(request, <DaffCategoryEqualFilter>filter);
    case(DaffCategoryFilterType.Range):
      return daffApplyFilterRange(request, <DaffCategoryRangeFilter>filter);
  }
};
