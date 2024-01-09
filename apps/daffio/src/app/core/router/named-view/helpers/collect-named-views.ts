import { collect } from '@daffodil/core';

import {
  DaffActivatedRouteSnapshotWithNamedViews,
  DaffRouterNamedViews,
} from '../models/public_api';

/**
 * Collects all named views defined in the entire tree of routes.
 */
export const daffRouterNamedViewsCollect = (route: DaffActivatedRouteSnapshotWithNamedViews): DaffRouterNamedViews => {
  const ary = collect(route, (r) => r.children);
  const ret = ary.reduce(
    (acc, r) => r.data.daffNamedViews
      ? {
        ...acc,
        ...r.data.daffNamedViews,
      }
      : acc,
    <DaffRouterNamedViews>{},
  );
  return ret;
};
