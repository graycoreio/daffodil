import { Route } from '@angular/router';

import { DaffDocKind } from '@daffodil/docs-utils';
import { DaffRouteWithNamedViews } from '@daffodil/router';

import { DaffioRouteWithNavLinks } from '../nav/link/route.type';
import { DaffioRouteWithSidebars } from '../sidebar/models/route.type';

/**
 * A route config that possibly contains different kinds of data used in the application.
 */
export interface DaffioRoute extends Route {
  data?: Route['data']
  & DaffRouteWithNamedViews['data']
  & DaffioRouteWithNavLinks['data']
  & DaffioRouteWithSidebars['data']
  & {
    docKind?: DaffDocKind;
  };
}
