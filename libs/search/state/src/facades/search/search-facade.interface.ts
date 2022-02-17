import { Dictionary } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';
import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '@daffodil/search';

/**
 * Exposes the search state selectors.
 */
export interface DaffSearchFacadeInterface<T extends DaffSearchResult = DaffSearchResult> extends DaffStoreFacade<Action> {
  /**
   * Whether there is a pending search operation.
   */
  loading$: Observable<boolean>;
  /**
   * A list of search errors, if any.
   */
  errors$: Observable<DaffStateError[]>;
  /**
   * The results of the most recent search grouped by kind.
   */
  searchResults$: Observable<DaffSearchResultCollection<T>>;
  /**
   * The result IDs of the most recent search.
   */
  searchResultIds$: Observable<T['id'][]>;
  /**
   * The number of results of the most recent search.
   */
  searchResultCount$: Observable<number>;
  /**
   * The search result entities.
   */
  searchResultEntities$: Observable<Dictionary<T>>;

  /**
   * Get a specific search result by ID.
   */
  getSearch$(searchResultId: T['id']): Observable<T>;
}
