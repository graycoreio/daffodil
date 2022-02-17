import { DaffSearchResult } from '@daffodil/search';

import { DaffSearchDriverInterface } from './search-service.interface';

/**
 * A driver interface for search feature drivers of a specific kind.
 * Search results are chunked per kind and feature drivers should associate
 * themselves with a specific kind.
 */
export interface DaffSearchDriverKindedInterface<
  T extends DaffSearchResult = DaffSearchResult,
> extends DaffSearchDriverInterface<T> {
  /**
   * The kind of entity for which this driver can search.
   */
  readonly kind: T['kind'];
}
