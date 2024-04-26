import {
  ActivatedRouteSnapshot,
  Route,
} from '@angular/router';

import { collect } from '@daffodil/core';

/**
 * Collects data defined in the entire tree of routes.
 * Shallow merges data, preferring fields of more deeply nested routes.
 */
export const daffRouterDataCollect = (route: ActivatedRouteSnapshot): Route['data'] => {
  const ary = collect(route, (r) => r.children);
  const ret = ary.reduce(
    (acc, r) => r.data
      ? {
        ...acc,
        ...r.data,
      }
      : acc,
    {},
  );
  return ret;
};
