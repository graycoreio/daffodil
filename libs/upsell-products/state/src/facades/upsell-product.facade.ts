import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';

import { DaffUpsellProductsFacadeInterface } from './upsell-product-facade.interface';
import { DaffUpsellProductStateRootSlice } from '../reducers/reducers-state.interface';
import { getDaffUpsellProductsSelectors } from '../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffUpsellProductsFacade<T extends DaffProduct = DaffProduct> implements DaffUpsellProductsFacadeInterface<T> {
  upsellProducts$: Observable<T[]>;

  private readonly selectors = getDaffUpsellProductsSelectors<T>();

  constructor(private store: Store<DaffUpsellProductStateRootSlice<T>>) {
    this.upsellProducts$ = this.store.pipe(select(this.selectors.selectUpsellProducts));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
