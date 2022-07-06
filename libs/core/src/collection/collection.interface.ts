import { DaffIdentifiable } from '../identifiable/identifiable.interface';
import { DaffCollectionMetadata } from './metadata.interface';

/**
 * A collection of items that is paginable and sortable.
 */
export interface DaffCollection<T extends DaffIdentifiable = DaffIdentifiable> {
  /**
   * The collection metadata that contains info about the collection.
   * Includes page, sorting, and total number of items.
   */
  metadata: DaffCollectionMetadata;
  /**
   * The current page of items according to the sorting.
   */
  data: Record<T['id'], T>;
}
