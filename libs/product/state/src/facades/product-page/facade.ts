import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';

import { DaffProductStateRootSlice } from '../../reducers/product-reducers-state.interface';
import { getDaffProductSelectors } from '../../selectors/public_api';
import { DaffProductPageFacadeInterface } from './facade.interface';

/**
 * A facade for getting state about a particular product.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductPageFacade<T extends DaffProduct = DaffProduct> implements DaffProductPageFacadeInterface<T> {
  loading$: Observable<boolean>;
  product$: Observable<T>;

	private selectors = getDaffProductSelectors<T>();

	constructor(private store: Store<DaffProductStateRootSlice<T>>) {
	  this.loading$ = this.store.pipe(select(this.selectors.selectCurrentProductLoadingState));
	  this.product$ = this.store.pipe(select(this.selectors.selectCurrentProduct));
	}

	dispatch(action: Action) {
	  this.store.dispatch(action);
	}
}
