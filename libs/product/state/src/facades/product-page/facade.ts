import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import { DaffProductPageFacadeInterface } from './facade.interface';
import { DaffProductStateRootSlice } from '../../reducers/product-reducers-state.interface';
import { getDaffProductSelectors } from '../../selectors/public_api';

/**
 * A facade for getting state about a particular product.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductPageFacade<T extends DaffProduct = DaffProduct> implements DaffProductPageFacadeInterface<T> {
  loadingState$: Observable<DaffState>;
  loading$: Observable<boolean>;
  mutating$: Observable<boolean>;
  resolving$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;
  hasErrors$: Observable<boolean>;
  product$: Observable<T>;

  private selectors = getDaffProductSelectors<T>();

  constructor(private store: Store<DaffProductStateRootSlice<T>>) {
    this.loadingState$ = this.store.pipe(select(this.selectors.selectLoadingState));
    this.loading$ = this.store.pipe(select(this.selectors.selectLoading));
    this.mutating$ = this.store.pipe(select(this.selectors.selectMutating));
    this.resolving$ = this.store.pipe(select(this.selectors.selectResolving));
    this.errors$ = this.store.pipe(select(this.selectors.selectErrors));
    this.hasErrors$ = this.store.pipe(select(this.selectors.selectHasErrors));
    this.product$ = this.store.pipe(select(this.selectors.selectCurrentProduct));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
