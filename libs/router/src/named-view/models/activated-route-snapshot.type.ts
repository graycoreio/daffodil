import { ActivatedRouteSnapshot } from '@angular/router';

import { DaffRouterNamedViews } from './named-views.type';

/**
 * A route that contains named views.
 */
export interface DaffActivatedRouteSnapshotWithNamedViews extends ActivatedRouteSnapshot {
  data: {
    daffNamedViews?: DaffRouterNamedViews;
  } & ActivatedRouteSnapshot['data'];
}
