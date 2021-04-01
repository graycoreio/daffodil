import {
  DaffToggleCategoryFilterRequest,
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffCategoryFilterType,
  DaffCategoryEqualFilter,
  DaffCategoryFilterRangeNumeric,
} from '../../../models/public_api';
import { daffToggleFilterEqual } from '../type/equal/public_api';
import { daffToggleFilterRange } from '../type/range/public_api';

export function daffToggleFilter(
  request: DaffToggleCategoryFilterRequest,
  filter: DaffCategoryFilter,
): DaffCategoryFilter {
  if(request.type !== filter.type) {
    throw new Error('filter types aren\'t equal');
  }

  if(request.name !== filter.name) {
    throw new Error('filter names aren\'t equal');
  }

  switch(request.type) {
    case(DaffCategoryFilterType.Equal):
      return daffToggleFilterEqual(request, <DaffCategoryEqualFilter>filter);
    case(DaffCategoryFilterType.RangeNumeric):
      return daffToggleFilterRange(request, <DaffCategoryFilterRangeNumeric>filter);
  }
}
