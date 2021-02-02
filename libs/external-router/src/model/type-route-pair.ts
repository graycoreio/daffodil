import { DaffExternalRouteType } from './route-type';
import { RouteWithoutPath } from './route-without-path';

/**
 * A model used to describe the relationship between a {@link DaffExternalRouterType}
 * and its corresponding route.
 *
 * The TypeRoutePair is the pre-provided "glue" that a developer will provide
 * ahead-of-time so that that the External Router knows what the list of available
 * "types" are (along with that type's corresponding route).
 *
 * @docs-private
 */
export interface TypeRoutePair {
	type: DaffExternalRouteType;
	route: RouteWithoutPath;
}
