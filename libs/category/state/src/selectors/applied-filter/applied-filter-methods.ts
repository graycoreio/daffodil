import {
  DaffCategoryFilter,
  DaffCategoryFilterRequest,
  DaffCategoryAppliedFilter,
  DaffCategoryFilterOption,
  DaffCategoryAppliedFilterOption,
  DaffCategoryFilterType,
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterRangeRequest,
  DaffCategoryFilterMatchRequest,
} from '@daffodil/category';

export function buildAppliedFilter(filter: DaffCategoryFilter, request: DaffCategoryFilterRequest): DaffCategoryAppliedFilter {
  return {
    name: request.name,
    type: request.type,
    label: filter.label,
    options: buildAppliedFilterOptions(filter.options, request),
  };
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
  filterOptions: DaffCategoryFilterOption[], filterRequest: DaffCategoryFilterEqualRequest,
): DaffCategoryAppliedFilterOption[] {
  return filterOptions
    .filter(option => filterRequest.value.indexOf(option.value) > -1)
    .map(option => ({
      value: option.value,
      label: option.label,
    }));
}

function buildAppliedFilterOptionsFromRangeRequest(
  filterOptions: DaffCategoryFilterOption[], filterRequest: DaffCategoryFilterRangeRequest,
): DaffCategoryAppliedFilterOption[] {
  return filterOptions
    .filter(option => filterRequest.value.indexOf(option.value) > -1)
    .map(option => ({
      value: option.value,
      label: option.label,
    }));
}

function buildAppliedFilterOptionsFromMatchRequest(
  filterOptions: DaffCategoryFilterOption[], filterRequest: DaffCategoryFilterMatchRequest,
): DaffCategoryAppliedFilterOption[] {
  return filterOptions
    .filter(option => filterRequest.value === option.value)
    .map(option => ({
      value: option.value,
      label: option.label,
    }));
}
