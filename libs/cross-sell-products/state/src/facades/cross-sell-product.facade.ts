import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';

import { DaffCrossSellProductsFacadeInterface } from './cross-sell-product-facade.interface';
import { DaffCrossSellProductStateRootSlice } from '../reducers/reducers-state.interface';
import { getDaffCrossSellProductsSelectors } from '../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCrossSellProductsFacade<T extends DaffProduct = DaffProduct> implements DaffCrossSellProductsFacadeInterface<T> {
  crossSellProducts$: Observable<T[]>;

  constructor(private store: Store<DaffCrossSellProductStateRootSlice<T>>) {
    const selectors = getDaffCrossSellProductsSelectors<T>();
    this.crossSellProducts$ = this.store.pipe(select(selectors.selectCrossSellProducts));
  }

  dispatch(action: Action<string>) {
    return this.store.dispatch(action);
  }
}
