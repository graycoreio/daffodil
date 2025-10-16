import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * Represents a 4xx client error encountered during external URL resolution.
 */
export class DaffExternalRouterClientError extends DaffInheritableError
  implements DaffError {
  readonly code: string = '4xx_CLIENT_ERROR';

  constructor(message?: string) {
    super(message);
  }
}
