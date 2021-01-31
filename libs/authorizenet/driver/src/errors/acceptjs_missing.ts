import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when Accept.js has not been loaded.
 */
export class DaffAuthorizeNetAcceptjsMissingError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_AUTHORIZE_NET_ACCEPTJS_MISSING';

  constructor(public message: string) {
    super(message);
  }
}
