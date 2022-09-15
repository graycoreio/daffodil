

import { DaffFilters } from './filters.type';

/**
 * Describes an object that allows a specific entity to be filterable.
 */
export interface DaffFilterable {
  /**
   * The available filters.
   */
  filters: DaffFilters;
}
