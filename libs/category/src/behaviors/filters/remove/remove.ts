import {
  DaffToggleCategoryFilterRequest,
  DaffCategoryFilterRequest,
  DaffCategoryFilterType,
} from '../../../models/public_api';
import { removeFilterEqual }  from '../remove/type/equal';
import { removeFilterRange } from '../remove/type/range';

export function removeFilter(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[] {
  switch(toggledFilter.type) {
    case(DaffCategoryFilterType.Range) :
      return removeFilterRange(toggledFilter, appliedFilters);
    default :
      return removeFilterEqual(toggledFilter, appliedFilters);
  }
}
