import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export const DAFF_SEARCH_QUERY_TOO_SHORT_ERROR_CODE = 'DAFF_SEARCH_QUERY_TOO_SHORT';

/**
 * Thrown when the specified search query is too short.
 */
export class DaffSearchQueryTooShortError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_SEARCH_QUERY_TOO_SHORT_ERROR_CODE;

  constructor(public message: string) {
    super(message);
  }
}
