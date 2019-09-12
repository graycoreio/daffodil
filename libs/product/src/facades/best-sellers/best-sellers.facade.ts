import { Injectable } from '@angular/core';

import { DaffStoreFacade } from '@daffodil/core';

import { Store, select, Action } from '@ngrx/store';

import { Observable, combineLatest } from 'rxjs';

import * as fromProduct from '../../reducers/index';
import { DaffProduct } from '../../models/product';

import { DaffProductModule } from '../../product.module';

/**
 * A facade for accessing best sellers state from an application component.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffBestSellersFacade implements DaffStoreFacade<Action> {
  /**
   * The loading state for getting best selling products.
   */
  loading$: Observable<boolean>;
  /**
   * Best selling products.
   */
  bestSellers$: Observable<DaffProduct[]>;

  constructor(private store: Store<fromProduct.State>) {
    this.loading$ = this.store.pipe(select(fromProduct.selectBestSellersLoadingState));
    this.bestSellers$ = this.store.pipe(select(fromProduct.selectBestSellersProducts));
  }

  /**
   * Dispatches an action to the rxjs action stream.
   * @param action 
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
