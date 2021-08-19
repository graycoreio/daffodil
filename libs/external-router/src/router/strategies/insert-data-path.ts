import {
  Route,
  Routes,
} from '@angular/router';

import { DaffExternalRouterInsertionStrategy } from '../../model/insertion-strategy.type';
import { DaffExternalRouteType } from '../../model/route-type';
import {
  DaffRouteWithDataPath,
  DAFF_EXTERNAL_ROUTE_DATA_PATHS,
  DAFF_EXTERNAL_ROUTE_DATA_TYPE,
} from '../../model/route-with-daff-data-path';

/**
 * Tests whether or not a route matches a specific Daffodil Route type.
 *
 * See {@link DaffRouteWithDataPath}
 */
const routeMatchesRouteType = (route: DaffRouteWithDataPath, type: DaffExternalRouteType): boolean => route?.data?.[DAFF_EXTERNAL_ROUTE_DATA_TYPE] === type;

/**
 * Adds a path to the `daffPaths` of the given route.
 *
 * See {@link DaffRouteWithDataPath}
 */
const addRouteToDaffPaths:
  (route: DaffRouteWithDataPath, path: string) => Route =
  (route: DaffRouteWithDataPath, path: string) => route.data[DAFF_EXTERNAL_ROUTE_DATA_PATHS]  = {
    ...route.data[DAFF_EXTERNAL_ROUTE_DATA_PATHS],
    [path]: path,
  };

const operateOnRoute = (externalRoute: Route): (route: Route) => Route =>
  (route: DaffRouteWithDataPath) => addRouteToDaffPaths(route, externalRoute.path);

/**
 * Traverse the router config tree, halting after the first match.
 * This traversal is implemented in a pre-order manner. As such, for large
 * configuration trees, it will be most efficient to place externally routed
 * components at the top of router configuration.
 */
const traverseRouteTree = (routes: Routes = [], matcher: (route: Route) => boolean, operate: (route: Route) => Route): Routes => {
  if(routes.length === 0) {
    return routes;
  }

  const stack: Routes = [];
  const treeRoot = { children: routes };
  stack.push(treeRoot);

  while(stack.length) {
    let route = stack.pop();
    if(matcher(route)) {
      route = operate(route);
      break;
    }
    if(route.children){
      stack.push(...route.children.reverse());
    }
  }
  return routes;
};

/**
 * A route insertion strategy that can be used to append external routes onto
 * existing Angular routes. This can be useful when you need to route to
 * an existing lazy-loaded module from multiple externally defined urls.
 *
 * This should be used in combination with the {@link daffDataPathUrlMatcher} to match lazy-loaded modules with
 * associated external urls.
 *
 * For example, you can provide the insertion strategy in the {@link DaffExternalRouterModule} as below.
 *
 * ```ts
 * DaffExternalRouterModule.forRoot({}, [
 *  {
 *    type: 'CATEGORY',
 *    insertionStrategy: daffInsertDataPathStrategy,
 *    route: {}
 *  }
 * ],
 * ```
 *
 * Then, you can match it with an associated route defined in your Routing
 * configuration with the {@link daffDataPathUrlMatcher}.
 *
 * ```ts
 *  export const routes: Routes = [
 *    {
 *      matcher: daffDataPathUrlMatcher,
 *      data: {
 *        daffExternalRouteType: "CATEGORY",
 *      },
 *      loadChildren: () => import('./category/category.module').then((m) => m.ShopCategoryModule),
 *    }
 * ]
 * ```
 *
 * See {@link DaffRouteWithDataPath}
 *
 */
export const daffInsertDataPathStrategy: DaffExternalRouterInsertionStrategy = (externalRoute: DaffRouteWithDataPath, routes: Routes) => traverseRouteTree(
  routes,
  (route) => routeMatchesRouteType(route, externalRoute.data?.[DAFF_EXTERNAL_ROUTE_DATA_TYPE]),
  operateOnRoute(externalRoute),
);
