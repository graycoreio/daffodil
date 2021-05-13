import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';

import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductSelectors } from '../../selectors/public_api';
import { DaffProductPageFacadeInterface } from './product-page-facade.interface';

/**
 * A facade for getting state about the product for the product page.
 *
 * See the {@link DaffProductPageFacadeInterface} for more details.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductPageFacade<T extends DaffProduct = DaffProduct> implements DaffProductPageFacadeInterface<T> {
  product$: Observable<T>;

	private selectors = getDaffProductSelectors<T>();

	constructor(private store: Store<DaffProductReducersState<T>>) {
	  this.product$ = this.store.pipe(select(this.selectors.selectSelectedProduct));
	}

	dispatch(action: Action) {
	  this.store.dispatch(action);
	}
}
