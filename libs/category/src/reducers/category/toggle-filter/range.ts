import { DaffToggleCategoryFilterRangeRequest, DaffCategoryFilterRequest, DaffCategoryFilterRangeRequest } from '../../../models/requests/filter-request';
import { getAppliedFilterByName, toggledFilterNameExists, addToExistingFilter } from './util';
import { DaffCategoryFilterType } from '../../../models/category-filter-base';

export function isRangeFilterApplied(toggledFilter: DaffToggleCategoryFilterRangeRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean {
	const filterMatchingName = <DaffCategoryFilterRangeRequest>getAppliedFilterByName(toggledFilter.name, appliedFilters);
	if(filterMatchingName) {
		return !!filterMatchingName.value.filter(filterValue => filterValue === toggledFilter.value).length;
	} else return false;
}

export function removeRangeFilter(toggledFilter: DaffToggleCategoryFilterRangeRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[] {
	return appliedFilters.map(appliedFilter => {
		if(appliedFilter.name === toggledFilter.name) {
			appliedFilter.value = (<DaffCategoryFilterRangeRequest>appliedFilter).value.filter(value => value !== toggledFilter.value);
		}
		return appliedFilter;
	}).filter(filter => filter.type === DaffCategoryFilterType.Match || filter.value.length !== 0)
}

export function addRangeFilter(toggledFilter: DaffToggleCategoryFilterRangeRequest, appliedFilters: DaffCategoryFilterRequest[])
: DaffCategoryFilterRequest[] {
	return toggledFilterNameExists(toggledFilter, appliedFilters) ?
		addToExistingFilter(toggledFilter, appliedFilters) :
		addNewRangeFilter(toggledFilter, appliedFilters);
}

export function addNewRangeFilter(toggledFilter: DaffToggleCategoryFilterRangeRequest, appliedFilters: DaffCategoryFilterRequest[])
: DaffCategoryFilterRequest[] {
	return appliedFilters.concat([{
		name: toggledFilter.name,
		value: [toggledFilter.value],
		type: DaffCategoryFilterType.Range
	}]);
}
