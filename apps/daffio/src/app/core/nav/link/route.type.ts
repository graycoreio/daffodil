import { Route } from '@angular/router';

import { DaffioNavLink } from './type';

/**
 * A route that possibly contains nav links.
 * These links are typically rendered in the header and nav sidebar.
 */
export interface DaffioRouteWithNavLinks extends Route {
  data?: Route['data'] & {
    daffioNavLinks?: Array<DaffioNavLink>;
  };
}
