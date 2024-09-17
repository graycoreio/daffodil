import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when there was no wildcard route found in configuration
 * of the Angular Router.
 */
export class DaffExternalRouterNoWildcardError extends DaffInheritableError
  implements DaffError {
  public readonly code: string = 'NO_WILDCARD_ROUTE';

  constructor(message?: string) {
    super(message);
  }
}
