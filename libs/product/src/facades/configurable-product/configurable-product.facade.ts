import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffProductModule } from '../../product.module';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { getDaffProductSelectors } from '../../selectors/public_api';
import { DaffConfigurableProductFacadeInterface } from './configurable-product-facade.interface';
import { DaffConfigurableProductVariant } from '../../models/configurable-product';

/**
 * A facade for interacting with the configurable product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 * 
 * See the <a href="docs/api/product/DaffConfigurableProductFacadeInterface">DaffConfigurableProductFacadeInterface docs</a> for more details.
 */
@Injectable({
  providedIn: DaffProductModule
})
export class DaffConfigurableProductFacade<T extends DaffProduct = DaffProduct> implements DaffConfigurableProductFacadeInterface {

	selectors = getDaffProductSelectors<T>();
	
	constructor(private store: Store<DaffProductReducersState<T>>) {}
	
	getAllAttributes(id: string): Observable<Dictionary<string[]>> {
		return this.store.pipe(select(this.selectors.selectAllConfigurableProductAttributes, { id }));
	}
	
	getAppliedAttributes(id: string): Observable<Dictionary<string>> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductAppliedAttributesAsDictionary, { id }));
	}

	getMinimumPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumPrice, { id }));
	}

	getMaximumPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumPrice, { id }));
	}

	getMinimumDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumDiscountedPrice, { id }));
	}

	getMaximumDiscountedPrice(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumDiscountedPrice, { id }));
	}

	getMinimumPercentDiscount(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumPercentDiscount, { id }));
	}

	getMaximumPercentDiscount(id: string): Observable<number> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumPercentDiscount, { id }));
	}

	isPriceRanged(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.isConfigurablePriceRanged, { id }));
	}

	hasDiscount(id: string): Observable<boolean> {
		return this.store.pipe(select(this.selectors.selectConfigurableProductHasDiscount, { id }));
	}

	getSelectableAttributes(id: string): Observable<Dictionary<string[]>> {
		return this.store.pipe(select(this.selectors.selectSelectableConfigurableProductAttributes, { id }));
	}

	getMatchingVariants(id: string): Observable<DaffConfigurableProductVariant[]> {
		return this.store.pipe(select(this.selectors.selectMatchingConfigurableProductVariants, { id }));
	}

  /**
   * Dispatches an action to the rxjs action stream.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
