import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when the platform performing url resolution fails.
 */
export class DaffExternalRouterServerError extends DaffInheritableError
  implements DaffError {
  public readonly code: string = '5xx_SERVER_ERROR';

  constructor(message?: string) {
    super(message);
  }
}
