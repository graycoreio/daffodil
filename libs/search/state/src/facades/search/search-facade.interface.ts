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
   * The recent search queries.
   */
  recent$: Observable<string[]>;
  /**
   * The result IDs of the most recent search.
   */
  searchResultIds$: Observable<Record<T['kind'], T['id'][]>>;
  /**
   * The number of results in the most recent search.
   */
  resultCount$: Observable<number>;
}
