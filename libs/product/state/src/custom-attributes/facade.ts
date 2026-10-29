import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  Action,
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffOperationState } from '@daffodil/core/state';
import { DaffProductCustomAttribute } from '@daffodil/product';

import { DaffProductCustomAttributesFacadeInterface } from './facade.interface';
import { getDaffProductCustomAttributesSelectors } from './selectors';
import { DaffProductStateRootSlice } from '../reducers/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCustomAttributesFacade implements DaffProductCustomAttributesFacadeInterface {
  entities$: Observable<Dictionary<DaffProductCustomAttribute>>;
  customAttributes$: Observable<DaffProductCustomAttribute[]>;
  loadingState$: Observable<DaffOperationState['daffState']>;
  loading$: Observable<boolean>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  errors$: Observable<DaffOperationState['daffErrors']>;
  hasErrors$: Observable<boolean>;

  constructor(private store: Store<DaffProductStateRootSlice>) {
    const {
      selectProductCustomAttributes,
      selectProductCustomAttributeEntities,
      selectLoadingState,
      selectLoading,
      selectResolving,
      selectMutating,
      selectErrors,
      selectHasErrors,
    } = getDaffProductCustomAttributesSelectors();

    this.customAttributes$ = this.store.pipe(select(selectProductCustomAttributes));
    this.entities$ = this.store.pipe(select(selectProductCustomAttributeEntities));
    this.loadingState$ = this.store.pipe(select(selectLoadingState));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.resolving$ = this.store.pipe(select(selectResolving));
    this.mutating$ = this.store.pipe(select(selectMutating));
    this.errors$ = this.store.pipe(select(selectErrors));
    this.hasErrors$ = this.store.pipe(select(selectHasErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
