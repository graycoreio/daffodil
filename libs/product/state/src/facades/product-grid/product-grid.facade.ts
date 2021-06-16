import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';

import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductSelectors } from '../../selectors/public_api';
import { DaffProductGridFacadeInterface } from './product-grid-facade.interface';

/**
 * A facade for accessing state for a list of products from an application component.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductGridFacade<T extends DaffProduct = DaffProduct> implements DaffProductGridFacadeInterface<T> {
  loading$: Observable<boolean>;
  products$: Observable<T[]>;

  constructor(private store: Store<DaffProductReducersState<T>>) {
    const {
      selectProductGridLoadingState,
      selectAllProducts,
    } = getDaffProductSelectors<T>();

    this.loading$ = this.store.pipe(select(selectProductGridLoadingState));
    this.products$ = this.store.pipe(select(selectAllProducts));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
