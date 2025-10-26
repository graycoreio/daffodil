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
 * Used to provide routable objects to the in-memory routing system.
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
const DAFF_INMEMORY_ROUTABLE_OBJECTS_RESOLVER = new InjectionToken<{ type: string; resolver: InjectionToken<DaffInMemoryRoutableObjectsResolver> }>(
  'DAFF_INMEMORY_ROUTABLE_OBJECTS_RESOLVER',
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

      resolvers.forEach((entry: { type: string; resolver: InjectionToken<DaffInMemoryRoutableObjectsResolver> }) => {
        const resolverFn = inject(entry.resolver);
        const entities = resolverFn();
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
 * to enable automatic URL resolution. Each driver creates an injection token that returns
 * a function providing its entities, then calls this function to register those entities
 * with a type identifier.
 *
 * @param type - The type identifier for these routable objects (e.g., "PRODUCTS")
 * @param resolver - An injection token that provides a DaffInMemoryRoutableObjectsResolver function
 * @returns Environment providers that register the routable objects
 *
 * @usageNotes
 *
 * ### Basic Usage
 *
 * In your driver package, create an injection token:
 *
 * ```typescript
 * export const DAFF_PRODUCT_INMEMORY_ROUTABLE_OBJECTS = new InjectionToken<DaffInMemoryRoutableObjectsResolver>(
 *   'DAFF_PRODUCT_INMEMORY_ROUTABLE_OBJECTS',
 *   {
 *     factory: () => {
 *       const service = inject(DaffInMemoryBackendProductService);
 *       return () => service.products;
 *     }
 *   }
 * );
 * ```
 *
 * Then in your app configuration:
 *
 * ```typescript
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideDaffInMemoryRoutableObjects("PRODUCTS", DAFF_PRODUCT_INMEMORY_ROUTABLE_OBJECTS),
 *   ]
 * };
 * ```
 */
export const provideDaffInMemoryRoutableObjects = (
  type: string,
  resolver: InjectionToken<DaffInMemoryRoutableObjectsResolver>,
): EnvironmentProviders => makeEnvironmentProviders([
  {
    provide: DAFF_INMEMORY_ROUTABLE_OBJECTS_RESOLVER,
    useValue: { type, resolver },
    multi: true,
  },
]);
