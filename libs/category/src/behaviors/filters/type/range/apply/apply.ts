import {
  DaffCategoryFilterRangeRequest,
  DaffToggleCategoryFilterRangeRequest,
  DaffCategoryRangeFilter,
} from '../../../../../models/public_api';

/**
 * Applies a filter request to a group of range type filter options.
 *
 * @idempotent
 */
export const daffApplyFilterRange = (request: DaffCategoryFilterRangeRequest | DaffToggleCategoryFilterRangeRequest, filter: DaffCategoryRangeFilter): DaffCategoryRangeFilter => {

};
