import { ActivatedRouteSnapshot } from '@angular/router';

import { collect } from '@daffodil/core';

import { DaffioRouterNamedViews } from '../models/named-views.type';

/**
 * Collects all named views defined in the entire tree of routes.
 */
export const daffioRouterNamedViewsCollect = (route: ActivatedRouteSnapshot): DaffioRouterNamedViews => {
  const ary = collect(route, (r) => r.children);
  const ret = ary.reduce(
    (acc, r) => r.data.namedViews
      ? {
        ...acc,
        ...r.data.namedViews,
      }
      : acc,
    {},
  );
  return ret;
};
