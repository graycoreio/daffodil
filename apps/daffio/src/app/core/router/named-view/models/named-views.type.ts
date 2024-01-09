import { Route } from '@angular/router';

/**
 * A dictionary of components that can be stored in route data.
 */
export type DaffioRouterNamedViews = Record<string, Route['component']>;
