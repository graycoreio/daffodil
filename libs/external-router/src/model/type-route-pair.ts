import { DaffExternalRouterInsertionStrategy } from './insertion-strategy.type';
import { DaffExternalRouteType } from './route-type';
import { DaffRouteWithoutPath } from './route-without-path';

/**
 * A model used to describe the relationship between a {@link DaffExternalRouterType}
 * and its corresponding route.
 *
 * The DaffTypeRoutePair is the pre-provided "glue" that a developer will provide
 * ahead-of-time so that that the External Router knows what the list of available
 * "types" are (along with that type's corresponding route).
 *
 * An insertion strategy can be specified if the route needs to be inserted somewhere
 * other than the root of the route config.
 * Omitting the insertion strategy will default to inserting the route to the root level,
 * immediately before the wildcard route.
 *
 * @docs-private
 */
export interface DaffTypeRoutePair {
	type: DaffExternalRouteType;
	route: DaffRouteWithoutPath;
  /**
   * An optional function to provide route insertion behavior.
   */
	insertionStrategy?: DaffExternalRouterInsertionStrategy;
}
