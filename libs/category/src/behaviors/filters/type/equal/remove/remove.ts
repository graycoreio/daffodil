import {
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterOption,
} from '../../../../models/public_api';

/**
 * Removes a currently applied filter. If the filter isn't currently applied, returns
 * the original DaffCategoryFilterOption[].
 */
export const removeFilterEqual = (request: DaffCategoryFilterEqualRequest, options: DaffCategoryFilterOption[]): DaffCategoryFilterOption[] => [];
