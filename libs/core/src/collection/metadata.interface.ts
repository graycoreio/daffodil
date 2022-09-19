import { DaffFilterable } from '../filterable/public_api';
import { DaffIdentifiable } from '../identifiable/public_api';
import { DaffCountable } from './countable.interface';
import { DaffNumericallyPaginable } from './paginable';
import { DaffSortable } from './sortable';

/**
 * The collection metadata contains info about the collection as a whole
 * such as pagination, sorting, and size.
 */
export interface DaffCollectionMetadata extends DaffNumericallyPaginable, DaffSortable, DaffCountable, DaffFilterable {
  ids: DaffIdentifiable['id'][];
}
