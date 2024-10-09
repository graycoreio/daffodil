import { DaffInMemoryDataServiceInterface } from './data-service.type';

/**
 * A routing target that handles a single collection.
 */
export interface DaffInMemorySingleRouteableBackend extends DaffInMemoryDataServiceInterface {
  /**
   * The collection name of the backend service where the backend only serves one collection.
   * Used for routing requests to the correct backend.
   */
  readonly collectionName: string;
}

/**
 * A routing target that handles multiple collections.
 */
export interface DaffInMemoryMultiRouteableBackend extends DaffInMemoryDataServiceInterface {
  /**
   * Returns true if the backend can handle the request with the specified collection name.
   * Used for backends that handle multiple collections.
   */
  canHandle(collectionName: string): boolean;
}

/**
 * An in-memory backend that can be easily routed to based on the available capabilities.
 */
export type DaffInMemoryRouteableBackend = DaffInMemorySingleRouteableBackend | DaffInMemoryMultiRouteableBackend;
