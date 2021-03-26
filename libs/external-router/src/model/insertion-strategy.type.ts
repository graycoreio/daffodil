import {
  Route,
  Routes,
} from '@angular/router';

/**
 * A function used to insert a route into a routing config.
 * The entire routing configuration will be replaced by the return value
 * so a typical usage should not modify the config beyond simply adding the route
 * to the desired location.
 */
export type DaffExternalRouterInsertionStrategy = (route: Route, routes: Routes) => Routes;
