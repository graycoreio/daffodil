import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffProductModule } from '../../product.module';
import { DaffProductUnion } from '../../models/product-union';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { selectProductGridLoadingState } from '../../selectors/product-grid.selectors';
import { selectAllProducts } from '../../selectors/product-entities.selectors';

/**
 * A facade for accessing state for a list of products from an application component.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffProductGridFacade implements DaffStoreFacade<Action> {
  /**
   * The loading state for retrieving a list of products.
   */
  loading$: Observable<boolean>;
  /**
   * The state for a list of products.
   */
  products$: Observable<DaffProductUnion[]>;

  constructor(private store: Store<DaffProductReducersState>) {
    this.loading$ = this.store.pipe(select(selectProductGridLoadingState));
    this.products$ = this.store.pipe(select(selectAllProducts));
  }

  /**
   * Dispatches an action to the rxjs action stream.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
