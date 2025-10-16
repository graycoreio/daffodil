import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * Signals that the resolved URL should temporarily redirect to another location.
 */
export class DaffExternalRouterTemporaryRedirectError extends DaffInheritableError
  implements DaffError {
  readonly code: string = 'TEMPORARY_REDIRECT';

  constructor(readonly redirectUrl: string, message?: string) {
    super(message);
  }
}
