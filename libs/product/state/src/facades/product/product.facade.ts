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
import { DaffProductFacadeInterface } from './product-facade.interface';

/**
 * A facade for getting state about a particular product.
 *
 * See the <a href="docs/api/product/DaffProductFacadeInterface">DaffProductFacadeInterface docs</a> for more details.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductFacade<T extends DaffProduct = DaffProduct> implements DaffProductFacadeInterface<T> {
  loading$: Observable<boolean>;
  product$: Observable<T>;

	private selectors = getDaffProductSelectors<T>();

	constructor(private store: Store<DaffProductReducersState<T>>) {
	  this.loading$ = this.store.pipe(select(this.selectors.selectSelectedProductLoadingState));
	  this.product$ = this.store.pipe(select(this.selectors.selectSelectedProduct));
	}

	getProduct(id: T['id']): Observable<T> {
	  return this.store.pipe(select(this.selectors.selectProduct, { id }));
	}

	getPrice(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.selectors.selectProductPrice, { id }));
	}

	hasDiscount(id: T['id']): Observable<boolean> {
	  return this.store.pipe(select(this.selectors.selectProductHasDiscount, { id }));
	}

	getDiscountAmount(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.selectors.selectProductDiscountAmount, { id }));
	}

	getDiscountedPrice(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.selectors.selectProductDiscountedPrice, { id }));
	}

	getDiscountPercent(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.selectors.selectProductDiscountPercent, { id }));
	}

	isOutOfStock(id: T['id']): Observable<boolean> {
	  return this.store.pipe(select(this.selectors.selectIsProductOutOfStock, { id }));
	}

	/**
	 * Dispatches an action to the rxjs action stream.
	 */
	dispatch(action: Action) {
	  this.store.dispatch(action);
	}
}
