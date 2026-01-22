import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffDocsItem } from '@daffodil/docs-utils';

import { DaffDocsFacadeInterface } from './facade.interface';
import { DaffDocsStateRootSlice } from '../../reducers/public_api';
import { DaffDocsEntitySelectors } from '../../selectors/entities.selector';
import { getDaffDocsSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsFacade<T extends DaffDocsItem = DaffDocsItem> implements DaffDocsFacadeInterface<T> {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;
  loadingState$: Observable<DaffState>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  hasErrors$: Observable<boolean>;

  docsItems$: Observable<Array<T>>;
  docsEntities$: Observable<Dictionary<T>>;
  docsIds$: Observable<T['id'][]>;
  docsCount$: Observable<number>;

  _docs: DaffDocsEntitySelectors<T>['selectDocs'];

  constructor(private store: Store<DaffDocsStateRootSlice<T>>) {
    const {
      selectDocsIds,
      selectDocsEntities,
      selectDocsTotal,
      selectLoading,
      selectErrors,
      selectHasErrors,
      selectMutating,
      selectResolving,
      selectLoadingState,
      selectAllDocsEntities,

      selectDocs,
    } = getDaffDocsSelectors<T>();

    this.loading$ = this.store.pipe(select(selectLoading));
    this.errors$ = this.store.pipe(select(selectErrors));
    this.loadingState$ = this.store.pipe(select(selectLoadingState));
    this.resolving$ = this.store.pipe(select(selectResolving));
    this.mutating$ = this.store.pipe(select(selectMutating));
    this.hasErrors$ = this.store.pipe(select(selectHasErrors));

    this.docsEntities$ = this.store.pipe(select(selectDocsEntities));
    this.docsItems$ = this.store.pipe(select(selectAllDocsEntities));
    this.docsIds$ = this.store.pipe(select(selectDocsIds));
    this.docsCount$ = this.store.pipe(select(selectDocsTotal));

    this._docs = selectDocs;
  }

  getDocs$(docsId: T['id']): Observable<T | null> {
    return this.store.pipe(select(this._docs(docsId)));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
