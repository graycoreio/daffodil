import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import { DaffProductStateRootSlice } from '../../reducers/product-reducers-state.interface';
import { getDaffProductSelectors } from '../../selectors/public_api';

/**
 * A facade for accessing best sellers state from an application component.
 *
 * @inheritdoc
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`. Deprecated in version 0.81.0. Will be removed in version 0.84.0.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffBestSellersFacade<T extends DaffProduct = DaffProduct> implements DaffStoreFacade<Action> {
  /**
   * The loading state for getting best selling products.
   */
  loading$: Observable<boolean>;
  /**
   * Best selling products.
   */
  bestSellers$: Observable<DaffProduct[]>;

  constructor(private store: Store<DaffProductStateRootSlice<T>>) {
    const {
      selectBestSellersProducts,
      selectBestSellersLoadingState,
    } = getDaffProductSelectors<T>();

    this.loading$ = this.store.pipe(select(selectBestSellersLoadingState));
    this.bestSellers$ = this.store.pipe(select(selectBestSellersProducts));
  }

  /**
   * Dispatches an action to the rxjs action stream.
   *
   * @param action
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
