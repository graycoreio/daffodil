import { DaffIdentifiable } from '..';
import { DaffCountable } from './countable.interface';
import { DaffNumericallyPaginable } from './paginable';
import { DaffSortable } from './sortable';

/**
 * The collection metadata contains info about the collection as a whole
 * such as pagination, sorting, and size.
 */
export interface DaffCollectionMetadata extends DaffNumericallyPaginable, DaffSortable, DaffCountable {
  ids: DaffIdentifiable['id'][];
}
