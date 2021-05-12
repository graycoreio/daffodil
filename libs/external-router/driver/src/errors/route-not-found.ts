import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffExternalRouterDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when the platform cannot resolve the given URL.
 */
export class DaffExternalRouterRouteNotFoundError extends DaffInheritableError implements DaffError {
	public readonly code: string = DaffExternalRouterDriverErrorCodes.ROUTE_NOT_FOUND;

	constructor(message?: string) {
	  super(message);
	}
}
