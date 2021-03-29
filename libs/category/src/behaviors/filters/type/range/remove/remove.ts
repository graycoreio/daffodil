import {
  DaffCategoryFilterOption,
  DaffCategoryFilterRangeRequest,
} from '../../../../models/public_api';

/**
 * Removes a currently applied filter. If the filter isn't currently applied, returns
 * the original DaffCategoryFilterOption[].
 */
export const removeFilterRange = (request: DaffCategoryFilterRangeRequest, options: DaffCategoryFilterOption[]): DaffCategoryFilterOption[] => [];
