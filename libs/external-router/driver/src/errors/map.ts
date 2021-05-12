import { DaffExternalRouterDriverErrorCodes } from './codes.enum';
import { DaffExternalRouterRouteNotFoundError } from './route-not-found';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffExternalRouterDriverErrorMap = {
  [DaffExternalRouterDriverErrorCodes.ROUTE_NOT_FOUND]: DaffExternalRouterRouteNotFoundError,
};
