import {
  DaffToggleCategoryFilterRequest,
  DaffCategoryFilterRequest,
} from '../../../models/public_api';
import { applyFilter } from '../apply/apply-filter';
import { isFilterApplied } from '../is-applied/is-applied';
import { removeFilter } from '../remove/remove';

export function toggleCategoryFilter(
  toggledFilter: DaffToggleCategoryFilterRequest,
  appliedFilters: DaffCategoryFilterRequest[],
): DaffCategoryFilterRequest[] {
  return isFilterApplied(toggledFilter, appliedFilters)
    ? removeFilter(toggledFilter, appliedFilters)
    : applyFilter(toggledFilter, appliedFilters);
}
