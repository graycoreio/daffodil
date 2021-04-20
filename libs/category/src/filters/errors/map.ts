import { DaffCategoryFilterErrorCodes } from './codes.enum';
import { DaffCategoryFilterNotFound } from './filter-not-found.error';
import { DaffCategoryFilterRequestNameMismatch } from './request-name-mismatch.error';
import { DaffCategoryFilterRequestTypeMismatch } from './request-type-mismatch.error';
import { DaffCategoryUnknownFilterType } from './unknown-filter-type.error';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCategoryFiltersErrorMap = {
  [DaffCategoryFilterErrorCodes.FILTER_REQUEST_TYPE_MISMATCH]: DaffCategoryFilterRequestTypeMismatch,
  [DaffCategoryFilterErrorCodes.FILTER_REQUEST_NAME_MISMATCH]: DaffCategoryFilterRequestNameMismatch,
  [DaffCategoryFilterErrorCodes.FILTER_NOT_FOUND]: DaffCategoryFilterNotFound,
  [DaffCategoryFilterErrorCodes.UNKNOWN_FILTER_TYPE]: DaffCategoryUnknownFilterType,
};
