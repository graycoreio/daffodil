import { DaffToggleCategoryFilterMatchRequest, DaffCategoryFilterRequest } from '../../../models/requests/filter-request';
export declare function isMatchFilterApplied(toggledFilter: DaffToggleCategoryFilterMatchRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean;
export declare function removeMatchFilter(filterName: DaffToggleCategoryFilterMatchRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
export declare function addMatchFilter(toggledFilter: DaffToggleCategoryFilterMatchRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
