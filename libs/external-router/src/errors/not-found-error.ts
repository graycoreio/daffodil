import { DaffError } from '@daffodil/core';

import { DaffExternalRouterClientError } from './client-error';

/**
 * Indicates that a URL could not be resolved by an external router driver.
 */
export class DaffExternalRouterNotFoundError extends DaffExternalRouterClientError
  implements DaffError {
  readonly code = '404_NOT_FOUND';

  constructor(message?: string) {
    super(message);
  }
}
