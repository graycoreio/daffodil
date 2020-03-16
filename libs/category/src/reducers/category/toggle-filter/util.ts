import { DaffToggleCategoryFilterRequest, DaffCategoryFilterRequest, DaffCategoryFilterEqualRequest } from '../../../models/requests/filter-request';

export function getAppliedFilterByName(name: string, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest {
	return appliedFilters.filter(filter => filter.name === name).shift();
}

export function toggledFilterNameExists(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean {
	return appliedFilters && !!appliedFilters.find(filter => filter.name === toggledFilter.name)
}

export function addToExistingFilter(toggledFilter: DaffToggleCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[])
: DaffCategoryFilterRequest[] {
	return appliedFilters.map(filter => {
		if(filter.name === toggledFilter.name) {
			(<DaffCategoryFilterEqualRequest>filter).value.push(toggledFilter.value)
		}

		return filter;
	});
}
