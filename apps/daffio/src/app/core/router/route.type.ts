import { Route } from '@angular/router';

import { DaffDocKind } from '@daffodil/docs-utils';
import { DaffRouteWithNamedViews } from '@daffodil/router';

export interface DaffioRoute extends Route {
  data: Route['data']
  & DaffRouteWithNamedViews['data']
  & {
    docKind?: DaffDocKind;
  };
}
