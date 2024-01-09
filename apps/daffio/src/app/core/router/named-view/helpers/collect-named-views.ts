import { collect } from '@daffodil/core';

import { DaffActivatedRouteSnapshotWithNamedViews } from '../models/activated-route-snapshot.type';
import { DaffRouterNamedViews } from '../models/named-views.type';

/**
 * Collects all named views defined in the entire tree of routes.
 */
export const routerNamedViewsCollect = (route: DaffActivatedRouteSnapshotWithNamedViews): DaffRouterNamedViews => {
  const ary = collect(route, (r) => r.children);
  const ret = ary.reduce(
    (acc, r) => r.data.namedViews
      ? {
        ...acc,
        ...r.data.namedViews,
      }
      : acc,
    <DaffRouterNamedViews>{},
  );
  return ret;
};
