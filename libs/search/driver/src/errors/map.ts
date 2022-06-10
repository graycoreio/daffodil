import {
  DaffSearchInvalidAPIResponseError,
  DAFF_SEARCH_INVALID_API_RESPONSE_ERROR_CODE,
} from './invalid-api-response';
import {
  DAFF_SEARCH_QUERY_TOO_SHORT_ERROR_CODE,
  DaffSearchQueryTooShortError,
} from './query-too-short';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffSearchDriverErrorMap = {
  [DAFF_SEARCH_INVALID_API_RESPONSE_ERROR_CODE]: DaffSearchInvalidAPIResponseError,
  [DAFF_SEARCH_QUERY_TOO_SHORT_ERROR_CODE]: DaffSearchQueryTooShortError,
};
