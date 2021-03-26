import { Route } from '@angular/router';

import { DaffExternalRouterInsertionStrategy } from './insertion-strategy.type';

/**
 * An object containing the info needed to insert a route into a configuration.
 */
export interface DaffRouteInfo {
  route: Route;
  insertionStrategy?: DaffExternalRouterInsertionStrategy;
}
