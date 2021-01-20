import { DaffToggleCategoryFilterRangeRequest, DaffCategoryFilterRequest } from '../../../models/requests/filter-request';
export declare function isRangeFilterApplied(toggledFilter: DaffToggleCategoryFilterRangeRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean;
export declare function removeRangeFilter(toggledFilter: DaffToggleCategoryFilterRangeRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
export declare function addRangeFilter(toggledFilter: DaffToggleCategoryFilterRangeRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
export declare function addNewRangeFilter(toggledFilter: DaffToggleCategoryFilterRangeRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
