import { Route } from '@angular/router';

/**
 * A RouteWithoutPath is a route definition. This is useful when defining routes
 * aren't provided a path initially, but will be provided with one at a later time,
 * e.g. runtime.
 */
export type RouteWithoutPath = Omit<Route, 'path'>;
