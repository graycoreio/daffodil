import { Route } from '@angular/router';

/**
 * A dictionary of components that can be stored in route data.
 */
export type DaffRouterNamedViews= Record<string, Route['component']>;
