import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when the driver encounters a 4xx error.
 */
export class DaffExternalRouterClientError extends DaffInheritableError
  implements DaffError {
  public readonly code: string = '4xx_CLIENT_ERROR';

  constructor(message?: string) {
    super(message);
  }
}
