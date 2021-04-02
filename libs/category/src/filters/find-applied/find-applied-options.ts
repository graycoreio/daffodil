import {
  DaffCategoryFilter,
  DaffCategoryFilterOption,
} from '../../models/public_api';

/**
 * Finds the applied options in the filter.
 */
export const daffCategoryFindAppliedFilterOptions = (filter: DaffCategoryFilter): DaffCategoryFilterOption[] =>
  Object.keys(filter.options).map((key) => filter.options[key]).filter((option) => option.applied);
