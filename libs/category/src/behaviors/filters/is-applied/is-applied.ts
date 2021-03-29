import {
  DaffToggleCategoryFilterRequest,
  DaffCategoryFilterRequest,
  DaffCategoryFilterType,
} from '../../../models/public_api';
import { isFilterEqualApplied } from './type/equal';
import { isFilterRangeApplied } from './type/range';

export const isFilterApplied = (toggledFilter: DaffToggleCategoryFilterRequest, filters: DaffCategoryFilterRequest[]): boolean => {
  switch(toggledFilter.type) {
    case(DaffCategoryFilterType.Range) :
      return isFilterRangeApplied(toggledFilter, filters);
    default :
      return isFilterEqualApplied(toggledFilter, filters);
  }
};
