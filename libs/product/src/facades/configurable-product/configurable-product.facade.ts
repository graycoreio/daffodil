import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffProductModule } from '../../product.module';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { getDaffProductSelectors } from '../../selectors/public_api';
import { DaffConfigurableProductFacadeInterface } from './configurable-product-facade.interface';

/**
 * A facade for accessing configurable product state from an application component.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffConfigurableProductFacade<T extends DaffProduct = DaffProduct> implements DaffConfigurableProductFacadeInterface {

	selectors = getDaffProductSelectors<T>();
	
  constructor(private store: Store<DaffProductReducersState<T>>) {}
	
	getAppliedAttributes(id: string): Observable<Dictionary<string>> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductAppliedAttributes, { id }))
	}

	getPrice(id: string): Observable<string> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductPrice, { id }));
	}

	getUndeterminedAttributes(id: string): Observable<Dictionary<string[]>> {
		return this.store.pipe(select(this.selectors.selectUndeterminedConfigurableProductAttributes, { id }));
	}

  /**
   * Dispatches an action to the rxjs action stream.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
