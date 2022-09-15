import { DaffFilterErrorCodes } from './codes.enum';
import { DaffFilterNotFound } from './filter-not-found.error';
import { DaffFilterRequestNameMismatch } from './request-name-mismatch.error';
import { DaffFilterRequestTypeMismatch } from './request-type-mismatch.error';
import { DaffFilterUnknownType } from './unknown-filter-type.error';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffFiltersErrorMap = {
  [DaffFilterErrorCodes.FILTER_REQUEST_TYPE_MISMATCH]: DaffFilterRequestTypeMismatch,
  [DaffFilterErrorCodes.FILTER_REQUEST_NAME_MISMATCH]: DaffFilterRequestNameMismatch,
  [DaffFilterErrorCodes.FILTER_NOT_FOUND]: DaffFilterNotFound,
  [DaffFilterErrorCodes.UNKNOWN_FILTER_TYPE]: DaffFilterUnknownType,
};
