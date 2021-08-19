import { Route } from '@angular/router';

import { DaffExternalRouteType } from './route-type';

/**
 * The key on route data in which externally routed paths are stored.
 */
export const DAFF_EXTERNAL_ROUTE_DATA_PATHS = 'daffPaths';

/**
 * They key on route data where the type of the route should be stored.
 */
export const DAFF_EXTERNAL_ROUTE_DATA_TYPE = 'daffExternalRouteType';

/**
 * Describes the special data that Daffodil will look for and use when attempting
 * to match a route based upon the data path.
 */
export type DaffRouteWithDataPath = Route & {
  data?: {
    [DAFF_EXTERNAL_ROUTE_DATA_TYPE]?: DaffExternalRouteType;
    [DAFF_EXTERNAL_ROUTE_DATA_PATHS]?: Record<string, string>;
  };
};
