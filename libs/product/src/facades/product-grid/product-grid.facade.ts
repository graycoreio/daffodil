import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

import { Store, select, Action } from '@ngrx/store';

import { DaffProduct } from '../../models/product';
import * as fromProduct from '../../reducers/index';
import { DaffProductModule } from '../../product.module';

@Injectable({
  providedIn: DaffProductModule
})
export class DaffProductGridFacade implements DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  products$: Observable<DaffProduct[]>;

  constructor(private store: Store<fromProduct.State>) {
    this.loading$ = this.store.pipe(select(fromProduct.selectProductGridLoadingState));
    this.products$ = this.store.pipe(select(fromProduct.selectAllProducts));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
