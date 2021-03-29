import {
  DaffToggleCategoryFilterRequest,
  DaffCategoryFilterRequest,
  DaffCategoryFilterEqualRequest,
} from '../../models/public_api';

export const addToExistingFilter =
  (toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[] =>
    appliedFilters.map(filter => {
      if(filter.name === toggledFilter.name) {
        (<DaffCategoryFilterEqualRequest>filter).value.push(toggledFilter.value);
      }

      return filter;
    });
