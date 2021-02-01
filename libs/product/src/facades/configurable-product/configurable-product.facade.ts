import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffConfigurableProductVariant,
  DaffConfigurableProduct,
} from '../../models/configurable-product';
import { DaffProduct } from '../../models/product';
import { DaffProductModule } from '../../product.module';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductSelectors } from '../../selectors/public_api';
import { DaffConfigurableProductFacadeInterface } from './configurable-product-facade.interface';

/**
 * A facade for interacting with the configurable product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 *
 * See the <a href="docs/api/product/DaffConfigurableProductFacadeInterface">DaffConfigurableProductFacadeInterface docs</a> for more details.
 */
@Injectable({
  providedIn: DaffProductModule,
})
export class DaffConfigurableProductFacade<T extends DaffProduct = DaffProduct> implements DaffConfigurableProductFacadeInterface {

	selectors = getDaffProductSelectors<T>();

	constructor(private store: Store<DaffProductReducersState<T>>) {}

	getAllAttributes(id: T['id']): Observable<Dictionary<string[]>> {
	  return this.store.pipe(select(this.selectors.selectAllConfigurableProductAttributes, { id }));
	}

	getAllVariants(id: T['id']): Observable<DaffConfigurableProductVariant[]> {
	  return this.store.pipe(select(this.selectors.selectAllConfigurableProductVariants, { id }));
	}

	getAppliedAttributes(id: T['id']): Observable<Dictionary<string>> {
	  return this.store.pipe(select(this.selectors.selectConfigurableProductAppliedAttributesAsDictionary, { id }));
	}

	getMinimumPrice(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumPrice, { id }));
	}

	getMaximumPrice(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumPrice, { id }));
	}

	getMinimumDiscountedPrice(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumDiscountedPrice, { id }));
	}

	getMaximumDiscountedPrice(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumDiscountedPrice, { id }));
	}

	getMinimumPercentDiscount(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumPercentDiscount, { id }));
	}

	getMaximumPercentDiscount(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumPercentDiscount, { id }));
	}

	isPriceRanged(id: T['id']): Observable<boolean> {
	  return this.store.pipe(select(this.selectors.isConfigurablePriceRanged, { id }));
	}

	hasDiscount(id: T['id']): Observable<boolean> {
	  return this.store.pipe(select(this.selectors.selectConfigurableProductHasDiscount, { id }));
	}

	getSelectableAttributes(id: T['id']): Observable<Dictionary<string[]>> {
	  return this.store.pipe(select(this.selectors.selectSelectableConfigurableProductAttributes, { id }));
	}

	getMatchingVariants(id: T['id']): Observable<DaffConfigurableProductVariant[]> {
	  return this.store.pipe(select(this.selectors.selectMatchingConfigurableProductVariants, { id }));
	}

	/**
	 * Dispatches an action to the rxjs action stream.
	 */
	dispatch(action: Action) {
	  this.store.dispatch(action);
	}
}
