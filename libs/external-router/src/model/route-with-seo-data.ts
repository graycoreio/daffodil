import { Route } from '@angular/router';

import { DaffRouteData } from './route-data';

/**
 * A type that describes the special data that Daffodil will store for SEO purposes on
 * an external resolved route.
 */
export type DaffRouteWithSeoData = Route & { data: Record<string, any> & { daffSeoData: DaffRouteData } };
