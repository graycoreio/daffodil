import { DaffIdentifiable } from '@daffodil/core';

import { DaffRouteData } from './route-data';
import { DaffExternalRouteType } from './route-type';

/**
 * A `DaffExternallyResolvableUrl` describes the relationship between a "type" of route
 * as determined by an external platform and a URI.
 *
 * @example
 * ```ts
 * export const resolvableRoute: DaffExternallyResolvableUrl = {
 *  id: "id-of-resource",
 * 	url: "some/path/to-a-resource",
 * 	type: "RESOURCE_TYPE"
 * }
 * ```
 */
export interface DaffExternallyResolvableUrl extends DaffIdentifiable {
  /**
   * The URL that will be used for the path of the route inserted
   * into the Angular routing config.
   * Should not contain URL fragments, query parameters, or leading slashes.
   */
  url: string;

  /**
   * The type of the route
   *
   * @see {@link DaffExternalRouteType}
   */
  type: DaffExternalRouteType;

  /**
   * The HTTP status code for the resolvable route.
   */
  code: number;

  /**
   * Additional route data. Note that this is not guaranteed to come from
   * the driver, its only available when the driver makes it available.
   */
  data?: DaffRouteData;
}
