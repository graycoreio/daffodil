import { DaffToggleCategoryFilterEqualRequest, DaffCategoryFilterRequest } from '../../../models/requests/filter-request';
export declare function isEqualFilterApplied(toggledFilter: DaffToggleCategoryFilterEqualRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean;
export declare function removeEqualFilter(toggledFilter: DaffToggleCategoryFilterEqualRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
export declare function addEqualFilter(toggledFilter: DaffToggleCategoryFilterEqualRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
export declare function addNewEqualFilter(toggledFilter: DaffToggleCategoryFilterEqualRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
