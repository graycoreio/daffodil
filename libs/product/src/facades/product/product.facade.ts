import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select, Action } from '@ngrx/store';

import { DaffProductModule } from '../../product.module';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { getDaffProductSelectors } from '../../selectors/public_api';
import { DaffProductFacadeInterface } from './product-facade.interface';

/**
 * A facade for getting state about a particular product.
 * 
 * See the <a href="docs/api/product/DaffProductFacadeInterface">DaffProductFacadeInterface docs</a> for more details.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffProductFacade<T extends DaffProduct = DaffProduct> implements DaffProductFacadeInterface<T> {
  loading$: Observable<boolean>;
  product$: Observable<T>;

	private selectors = getDaffProductSelectors<T>();

  constructor(private store: Store<DaffProductReducersState<T>>) {
    this.loading$ = this.store.pipe(select(this.selectors.selectSelectedProductLoadingState));
		this.product$ = this.store.pipe(select(this.selectors.selectSelectedProduct));
	}

	getProduct(id: string): Observable<T> {
		return this.store.pipe(select(this.selectors.selectProduct, { id }));
	}

	hasDiscount(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectProductHasDiscount, { id }));
	}

	getDiscountAmount(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectProductDiscountAmount, { id }));
	}

	getDiscountPercent(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectProductDiscountPercent, { id }));
	}

	isOutOfStock(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectIsProductOutOfStock, { id }));
	}

  /**
   * Dispatches an action to the rxjs action stream.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
