import { DaffError } from '@daffodil/core';

import { DaffExternalRouterClientError } from './client-error';

/**
 * An error thrown when the driver determines that a given url is not resolvable.
 */
export class DaffExternalRouterNotFoundError extends DaffExternalRouterClientError
  implements DaffError {
  public readonly code: string = '404_NOT_FOUND';

  constructor(message?: string) {
    super(message);
  }
}
