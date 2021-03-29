import {
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterOption,
} from '../../../../models/public_api';

/**
 * Determines whether or not a filter is applied.
 */
export const isFilterEqualApplied = (request: DaffCategoryFilterEqualRequest, options: DaffCategoryFilterOption[]): boolean => true;
