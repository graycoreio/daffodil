import { DaffIdentifiable } from '../identifiable/identifiable.interface';
import { DaffCollectionMetadata } from './metadata.interface';

/**
 * A collection of items that is paginable, sortable, and filterable.
 */
export interface DaffCollection<T extends DaffIdentifiable = DaffIdentifiable> {
  /**
   * The collection metadata that contains info about the collection.
   * Includes page, sorting, filtering, and total number of items.
   */
  metadata: DaffCollectionMetadata;
  /**
   * The current page of items according to the sorting and filtering.
   */
  data: Record<T['id'], T>;
}
