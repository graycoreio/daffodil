import { DaffToggleCategoryFilterRequest, DaffCategoryFilterRequest } from '../../../models/requests/filter-request';
import { DaffCategoryFilterType } from '../../../models/category-filter';
import { isEqualFilterApplied, removeEqualFilter, addEqualFilter } from './equal';
import { isRangeFilterApplied, removeRangeFilter, addRangeFilter } from './range';
import { isMatchFilterApplied, removeMatchFilter, addMatchFilter } from './match';

export function toggleCategoryFilter(
	toggledFilter: DaffToggleCategoryFilterRequest, 
	appliedFilters: DaffCategoryFilterRequest[]
): DaffCategoryFilterRequest[] {
	return isFilterApplied(toggledFilter, appliedFilters)
		? removeFilter(toggledFilter, appliedFilters)
		: addFilter(toggledFilter, appliedFilters)
}

export function isFilterApplied(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean {
	switch(toggledFilter.type) {
		case(DaffCategoryFilterType.Equal) :
			return isEqualFilterApplied(toggledFilter, appliedFilters);
		case(DaffCategoryFilterType.Range) :
			return isRangeFilterApplied(toggledFilter, appliedFilters);
		default :
			return isMatchFilterApplied(toggledFilter, appliedFilters);
	}
}

export function removeFilter(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[])
	: DaffCategoryFilterRequest[] {
	switch(toggledFilter.type) {
		case(DaffCategoryFilterType.Equal) :
			return removeEqualFilter(toggledFilter, appliedFilters);
		case(DaffCategoryFilterType.Range) :
			return removeRangeFilter(toggledFilter, appliedFilters);
		default :
			return removeMatchFilter(toggledFilter, appliedFilters);
	}
}

export function addFilter(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[])
	: DaffCategoryFilterRequest[] {
	switch(toggledFilter.type) {
		case(DaffCategoryFilterType.Equal) :
			return addEqualFilter(toggledFilter, appliedFilters);
		case(DaffCategoryFilterType.Range) :
			return addRangeFilter(toggledFilter, appliedFilters);
		default :
			return addMatchFilter(toggledFilter, appliedFilters);
	}
}
