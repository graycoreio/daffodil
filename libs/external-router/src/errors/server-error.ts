import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * Indicates that the external routing platform experienced a server-side failure.
 */
export class DaffExternalRouterServerError extends DaffInheritableError
  implements DaffError {
  readonly code: string = '5xx_SERVER_ERROR';

  constructor(message?: string) {
    super(message);
  }
}
