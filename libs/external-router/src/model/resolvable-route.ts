import { DaffExternalRouteType } from './route-type';

/**
 * A `DaffResolvableRoute` describes the relationship between a "type" of route
 * and a URI. E.g.
 *
 * ```ts
 * export const resolvableRoute: DaffResolvableRoute = {
 * 	url: "some/path/to-a-resource"
 * 	type: "RESOURCE_TYPE"
 * }
 * ```
 */
export interface DaffResolvableRoute {
	url: string;
	type: DaffExternalRouteType;
}
