import { DaffCategoryErrorCodes } from './codes.enum';
import { DaffCategoryFilterRequestNameMismatch } from './filters/request-name-mismatch.error';
import { DaffCategoryFilterRequestTypeMismatch } from './filters/request-type-mismatch.error';
import { DaffCategoryUnknownFilterType } from './filters/unknown-filter-type.error';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCategoryErrorMap = {
  [DaffCategoryErrorCodes.CATEGORY_FILTER_REQUEST_TYPE_MISMATCH]: DaffCategoryFilterRequestTypeMismatch,
  [DaffCategoryErrorCodes.CATEGORY_FILTER_REQUEST_NAME_MISMATCH]: DaffCategoryFilterRequestNameMismatch,
  [DaffCategoryErrorCodes.CATEGORY_UNKNOWN_FILTER_TYPE]: DaffCategoryUnknownFilterType,
};
