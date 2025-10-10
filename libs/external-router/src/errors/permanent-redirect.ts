import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * Signals that the resolved URL should permanently redirect to another location.
 */
export class DaffExternalRouterPermanentRedirectError extends DaffInheritableError
  implements DaffError {
  readonly code: string = '302_PERMANENT_REDIRECT';

  constructor(readonly redirectUrl: string, message?: string) {
    super(message);
  }
}
