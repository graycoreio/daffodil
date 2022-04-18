import { Route } from '@angular/router';

import { DaffExternalRouteType } from './route-type';

/**
 * A type that describes the special data that Daffodil will look for when attempting
 * to match a route based upon path data stored in the `data` key of a route.
 *
 * {@link daffDataPathUrlMatcher}
 * {@link daffInsertDataPathStrategy}
 */
export type DaffRouteWithType = Route & {
  daffExternalRouteType: DaffExternalRouteType;
};
