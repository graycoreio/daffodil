import { Route } from '@angular/router';

import { DaffioRouterNamedViews } from './named-views.type';

/**
 * A route that contains named views.
 */
export interface RouteWithNamedViews extends Route {
  data?: {
    namedViews?: DaffioRouterNamedViews;
  } & Route['data'];
}
