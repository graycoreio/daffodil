import {
  DaffToggleCategoryFilterRequest,
  DaffCategoryFilterRequest,
} from '../../models/public_api';

export const toggledFilterNameExists =
  (toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean =>
    appliedFilters && !!appliedFilters.find(filter => filter.name === toggledFilter.name);
