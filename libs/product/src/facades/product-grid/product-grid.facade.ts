import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffProductModule } from '../../product.module';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductGridSelectors } from '../../selectors/product-grid.selectors';
import { getDaffProductEntitiesSelectors } from '../../selectors/product-entities.selectors';
import { DaffProduct } from '../../models/product';

/**
 * A facade for accessing state for a list of products from an application component.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffProductGridFacade<T extends DaffProduct> implements DaffStoreFacade<Action> {
  /**
   * The loading state for retrieving a list of products.
   */
  loading$: Observable<boolean>;
  /**
   * The state for a list of products.
   */
  products$: Observable<T[]>;

  constructor(private store: Store<DaffProductReducersState<T>>) {
    this.loading$ = this.store.pipe(select(getDaffProductGridSelectors<T>().selectProductGridLoadingState));
    this.products$ = this.store.pipe(select(getDaffProductEntitiesSelectors<T>().selectAllProducts));
  }

  /**
   * Dispatches an action to the rxjs action stream.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
