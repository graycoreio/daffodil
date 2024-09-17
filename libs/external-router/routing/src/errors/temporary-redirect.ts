import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when the driver needs a URI to be temporarily redirected
 * to another location.
 */
export class DaffExternalRouterTemporaryRedirectError extends DaffInheritableError
  implements DaffError {
  public readonly code: string = 'TEMPORARY_REDIRECT';

  constructor(public redirectUrl: string, message?: string) {
    super(message);
  }
}
