import { Route } from '@angular/router';

import { DaffExternalRouterInsertionStrategy } from './insertion-strategy.type';
import { DaffRouteWithDataPath } from './route-with-data-path';

/**
 * An object containing the info needed to insert a route into a configuration.
 */
export interface DaffRouteInfo {
  route: DaffRouteWithDataPath;
  insertionStrategy?: DaffExternalRouterInsertionStrategy;
}
