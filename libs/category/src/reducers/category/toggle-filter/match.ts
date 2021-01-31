import { DaffCategoryFilterType } from '../../../models/category-filter-base';
import {
  DaffToggleCategoryFilterMatchRequest,
  DaffCategoryFilterRequest,
} from '../../../models/requests/filter-request';
import { getAppliedFilterByName } from './util';

export function isMatchFilterApplied(toggledFilter: DaffToggleCategoryFilterMatchRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean {
  return !!getAppliedFilterByName(toggledFilter.name, appliedFilters);
}

export function removeMatchFilter(filterName: DaffToggleCategoryFilterMatchRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[] {
  return appliedFilters.filter(filter => filter.name !== filterName.name);
}

export function addMatchFilter(toggledFilter: DaffToggleCategoryFilterMatchRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[] {
  return appliedFilters.concat([{
    name: toggledFilter.name,
    value: toggledFilter.value,
    type: DaffCategoryFilterType.Match,
  }]);
}
