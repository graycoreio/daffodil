import { ActivatedRouteSnapshot } from '@angular/router';

import { DaffioRouterNamedViews } from './named-views.type';

export interface ActivatedRouteSnapshotWithNamedViews extends ActivatedRouteSnapshot {
  data: {
    namedViews?: DaffioRouterNamedViews;
  } & ActivatedRouteSnapshot['data'];
}
