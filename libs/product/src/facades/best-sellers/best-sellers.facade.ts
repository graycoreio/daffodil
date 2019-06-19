import { Injectable } from '@angular/core';

import { DaffStoreFacade } from '@daffodil/core';

import { Store, select, Action } from '@ngrx/store';

import { Observable, combineLatest } from 'rxjs';

import * as fromProduct from '../../reducers/index';
import { DaffProduct } from '../../models/product';

import { DaffProductModule } from '../../product.module';

@Injectable({
  providedIn: DaffProductModule
})
export class DaffBestSellersFacade implements DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  bestSellers$: Observable<DaffProduct[]>;

  constructor(private store: Store<fromProduct.State>) {
    this.loading$ = this.store.pipe(select(fromProduct.selectBestSellersLoadingState));
    this.bestSellers$ = this.store.pipe(select(fromProduct.selectBestSellersProducts));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
