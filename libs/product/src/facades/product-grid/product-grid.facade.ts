import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

import { Store, select, Action } from '@ngrx/store';

import * as fromProduct from '../../reducers/index';
import { DaffProductModule } from '../../product.module';
import { DaffProductUnion } from '../../models/product-union';

@Injectable({
  providedIn: DaffProductModule
})
export class DaffProductGridFacade implements DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  products$: Observable<DaffProductUnion[]>;

  constructor(private store: Store<fromProduct.State>) {
    this.loading$ = this.store.pipe(select(fromProduct.selectProductGridLoadingState));
    this.products$ = this.store.pipe(select(fromProduct.selectAllProducts));
  }

  getProductsByIds$(ids: string[]): Observable<DaffProductUnion[]> {
    return this.store.pipe(select(fromProduct.selectProducts, {ids: ids}));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
