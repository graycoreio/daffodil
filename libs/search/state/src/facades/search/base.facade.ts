import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffSearchResult } from '@daffodil/search';

import { DaffSearchFacadeInterface } from './search-facade.interface';
import { DaffSearchStateRootSlice } from '../../reducers/public_api';
import { DaffSearchSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 *
 * Serves as the base for a search facade.
 * Extend this class and pass in the selectors for the specific state you wish to target.
 */
export abstract class DaffSearchFacadeBase<T extends DaffSearchResult = DaffSearchResult, R extends DaffSearchStateRootSlice<T> = DaffSearchStateRootSlice<T>> implements DaffSearchFacadeInterface<T> {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;

  searchResultIds$: Observable<Record<T['kind'], T['id'][]>>;
  recent$: Observable<string[]>;
  resultCount$: Observable<number>;

  constructor(
    private store: Store<R>,
    selectors: DaffSearchSelectors<T, R>,
  ) {
    const {
      selectSearchLoading,
      selectSearchErrors,

      selectSearchResultIds,
      selectRecent,
      selectResultCount,
    } = selectors;

    this.loading$ = this.store.pipe(select(selectSearchLoading));
    this.errors$ = this.store.pipe(select(selectSearchErrors));

    this.searchResultIds$ = this.store.pipe(select(selectSearchResultIds));
    this.recent$ = this.store.pipe(select(selectRecent));
    this.resultCount$ = this.store.pipe(select(selectResultCount));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
