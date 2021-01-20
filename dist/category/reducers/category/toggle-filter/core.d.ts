import { DaffToggleCategoryFilterRequest, DaffCategoryFilterRequest } from '../../../models/requests/filter-request';
export declare function toggleCategoryFilter(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
export declare function isFilterApplied(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean;
export declare function removeFilter(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
export declare function addFilter(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
