import { Route } from '@angular/router';

import { DaffDocKind } from '@daffodil/docs-utils';
import { DaffRouteWithNamedViews } from '@daffodil/router';

/**
 * A route config that possibly contains different kinds of data used in the application.
 */
export interface DaffioRoute extends Route {
  data?: Route['data']
  & DaffRouteWithNamedViews['data']
  & {
    docKind?: DaffDocKind;
  };
}
