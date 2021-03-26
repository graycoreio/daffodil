import { Route } from '@angular/router';

/**
 * A DaffRouteWithoutPath is a special kind of route definition without a path.
 * This is useful when defining routes that aren't provided a path initially,
 * but will be provided with one at a later time, e.g. at runtime.
 */
export type DaffRouteWithoutPath = Omit<Route, 'path'>;
