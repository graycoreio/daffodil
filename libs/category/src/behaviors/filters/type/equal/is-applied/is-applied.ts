import {
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilter,
  DaffToggleCategoryFilterEqualRequest,
  DaffCategoryEqualFilter,
} from '../../../../../models/public_api';

/**
 * Determines whether or not a filter is applied.
 */
export const daffIsFilterEqualApplied = (filter: DaffCategoryEqualFilter): boolean =>
  Object.keys(filter.options).map((key) => filter.options[key]).findIndex(option => option.applied) > -1;
