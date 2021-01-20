import { DaffToggleCategoryFilterRequest, DaffCategoryFilterRequest } from '../../../models/requests/filter-request';
export declare function getAppliedFilterByName(name: string, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest;
export declare function toggledFilterNameExists(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean;
export declare function addToExistingFilter(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[];
