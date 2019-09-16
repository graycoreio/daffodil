import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

import { Store, select, Action } from '@ngrx/store';

import * as fromProduct from '../../reducers/index';
import { DaffProductModule } from '../../product.module';
import { DaffProductUnion } from '../../models/product-union';

/**
 * A facade for accessing state for a list of products from an application component.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffProductGridFacade implements DaffStoreFacade<Action> {
  /**
   * The loading state for retrieving a list of products.
   */
  loading$: Observable<boolean>;
  /**
   * The state for a list of products.
   */
  products$: Observable<DaffProductUnion[]>;

  constructor(private store: Store<fromProduct.State>) {
    this.loading$ = this.store.pipe(select(fromProduct.selectProductGridLoadingState));
    this.products$ = this.store.pipe(select(fromProduct.selectAllProducts));
  }

  /**
   * A selector that returns products on state by an array of ids.
   */
  getProductsByIds$(ids: string[]): Observable<DaffProductUnion[]> {
    return this.store.pipe(select(fromProduct.selectProducts, {ids: ids}));
  }

  /**
   * Dispatches an action to the rxjs action stream.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
