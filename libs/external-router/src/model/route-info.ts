import { DaffExternalRouterInsertionStrategy } from './insertion-strategy.type';
import { DaffRouteWithType } from './route-with-type';

/**
 * An object containing the info needed to insert a route into a configuration.
 */
export interface DaffRouteInfo {
  route: DaffRouteWithType;
  insertionStrategy?: DaffExternalRouterInsertionStrategy;
}
