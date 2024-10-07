import { DaffInMemoryDataServiceInterface } from './data-service.type';

/**
 * An interface for defining in memory backends that use the angular in memory web api.
 */
export interface DaffInMemoryBackendInterface extends DaffInMemoryDataServiceInterface {
  /**
   * The collection name of the backend service.
   * Used for routing requests to the correct backend.
   */
  readonly collectionName: string;
}
