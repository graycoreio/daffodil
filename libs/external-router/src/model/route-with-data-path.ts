import {
  Data,
  Route,
} from '@angular/router';

import { DaffRouteData } from './route-data';

/**
 * A type that describes the special data that Daffodil will look for when attempting
 * to match a route based upon path data stored in the `data` key of a route.
 *
 * {@link daffDataPathUrlMatcher}
 * {@link daffInsertDataPathStrategy}
 */
export type DaffRouteWithDataPath = Route & {
  data?: {
    daffPaths?: Record<string, DaffRouteData | Data>;
  };
};
