import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

import { Store, select, Action } from '@ngrx/store';

import { DaffProductModule } from '../../product.module';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { getDaffProductSelectors } from '../../selectors/public_api';

/**
 * A facade for accessing product state from an application component.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffProductFacade<T extends DaffProduct> implements DaffStoreFacade<Action> {
  /**
   * The loading state of the currently selected product.
   */
  loading$: Observable<boolean>;
  /**
   * The currently selected product.
   */
  product$: Observable<T>;

  constructor(private store: Store<DaffProductReducersState<T>>) {
		const {
			selectSelectedProductLoadingState,
			selectSelectedProduct
		} = getDaffProductSelectors<T>();

    this.loading$ = this.store.pipe(select(selectSelectedProductLoadingState));
    this.product$ = this.store.pipe(select(selectSelectedProduct));
  }

  /**
   * Dispatches an action to the rxjs action stream.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
