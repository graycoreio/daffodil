import { ActivatedRouteSnapshot } from '@angular/router';

import {
  collect,
  daffMerge,
  DaffMergeStrategy,
} from '@daffodil/core';

/**
 * Collects data defined in the entire tree of routes.
 * Shallow merges data, preferring fields of more deeply nested routes.
 */
export const daffRouterDataCollect = <T extends ActivatedRouteSnapshot['data'] = ActivatedRouteSnapshot['data']>(route: ActivatedRouteSnapshot, mergeStrategy?: DaffMergeStrategy<T>): T =>
  daffMerge(collect(route, (r) => r.children).map((r) => <T>r.data), mergeStrategy);
