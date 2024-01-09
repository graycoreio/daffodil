import { Route } from '@angular/router';

import { DaffRouterNamedViews } from './named-views.type';

/**
 * A route that contains named views.
 */
export interface DaffRouteWithNamedViews extends Route {
  data?: {
    namedViews?: DaffRouterNamedViews;
  } & Route['data'];
}
