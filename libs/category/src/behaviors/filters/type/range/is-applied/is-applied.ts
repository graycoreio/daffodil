import {
  DaffCategoryFilterOption,
  DaffCategoryFilterRangeRequest,
  DaffToggleCategoryFilterRangeRequest,
  DaffCategoryFilterRequest,
} from '../../../../models/public_api';
import { findFilterByName } from '../../../find-filter-by-name';

/**
 * Determines whether or not a filter is applied.
 */
export const isFilterRangeApplied = (toggledFilter: DaffToggleCategoryFilterRangeRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean => {
  const filterMatchingName = <DaffCategoryFilterRangeRequest>findFilterByName(toggledFilter.name, appliedFilters);
  if(filterMatchingName) {
    return !!filterMatchingName.value.filter(filterValue => filterValue === toggledFilter.value).length;
  } else {
    return false;
  }
};
