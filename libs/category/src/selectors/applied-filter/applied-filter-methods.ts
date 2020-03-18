import { DaffCategoryFilterOption, DaffCategoryFilter } from '../../models/category-filter';
import { DaffCategoryAppliedFilterOption, DaffCategoryAppliedFilter } from '../../models/category-applied-filter';
import { DaffCategoryFilterRangeRequest, DaffCategoryFilterMatchRequest, DaffCategoryFilterEqualRequest, DaffCategoryFilterRequest } from '../../models/requests/filter-request';
import { DaffCategoryFilterType } from '../../models/category-filter-base';

export function buildAppliedFilter(filter: DaffCategoryFilter, request: DaffCategoryFilterRequest): DaffCategoryAppliedFilter {
	return {
		name: request.name,
		type: request.type,
		label: filter.label,
		options: buildAppliedFilterOptions(filter.options, request)
	}
}

function buildAppliedFilterOptions(filterOptions: DaffCategoryFilterOption[], filterRequest: DaffCategoryFilterRequest): DaffCategoryAppliedFilterOption[] {
	switch(filterRequest.type) {
		case(DaffCategoryFilterType.Equal) :
			return buildAppliedFilterOptionsFromEqualRequest(filterOptions, filterRequest);
		case(DaffCategoryFilterType.Range) :
			return buildAppliedFilterOptionsFromRangeRequest(filterOptions, filterRequest);
		case(DaffCategoryFilterType.Match) :
			return buildAppliedFilterOptionsFromMatchRequest(filterOptions, filterRequest);
	}
}

function buildAppliedFilterOptionsFromEqualRequest(
	filterOptions: DaffCategoryFilterOption[], filterRequest: DaffCategoryFilterEqualRequest
): DaffCategoryAppliedFilterOption[] {
	return filterOptions
		.filter(option => filterRequest.value.indexOf(option.value) > -1)
		.map(option => {
			return {
				value: option.value,
				label: option.label
			}
		})
}

function buildAppliedFilterOptionsFromRangeRequest(
	filterOptions: DaffCategoryFilterOption[], filterRequest: DaffCategoryFilterRangeRequest
): DaffCategoryAppliedFilterOption[] {
	return filterOptions
	.filter(option => filterRequest.value.indexOf(option.value) > -1)
	.map(option => {
		return {
			value: option.value,
			label: option.label
		}
	})
}

function buildAppliedFilterOptionsFromMatchRequest(
	filterOptions: DaffCategoryFilterOption[], filterRequest: DaffCategoryFilterMatchRequest
): DaffCategoryAppliedFilterOption[] {
	return filterOptions
	.filter(option => filterRequest.value === option.value)
	.map(option => {
		return {
			value: option.value,
			label: option.label
		}
	})
}
