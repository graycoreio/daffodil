import { Route } from '@angular/router';

import { DaffioNavLink } from './type';

export interface DaffioRouteWithNavLinks extends Route {
  data: Route['data'] & {
    daffioNavLinks?: Array<DaffioNavLink>;
  };
}
