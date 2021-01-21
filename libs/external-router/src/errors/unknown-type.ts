import { DaffError, DaffInheritableError } from '@daffodil/core';

/**
 * An error thrown when there is a failure matching a route type to a configured
 * route. 
 */
export class DaffExternalRouterUnknownRouteType extends DaffInheritableError
	implements DaffError {
	public readonly code: string = 'UNKNOWN_ROUTE_TYPE';

	constructor(message?: string) {
		super(message);
	}
}
