import {
  EnvironmentProviders,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DaffInMemoryRoutableObject,
  DaffInMemoryRoutableObjects,
} from './routable-object';

/**
 * A function that returns an array of entities with URL properties.
 * Used to provide routable in-memory object information to the routing system.
 */
export type DaffInMemoryRoutableObjectsResolver = () => Array<{ url: string }>;

/**
 * Multi-injection token for routable object resolvers.
 *
 * Each in-memory driver (e.g., product, navigation) can register a resolver
 * that provides its entities with URL properties. This token collects all
 * such resolvers so they can be processed together to build the routing map.
 *
 * @docs-private
 */
const DAFF_INMEMORY_ROUTABLE_OBJECTS_RESOLVER = new InjectionToken<{ type: string; resolver: DaffInMemoryRoutableObjectsResolver }[]>(
  'DAFF_INMEMORY_ROUTABLE_OBJECTS_RESOLVER', {
    providedIn: 'root',
    factory: () => [],
  },
);

/**
 * Internal injection token that builds and provides the complete map of routable objects.
 *
 * This token automatically collects all registered routable object resolvers and builds
 * a Map where the key is the URL path and the value is an object containing both the URL
 * and its associated type. This map is used by in-memory drivers to resolve URLs to their types.
 *
 * @docs-private
 */
export const DAFF_INMEMORY_ROUTABLE_OBJECTS = new InjectionToken<DaffInMemoryRoutableObjects>(
  'DAFF_INMEMORY_ROUTABLE_OBJECTS',
  {
    providedIn: 'root',
    factory: () => {
      const resolvers = inject(DAFF_INMEMORY_ROUTABLE_OBJECTS_RESOLVER, { optional: true }) || [];
      const map = new Map<string, DaffInMemoryRoutableObject>();

      if (!Array.isArray(resolvers)) {
        throw new Error('DAFF_INMEMORY_ROUTABLE_OBJECTS_RESOLVER must be an array');
      }

      resolvers.forEach((entry) => {
        const entities = entry.resolver();
        entities.forEach(entity => {
          if (map.has(entity.url)) {
            const existing = map.get(entity.url);
            console.warn(
              `[@daffodil/driver/in-memory] Duplicate entity URL detected: "${entity.url}". ` +
              `Already registered with type "${existing?.type}", attempting to register again with type "${entry.type}". ` +
              `The first registration will be used.`,
            );
            return;
          }
          map.set(entity.url, { url: entity.url, type: entry.type });
        });
      });

      return map;
    },
  },
);

/**
 * Registers routable objects from an in-memory driver with the routing system.
 *
 * This function allows in-memory drivers to provide their entities (with URL properties)
 * to enable automatic URL resolution. Each driver provides a resolver function that
 * returns its entities with URL properties, along with a type identifier.
 *
 * The resolver function runs in an injection context, which means you can use Angular's
 * `inject()` function within it to access services and dependencies.
 *
 * @param type - The type identifier for these routable objects (e.g., "PRODUCTS")
 * @param resolver - A function that returns an array of entities with URL properties.
 *                   This function runs in an injection context, allowing use of `inject()`.
 * @returns Environment providers that register the routable objects
 *
 * @usageNotes
 *
 * ### Basic Usage
 *
 * In your driver package, create a resolver function:
 *
 * ```typescript
 * const productResolver = (): Array<{ url: string }> => {
 *   return inject(DaffInMemoryBackendProductService).products.map((p) => ({ url: p.url }));
 * };
 * ```
 *
 * Then in your app configuration:
 *
 * ```typescript
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideDaffInMemoryRoutableObjects("PRODUCTS", productResolver),
 *   ]
 * };
 * ```
 */
export const provideDaffInMemoryRoutableObjects = (
  type: string,
  resolver: DaffInMemoryRoutableObjectsResolver,
): EnvironmentProviders => makeEnvironmentProviders([
  {
    provide: DAFF_INMEMORY_ROUTABLE_OBJECTS_RESOLVER,
    useValue: { type, resolver },
    multi: true,
  },
]);
