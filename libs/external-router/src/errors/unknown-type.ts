import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * An error thrown when there is a failure matching a configured route to a
 * route type.
 */
export class DaffExternalRouterUnknownRouteTypeError extends DaffInheritableError
  implements DaffError {
  public readonly code: string = 'UNKNOWN_ROUTE_TYPE';

  constructor(message?: string) {
    super(message);
  }
}
