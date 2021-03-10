import {
  DaffToggleCategoryFilterEqualRequest,
  DaffCategoryFilterRequest,
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterType,
} from '@daffodil/category';

import {
  getAppliedFilterByName,
  toggledFilterNameExists,
  addToExistingFilter,
} from './util';

export function isEqualFilterApplied(toggledFilter: DaffToggleCategoryFilterEqualRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean {
  const filterMatchingName = <DaffCategoryFilterEqualRequest>getAppliedFilterByName(toggledFilter.name, appliedFilters);
  if(filterMatchingName) {
    return !!filterMatchingName.value.filter(filterValue => filterValue === toggledFilter.value).length;
  } else {
    return false;
  }
}

export function removeEqualFilter(toggledFilter: DaffToggleCategoryFilterEqualRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[] {
  return appliedFilters.map(appliedFilter => {
    if(appliedFilter.name === toggledFilter.name) {
      appliedFilter.value = (<DaffCategoryFilterEqualRequest>appliedFilter).value.filter(value => value !== toggledFilter.value);
    }
    return appliedFilter;
  }).filter(filter => filter.type === DaffCategoryFilterType.Match || filter.value.length !== 0);
}

export function addEqualFilter(toggledFilter: DaffToggleCategoryFilterEqualRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[] {
  return toggledFilterNameExists(toggledFilter, appliedFilters) ?
    addToExistingFilter(toggledFilter, appliedFilters) :
    addNewEqualFilter(toggledFilter, appliedFilters);
}

export function addNewEqualFilter(toggledFilter: DaffToggleCategoryFilterEqualRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[] {
  return appliedFilters.concat([{
    name: toggledFilter.name,
    value: [toggledFilter.value],
    type: DaffCategoryFilterType.Equal,
  }]);
}
