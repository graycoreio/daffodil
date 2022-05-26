import { DaffProductFilterErrorCodes } from './codes.enum';
import { DaffProductFilterNotFound } from './filter-not-found.error';
import { DaffProductFilterRequestNameMismatch } from './request-name-mismatch.error';
import { DaffProductFilterRequestTypeMismatch } from './request-type-mismatch.error';
import { DaffProductUnknownFilterType } from './unknown-filter-type.error';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffProductFiltersErrorMap = {
  [DaffProductFilterErrorCodes.FILTER_REQUEST_TYPE_MISMATCH]: DaffProductFilterRequestTypeMismatch,
  [DaffProductFilterErrorCodes.FILTER_REQUEST_NAME_MISMATCH]: DaffProductFilterRequestNameMismatch,
  [DaffProductFilterErrorCodes.FILTER_NOT_FOUND]: DaffProductFilterNotFound,
  [DaffProductFilterErrorCodes.UNKNOWN_FILTER_TYPE]: DaffProductUnknownFilterType,
};
