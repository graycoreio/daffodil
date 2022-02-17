import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '@daffodil/search';

import { DaffSearchStateRootSlice } from '../../reducers/public_api';
import { getDaffSearchSelectors } from '../../selectors/public_api';
import { DaffSearchEntitySelectors } from '../../selectors/search-entities.selector';
import { DaffSearchFacadeInterface } from './search-facade.interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchFacade<T extends DaffSearchResult = DaffSearchResult> implements DaffSearchFacadeInterface<T> {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;

  searchResults$: Observable<DaffSearchResultCollection<T>>;
  searchResultIds$: Observable<T['id'][]>;
  searchResultCount$: Observable<number>;
  searchResultEntities$: Observable<Dictionary<T>>;

  placedSearch$: Observable<T>;
  hasPlacedSearch$: Observable<boolean>;

  _searchResult: DaffSearchEntitySelectors<T>['selectSearch'];

  constructor(private store: Store<DaffSearchStateRootSlice<T>>) {
    const {
      selectSearchIds,
      selectSearchEntities,
      selectSearchTotal,
      selectSearchLoading,
      selectSearchErrors,

      selectSearch,
      selectSearchResults,
    } = getDaffSearchSelectors<T>();

    this.loading$ = this.store.pipe(select(selectSearchLoading));
    this.errors$ = this.store.pipe(select(selectSearchErrors));

    this.searchResults$ = this.store.pipe(select(selectSearchResults));
    this.searchResultIds$ = this.store.pipe(select(selectSearchIds));
    this.searchResultCount$ = this.store.pipe(select(selectSearchTotal));
    this.searchResultEntities$ = this.store.pipe(select(selectSearchEntities));

    this._searchResult = selectSearch;
  }

  getSearch$(searchResultId: T['id']): Observable<T> {
    return this.store.pipe(select(this._searchResult(searchResultId)));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
