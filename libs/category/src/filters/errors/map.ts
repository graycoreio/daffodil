import { DaffCategoryErrorCodes } from '../../errors/codes.enum';
import { DaffCategoryFilterNotFound } from './filter-not-found.error';
import { DaffCategoryFilterRequestTypeMismatch } from './request-type-mismatch.error';
import { DaffCategoryUnknownFilterType } from './unknown-filter-type.error';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCategoryFiltersErrorMap = {
  [DaffCategoryErrorCodes.CATEGORY_FILTER_REQUEST_TYPE_MISMATCH]: DaffCategoryFilterRequestTypeMismatch,
  [DaffCategoryErrorCodes.CATEGORY_FILTER_NOT_FOUND]: DaffCategoryFilterNotFound,
  [DaffCategoryErrorCodes.CATEGORY_UNKNOWN_FILTER_TYPE]: DaffCategoryUnknownFilterType,
};
