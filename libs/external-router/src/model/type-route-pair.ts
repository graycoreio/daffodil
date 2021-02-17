import { RouteWithoutPath } from './route-without-path';
import { DaffExternalRouterType } from './route-type';

/**
 * A model used to describe the relationship between a {@link DaffExternalRouterType}
 * and its corresponding route.
 *
 * @docs-private
 */
export interface TypeRoutePair {
	type: DaffExternalRouterType;
	route: RouteWithoutPath;
}
