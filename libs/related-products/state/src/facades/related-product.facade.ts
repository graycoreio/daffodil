import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';

import { DaffRelatedProductsFacadeInterface } from './related-product-facade.interface';
import { DaffRelatedProductStateRootSlice } from '../reducers/reducers-state.interface';
import { getDaffRelatedProductsSelectors } from '../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffRelatedProductsFacade<T extends DaffProduct = DaffProduct> implements DaffRelatedProductsFacadeInterface<T> {
  relatedProducts$: Observable<T[]>;

  private readonly selectors = getDaffRelatedProductsSelectors<T>();

  constructor(private store: Store<DaffRelatedProductStateRootSlice<T>>) {
    this.relatedProducts$ = this.store.pipe(select(this.selectors.selectRelatedProducts));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
