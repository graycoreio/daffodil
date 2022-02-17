import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * A general error indicating that the platform returned a response which cannot be processed.
 */
export class DaffSearchInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_SEARCH_INVALID_API_RESPONSE';

  constructor(public message: string) {
    super(message);
  }
}
