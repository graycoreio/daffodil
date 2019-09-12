import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core';

import { Store, select, Action } from '@ngrx/store';

import * as fromProduct from '../../reducers/index';
import { DaffProductModule } from '../../product.module';
import { DaffProductUnion } from '../../models/product-union';

/**
 * A facade for accessing product state from an application component.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffProductFacade implements DaffStoreFacade<Action> {
  /**
   * The loading state of the currently selected product.
   */
  loading$: Observable<boolean>;
  /**
   * The currently selected product.
   */
  product$: Observable<DaffProductUnion>;

  constructor(private store: Store<fromProduct.State>) {
    this.loading$ = this.store.pipe(select(fromProduct.selectSelectedProductLoadingState));
    this.product$ = this.store.pipe(select(fromProduct.selectSelectedProduct));
  }

  /**
   * Dispatches an action to the rxjs action stream.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
