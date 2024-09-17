import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when the driver determines that the url needs to be routed somewhere
 * else permanently.
 */
export class DaffExternalRouterPermanentRedirectError extends DaffInheritableError
  implements DaffError {
  public readonly code: string = '302_PERMANENT_REDIRECT';

  constructor(public redirectUrl: string, message?: string) {
    super(message);
  }
}
