import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffConfigurableProductVariant } from '@daffodil/configurable-product';
import { DaffProduct } from '@daffodil/product';
import { DaffProductStateRootSlice } from '@daffodil/product/state';

import {
  getDaffConfigurableProductEntitiesSelectors,
  getDaffConfigurableProductSelectors,
} from '../selectors/public_api';
import { DaffConfigurableProductFacadeInterface } from './configurable-product-facade.interface';

/**
 * A facade for interacting with the configurable product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffConfigurableProductFacade<T extends DaffProduct = DaffProduct> implements DaffConfigurableProductFacadeInterface {

	configurableProductSelectors = getDaffConfigurableProductSelectors<T>();
	configurableProductEntitiesSelectors = getDaffConfigurableProductEntitiesSelectors<T>();

	constructor(private store: Store<DaffProductStateRootSlice<T>>) {}

	getAllAttributes(id: T['id']): Observable<Dictionary<string[]>> {
	  return this.store.pipe(select(this.configurableProductSelectors.selectAllConfigurableProductAttributes(id)));
	}

	getAllVariants(id: T['id']): Observable<DaffConfigurableProductVariant[]> {
	  return this.store.pipe(select(this.configurableProductSelectors.selectAllConfigurableProductVariants(id)));
	}

	getAppliedAttributes(id: T['id']): Observable<Dictionary<string>> {
	  return this.store.pipe(select(this.configurableProductEntitiesSelectors.selectConfigurableProductAppliedAttributesAsDictionary(id)));
	}

	getMinimumPrice(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.configurableProductSelectors.selectConfigurableProductMinimumPrice(id)));
	}

	getMaximumPrice(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.configurableProductSelectors.selectConfigurableProductMaximumPrice(id)));
	}

	getMinimumDiscountedPrice(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.configurableProductSelectors.selectConfigurableProductMinimumDiscountedPrice(id)));
	}

	getMaximumDiscountedPrice(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.configurableProductSelectors.selectConfigurableProductMaximumDiscountedPrice(id)));
	}

	getMinimumPercentDiscount(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.configurableProductSelectors.selectConfigurableProductMinimumPercentDiscount(id)));
	}

	getMaximumPercentDiscount(id: T['id']): Observable<number> {
	  return this.store.pipe(select(this.configurableProductSelectors.selectConfigurableProductMaximumPercentDiscount(id)));
	}

	isPriceRanged(id: T['id']): Observable<boolean> {
	  return this.store.pipe(select(this.configurableProductSelectors.isConfigurablePriceRanged(id)));
	}

	hasDiscount(id: T['id']): Observable<boolean> {
	  return this.store.pipe(select(this.configurableProductSelectors.selectConfigurableProductHasDiscount(id)));
	}

	getSelectableAttributes(id: T['id']): Observable<Dictionary<string[]>> {
	  return this.store.pipe(select(this.configurableProductSelectors.selectSelectableConfigurableProductAttributes(id)));
	}

	getMatchingVariants(id: T['id']): Observable<DaffConfigurableProductVariant[]> {
	  return this.store.pipe(select(this.configurableProductSelectors.selectMatchingConfigurableProductVariants(id)));
	}

	dispatch(action: Action) {
	  this.store.dispatch(action);
	}
}
