import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffCategoryFilterType,
  DaffToggleCategoryFilterRequest,
  DaffCategoryEqualFilter,
  DaffCategoryFilterRangeBase,
  DaffCategoryFilterRangeNumeric,
} from '../../../models/public_api';
import { daffRemoveFilterEqual } from '../type/equal/remove/remove';
import { daffRemoveFilterRange } from '../type/range/remove/remove';

/**
 * Applies a filter request to the matching filter.
 *
 * Note that this assumes that you
 */
export const daffRemoveFilter = (request: DaffCategoryFilterRequest, filter: DaffCategoryFilter): DaffCategoryFilter => {
  if(request.type !== filter.type) {
    throw new Error('filter types aren\'t equal');
  }

  if(request.name !== filter.name) {
    throw new Error('filter names aren\'t equal');
  }

  switch(request.type) {
    case(DaffCategoryFilterType.Equal):
      return daffRemoveFilterEqual(request, <DaffCategoryEqualFilter>filter);
    case(DaffCategoryFilterType.RangeNumeric):
      if(filter.type === DaffCategoryFilterType.RangeNumeric) {
        return daffRemoveFilterRange(request, <DaffCategoryFilterRangeNumeric>filter);
      }
  }
};
