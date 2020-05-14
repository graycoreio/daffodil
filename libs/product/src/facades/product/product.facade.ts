import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select, Action } from '@ngrx/store';

import { DaffProductModule } from '../../product.module';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { getDaffProductSelectors } from '../../selectors/public_api';
import { DaffProductFacadeInterface } from './product-facade.interface';

/**
 * A facade for accessing product state from an application component.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffProductFacade<T extends DaffProduct = DaffProduct> implements DaffProductFacadeInterface<T> {
  /**
   * The loading state of the product.
   */
  loading$: Observable<boolean>;
  /**
   * The currently selected product.
	 * @deprecate use getProduct instead.
   */
  product$: Observable<T>;

	private selectors = getDaffProductSelectors<T>();

  constructor(private store: Store<DaffProductReducersState<T>>) {
    this.loading$ = this.store.pipe(select(this.selectors.selectSelectedProductLoadingState));
		this.product$ = this.store.pipe(select(this.selectors.selectSelectedProduct));
	}
	
	getProduct(id: string): Observable<T> {
		return this.store.pipe(select(this.selectors.selectProduct, { id }));
	}

  /**
   * Dispatches an action to the rxjs action stream.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
